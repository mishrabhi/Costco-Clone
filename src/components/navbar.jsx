import React from "react";
import { Box, Flex, Input, Button, Link, Image } from "@chakra-ui/react";
import { Icon } from "@chakra-ui/icons";
import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { SearchIcon } from "@chakra-ui/icons";
import { Link as RouterLink } from "react-router-dom";

const NavBar = () => {
  return (
    <Box w="100%" bg="gray.100" p={4}>
      {/* Top section */}
      <Flex justify="space-between" align="center">
        {/* Logo - Wrap in RouterLink for home navigation */}
        <RouterLink to="/">
          <Image
            w="46%"
            src="https://cdn.bfldr.com/56O3HXZ9/at/wkgcrwxgt5bt39wg63kgmqr/Costco-Logo-Registered.png?auto=webp&format=jpg"
            alt="Costco Logo"
          />
        </RouterLink>

        {/* Search Bar */}
        <Flex flex="1" mx={4} maxW="600px">
          <Input placeholder="Search Costco" />
          <Button colorScheme="blue" ml={2}>
            <SearchIcon />
          </Button>
        </Flex>

        {/* Links */}
        <Flex>
          <Link href="/signin-register" mx={2}>
            Sign In / Register
          </Link>
          <Link href="#" mx={2}>
            Orders & Returns
          </Link>
          <Link href="#" mx={2}>
            Cart
          </Link>
        </Flex>
      </Flex>

      {/* Bottom section */}
      <Flex justify="space-around" bg="blue.800" color="white" p={2} mt={2}>
        <Link href="#" mx={2}>
          &#9776; Shop
        </Link>
        <Link href="#" mx={2}>
          Grocery
        </Link>
        <Link href="#" mx={2}>
          Same Day
        </Link>
        <Link href="/products" mx={2}>
          Deals
        </Link>
        <Link href="#" mx={2}>
          Business Delivery
        </Link>
        <Link href="#" mx={2}>
          Optical
        </Link>
        <Link href="#" mx={2}>
          Pharmacy
        </Link>
        <Link href="#" mx={2}>
          Services
        </Link>
        <Link href="#" mx={2}>
          Photo
        </Link>
        <Link href="#" mx={2}>
          Travel
        </Link>
        <Link href="#" mx={2}>
          Membership
        </Link>
        <Link href="#" mx={2}>
          Locations
        </Link>
      </Flex>
    </Box>
  );
};

export default NavBar;
