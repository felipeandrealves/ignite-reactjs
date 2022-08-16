import { LinkProps, Icon, Link as ChakraLink, Text } from "@chakra-ui/react";
import { ElementType } from "react";

import { ActiveLink } from "../activeLink";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
  href: string;
}

export const NavLink = ({ children, icon, href, ...props }: INavLinkProps) => {
  return (
    <ActiveLink href={href} passHref>
      <ChakraLink display="flex" alignItems="center" {...props}>
        <Icon as={icon} fontSize="20" />
        <Text ml="4" fontWeight="medium">
          {children}
        </Text>
      </ChakraLink>
    </ActiveLink>
  );
};
