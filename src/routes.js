import Home from "components/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home/index";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<HomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
