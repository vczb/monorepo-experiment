import { BrowserRouter, Routes, Route } from "react-router-dom";

import Auth from "features/company/Auth";
import { useCompany } from "features/company/companySlice";
import { Protected } from "routes/protected";
import Onboarding from "features/customer/Onboarding";

export default function AppRoutes() {
  const { company } = useCompany();
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Protected isAllowed={!!company.jwt?.length} />}>
          <Route path="/" element={<Onboarding />} />
        </Route>

        <Route path="/auth" element={<Auth />} />
      </Routes>
    </BrowserRouter>
  );
}
