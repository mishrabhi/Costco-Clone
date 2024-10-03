import { ChakraProvider } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/navbar";

function App() {
  return (
    <ChakraProvider>
      <NavBar />
    </ChakraProvider>
  );
}

export default App;
