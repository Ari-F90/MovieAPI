import { Routes, Route } from "react-router-dom";
import { HomePage } from "../pages/homePage/homePage";
import { Details } from "../pages/detailsPage/detailsPage";
export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<HomePage></HomePage>}></Route>
      <Route path={"/details/:id"} element={<Details></Details>}></Route>
    </Routes>
  );
}
