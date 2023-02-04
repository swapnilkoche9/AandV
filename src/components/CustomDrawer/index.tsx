import React, { FC } from "react";
import { Drawer, Typography, Box, styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import useIsMobile from "../../hooks/useIsMobile";

interface ICustomDrawer {
  children: React.ReactNode;
  open: boolean;
  title: string;
  onDrawerClose: () => void;
  footer?: React.ReactNode;
  anchor?: "right" | "left" | "top" | "bottom";
}

const HeaderWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: theme.palette.grey[800],
  height: "70px",
  paddingLeft: theme.spacing(3),
  paddingRight: theme.spacing(3),
}));

const FooterWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  backgroundColor: theme.palette.grey[200],
  height: "60px",
  padding: theme.spacing(1),
}));

const CustomDrawer: FC<ICustomDrawer> = ({
  children,
  open,
  title,
  footer,
  anchor = "right",
  onDrawerClose,
}) => {
  const isMobile = useIsMobile();

  return (
    <Drawer
      anchor={anchor}
      open={open}
      onClose={onDrawerClose}
      PaperProps={{
        sx: {
          width: isMobile ? "100%" : "350px",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
        }}
      >
        <HeaderWrapper>
          <Typography color="white" variant="h6">
            {title}
          </Typography>
          <CloseIcon sx={{ color: "white" }} onClick={onDrawerClose} />
        </HeaderWrapper>
        <Box sx={{ padding: 3 }}>{children}</Box>
      </Box>
      {footer && <FooterWrapper>{footer}</FooterWrapper>}
    </Drawer>
  );
};

export default CustomDrawer;
