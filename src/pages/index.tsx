import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import type { NextPage } from "next";

import { Input } from "../components/form/input";

type SignInFormData = {
  email: string;
  password: string;
};

const Home: NextPage = () => {
  const { register, formState, handleSubmit } = useForm<SignInFormData>();
  const { errors } = formState;

  const handleSignIn: SubmitHandler<SignInFormData> = (values) => {
    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)}
      >
        <Stack spacing="4">
          <Input type="email" label="E-mail" {...register("email")} />

          <Input type="password" label="Senha" {...register("password")} />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
