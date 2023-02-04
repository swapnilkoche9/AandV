import { FC } from "react";
import { Box, Divider, styled, Typography } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { Property } from "../../../../dtos/property";
import useIsMobile from "../../../../hooks/useIsMobile";

interface IPropertyDetails {
  property: Property;
  onPropertyDelete: (id: string) => void;
}

const PropertyDetailsWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme, isMobile }) => ({
  height: theme.spacing(20),
  width: isMobile ? "100%" : theme.spacing(50),
  border: `1px solid ${theme.palette.grey[300]} `,
  padding: theme.spacing(1),
}));

const DetailsRow = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  marginBottom: theme.spacing(1.5),
}));

const DescriptionLabel = styled(Typography)(({ theme }) => ({
  color: theme.palette.grey[500],
}));

const PropertyDetails: FC<IPropertyDetails> = ({
  property,
  onPropertyDelete,
}) => {
  const isMobile = useIsMobile();
  const { name, plotSize, price, rooms, id } = property;

  return (
    <PropertyDetailsWrapper isMobile={isMobile}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          marginBottom: 2,
        }}
      >
        <Typography
          variant="body1"
          sx={(theme) => ({ color: theme.palette.grey[800] })}
        >
          {name}
        </Typography>
        <CloseIcon
          onClick={() => onPropertyDelete(id)}
          sx={(theme) => ({ color: theme.palette.grey[600] })}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", flex: 1 }}>
        <Box flex={1}>
          <img
            src={require("../../../../assets/images/visual.png")}
            height="120px"
            loading="lazy"
          />
        </Box>
        <Box flex={1}>
          <DetailsRow>
            <DescriptionLabel variant="body1">Rooms</DescriptionLabel>
            <Typography variant="body1">{rooms}</Typography>
          </DetailsRow>
          <DetailsRow>
            <DescriptionLabel variant="body1">Plot size</DescriptionLabel>
            <Typography variant="body1">
              {plotSize} m<sup>2</sup>
            </Typography>
          </DetailsRow>
          <Divider sx={{ marginBottom: 2 }} />
          <DetailsRow>
            <DescriptionLabel variant="body1">Price</DescriptionLabel>
            <Typography variant="subtitle1">{price} EUR</Typography>
          </DetailsRow>
        </Box>
      </Box>
    </PropertyDetailsWrapper>
  );
};

export default PropertyDetails;
