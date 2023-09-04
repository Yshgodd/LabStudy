import { Box, IconButton, Stack, Typography } from "@mui/material";
import { CaretLeft } from "@phosphor-icons/react";
import React from "react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
  return (
    <>
      <Stack
        direction={"row"}
        sx={{
          width: "100%",
        }}
      >
        <Box
         overflow={"scroll"}// 이쁘게 수정
          sx={{
            height: "100vh",
            backgroundColor: (theme) =>
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
            width: 320,
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
          }}
        >
          <Stack p={4} spacing={5}>
            {/* header */}
            <Stack direction={"row"} alignItems={"center"} spacing={3}>
              <IconButton>
                <CaretLeft size={24} color="#484848" />
              </IconButton>
              <Typography variant="h5">Profile</Typography>
            </Stack>
          {/* Profile Form */}
          <ProfileForm/>
          </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
