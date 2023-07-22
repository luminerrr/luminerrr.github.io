import { BrowserRouter, Route, Routes } from "react-router-dom";
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
