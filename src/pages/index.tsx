import {
  Button,
  Flex,
  Input,
  Stack,
  FormLabel,
  FormControl,
} from "@chakra-ui/react";
import type { NextPage } from "next";

const Home: NextPage = () => {
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
      >
        <Stack spacing="4">
          <FormControl>
            <FormLabel htmlFor="email">E-mail</FormLabel>
            <Input
              name="email"
              id="email"
              type="email"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              size="lg"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>

          <FormControl>
            <FormLabel htmlFor="password">Senha</FormLabel>
            <Input
              name="password"
              id="password"
              type="password"
              bgColor="gray.900"
              focusBorderColor="pink.500"
              variant="filled"
              size="lg"
              _hover={{ bgColor: "gray.900" }}
            />
          </FormControl>
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
};

export default Home;
