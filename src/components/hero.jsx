// import React from "react";
// import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

// const Hero = () => {
//   const products = [
//     {
//       id: 1,
//       image:
//         "https://mobilecontent.costco.com/live/resource/img/25w01165/25w01114_third_hero_apparel_ks_v.jpg",
//       discount: "$500 OFF",
//       name: "KIRKLAND SIGNATURE APPAREL",
//     },
//     {
//       id: 2,
//       image:
//         "https://mobilecontent.costco.com/live/resource/img/25w01165/25w01115_third_hero_apparel_eddiebauer_v.jpg",
//       discount: "$400 - $700 OFF",
//       name: "32 DEGREES APPAREL",
//     },
//     {
//       id: 3,
//       image:
//         "https://mobilecontent.costco.com/live/resource/img/25w01165/25w01167_thrird_hero_eddie_bauer_v.jpg",
//       price: "Eddie Baurel Apprel",
//       name: "Eddie Baurel Apprel",
//     },
//   ];

//   return (
//     <Box width="90%" mx="auto" my={8}>
//       <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
//         {products.map((product) => (
//           <Box
//             key={product.id}
//             borderWidth="1px"
//             borderRadius="md"
//             overflow="hidden"
//             textAlign="center"
//             p={4}
//             bg="gray.100"
//           >
//             {product.discount && (
//               <Text fontWeight="bold" color="red.500" mb={2}>
//                 {product.name}
//               </Text>
//             )}
//             {product.price && (
//               <Text fontWeight="bold" color="gray.700" mb={2}>
//                 {product.name}
//               </Text>
//             )}
//             <Image
//               src={product.image}
//               borderRadius="md"
//               mb={4}
//               width="100%"
//               height="auto"
//             />
//             <Text fontWeight="medium">{product.name}</Text>
//           </Box>
//         ))}
//       </SimpleGrid>
//     </Box>
//   );
// };

// export default Hero;
import React from "react";
import { Box, SimpleGrid, Image, Text } from "@chakra-ui/react";

const Hero = () => {
  const products = [
    {
      id: 1,
      image:
        "https://mobilecontent.costco.com/live/resource/img/25w01165/25w01114_third_hero_apparel_ks_v.jpg",
      discount: "$500 OFF",
      name: "KIRKLAND SIGNATURE APPAREL",
    },
    {
      id: 2,
      image:
        "https://mobilecontent.costco.com/live/resource/img/25w01165/25w01115_third_hero_apparel_eddiebauer_v.jpg",
      discount: "$400 - $700 OFF",
      name: "32 DEGREES APPAREL",
    },
    {
      id: 3,
      image:
        "https://mobilecontent.costco.com/live/resource/img/25w01165/25w01167_thrird_hero_eddie_bauer_v.jpg",
      price: "Eddie Bauer Apparel",
      name: "Eddie Bauer Apparel",
    },
  ];

  const bigImages = [
    {
      id: 1,
      image:
        "https://mobilecontent.costco.com/staging/resource/img/25w01162/25w01162_half_hero_samsung.jpg",
      name: "",
    },
    {
      id: 2,
      image:
        "https://mobilecontent.costco.com/live/resource/img/24W01151/m-24W01151-hero-why-buy-appliances-v2.jpg",
      name: "",
    },
  ];

  return (
    <Box width="90%" mx="auto" my={8}>
      {/* Big Image Boxes Section */}
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={6} mb={8}>
        {bigImages.map((bigImage) => (
          <Box
            key={bigImage.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            textAlign="center"
            bg="gray.100"
          >
            <Image
              src={bigImage.image}
              alt={bigImage.name}
              width="100%"
              height="auto"
            />
            <Text fontWeight="bold" mt={4}>
              {bigImage.name}
            </Text>
          </Box>
        ))}
      </SimpleGrid>

      {/* Product Grid Section */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
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
                {product.name}
              </Text>
            )}
            {product.price && (
              <Text fontWeight="bold" color="gray.700" mb={2}>
                {product.name}
              </Text>
            )}
            <Image
              src={product.image}
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

export default Hero;
