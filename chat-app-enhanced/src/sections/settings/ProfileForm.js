import React, { useCallback, useState } from "react";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import FormProvider from "../../components/hook-form/FormProvider";
import {
  Alert,
  Button,
  IconButton,
  InputAdornment,
  Link,
  Stack,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { RHFTextField } from "../../components/hook-form";
import { Eye, EyeSlash } from "@phosphor-icons/react";

const ProfileForm = () => {
  const ProfileSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    about: Yup.string().required("About is required"),
    avatarUrl: Yup.string().required("Avatar is required").nullable(true),
  });

  const defaultValues = {
    name: "",
    about: "",
  };

  const methods = useForm({
    resolver: yupResolver(ProfileSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    setError,
    setValue,
    handleSubmit,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = methods;

  const values = watch(); //

  const handleDrop = useCallback(
    (acceptedFiles) => {
      const file = acceptedFiles[0];
      const newFile = Object.assign(file, {
        preview: URL.createObjectURL(file),
      });
      if (file) {
        setValue("avatarUrl", newFile, { shouldValidate: true });
      }
    },
    [setValue]
  );

  const onSubmit = async (data) => {
    try {
      //submit data to backend
      console.log("data", data);
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
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={3}>
          <Stack spacing={3}>
            {!!errors.afterSubmit && (
              <Alert severity="error">{errors.afterSubmit.message}</Alert>
            )}
            <RHFTextField
              name="name"
              label="Name"
              helperText={"다른 사람에게 보여질 이름을 설정합니다."}
            />
            <RHFTextField
              multiline
              rows={3}
              maxRows={5}
              name="about"
              label="Write your comment..."
            />
          </Stack>
          <Stack direction={"row"} justifyContent={"end"}>
            <Button
              color="primary"
              size="large"
              type="submit"
              variant="outlined"
            >
              Save
            </Button>
          </Stack>
        </Stack>
      </FormProvider>
    </>
  );
};

export default ProfileForm;
