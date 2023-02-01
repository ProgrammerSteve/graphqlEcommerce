import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../gqlQueries/queries";

export const useGetData = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);
  return { loading, error, data };
};
