import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
} from "@mui/material";
import { Home, Settings, Info } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ApartmentIcon from "@mui/icons-material/Apartment";
import Image from "next/image";
const Sidebar = () => {
  const drawerWidth = 240;

  return (
    <Box>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            marginTop: "3rem",
            marginBottom: "3rem",
            marginLeft: "3rem",
            marginRight: "0",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Image
            src="/assets/Logo 1.png"
            alt=""
            height={60}
            width={100}
            className="m-auto pt-6 pb-12"
          />
        </Toolbar>
        <div className="flex justify-center">
          <List>
            <ListItem button key="Home">
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button key="Search">
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <SearchIcon />
              </ListItemIcon>
              <ListItemText primary="Search" />
            </ListItem>

            <ListItem button key="My Shelf">
              <ListItemIcon sx={{ minWidth: "30px" }}>
                <ApartmentIcon />
              </ListItemIcon>
              <ListItemText primary="My Shelf" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
