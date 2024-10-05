import React from "react";
import {
  Box,
  SimpleGrid,
  Link,
  Text,
  Input,
  IconButton,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";

const Footer = () => {
  return (
    <Box as="footer" bg="gray.100" py={10} borderTop="1px solid #e2e8f0">
      <Box width="90%" mx="auto">
        {/* Top Section with Search and Email */}
        <SimpleGrid
          columns={{ base: 1, md: 3 }}
          spacing={30}
          pb={8}
          borderBottom="1px solid #e2e8f0"
        >
          <Box textAlign="left">
            <Text fontWeight="bold" mb={2}>
              Customer Service
            </Text>
            <Link href="#" color="gray.500">
              Get Help
            </Link>
          </Box>

          <Box textAlign="left">
            <Text fontWeight="bold" mb={2}>
              Find a Warehouse
            </Text>
            <Box display="flex" alignItems="center">
              <Input placeholder="City, State or Zip" size="xl" maxW="300px" />
              <IconButton
                aria-label="Search warehouse"
                icon={<SearchIcon />}
                size="sm"
                ml={2}
              />
            </Box>
          </Box>

          <Box textAlign="left">
            <Text fontWeight="bold" mb={2}>
              Get Email Offers
            </Text>
            <Box display="flex" alignItems="center">
              <Input placeholder="Enter your email" size="xl" maxW="300px" />
              <IconButton
                aria-label="Subscribe email"
                icon={<SearchIcon />}
                size="sm"
                ml={2}
              />
            </Box>
          </Box>
        </SimpleGrid>

        {/* Footer Links Section */}
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={10} pt={8}>
          {/* About Us Column */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              About Us
            </Text>
            <Link href="#" color="gray.500">
              Get to Know Costco
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Charitable Contributions
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Company Information
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Sustainability Commitment
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Investor Relations
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Careers
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Kirkland Signature
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Logo and Media Requests
            </Link>
            <br />
            <Link href="#" color="blue.500">
              The Costco Connection
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Quick & Easy Recipe Videos
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Costco Blog
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Employee Site
            </Link>
          </Box>

          {/* Membership Column */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Membership
            </Text>
            <Link href="#" color="blue.500">
              Membership Information
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Join Now
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Member Privileges
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Executive Membership Terms
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Sign In or Register
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Credit Card
            </Link>
            <br />
            <br />

            <Text fontWeight="bold" mb={2}>
              Vendors & Suppliers
            </Text>

            <Link href="#" color="blue.500">
              Vendor Inquiries
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Supply Chain Disclosure
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Ethics Hotline for Suppliers
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Supplier Inclusion
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Explore Our Brands
            </Link>
          </Box>

          {/* Customer Service Column */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Customer Service
            </Text>
            <Link href="#" color="blue.500">
              Costco Customer Service
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Costco Shop Card Balance
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Order By Item Number
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Concierge Tech Support
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Volume Sales
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Order Status
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Shipping
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Preventing Fraud
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Rebates
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Recalls & Product Notice
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Return And Exchange
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Returns Policy
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Accessibility
            </Link>
            <br />
          </Box>

          {/* Locations & Services Column */}
          <Box>
            <Text fontWeight="bold" mb={2}>
              Locations & Services
            </Text>
            <Link href="#" color="blue.500">
              Find a Warehouse
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Locations Coming Soon
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Hour & Holiday Closure
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Hearing Aid Center
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Gasoline
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Optical
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Special Events
            </Link>
            <br />
            <Link href="#" color="blue.500">
              CostcoGrocery
            </Link>
            <br />
            <Link href="#" color="blue.500">
              Grocery by Instacart
            </Link>
            <br />
          </Box>
        </SimpleGrid>

        {/* Bottom Section */}
        <Box textAlign="center" mt={8} borderTop="1px solid #e2e8f0" pt={4}>
          <Text fontSize="sm" color="gray.600">
            © 1998—2024 Costco Wholesale Corporation. All rights reserved.
          </Text>
          <Text fontSize="xs" color="gray.600">
            Last Updated: 10/04/2024, 11:04:49 PM, v79
          </Text>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
