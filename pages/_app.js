import { StyledEngineProvider } from "@mui/system";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <StyledEngineProvider injectFirst>
      <Component {...pageProps} />
    </StyledEngineProvider>
  );
}

export default MyApp;
