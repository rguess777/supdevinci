import "../styles/globals.css";
import { AddEntryProvider } from "../components/context/Add-entryContext";
function MyApp({ Component, pageProps }) {
  return (
    <AddEntryProvider>
      <Component {...pageProps} />;
    </AddEntryProvider>
  );
}

export default MyApp;