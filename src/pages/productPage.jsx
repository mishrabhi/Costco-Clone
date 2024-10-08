import React, { useState, useEffect } from "react";
import {
  Box,
  SimpleGrid,
  Image,
  Text,
  Select,
  Input,
  Flex,
  Heading,
} from "@chakra-ui/react";
import axios from "axios";

const ProductPage = () => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    // Fetch products from the API
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products");
        setProducts(response.data);
        setFilteredProducts(response.data); // Initialize with all products
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  // Filter products by category and search term
  useEffect(() => {
    let filtered = products;

    if (category !== "all") {
      filtered = filtered.filter((product) => product.category === category);
    }

    if (searchTerm) {
      filtered = filtered.filter((product) =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredProducts(filtered);
  }, [category, searchTerm, products]);

  return (
    <Box width="90%" mx="auto" my={8}>
      <Heading mb={6}>Our Products</Heading>

      {/* Filter Section */}
      <Flex mb={4} justify="space-between" align="center">
        <Select
          placeholder="Filter by Category"
          onChange={(e) => setCategory(e.target.value)}
          width="30%"
        >
          <option value="all">All</option>
          <option value="men's clothing">Men's Clothing</option>
          <option value="women's clothing">Women's Clothing</option>
          <option value="jewelery">Jewelry</option>
          <option value="electronics">Electronics</option>
        </Select>

        <Input
          placeholder="Search by product name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          width="30%"
        />
      </Flex>

      {/* Product Grid */}
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={6}>
        {filteredProducts.map((product) => (
          <Box
            key={product.id}
            borderWidth="1px"
            borderRadius="md"
            overflow="hidden"
            textAlign="center"
            p={4}
            bg="gray.100"
          >
            <Image
              src={product.image}
              alt={product.title}
              borderRadius="md"
              mb={4}
              objectFit="contain"
              height="200px"
              width="100%"
            />
            <Text fontWeight="bold" mb={2}>
              {product.title}
            </Text>
            <Text color="gray.500" mb={2}>
              {product.category}
            </Text>
            <Text fontWeight="medium" color="green.500">
              ${product.price}
            </Text>
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default ProductPage;
