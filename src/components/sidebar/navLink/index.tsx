import { LinkProps, Icon, Link, Text } from "@chakra-ui/react";
import { ElementType } from "react";

interface INavLinkProps extends LinkProps {
  icon: ElementType;
  children: string;
}

export const NavLink = ({ children, icon, ...props }: INavLinkProps) => {
  return (
    <Link display="flex" alignItems="center" {...props}>
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">
        {children}
      </Text>
    </Link>
  );
};
