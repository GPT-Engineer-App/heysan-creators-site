import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.md" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center">
      <VStack spacing={6}>
        <Heading as="h1" size="2xl" textAlign="center">Heysan Founders</Heading>
        <Text fontSize="lg" textAlign="center">Welcome to the personal website of the Heysan founders. We are passionate about building innovative solutions that make a difference.</Text>
        <Box boxSize="sm">
          <Image src="/path/to/your/image.jpg" alt="Heysan Founders" borderRadius="full" />
        </Box>
        <Flex justifyContent="center" width="100%" mt={4}>
          <Button as="a" href="https://www.linkedin.com" target="_blank" leftIcon={<FaLinkedin />} colorScheme="linkedin" m={2}>
            LinkedIn
          </Button>
          <Button as="a" href="https://www.twitter.com" target="_blank" leftIcon={<FaTwitter />} colorScheme="twitter" m={2}>
            Twitter
          </Button>
          <Button as="a" href="https://www.github.com" target="_blank" leftIcon={<FaGithub />} colorScheme="gray" m={2}>
            GitHub
          </Button>
        </Flex>
      </VStack>
    </Container>
  );
};

export default Index;