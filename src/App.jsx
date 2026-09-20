import "./App.css";

import { Routes, Route } from "react-router-dom";

import Beranda from "./pages/beranda";
import HomePage from "./pages/v2/HomePage";
import ProjectDetailPage from "./pages/v2/ProjectDetailPage";

import LayoutV1 from "./layouts/layoutV1";
import LayoutV2 from "./layouts/layoutV2";

function App() {
  return (
    <Routes>
      {/* Portfolio V1 */}
      <Route element={<LayoutV1 />}>
        <Route path="/" element={<Beranda />} />
      </Route>

      {/* Portfolio V2 */}
      <Route element={<LayoutV2 />}>
        <Route path="/v2" element={<HomePage />} />
        <Route path="/v2/projects/:id" element={<ProjectDetailPage />} />
      </Route>
    </Routes>
  );
}

export default App;