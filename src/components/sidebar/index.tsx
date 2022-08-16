import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useSidebarDrawer } from "../../context/sidebarDrawerContext";

import { NavSection } from "./navSection";
import { NavLink } from "./navLink";

export const Sidebar = () => {
  const { isOpen, onClose } = useSidebarDrawer();

  const isDrawerSidebar = useBreakpointValue({ base: true, lg: false });

  if (isDrawerSidebar) {
    return (
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent bg="gray.800" p="4">
            <DrawerCloseButton mt="6" />
            <DrawerHeader>Navegacao</DrawerHeader>

            <DrawerBody>
              <SidebarNav />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
  }

  return (
    <Box as="aside" w="64" mr="8">
      <Stack spacing="12" align="flex-start">
        <NavSection title="GERAL">
          <NavLink icon={RiDashboardLine}>Dashboard</NavLink>
          <NavLink icon={RiContactsLine}>Usuarios</NavLink>
        </NavSection>

        <NavSection title="AUTOMACAO">
          <NavLink icon={RiInputMethodLine}>Formularios</NavLink>
          <NavLink icon={RiGitMergeLine}>Automacao</NavLink>
        </NavSection>
      </Stack>
    </Box>
  );
};
