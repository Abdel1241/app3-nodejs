// components/PhotoGallery.tsx
import { Box, Image, SimpleGrid } from "@chakra-ui/react";

export default function PhotoGallery() {
  return (
    <SimpleGrid columns={3} spacing={10} p={5}>
      <Box>
        <Image src="/path/to/photo1.jpg" alt="Description de la photo 1" />
      </Box>
      <Box>
        <Image src="/path/to/photo2.jpg" alt="Description de la photo 2" />
      </Box>
      {/* Ajoutez d'autres photos selon vos besoins */}
    </SimpleGrid>
  );
}
