import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "features/dashboard/Dashboard";
import Auth from "features/auth/Auth";
import { useAuth } from "features/auth/authSlice";
import { Protected } from "routes/protected";

export default function AppRoutes() {
  const { auth } = useAuth();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected isAllowed={!!auth.jwt?.length} />}>
          <Route path="/" element={<Dashboard />} />
        </Route>

        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
