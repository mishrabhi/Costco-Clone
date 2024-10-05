import React from "react";
import { Box, Grid, Text, Image } from "@chakra-ui/react";

const CombinedFeaturedProducts = () => {
  // Product data for the first section (4 images per row)
  const featuredProducts = [
    {
      title: "Available In Warehouse & Online",
      description: "VALID - 9/25/24 - 10/20/24",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_cover.jpg", // Replace with actual image path
    },
    {
      title: "WHAT'S NEW",
      description: "",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_whats_new.jpg", // Replace with actual image path
    },
    {
      title: "$39.99 - $199.99 ",
      description: "UPGRADE YOUR KITCHEN",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_kitchen.jpg", // Replace with actual image path
    },
    {
      title: "$299.99 - $1299.99 OFF",
      description: "LG TV's",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_lg.jpg", // Replace with actual image path
    },
    {
      title: "$4 - $7 OFF",
      description: "PUMA",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_puma.jpg", // Replace with actual image path
    },
    {
      title: "$3 - $4.40 OFF",
      description: "PANTENE + OLAY",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_pantene_olay.jpg", // Replace with actual image path
    },
    {
      title: "$3 - $5 OFF",
      description: "LYSOL + FINISH",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_lysol_finish.jpg", // Replace with actual image path
    },
    {
      title: "$5 - $6 OFF",
      description: "FALL INTO SAVINGS",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/25w13223/25w13223_october_mvm_bind_in_grid_pharmacy.jpg", // Replace with actual image path
    },
  ];

  // Product data for the second section (3 images per row)
  const additionalProducts = [
    {
      title: "Submit Reciepts by 10/31/24",
      description: "Terms & Conditions Apply",
      imageUrl:
        "https://mobilecontent.costco.com/staging/resource/img/24w13043/m_24w13043_ban_p&g_100_campaign.jpg", // Replace with actual image path
    },
    {
      title: "E-CARD",
      description: "WHILE SUPPLYS LAST",
      imageUrl:
        "https://mobilecontent.costco.com/live/resource/img/24w13127/24w13127_third_banner_invisalign.jpg", // Replace with actual image path
    },
    {
      title: "APPLE WATCH",
      description: "AVAILABLE NOW",
      imageUrl: "https://media-cdn.costco.com/www3-media?libBID=4289819", // Replace with actual image path
    },
    {
      title: "PEDIA SURE WITH OPTIGRO",
      description: "VALID 9/5/24-10/20/14",
      imageUrl:
        "https://mobilecontent.costco.com/live/resource/img/25w01160/25w01160_third_banner_pediasure.jpg", // Replace with actual image path
    },
    {
      title: "Ensure Original Nutrition Shake",
      description: "VALID- 9/5/24-10/20/24",
      imageUrl:
        "https://mobilecontent.costco.com/live/resource/img/25w01161/25w01161_third_banner_ensure.jpg", // Replace with actual image path
    },
    {
      title: "SIMILAC 360 TOTALCARE",
      description: "VALID 9/5/24-10/20/14",
      imageUrl:
        "https://mobilecontent.costco.com/live/resource/img/24w03157/24w03157-third-banner-similar-image.jpg", // Replace with actual image path
    },
  ];

  return (
    <Box width="90%" mx="auto" my={8}>
      {/* Featured Products Grid (4 images per row) */}
      {/* <Text fontSize="2xl" fontWeight="bold" mb={4}>
        Featured Products
      </Text> */}
      <Grid templateColumns={{ base: "1fr", md: "repeat(4, 1fr)" }} gap={6}>
        {featuredProducts.map((product, index) => (
          <Box
            key={index}
            // bg="orange.100"
            borderRadius="md"
            overflow="hidden"
            textAlign="center"
            cursor="pointer"
            // border="1px solid gray"
          >
            <Text fontWeight="bold" fontSize="lg" mt={2}>
              {product.title}
            </Text>
            <Image
              src={product.imageUrl}
              alt={product.description}
              width="100%"
              height="auto"
            />
            <Text py={2}>{product.description}</Text>
          </Box>
        ))}
      </Grid>

      {/* Additional Products Grid (3 images per row) */}

      <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap={6}>
        {additionalProducts.map((product, index) => (
          <Box
            key={index}
            // bg="orange.100"
            borderRadius="md"
            overflow="hidden"
            textAlign="center"
            cursor="pointer"
            // border="1px solid gray"
          >
            <Text fontWeight="bold" fontSize="lg" mt={2}>
              {product.title}
            </Text>
            <Image
              src={product.imageUrl}
              alt={product.description}
              width="100%"
              height="auto"
            />
            <Text py={2}>{product.description}</Text>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default CombinedFeaturedProducts;
