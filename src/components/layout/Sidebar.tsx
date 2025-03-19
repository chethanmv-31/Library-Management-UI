import React from "react";
import {
  Box,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Home } from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import ApartmentIcon from "@mui/icons-material/Apartment";
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import Image from "next/image";
import Link from "next/link";
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
            marginLeft: "2rem",
            marginRight: "0",
            borderRadius: "10px 0 0 10px",
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
            <Link href={"/"}>
              <ListItemButton component="button" key="Home">
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <Home />
                </ListItemIcon>
                <ListItemText primary="Home" />
              </ListItemButton>
            </Link>
            <Link href={"/search"}>
              <ListItemButton component="button" key="Search">
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <SearchIcon />
                </ListItemIcon>
                <ListItemText primary="Search" />
              </ListItemButton>
            </Link>

            <Link href={"/myShelf"}>
              <ListItemButton component="button" key="My Shelf">
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <ApartmentIcon />
                </ListItemIcon>
                <ListItemText primary="My Shelf" />
              </ListItemButton>
            </Link>
            
            <Link href={"/contribute"}>
              <ListItemButton component="button" key="My Shelf">
                <ListItemIcon sx={{ minWidth: "30px" }}>
                  <VolunteerActivismIcon />
                </ListItemIcon>
                <ListItemText primary="Contribute" />
              </ListItemButton>
            </Link>
          </List>
        </div>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
