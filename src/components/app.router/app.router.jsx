import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";

export function AppRouter() {
  return (
    <Routes>
      <Route exact path="/" element={<HomePage></HomePage>}></Route>
    </Routes>
  );
}
