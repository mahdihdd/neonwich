import { BrowserRouter, Route, Routes } from "react-router-dom";

import Structure from "./section/Structure";
import NeonProduc from "./components/NeonProduct";
import ChalniumProduct from "./components/ChelniumProduct";
import LedProduct from "./components/LedProduct";
import PageNotFound from "./pages/PageNotFound";
import { PostProvider } from "./context/PostProvider";

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Structure />}>
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
