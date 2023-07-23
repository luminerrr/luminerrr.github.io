import { BrowserRouter, Route, Routes } from "react-router-dom";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/600.css";
import "@fontsource/nunito/700.css";
import "@fontsource/playfair-display/500.css";
import "@fontsource/playfair-display/600.css";
import "@fontsource/playfair-display/700.css";
import Providers from "./components/provider";
import Homepage from "./pages/homepage";

function App() {
  return (
    <Providers>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />}/>
        </Routes>
      </BrowserRouter>
    </Providers>
  );
}

export default App;
