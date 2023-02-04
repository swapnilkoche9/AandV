import { useCallback, useMemo, useState } from "react";
import { Box, Button } from "@mui/material";

import {
  useAddPropertyData,
  usePropertyData,
} from "../../hooks/usePropertyData";
import FilterPanel from "./FilterPanel";
import { filteredPropertyData } from "./utils/utils";
import { Property } from "../../dtos/property";
import PropertyList from "./PropertyList";
import CustomDrawer from "../CustomDrawer";
import PropertyForm from "./PropertyForm";
import useIsMobile from "../../hooks/useIsMobile";

const MainContent = () => {
  const [showPropertyForm, setShowPropertyForm] = useState(false);
  const [sortKey, setSortKey] = useState("");
  const [property, setProperty] = useState({});

  const isMobile = useIsMobile();
  const { data } = usePropertyData<Property, Error>();
  const { mutate: addPropertyMutation } = useAddPropertyData<Property>();

  const propertData = useMemo(
    () => filteredPropertyData(data, sortKey),
    [data, sortKey],
  );

  const openAddPropertyForm = useCallback(() => {
    setShowPropertyForm(true);
  }, []);

  const closeAddPropertyForm = useCallback(() => {
    setShowPropertyForm(false);
  }, []);

  const handleFilterSort = useCallback((val: string) => setSortKey(val), []);

  const setPropertyData = useCallback(
    (name: string, val: string) => {
      const newProperty = { ...property, [name]: val };
      setProperty(newProperty);
    },
    [property],
  );

  const createProperty = () => {
    addPropertyMutation(property as Property);
    setShowPropertyForm(false);
  };

  return (
    <>
      <Box display="flex" flexDirection="column">
        <FilterPanel
          onAddProperty={openAddPropertyForm}
          onSort={handleFilterSort}
          sortValue={sortKey}
        />
        {propertData && <PropertyList properties={propertData} />}
      </Box>

      <CustomDrawer
        open={showPropertyForm}
        title="New Property"
        onDrawerClose={closeAddPropertyForm}
        anchor={isMobile ? "bottom" : "right"}
        footer={
          <Button
            variant="contained"
            color="error"
            sx={{ height: "40px" }}
            onClick={createProperty}
          >
            Create Property
          </Button>
        }
      >
        <PropertyForm onDataChange={setPropertyData} />
      </CustomDrawer>
    </>
  );
};

export default MainContent;
