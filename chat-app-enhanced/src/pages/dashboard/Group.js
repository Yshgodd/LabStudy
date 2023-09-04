import {
  Box,
  Divider,
  IconButton,
  Link,
  Stack,
  Typography,
} from "@mui/material";
import React,{ useState }  from "react";
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from "../../components/Search";
import { CaretCircleDoubleDown, MagnifyingGlass, Plus } from "@phosphor-icons/react";
import { useTheme } from "@mui/material/styles";
import { SimpleBarStyle } from "../../components/Scrollbar";
import ChatElement from "../../components/ChatElement";
import { ChatList } from "../../data";
import CreateGroup from "../../sections/main/CreateGroup";


const Group = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };


  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        {/* left */}
        <Box
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
          <Stack p={3} spacing={2} sx={{ maxHeight: "100vh" }}>
            <Stack>
              <Typography variant="h5">Groups</Typography>
            </Stack>
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
            <Stack
              direction={"row"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Typography variant="subtitle2" component={Link}>
                Create New Group
              </Typography>
              <IconButton onClick={()=>{
                setOpenDialog(true);
              }}>
                <Plus style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
            <Stack
              spacing={2}
              direction="column"
              // sx={{flexGrow:1, height:"100%", overflow: "scroll"}}

              sx={[
                { flexGrow: 1, overflow: "scroll", height: "100%" },
                {
                  "&::-webkit-scrollbar": {
                    backgroundColor:
                      theme.palette.mode === "light"
                        ? "#F8FAFF"
                        : theme.palette.background.paper,
                  },
                },
              ]}
            >
              {/* simplebar is available in macOS */}
              <SimpleBarStyle timeout={500} clickOnTrack={false}>
                <Stack spacing={2.4}>
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    Pinned
                  </Typography>
                  {ChatList.filter((el) => el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                  <Typography variant="subtitle2" sx={{ color: "#676767" }}>
                    All Groups
                  </Typography>
                  {ChatList.filter((el) => !el.pinned).map((el) => {
                    return <ChatElement {...el} />;
                  })}
                </Stack>
              </SimpleBarStyle>
            </Stack>
          </Stack>
        </Box>

        {/* right */}
        {/* //Todo => Reuse Conversation component  */}


      </Stack>

      {openDialog && <CreateGroup open={openDialog} handleClose={handleCloseDialog} />}
    

    </>
  );
};

export default Group;
