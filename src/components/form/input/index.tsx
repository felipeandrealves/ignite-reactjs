import {
  FormControl,
  FormLabel,
  Input as ChakraInput,
  InputProps,
} from "@chakra-ui/react";
import { forwardRef, ForwardRefRenderFunction } from "react";

interface IInputProps extends InputProps {
  label?: string;
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, IInputProps> = (
  { name, label, ...props },
  ref
) => {
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
        ref={ref}
        _hover={{ bgColor: "gray.900" }}
        {...props}
      />
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
