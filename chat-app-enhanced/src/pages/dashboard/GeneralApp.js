import React, { Suspense, lazy } from "react";
import Chats from "./Chats";
import Conversation from "../../components/Conversation";
import { styled, useTheme } from "@mui/material/styles";

import { Stack, Box } from "@mui/material";
import Contact from "../../components/Contact";
import { useSelector } from "react-redux";
import SharedMessages from "../../components/SharedMessages";
import StarredMessages from "../../components/StarredMessages";
//Dynamic import
//const Cat = lazy(()=> import("../../components/Cat"));

const GeneralApp = () => {
  const theme = useTheme();
  const { sidebar } = useSelector((store) => store.app);

  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Chats />
        <Box
          sx={{
            height: "100%",
            width: sidebar.open ? `calc(100vw - 740px)` : "calc(100vw - 420px)",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F0F4FA"
                : theme.palette.background.paper,
          }}
        >
          <Conversation />
        </Box>
        {/* Contact */}
        {sidebar.open &&
          (() => {
            switch (sidebar.type) {
              case "CONTACT":
                return <Contact />;

              case "STARRED":
                return <StarredMessages/>;
                

              case "SHARED":
                return <SharedMessages />;

              default:
                break;
            }
          })()}
      </Stack>
    </>
  );
};

export default GeneralApp;
