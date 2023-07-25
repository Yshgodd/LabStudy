import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import { styled, useTheme } from "@mui/material/styles";

import { Stack, Box } from "@mui/material";
//Dynamic import
//const Cat = lazy(()=> import("../../components/Cat"));

const GeneralApp = () => {
  const theme = useTheme();
  return (
    <Stack direction={"row"} sx={{ width: "100%" }}>
      <Chats />
      {/* <Suspense fallback="Loading...">
        </Suspense> */}
      <Box
        sx={{
          height: "100%",
          width: "calc(100vw - 420px)",
          backgroundColor:
            theme.palette.mode === "light"
              ? "#F0F4FA"
              : theme.palette.background.paper,
        }}
      >
        <Conversation />
      </Box>
    </Stack>
  );
};

export default GeneralApp;
