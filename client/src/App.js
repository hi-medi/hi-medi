import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./layouts/Layout";

function App() {
  return (
    <BrowserRouter>
      <Layout />
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/detail" elelment={<DetailPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
