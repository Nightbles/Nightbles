import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Index1 from "./pages/Index1";
import ProfiloUtente from "./pages/ProfiloUtente";
import LoginUtente from "./pages/LoginUtente";
import RegistrazioneUtente from "./pages/RegistrazioneUtente";
import RegistrazioneLocale from "./pages/RegistrazioneLocale";
import RegistrazioneLocale1 from "./pages/RegistrazioneLocale1";
import Prenotazione from "./pages/Prenotazione";
import Gestore from "./pages/Gestore";
import Locale from "./pages/Locale";
import PrenotazLocale from "./pages/PrenotazLocale";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/profilo-utente":
        title = "";
        metaDescription = "";
        break;
      case "/login-utente":
        title = "";
        metaDescription = "";
        break;
      case "/registrazione-utente":
        title = "";
        metaDescription = "";
        break;
      case "/registrazione-locale":
        title = "";
        metaDescription = "";
        break;
      case "/registrazione-locale-2":
        title = "";
        metaDescription = "";
        break;
      case "/prenotazione":
        title = "";
        metaDescription = "";
        break;
      case "/gestore":
        title = "";
        metaDescription = "";
        break;
      case "/locale":
        title = "";
        metaDescription = "";
        break;
      case "/prenotaz-locale":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Index1 />} />
      <Route path="/profilo-utente" element={<ProfiloUtente />} />
      <Route path="/login-utente" element={<LoginUtente />} />
      <Route path="/registrazione-utente" element={<RegistrazioneUtente />} />
      <Route path="/registrazione-locale" element={<RegistrazioneLocale />} />
      <Route
        path="/registrazione-locale-2"
        element={<RegistrazioneLocale1 />}
      />
      <Route path="/prenotazione" element={<Prenotazione />} />
      <Route path="/gestore" element={<Gestore />} />
      <Route path="/locale" element={<Locale />} />
      <Route path="/prenotaz-locale" element={<PrenotazLocale />} />
    </Routes>
  );
}
export default App;
