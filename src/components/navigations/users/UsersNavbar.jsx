import React from "react";
import Header from "../../core/semantics/Header";
import { Link as RouterLink, useLocation } from "react-router-dom";
import {
  Avatar,
  AvatarBadge,
  Heading,
  HStack,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Show,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  MdOutlineLogout,
  MdOutlineMenu,
  MdOutlineWbSunny,
} from "react-icons/md";
import { useFetchMenuLinks } from "../../../hooks/uiQueries";
import { AiOutlineMoon } from "react-icons/ai";

const UsersNavbar = ({ onOpen, openLogout, profile }) => {
  // Hooks
  const { colorMode, toggleColorMode } = useColorMode();

  // Routers
  const location = useLocation();
  // Remove the last path
  const splitPathname = location.pathname.split("/");
  const slicedPathname =
    splitPathname.length <= 3 ? splitPathname : splitPathname.slice(0, -1);
  const pathname = slicedPathname.join("/");

  // Queries
  const menuQuery = useFetchMenuLinks();

  return (
    <Header maxW={null} bg="background">
      <HStack direction="row" justifyContent="space-between">
        {/* LHS */}
        <HStack>
          <Show below="lg">
            <IconButton
              variant="ghost"
              icon={<MdOutlineMenu size={20} />}
              onClick={onOpen}
            />
          </Show>

          <Link as={RouterLink} variant="logo" to={pathname}>
            {/*<Heading size="md">
              {
                menuQuery?.data?.data?.find((row) => row.url === pathname)
                  ?.label
              }
            </Heading>{" "}*/}
          </Link>
        </HStack>

        {/* RHS */}
        <HStack>
          <IconButton
            variant="ghost"
            icon={
              colorMode === "light" ? (
                <MdOutlineWbSunny size={20} />
              ) : (
                <AiOutlineMoon size={20} />
              )
            }
            onClick={toggleColorMode}
          />

          <Menu>
            <MenuButton
              rounded="full"
              _focusVisible={{
                ring: 2,
                ringColor: useColorModeValue("zinc.950", "white"),
                ringOffset: "2px",
                ringOffsetColor: "background",
              }}
            >
              <Avatar
                name={profile?.name}
                ring="1px"
                ringColor="border"
                bg={useColorModeValue("zinc.100", "zinc.900")}
                color={useColorModeValue("zinc.950", "zinc.50")}
              >
                <AvatarBadge
                  boxSize="1rem"
                  bg="brand.600"
                  borderColor={useColorModeValue("brand.200", "brand.800")}
                />
              </Avatar>
            </MenuButton>

            <MenuList>
              <MenuItem
                icon={<MdOutlineLogout size={16} />}
                onClick={openLogout}
              >
                Logout
              </MenuItem>
            </MenuList>
          </Menu>
        </HStack>
      </HStack>
    </Header>
  );
};

export default UsersNavbar;
