import { Box, Flex, Heading, Link, Image, SimpleGrid, Spacer, Text, VStack } from "@chakra-ui/react";

export default function Home() {
  return (
    <VStack spacing={8} align="stretch" p={5} bg="gray.100" minHeight="100vh">

      {/* Menu du haut */}
      <Flex bg="teal.500" p={4} color="white" borderRadius="md" boxShadow="sm">
        <Link p={2} href="/">Accueil</Link>
        <Spacer />
        <Link p={2} href="/about">À propos</Link>
        <Link p={2} href="/gallery">Galerie</Link>
        <Link p={2} href="/contact">Contact</Link>
      </Flex>

      {/* Titre */}
      <Heading as="h1" size="xl" textAlign="center">Bienvenue sur mon site</Heading>
      <Text textAlign="center" color="gray.600">Découvrez mes œuvres et apprenez-en plus sur moi.</Text>

      {/* Galerie de photos */}
      <SimpleGrid columns={[1, 2, 3]} spacing={10} p={5} width="full">
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="/path/to/photo1.jpg" alt="Description de la photo 1" borderRadius="md"/>
          <Text mt={2}>Description de la photo 1</Text>
        </Box>
        <Box boxShadow="md" p="6" rounded="md" bg="white">
          <Image src="/path/to/photo2.jpg" alt="Description de la photo 2" borderRadius="md"/>
          <Text mt={2}>Description de la photo 2</Text>
        </Box>
        {/* Ajoutez d'autres photos selon vos besoins */}
      </SimpleGrid>

      {/* Pied de page */}
      <Flex bg="gray.700" p={4} color="white" borderRadius="md" boxShadow="sm" mt="auto">
        <Link p={2} href="/mentions-legales">Mentions légales</Link>
        <Spacer />
        <Link p={2} href="/privacy-policy">Politique de confidentialité</Link>
      </Flex>
    </VStack>
  );
}
