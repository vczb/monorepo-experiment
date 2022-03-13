import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "features/dashboard/Dashboard";
import Auth from "features/auth/Auth";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
