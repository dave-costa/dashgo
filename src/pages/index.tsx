import { Button, Flex, Stack } from '@chakra-ui/react'
import { InputBlank } from '../components/form/InputBlank'
import { SubmitHandler, useForm} from 'react-hook-form'
import * as yup from 'yup'
import { yupResolver } from '@hookform/resolvers/yup'

type TData = {
    email: string
    password: string
    prototype: object
}

const signInForSchema = yup.object().shape({
    email: yup.string()
        .required('Email required')
            .email('Invalid email'),

    password: yup.string()
        .min(6, 'You need 6 character')
            .required('Password required')
})

export default function SingIn() {
    const { register, handleSubmit, formState } = useForm({
        resolver: yupResolver(signInForSchema)
    })

    const { errors } = formState

    const handleSignIn: SubmitHandler<TData> = async (value, event) => {
        //event.preventDefault()
        
        //await new Promise (resolve => setTimeout(resolve, 1000 ))

    }
    return (
        
        <Flex 
        w="100vw" 
        h="100vh" 
        justify="center" 
        align="center"
        >
            <Flex 
            as="form" 
            w="100%" 
            maxWidth={360}
            bg="gray.800"
            p="8"
            borderRadius={8}
            flexDirection="column"
            onSubmit = {handleSubmit(handleSignIn)}
            >
                <Stack spacing="4">
                    <InputBlank  
                    error = { errors.email }
                    {...register('email')} 
                    type="email" 
                    name="email" 
                    label="E-mail" />
                    <InputBlank 
                    {...register('password')} 
                    type="password" 
                    name="password" 
                    label="Password" 
                    error = { errors.password }
                    />
                </Stack>
                <Button 
                size="lg" 
                type="submit" 
                mt="6" 
                colorScheme="pink"
                isLoading = {formState.isSubmitting}
                >
                    Send
                </Button>
            </Flex>    
        
        </Flex>
    )
}