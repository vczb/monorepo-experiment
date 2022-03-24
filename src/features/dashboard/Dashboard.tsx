import { Button } from "@mui/material";
import { useAuth } from "features/auth/authSlice";
// import { useEffect } from "react";
// import { useSelector, RootStateOrAny } from "react-redux";

export default function Dashboard() {
  const { onLogout } = useAuth();

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
      <Button variant="contained" onClick={() => onLogout()}>
        Hello
      </Button>
    </div>
  );
}
