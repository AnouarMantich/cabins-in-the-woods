import { useQuery } from "@tanstack/react-query";
import { getAllCabins } from "../../services/apiCabins";

export function useCabins() {
  const {
    isLoading,
    data: cabins,
    error,
  } = useQuery({
    queryKey: ["cabins"],
    queryFn: getAllCabins,
  });

  return { isLoading, cabins, error };
}
