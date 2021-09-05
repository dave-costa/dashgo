import { FormControl, FormErrorMessage, FormLabel, Input, InputProps } from "@chakra-ui/react";
import React from "react";
import { forwardRef } from "react";
import { FieldError} from "react-hook-form";

interface InputType extends InputProps {
    name: string
    label?: string
    error?: FieldError
}

const PreInput = ({error, name, label, ...rest}:InputType ) => {
   return (
    <FormControl isInvalid = {!! error}>
    {!! label && <FormLabel htmlFor={name}>{label}</FormLabel> }
     <Input
     name={name}
     id={name}
     focusBorderColor="pink.500"
     bg="gray.900"
     variant="filled"
     _hover={{
         bgColor: 'gray.900'
     }}
     size="lg"
     {...rest}
     /> 

     {error && (
         <FormErrorMessage>
        {error.message}
    </FormErrorMessage>
     )}
     
    </FormControl>
   )
}

export const InputBlank = forwardRef(PreInput, )