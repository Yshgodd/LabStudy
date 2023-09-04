import React from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Slide,
  Stack,
} from "@mui/material";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { MagnifyingGlass, XCircle } from "@phosphor-icons/react";
import { CallElement } from "../../components/CallElement";
import { MembersList } from "../../data";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const StartCall = ({ open, handleClose }) => {
  return (
    <>
      <Dialog
        fullWidth
        maxWidth="xs"
        open={open}
        onClose={handleClose}
        sx={{ p: 4 }}
        TransitionComponent={Transition}
        aria-describedby="alert-dialog-slide-description"
      >
        {/*  */}

        <DialogTitle sx={{ mb: 2 }}>
          Start Call{" "}
          <IconButton
            sx={{
              position: "absolute",
              right: 18,
              top: 17,
              color: "black",
            }}
            onClick={handleClose}
          >
            <XCircle />
          </IconButton>
        </DialogTitle>  

        {/*  */}
        <DialogContent>
          {/* form */}
          <Stack spacing={3}>
            <Stack sx={{ width: "100%" }}>
              <Search>
                <SearchIconWrapper>
                  <MagnifyingGlass color="#709ce6" />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="Search..."
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
            </Stack>
            {/* call list */}
            {MembersList.map((el) => (
              <CallElement {...el} />
            ))}
          </Stack>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default StartCall;
