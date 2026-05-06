import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

// páginas existentes
import Registration from "./pages/Registration";
import RacePage from "./pages/RacePage";
import LapForm from "./pages/LapForm";
import EmissionResults from "./pages/EmissionResults";
import Ranking from "./pages/Ranking";
import ComparePage from "./pages/ComparePage";

// NOVA landing
import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔥 Landing (fora do layout) */}
        <Route path="/" element={<LandingPage />} />

        {/* 🔒 Área interna (com layout) */}
        <Route
          path="/app/*"
          element={
            <Layout>
              <Routes>
                <Route path="register" element={<Registration />} />
                <Route path="race" element={<RacePage />} />
                <Route path="lap" element={<LapForm />} />
                <Route path="results" element={<EmissionResults />} />
                <Route path="ranking" element={<Ranking />} />
                <Route path="compare" element={<ComparePage />} />
              </Routes>
            </Layout>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;