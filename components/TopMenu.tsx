// components/TopMenu.tsx
import { Box, Link, Flex } from "@chakra-ui/react";

export default function TopMenu() {
  return (
    <Box bg="teal.500" p={4} color="white">
      <Flex justifyContent="space-between" alignItems="center">
        <Link p={2} href="/">Accueil</Link>
        <Link p={2} href="/about">À propos</Link>
        <Link p={2} href="/gallery">Galerie</Link>
        <Link p={2} href="/contact">Contact</Link>
      </Flex>
    </Box>
  );
}
