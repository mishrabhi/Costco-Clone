import React from "react";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

const ProductGrid = () => {
  const products = [
    {
      id: 1,
      image:
        "https://cdn.bfldr.com/U447IH35/at/c938ntb7vsm4q797krpn7v/4000279461-847__1.jpg?auto=webp&format=jpg&width=350&height=350",
      discount: "$500 OFF",
      name: "FABRIC SECTIONAL",
    },
    {
      id: 2,
      image:
        "https://cdn.bfldr.com/U447IH35/at/pmzh9xwnj7cqf86nmtcwjt4/100785303-847__1.jpg?auto=webp&format=jpg&width=350&height=350",
      discount: "$400 - $700 OFF",
      name: "ALUMINUM PERGOLA",
    },
    {
      id: 3,
      image:
        "https://cdn.bfldr.com/U447IH35/as/j7w4pvrmnf46v89p888b8xz/9465800-847__3?auto=webp&format=jpg&width=350&height=350",
      price: "$429.99",
      name: "65 INCH TV",
    },
    {
      id: 4,
      image:
        "https://cdn.bfldr.com/U447IH35/at/cq76kbgw8npq5rcn58x8ns8/4000043011-847__1.jpg?auto=webp&format=jpg&width=350&height=350",
      discount: "$400 OFF",
      name: "REFRIGERATOR",
    },
    {
      id: 5,
      image:
        "https://cdn.bfldr.com/U447IH35/as/fr24q7sjc389xkt275pm4rn/1665100-847__1?auto=webp&amp;format=jpg&amp;width=350&amp;height=350",
      discount: "$50 OFF",
      name: "WET DRY VACUUM",
    },
    {
      id: 6,
      image:
        "https://cdn.bfldr.com/U447IH35/as/96nh6hh9s7562ghg4rsxp7q/4000176374-847_yellowgold_1?auto=webp&format=jpg&width=350&height=350",
      discount: "$500 OFF",
      name: "GOLD HOOP EARRINGS",
    },
    {
      id: 7,
      image:
        "https://cdn.bfldr.com/U447IH35/at/rnmz3zhm8qjpgmj48h4g3ct/1588972-847__1.jpg?auto=webp&format=jpg&width=350&height=350",
      price: "$449.99",
      name: "SOUTHWEST AIRLINES",
    },
    {
      id: 8,
      image:
        "https://cdn.bfldr.com/U447IH35/at/7ftnckbzvbr8sv56n2nq9q4/1491066-847__1.jpg?auto=webp&format=jpg&width=350&height=350",
      discount: "$18 OFF",
      name: "FRONTLINE",
    },
  ];

  return (
    <Box width="90%" mx="auto" my={8}>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={6}>
        {products.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            textAlign="center"
            p={4}
            bg="gray.100"
          >
            {product.discount && (
              <Text fontWeight="bold" color="red.500" mb={2}>
                {product.discount}
              </Text>
            )}
            {product.price && (
              <Text fontWeight="bold" color="gray.700" mb={2}>
                {product.price}
              </Text>
            )}
            <Image
              src={product.image}
              alt={product.name}
              borderRadius="md"
              mb={4}
              width="100%"
              height="auto"
            />
            <Text fontWeight="medium">{product.name}</Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductGrid;
