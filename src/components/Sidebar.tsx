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
import { Home, AccountCircle, Settings, Info } from "@mui/icons-material";

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
            marginTop: "1rem",   // Top margin for the paper
            marginBottom: "1rem", // Bottom margin for the paper
            marginLeft: "1rem",   // Left margin for the paper
            marginRight: "1rem",  // Right margin for the paper (optional)
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar>
          <Typography variant="h6" noWrap component="div">
            My Sidebar
          </Typography>
        </Toolbar>
        <List>
          <ListItem button key="Home">
            <ListItemIcon>
              <Home />
            </ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>

          <ListItem button key="Profile">
            <ListItemIcon>
              <AccountCircle />
            </ListItemIcon>
            <ListItemText primary="Profile" />
          </ListItem>

          <ListItem button key="Settings">
            <ListItemIcon>
              <Settings />
            </ListItemIcon>
            <ListItemText primary="Settings" />
          </ListItem>

          <ListItem button key="About">
            <ListItemIcon>
              <Info />
            </ListItemIcon>
            <ListItemText primary="About" />
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
