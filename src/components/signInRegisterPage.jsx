import React, { useState } from "react";
import {
  Box,
  Input,
  Button,
  FormControl,
  FormLabel,
  Text,
  Flex,
} from "@chakra-ui/react";

const SignInRegisterPage = () => {
  const [isSignUp, setIsSignUp] = useState(false); // Toggle between sign-in and sign-up
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Handle form submission for both sign-in and sign-up
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      alert("User has been registered successfully!");
    } else {
      alert("User has signed in successfully!");
    }
  };

  return (
    <Box
      w="100%"
      maxW="400px"
      mx="auto"
      mt={10}
      p={6}
      boxShadow="md"
      borderRadius="md"
    >
      <Text fontSize="2xl" mb={4}>
        {isSignUp ? "Register" : "Sign In"}
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mb={4}>
          <FormLabel>Email address</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Enter your email"
          />
        </FormControl>
        <FormControl id="password" mb={6}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
        </FormControl>
        <Button type="submit" colorScheme="blue" w="100%" mb={4}>
          {isSignUp ? "Register" : "Sign In"}
        </Button>
      </form>
      <Flex justifyContent="space-between">
        <Text>
          {isSignUp ? "Already have an account?" : "Don't have an account?"}
        </Text>
        <Button
          variant="link"
          colorScheme="blue"
          onClick={() => setIsSignUp(!isSignUp)}
        >
          {isSignUp ? "Sign In" : "Register"}
        </Button>
      </Flex>
    </Box>
  );
};

export default SignInRegisterPage;
