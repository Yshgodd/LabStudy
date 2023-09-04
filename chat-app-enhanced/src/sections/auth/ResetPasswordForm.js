import React from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import { Alert, Button, Link, Stack } from "@mui/material";
import { RHFTextField } from "../../components/hook-form";

const ResetPasswordForm = () => {
  const ResetPasswordSchema = Yup.object().shape({
    email: Yup.string()
      .required("이메일을 입력하세요.")
      .email("이메일 형식이 아닙니다."),
  });

  const defaultValues = {
    email: "demo@sutalk.com",
  };

  const methods = useForm({
    resolver: yupResolver(ResetPasswordSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const onSubmit = async (data) => {
    try {
      //submit data to backend
    } catch (error) {
      console.log(error);
      reset();
      setError("afterSubmit", {
        ...error,
        messge: error.message,
      });
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Stack spacing={3}>
        {!!errors.afterSubmit && (
          <Alert severity="error">{errors.afterSubmit.message}</Alert>
        )}

        <RHFTextField sx={{mt:2}} name="email" label="이메일" />
      </Stack>
      <Stack alignItems={"flex-end"} sx={{ my: 2 }}>
        <Link
          href="https://www.instagram.com/newjeans_official/"
          variant="caption"
          color="inherit"
          underline="always"
        >
          기다리는 동안 뉴진스 보기
        </Link>
      </Stack>
      <Button
        fullWidth
        color="inherit"
        size="large"
        type="submit"
        variant="caption"
        sx={{
          color: (theme) =>
            theme.palette.mode === "light" ? "common.white" : "grey.800",
          bgcolor: "text.primary",
          "&:hover": {
            bgcolor: "text.primary",
            color: (theme) =>
              theme.palette.mode === "light" ? "common.white" : "grey.800",
          },
        }}
      >
        요청 보내기
      </Button>
    </FormProvider>
  );
};

export default ResetPasswordForm;
