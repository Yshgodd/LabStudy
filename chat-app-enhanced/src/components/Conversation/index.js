import React from "react";
import { faker } from "@faker-js/faker";
import { Box, Stack } from "@mui/material";

import Header from "./Header";
import Footer from "./../Chat/Footer";
import Message from './Message';

const Conversation = () => {
  return (
    <Stack height={"100%"} maxHeight={"100vh"} width={"auto"}>
      {/*chat header*/}
      <Header />
      {/*msg*/}
      <Box width={"100%"} sx={{ flexGrow: 1, height:"100%",overflowY:"scroll" }}>
        <Message/>
      </Box>
      {/*chat footer*/}
      <Footer />
    </Stack>
  );
};

export default Conversation;
