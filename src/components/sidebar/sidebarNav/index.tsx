import {
  RiContactsLine,
  RiDashboardLine,
  RiGitMergeLine,
  RiInputMethodLine,
} from "react-icons/ri";
import { Stack } from "@chakra-ui/react";

import { NavSection } from "../navSection";
import { NavLink } from "../navLink";

export const SidebarNav = () => {
  return (
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
  );
};
