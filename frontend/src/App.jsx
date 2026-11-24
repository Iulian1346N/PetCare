import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import AnimalePage from "./pages/AnimalePage.jsx";
import AnimalDetaliuPage from "./pages/AnimalDetaliuPage.jsx";
import DesprePage from "./pages/DesprePage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<AnimalePage />} />
        <Route path="/animale" element={<AnimalePage />} />
        <Route path="/animale/:id" element={<AnimalDetaliuPage />} />
        <Route path="/despre" element={<DesprePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}