import { Button } from "@chakra-ui/react";

interface IPaginationItemProps {
  isCurrent?: boolean;
  page: number;
}

export const PaginationItem = ({ isCurrent, page }: IPaginationItemProps) => {
  if (isCurrent) {
    return (
      <Button
        size="sm"
        fontSize="xs"
        width="4"
        colorScheme="pink"
        disabled
        _disabled={{ bgColor: "pink.500", cursor: "default" }}
      >
        {page}
      </Button>
    );
  }

  return (
    <Button
      size="sm"
      fontSize="xs"
      width="4"
      bgColor="gray.700"
      _hover={{ bgColor: "gray.500" }}
    >
      {page}
    </Button>
  );
};
