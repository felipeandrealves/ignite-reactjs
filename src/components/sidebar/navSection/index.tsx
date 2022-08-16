import { Box, Stack, Text } from "@chakra-ui/react";
import { ReactNode } from "react";

interface INavSectionProps {
  title: string;
  children: ReactNode;
}

export const NavSection = ({ title, children }: INavSectionProps) => {
  return (
    <Box>
      <Text fontWeight="bold" color="gray.400" fontSize="smal">
        {title}
      </Text>
      <Stack spacing="4" mt="8" align="stretch">
        {children}
      </Stack>
    </Box>
  );
};
