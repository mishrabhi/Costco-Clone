import React, { useRef } from "react";
import { Box, IconButton, Image, Flex, Text } from "@chakra-ui/react";
import { ArrowBackIcon, ArrowForwardIcon } from "@chakra-ui/icons";

const HeaderSection = () => {
  const imageContainerRef = useRef(null);

  const scrollLeft = () => {
    imageContainerRef.current.scrollBy({
      left: -window.innerWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    imageContainerRef.current.scrollBy({
      left: window.innerWidth,
      behavior: "smooth",
    });
  };

  return (
    <Box mt="15px">
      {/* Top Red Banner */}
      <Box bg="red.500" color="white" p={2} textAlign="center">
        <Text fontSize="lg">
          Join us in supporting the American Red Cross. Help people affected by
          Hurricane Helene
        </Text>
      </Box>

      {/* Scrollable Image Section */}
      <Box position="relative" mt={4}>
        {/* Arrow buttons */}
        <IconButton
          aria-label="Scroll Left"
          icon={<ArrowBackIcon />}
          position="absolute"
          top="50%"
          left="10px"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={scrollLeft}
          backgroundColor="white"
        />
        <IconButton
          aria-label="Scroll Right"
          icon={<ArrowForwardIcon />}
          position="absolute"
          top="50%"
          right="10px"
          transform="translateY(-50%)"
          zIndex="1"
          onClick={scrollRight}
          backgroundColor="white"
        />

        {/* Scrollable image container */}
        <Flex
          ref={imageContainerRef}
          overflowX="auto"
          scrollBehavior="smooth"
          gap={4}
          py={4}
          maxW="100%"
        >
          {/* Images */}
          <Box flexShrink={0} width="100%">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/24w12159/d_24w12159_hero_sept_mvm_tires_michelin.jpg"
              alt="Ad 1"
              borderRadius="md"
              width="100%"
              objectFit="cover"
            />
          </Box>
          <Box flexShrink={0} width="100%">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/24w13226/d_24w13226_oct_mvm_cover_hero_v2.jpg"
              alt="Ad 2"
              borderRadius="md"
              width="100%"
              objectFit="cover"
            />
          </Box>
          <Box flexShrink={0} width="100%">
            <Image
              src="https://mobilecontent.costco.com/staging/resource/img/25w01039/d_25w01039_hero_holiday_home.jpg"
              alt="Ad 3"
              borderRadius="md"
              width="100%"
              objectFit="cover"
            />
          </Box>
          <Box flexShrink={0} width="100%">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/25w01122/d_25w01122_cat_hero_samsung.jpg"
              alt="Ad 4"
              borderRadius="md"
              width="100%"
              objectFit="cover"
            />
          </Box>
          <Box flexShrink={0} width="100%">
            <Image
              src="https://mobilecontent.costco.com/live/resource/img/25w01152/d_25w01152_homepage_hero_winter_apparel.png"
              alt="Ad 5"
              borderRadius="md"
              width="100%"
              objectFit="cover"
            />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default HeaderSection;
