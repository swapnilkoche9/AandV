import {
  useMutation,
  useQuery,
  useQueryClient,
  UseQueryResult,
} from "react-query";

import { deleteApi, getApi, postApi } from "../api";
import { Property } from "../dtos/property";

const fetchProperties = async <T>(): Promise<T[]> => {
  const res = await getApi("/properties");
  return res.data;
};

export const usePropertyData = <T, E>(): UseQueryResult<T[], E> => {
  return useQuery("properties", () => fetchProperties<T>());
};

export const useAddPropertyData = <T>() => {
  const queryClient = useQueryClient();
  return useMutation((newProperty: T) => postApi(`/properties/`, newProperty), {
    onSuccess: (data) => {
      queryClient.setQueryData<Property[] | undefined>(
        "properties",
        (oldData) => {
          return [...(oldData ?? []), data.data];
        },
      );
    },
  });
};

export const useDeletePropertyData = <T extends { id: string }>() => {
  const queryClient = useQueryClient();
  return useMutation(
    (id: string | undefined) => deleteApi(`/properties/${id}`),
    {
      onSuccess: (_data, variables) => {
        const properties = queryClient.getQueryData("properties");
        if (properties) {
          queryClient.setQueryData<T[] | undefined>("properties", (oldData) => {
            const allData =
              oldData && oldData?.filter((d: T) => d.id !== variables);
            return allData;
          });
        }
      },
    },
  );
};
