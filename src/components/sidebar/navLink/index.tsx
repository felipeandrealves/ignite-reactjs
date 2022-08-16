import { LinkProps, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";
import Link from "next/link";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ children, icon, href, ...props }: INavLinkProps) => {
  return (
    <Link href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </Link>
  );
};
