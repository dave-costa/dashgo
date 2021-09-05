//native imports
import React from "react";
import Link from "next/link";
import { InputBlank } from "../../components/form/InputBlank";
import { Header } from "../../components/Header";
import { SideBar } from "../../components/SideBar/SideBar";
import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";
// extern imports
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";

type TData = {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
};

const createUserForSchema = yup.object().shape({
  name: yup
    .string()
    .required("Name is required")
    .min(3, "Your name need 3 character"),
  email: yup.string().required("Email required").email("Invalid email"),

  password: yup
    .string()
    .min(6, "You need 6 character")
    .required("Password required"),

  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref("password")], "Passwords need to be similar"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createUserForSchema),
  });
  const { errors } = formState;

  const handleCreateUser: SubmitHandler<TData> = async (values, event) => {
    event.preventDefault();
    await new Promise((resolve) => setTimeout(resolve, 1000));
    console.log(values);
  };
  return (
    <Box>
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <SideBar />
        <Box
          as="form"
          flex="1"
          onSubmit={handleSubmit(handleCreateUser)}
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Create new user
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <InputBlank
                {...register("name")}
                name="name"
                label="Full name"
                error={errors.name}
              />
              <InputBlank
                {...register("email")}
                name="email"
                type="Email"
                label="E-mail"
                error={errors.email}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <InputBlank
                {...register("password")}
                name="password"
                type="password"
                label="Password"
                error={errors.password}
              />
              <InputBlank
                name="password_confirmation"
                {...register("password_confirmation")}
                type="password"
                label="Repeat password"
                error={errors.password_confirmation}
              />
            </SimpleGrid>
          </VStack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users">
                <Button as="a" colorScheme="whiteAlpha">
                  Cancel
                </Button>
              </Link>

              <Button
                type="submit"
                isLoading={formState.isSubmitting}
                colorScheme="pink"
              >
                Save
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
