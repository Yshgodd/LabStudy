import { Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

import React from "react";
import { CaretLeft } from "@phosphor-icons/react";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot your Password?
        </Typography>
        <Typography variant="caption" sx={{ color: "text.secondary", mb: 5 }}>
          이메일을 입력하시고 비밀번호 초기화 메일을 받으세요.
          빠르게 처리 할 수 있게 도와드리겠습니다.
        </Typography>

        {/* reset password form */}
        <ResetPasswordForm/>
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
      </Stack>
    </>
  );
};

export default ResetPassword;
