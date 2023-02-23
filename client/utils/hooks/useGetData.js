import { useQuery } from "@apollo/client";
import { GET_ITEMS } from "../gqlQueries/queries";
import React,{useEffect} from 'react'

export const useGetData = () => {
  const { loading, error, data } = useQuery(GET_ITEMS);
  useEffect(()=>{
    console.log("data:",data)
  },[data])
  return { loading, error, data };
};
