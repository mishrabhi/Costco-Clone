import React from "react";
import { Box, Grid, Image, Text, Flex, Button } from "@chakra-ui/react";

const PromotionsSection = () => {
  return (
    <Box width="90%" mx="auto" my={8}>
      {/* Top section: Two clickable images */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
        gap={6}
        mb={8}
      >
        <Box
          as="a"
          href="#"
          bg="gray.100"
          p={4}
          borderRadius="md"
          textAlign="center"
        >
          <Image
            src="https://cdn.bfldr.com/56O3HXZ9/at/pg4hj44wvg47m4b8p73j3pg4/d-24w01107-banner-membership.jpg?&format=jpg"
            alt="Not a Member Yet?"
            mb={4}
          />
          <Button colorScheme="red">Sign Up Today</Button>
        </Box>
        <Box
          as="a"
          href="#"
          bg="gray.100"
          p={4}
          borderRadius="md"
          textAlign="center"
        >
          <Image
            src="https://cdn.bfldr.com/56O3HXZ9/at/9zswttn4v5gz2z83thjjrjg/d-24w01107-banner-renew-membership.jpg?&format=jpg"
            alt="Renew Your Membership"
            mb={4}
          />
          <Button colorScheme="red">Start Now</Button>
        </Box>
      </Grid>

      {/* Middle section: Four clickable images */}
      <Grid
        templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }}
        gap={6}
        mb={8}
      >
        <Box as="a" href="#" textAlign="center">
          <Image
            src="https://mobilecontent.costco.com/staging/resource/img/24w09059/24w09059_5_across_wsl.jpg"
            alt="While Supplies Last"
            mb={2}
          />
          <Text fontWeight="bold" color="gray.700">
            While Supplies Last
          </Text>
          <Text fontSize="sm">Price Reductions</Text>
        </Box>
        <Box as="a" href="#" textAlign="center">
          <Image
            src="https://mobilecontent.costco.com/staging/resource/img/24w09059/24w09059_5_across_treasure_hunt.jpg"
            alt="Treasure Hunt"
            mb={2}
          />
          <Text fontWeight="bold" color="gray.700">
            Treasure Hunt
          </Text>
          <Text fontSize="sm">This Week's Picks</Text>
        </Box>
        <Box as="a" href="#" textAlign="center">
          <Image
            src="https://mobilecontent.costco.com/staging/resource/img/24w09059/24w09059_5_across_whats_new.jpg"
            alt="What's New"
            mb={2}
          />
          <Text fontWeight="bold" color="gray.700">
            What's New
          </Text>
          <Text fontSize="sm">New Items Added</Text>
        </Box>
        <Box as="a" href="#" textAlign="center">
          <Image
            src="https://mobilecontent.costco.com/staging/resource/img/24w09059/24w09059_5_across_member_favorites.jpg"
            alt="Member Favorites"
            mb={2}
          />
          <Text fontWeight="bold" color="gray.700">
            Member Favorites
          </Text>
          <Text fontSize="sm">Four Stars & More</Text>
        </Box>
      </Grid>

      {/* Bottom section: Image on left, text on right */}
      <Flex
        direction={{ base: "column", md: "row" }}
        bg="gray.100"
        p={6}
        borderRadius="md"
      >
        {/* Left: Image */}
        <Box flex="1" textAlign="center" mb={{ base: 4, md: 0 }}>
          <Image
            src="https://cdn.bfldr.com/56O3HXZ9/at/bqbzt6phgctbw7g7fj6nr8g7/costco-direct-header-desktop-v2.png?auto=webp&format=jpg"
            alt="Costco Direct"
          />
        </Box>
        {/* Right: Text */}
        <Box flex="2" ml={{ md: 6 }}>
          <Text fontWeight="bold" fontSize="xl" mb={4}>
            Benefit from Buying More
          </Text>
          <Text mb={2}>
            Combine with other promotions for additional savings!
          </Text>
          <Text mb={2}>Delivery in 3-5 Days in Most Areas*</Text>
          <Text color="blue.500" fontWeight="bold">
            Participating items are marked with{" "}
            <Text as="span" color="red.500">
              Costco Direct
            </Text>
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default PromotionsSection;
