import { Button, Card, CardContent, Typography, Box } from "@mui/material";
import { Google } from "@mui/icons-material";
import { auth, provider, signInWithPopup } from "./firebaseConfig";
import logo from "./assets/logo.png"; // Importa el logo desde assets
import { useNavigate } from "react-router-dom";
import background from "./assets/background.jpg";


function Login() {
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithPopup(auth, provider);
      navigate("/"); // Redirige al Index.jsx
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Box
    sx={{
      height: "100vh",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100vw",
      backgroundImage: `url(${background})`, // Usa la imagen de fondo
      backgroundSize: "cover", // Ajusta la imagen al tamaño del contenedor
      backgroundPosition: "center", // Centra la imagen
      backgroundRepeat: "no-repeat", // Evita que la imagen se repita
    }}
  >
    <Card
      sx={{
        width: 400,
        padding: 4,
        boxShadow: 3,
        textAlign: "center",
        borderRadius: 3,
        backdropFilter: "blur(10px)", // Efecto de desenfoque para que se vea elegante
        backgroundColor: "rgba(255, 255, 255, 0.7)", // Fondo semitransparente
      }}
    >
       
<img
  src={logo} 
  alt="Logo"
  style={{ width: 200, height: 100, objectFit: "contain", marginBottom: 0}}
/>

        <CardContent>
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Bienvenido a TruckHub
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Inicia sesión con tu cuenta de Google Empresarial
          </Typography>
          <Button
            variant="contained"
            startIcon={<Google />}
            onClick={handleLogin}
            sx={{
              backgroundColor: "#DB4437",
              color: "white",
              "&:hover": { backgroundColor: "#b3362a" },
              borderRadius: 2,
              padding: "10px 20px",
            }}
          >
            Iniciar con Google
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
}

export default Login;
