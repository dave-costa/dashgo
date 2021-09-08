import { Button } from "@chakra-ui/react";
import { useQueryHook } from "../../services/hooks/useUsers";

interface PaginationItemProps {
  current: number;
}

export function PaginationItem({ current, ...rest }: PaginationItemProps) {
  const { addPage, page } = useQueryHook();
  function showPage() {
    addPage(current);
  }

  return (
    <Button
      size="sm"
      cursor="pointer"
      fontSize="xs"
      width="4"
      onClick={showPage}
      colorScheme={current == page ? "pink" : "gray.900"}
      {...rest}
      _disabled={{
        bg: "gray.400",
        cursor: "default",
      }}
    >
      {current}
    </Button>
  );
}
