import React, { FC } from "react";
import { Box } from "@mui/material";

import useIsMobile from "../../hooks/useIsMobile";

interface ILayout {
  sideBar: React.ReactNode;
  mainContent: React.ReactNode;
}

const Layout: FC<ILayout> = ({ sideBar, mainContent }) => {
  const isMobile = useIsMobile();

  return (
    <Box display="flex" flexDirection="row" height="100%" flex={1}>
      {!isMobile && (
        <Box
          sx={(theme) => ({
            flex: 1,
            backgroundColor: theme.palette.common.white,
            border: `1px solid ${theme.palette.grey[400]} `,
          })}
        >
          {sideBar}
        </Box>
      )}
      <Box
        sx={(theme) => ({
          display: "flex",
          flex: 10,
          backgroundColor: theme.palette.grey[100],
        })}
      >
        {mainContent}
      </Box>
    </Box>
  );
};

export default Layout;
