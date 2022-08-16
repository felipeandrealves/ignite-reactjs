import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Stack,
} from "@chakra-ui/react";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";
import * as yup from "yup";

import { Input } from "../../components/form/input";
import { Sidebar } from "../../components/sidebar";
import { Header } from "../../components/header";

type CreateUserFormData = {
  name: string;
  email: string;
  password: string;
  confirm_password: string;
};

const createUserFormSchema = yup.object().shape({
  name: yup.string().min(3, "nome muito curto").required("Nome obrigatorio"),
  email: yup.string().email("E-mail invalido").required("E-mail obrigatorio"),
  password: yup
    .string()
    .min(6, "Senha muito curta")
    .required("Senha obrigatoria"),
  confirm_password: yup
    .string()
    .oneOf([null, yup.ref("password")], "Senha divergente"),
});

export default function CreateUser() {
  const { register, handleSubmit, formState } = useForm<CreateUserFormData>({
    resolver: yupResolver(createUserFormSchema),
  });

  const { errors, isSubmitting } = formState;

  const handleCreateUser: SubmitHandler<CreateUserFormData> = async (
    values
  ) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxW={1480} mx="auto" px="6 ">
        <Sidebar />

        <Box
          as="form"
          onSubmit={handleSubmit(handleCreateUser)}
          flex="1"
          borderRadius={8}
          bg="gray.800"
          p={["6", "8"]}
        >
          <Heading size="lg" fontWeight="normal">
            Criar usuário
          </Heading>

          <Divider my="6" borderColor="gray.700" />

          <Stack spacing="8">
            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <Input label="Nome" error={errors.name} {...register("name")} />
              <Input
                type="email"
                error={errors.email}
                label="E-mail"
                {...register("email")}
              />
            </SimpleGrid>

            <SimpleGrid minChildWidth={240} spacing={["6", "8"]} w="100%">
              <Input
                type="password"
                label="Senha"
                error={errors.password}
                {...register("password")}
              />
              <Input
                type="password"
                label="Confirme a senha"
                error={errors.confirm_password}
                {...register("confirm_password")}
              />
            </SimpleGrid>
          </Stack>

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/users" passHref>
                <Button type="button" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button type="submit" isLoading={isSubmitting} colorScheme="pink">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
