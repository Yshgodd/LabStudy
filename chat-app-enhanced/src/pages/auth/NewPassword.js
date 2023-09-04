import React from "react";
import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import { CaretLeft } from "@phosphor-icons/react";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";


const NewPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          비밀번호 변경
        </Typography>

        <Typography variant="subtitle2" sx={{ color: "text.secondary", mb: 5 }}>
          새로운 비밀번호 입력해 주세요
        </Typography>
      </Stack>

      {/* new password form */}
      <NewPasswordForm/>

      <Link
        component={RouterLink}
        to="/auth/login"
        color="inherit"
        variant="subtitle2"
        sx={{
          mt: 3,
          mx: "auto",
          alignItems: "center",
          display: "inline-flex",
        }}
      >
        <CaretLeft size={20} />
        로그인 화면으로 돌아가기
      </Link>
    </>
  );
};

export default NewPassword;
