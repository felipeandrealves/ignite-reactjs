import { Flex, useBreakpointValue } from "@chakra-ui/react";

import { NotificationNav } from "./notificationNav";
import { SearchBox } from "./searchBox";
import { Profile } from "./profile";
import { Logo } from "./logo";

export const Header = () => {
  const isWideVersion = useBreakpointValue({ base: false, lg: true });

  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="6"
      align="center"
    >
      <Logo />

      {isWideVersion && <SearchBox />}

      <Flex align="center" ml="auto">
        <NotificationNav />

        <Profile showProfileData={isWideVersion} />
      </Flex>
    </Flex>
  );
};
