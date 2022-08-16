import { Button, Flex, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import type { NextPage } from "next";
import * as yup from "yup";

import { Input } from "../components/form/input";

type SignInFormData = {
  email: string;
  password: string;
};

const siginFormSchema = yup.object().shape({
  email: yup.string().email("E-mail invalido").required("E-mail obrigatório"),
  password: yup
    .string()
    .min(4, "Senha muito curta")
    .required("Senha obrigatoria"),
});

const Home: NextPage = () => {
  const { register, formState, handleSubmit } = useForm<SignInFormData>({
    resolver: yupResolver(siginFormSchema),
  });
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
          <Input
            type="email"
            label="E-mail"
            error={errors.email}
            {...register("email")}
          />

          <Input
            type="password"
            label="Senha"
            error={errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          isLoading={formState.isSubmitting}
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
