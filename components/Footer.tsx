// components/Footer.tsx
import { Box, Link, Flex } from "@chakra-ui/react";

export default function Footer() {
  return (
    <Box bg="gray.700" p={4} color="white" mt={10}>
      <Flex justifyContent="center">
        <Link p={2} href="/mentions-legales">Mentions légales</Link>
        <Link p={2} href="/privacy-policy">Politique de confidentialité</Link>
      </Flex>
    </Box>
  );
}
