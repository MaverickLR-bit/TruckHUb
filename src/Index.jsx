import { Typography } from "@mui/material";
import Sidebar from "./components/Sidebar";
import logo from "./assets/logo.png";
import background from "./assets/background2.jpg"; // Imagen de fondo

function Index() {
  return (
    <div
      style={{
        display: "flex",
        minHeight: "100vh",
        width: "100vw", // Asegurar que ocupa todo el ancho
        justifyContent: "center",
        alignItems: "center",
        padding: "20px",
        backgroundImage: `url(${background})`, // Imagen de fondo
        backgroundSize: "cover", // Que cubra toda la pantalla
        backgroundPosition: "center", // Centrar la imagen
        backgroundRepeat: "no-repeat", // No repetir la imagen
      }}
    >
      {/* Sidebar */}
      <Sidebar />

      {/* Contenido principal */}
      <div
        style={{
          textAlign: "center",
          backgroundColor: "rgba(255, 255, 255, 0.9)", // Fondo semi-transparente
          padding: "40px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "800px",
          width: "100%",
        }}
      >
        {/* Título en el centro superior */}
        <Typography variant="h2" sx={{ fontWeight: "bold", marginBottom: 4 }}>
          TruckHub
        </Typography>

        {/* Logo en la esquina superior derecha */}
        <img
          src={logo}
          alt="Logo"
          style={{
            position: "absolute",
            top: 10,
            right: 20,
            width: 200,
            height: 80,
          }}
        />

        {/* Sección de Vacantes */}
        <div style={{ marginBottom: 40 }}>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Vacantes de la Empresa
          </Typography>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body1">
              Aquí se mostrarán las vacantes disponibles.
            </Typography>
          </div>
        </div>

        {/* Sección de Anuncios */}
        <div>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Anuncios de la Empresa
          </Typography>
          <div
            style={{
              backgroundColor: "#f0f0f0",
              padding: 20,
              borderRadius: 10,
              boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
            }}
          >
            <Typography variant="body1">
              Aquí aparecerán los anuncios importantes.
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
