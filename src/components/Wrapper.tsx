import { HTMLAttributes, ReactNode } from "react";
import { Box } from "@mui/system";

type HTMLDIVElementTypes = HTMLAttributes<HTMLDivElement>;

type WrapperTypes = {
  children: ReactNode | string | null;
  fullVH?: boolean;
} & HTMLDIVElementTypes;

const Wrapper = ({ children, fullVH = false, ...props }: WrapperTypes) => {
  return (
    <Box
      sx={{
        width: "100%",
        height: fullVH ? "100vh" : "100%",
        overflowX: "hidden",
        backgroundColor: "primary.main",
      }}
      {...props}
    >
      {children}
    </Box>
  );
};

export default Wrapper;
