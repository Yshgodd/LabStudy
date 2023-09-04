import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mt: 5, mb: 5, position: "relative" }}>
        <Typography variant="h4">Get Started With SU</Typography>
        <Stack direction={"row"} spacing={0.5}>
          <Typography variant="body2">이미 계정이 있나요?</Typography>
          <Link component={RouterLink} to="/auth/login" variant="subtitle2">
            로그인 하러 가기
          </Link>
        </Stack>
        {/* Register Form */}
        <RegisterForm/>

        <Typography
          component={"div"}
          sx={{
            color: "text.secondary",
            mt: 3,
            typography: "caption",
            textAlign: "center",
          }}
        >
          {"SU Talk"}
          <Link sx={{ ml: 1, mr: 1 }} underline="always" color="text.primary">
            이용약관
          </Link>
          {"and"}
          <Link sx={{ ml: 1 }} underline="always" color="text.primary">
            개인정보 활용 정책
          </Link>
          .
        </Typography>
        <AuthSocial/>
      </Stack>
    </>
  );
};

export default Register;
