//import logo from './logo.svg';
import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Home from "./page/home";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
function App() {

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        sx={{
          bgcolor: "background.default",
          color: "text.primary",
          margin: '0',
          width: '100%'
        }}
      >
        <Home></Home>
      </Box>
    </ThemeProvider>
  );
}

/* <header className="App-header">
        
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> 
      </header> */
export default App;
