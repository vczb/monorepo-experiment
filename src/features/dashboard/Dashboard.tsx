import { Button } from "@mui/material";
// import { useEffect } from "react";
// import { useSelector, RootStateOrAny } from "react-redux";

import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();

  // const user = useSelector((state: RootStateOrAny) => state.user.data);

  // useEffect(() => {
  //   if (!user.id.length) {
  //     navigate("/auth");
  //   }
  // }, [user, navigate]);

  // if (!user.id.length) {
  //   return null;
  // }

  return (
    <div>
      <Button variant="contained" onClick={() => navigate("/auth")}>
        Hello
      </Button>
    </div>
  );
}
