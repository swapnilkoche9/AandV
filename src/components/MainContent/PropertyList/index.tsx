import { FC, useCallback } from "react";
import { Box, styled } from "@mui/material";

import { Property } from "../../../dtos/property";
import { useDeletePropertyData } from "../../../hooks/usePropertyData";
import PropertyDetails from "./PropertyDetails";

const PropertyDetailsContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: theme.spacing(2),
}));

interface IPropertyList {
  properties: Property[];
}

const PropertyList: FC<IPropertyList> = ({ properties }) => {
  const { mutate: deletePropertyMutation } = useDeletePropertyData<Property>();

  const deleteProperty = useCallback(
    (id: string) => {
      deletePropertyMutation(id);
    },
    [deletePropertyMutation],
  );

  return (
    <PropertyDetailsContainer py={4} px={2}>
      {properties?.map((property: Property) => (
        <PropertyDetails
          property={property}
          key={property.id}
          onPropertyDelete={deleteProperty}
        />
      ))}
    </PropertyDetailsContainer>
  );
};

export default PropertyList;
