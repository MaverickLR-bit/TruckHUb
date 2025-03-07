import { useState, useEffect } from "react";
import { Drawer, List, ListItem, ListItemText, IconButton, Avatar, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import LogoutIcon from "@mui/icons-material/Logout";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import ReceiptIcon from "@mui/icons-material/Receipt";
import WorkIcon from "@mui/icons-material/Work";
import { auth, signOut } from "../firebaseConfig";
import { useNavigate } from "react-router-dom";

function Sidebar() {
  const [open, setOpen] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    auth.onAuthStateChanged((currentUser) => {
      setUser(currentUser);
    });
  }, []);

  const handleToggle = () => {
    setOpen(!open);
  };

  const handleLogout = async () => {
    await signOut(auth);
    navigate("/login");
  };

  return (
    <>
      {/* Botón para abrir la barra lateral */}
      <IconButton 
        onClick={handleToggle} 
        sx={{
          position: "fixed",
          top: 20,
          left: 20,
          backgroundColor: "black",
          color: "white",
          width: "60px",
          height: "60px",
          boxShadow: 2,
          "&:hover": { backgroundColor: "#1256a2" }
        }}
      >
        <MenuIcon fontSize="large" />
      </IconButton>

      {/* Barra lateral */}
      <Drawer
        anchor="left"
        open={open}
        onClose={handleToggle}
        sx={{
          "& .MuiDrawer-paper": {
            width: 250,
            height: "100vh",
            backgroundColor: "white",
            padding: "20px",
            boxShadow: "2px 0px 10px rgba(0, 0, 0, 0.2)",
          },
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
          }}
        >
          <div>
            <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Menú</h2>
            <List>
              <ListItem button>
                <WorkIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Vacantes" />
              </ListItem>
              <ListItem button>
                <BeachAccessIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Vacaciones" />
              </ListItem>
              <ListItem button>
                <ReceiptIcon sx={{ marginRight: 2 }} />
                <ListItemText primary="Recibos de Nómina" />
              </ListItem>
              <ListItem button onClick={handleLogout}>
                <LogoutIcon sx={{ marginRight: 2, color: "red" }} />
                <ListItemText primary="Cerrar Sesión" sx={{ color: "red" }} />
              </ListItem>
            </List>
          </div>

          {/* Sección de usuario */}
          {user && (
            <div style={{ textAlign: "center", paddingBottom: "20px" }}>
              <Avatar src={user.photoURL} alt={user.displayName} sx={{ width: 60, height: 60, margin: "auto" }} />
              <Typography variant="subtitle1" sx={{ marginTop: "10px" }}>
                {user.displayName}
              </Typography>
            </div>
          )}
        </div>
      </Drawer>
    </>
  );
}

export default Sidebar;
