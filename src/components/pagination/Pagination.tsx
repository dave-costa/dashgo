import { Stack, Box, SimpleGrid } from "@chakra-ui/react";
import { useQueryHook } from "../../services/hooks/useUsers";
import { PaginationItem } from "./Pagination.item";

export function Pagination() {
  const { totalPages } = useQueryHook();
  const perPage = Array.from({ length: totalPages }, (v, k) => k + 1);

  return (
    <Stack
      direction="row"
      mt="8"
      justifyContent="center"
      alignItems="center"
      spacing="6"
    >
      <Stack direction="row" spacing="2">
        <SimpleGrid columns={16} spacingX="20px" spacingY="20px">
          {perPage.map((page) => (
            <Box key={page}>
              <PaginationItem current={page} />
            </Box>
          ))}
        </SimpleGrid>
      </Stack>
    </Stack>
  );
}
