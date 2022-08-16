import { Avatar, Box, Flex, Text } from "@chakra-ui/react";

interface IProfileProps {
  showProfileData?: boolean;
}

export const Profile = ({ showProfileData = true }: IProfileProps) => {
  return (
    <Flex align="center">
      {showProfileData && (
        <Box mr="4" textAlign="right">
          <Text>Felipe Alves</Text>
          <Text color="gray.300" fontSize="small">
            felipe.alves@synvia.com
          </Text>
        </Box>
      )}

      <Avatar
        size="md"
        name="Felipe Alves"
        src="https://github.com/felipeandrealves.png"
      />
    </Flex>
  );
};
