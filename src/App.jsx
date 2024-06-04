import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { PostProvider } from "./context/PostProvider";
import Structure from "./section/Structure";
import NeonProduc from "./components/NeonProduct";
import ChalniumProduct from "./components/ChelniumProduct";
import LedProduct from "./components/LedProduct";
import PageNotFound from "./pages/PageNotFound";

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Structure />}>
            <Route index element={<Navigate replace to="NeonProduct" />} />
            <Route path="NeonProduct" element={<NeonProduc />} />
            <Route path="ChalniumProduct" element={<ChalniumProduct />} />
            <Route path="LEDProduct" element={<LedProduct />} />
          </Route>
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
