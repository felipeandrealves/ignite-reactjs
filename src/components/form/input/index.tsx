import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";

interface IInputProps extends InputProps {
  label?: string;
}

export const Input = ({ name, label, ...props }: IInputProps) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <ChakraInput
        name={name}
        id={name}
        bgColor="gray.900"
        focusBorderColor="pink.500"
        variant="filled"
        size="lg"
        _hover={{ bgColor: "gray.900" }}
        {...props}
      />
    </FormControl>
  );
};
