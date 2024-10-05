import React from "react";
import { Box, Grid, Image, Text, Button, Flex } from "@chakra-ui/react";

const LGAppliance = () => {
  return (
    <Box width="90%" mx="auto" my={8}>
      {/* Main Promo Section */}
      <Flex
        direction={{ base: "column", md: "row" }}
        alignItems="stretch"
        mb={8}
        gap={6}
      >
        {/* Left side: Main image with LG Appliances header, headline, discount, and Shop Now button */}
        <Box
          bg="gray.100"
          borderRadius="md"
          p={4}
          textAlign="center"
          flex="1"
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          {/* LG Appliances Header */}
          <Box bg="red.600" textAlign="center" py={2} mb={4}>
            <Text color="white" fontWeight="bold" fontSize="lg">
              LG Appliances
            </Text>
          </Box>

          <Image
            src="https://mobilecontent.costco.com/live/resource/img/25w01163/25w01163_half_hero_4_square_lg_fall_savings.jpg"
            alt="Fantastic Fall Savings"
            mb={4}
          />
          <Box>
            <Text fontWeight="bold" fontSize="2xl" color="gray.700">
              FANTASTIC FALL SAVINGS
            </Text>
            <Text fontSize="xl" color="orange.400" fontWeight="bold" mb={4}>
              $100 - $1,100 OFF
            </Text>
          </Box>

          {/* Shop Now Button */}
          <Box mt="auto">
            <Button colorScheme="red" size="lg">
              Shop Now
            </Button>
            <Text fontSize="sm" mt={2}>
              Valid 9/26/24 - 10/16/24 | While Supplies Last
            </Text>
          </Box>
        </Box>

        {/* Right side: Product Cards */}
        <Grid
          templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
          gap={6}
          flex="1"
        >
          {/* Product 1 */}
          <Box bg="gray.100" borderRadius="md" p={4} textAlign="center">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/25w01163/25w01163_half_4_square_lg_fall_savings_washer.jpg"
              alt="Laundry"
              mb={2}
            />
            <Text fontWeight="bold" fontSize="xl" color="orange.400">
              $100 - $1,100 OFF
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Laundry
            </Text>
          </Box>

          {/* Product 2 */}
          <Box bg="gray.100" borderRadius="md" p={4} textAlign="center">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/25w01163/25w01163_half_4_square_lg_fall_savings_fridge.jpg"
              alt="Refrigerators"
              mb={2}
            />
            <Text fontWeight="bold" fontSize="xl" color="orange.400">
              $100 - $650 OFF
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Refrigerators
            </Text>
          </Box>

          {/* Product 3 */}
          <Box bg="gray.100" borderRadius="md" p={4} textAlign="center">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/25w01163/25w01163_half_4_square_lg_fall_savings_dishwasher.jpg"
              alt="Dishwashers"
              mb={2}
            />
            <Text fontWeight="bold" fontSize="xl" color="orange.400">
              $200 - $850 OFF
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Dishwashers
            </Text>
          </Box>

          {/* Product 4 */}
          <Box bg="gray.100" borderRadius="md" p={4} textAlign="center">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/25w01163/25w01163_half_4_square_lg_fall_savings_cooking.jpg"
              alt="Cooking"
              mb={2}
            />
            <Text fontWeight="bold" fontSize="xl" color="orange.400">
              $100 - $950 OFF
            </Text>
            <Text fontSize="lg" fontWeight="bold">
              Cooking
            </Text>
          </Box>
        </Grid>
      </Flex>
    </Box>
  );
};

export default LGAppliance;
