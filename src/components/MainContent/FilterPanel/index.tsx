import { FC, useState } from "react";
import {
  Box,
  Button,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

import useIsMobile from "../../../hooks/useIsMobile";

interface IProps {
  sortValue: string;
  onAddProperty: () => void;
  onSort: (sortKey: string) => void;
}

const SearchAndFilterWrapper = styled(Box, {
  shouldForwardProp: (prop) => prop !== "isMobile",
})<{ isMobile?: boolean }>(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: theme.palette.grey[100],
  padding: theme.spacing(3),
  marginTop: theme.spacing(5),
  borderBottom: `1px solid ${theme.palette.grey[300]}`,
  borderTop: `1px solid ${theme.palette.grey[300]}`,
}));

export enum SortCriterion {
  PRICE_ASCENDING = "price_asc",
  PRICE_DESCENDING = "price_desc",
  NAME_ASCENDING = "name_asc",
  Name_DESCENDING = "name_desc",
}
const FilterPanel: FC<IProps> = ({ sortValue, onAddProperty, onSort }) => {
  const isMobile = useIsMobile();

  const handleSort = (event: SelectChangeEvent) => {
    onSort(event.target.value);
  };
  return (
    <SearchAndFilterWrapper isMobile={isMobile}>
      <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
        <Select
          labelId="sort"
          id="sort"
          value={sortValue}
          onChange={handleSort}
          sx={(theme) => ({
            color: theme.palette.grey[700],
          })}
        >
          <MenuItem value={SortCriterion.PRICE_DESCENDING}>
            Price Descending
          </MenuItem>
          <MenuItem value={SortCriterion.PRICE_ASCENDING}>
            Price Ascending
          </MenuItem>
          <MenuItem value={SortCriterion.Name_DESCENDING}>
            Name Descending
          </MenuItem>
          <MenuItem value={SortCriterion.NAME_ASCENDING}>
            Name Ascending
          </MenuItem>
        </Select>
      </FormControl>
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        color="error"
        onClick={onAddProperty}
      >
        {isMobile ? "Add" : "Add Property"}
      </Button>
    </SearchAndFilterWrapper>
  );
};

export default FilterPanel;
