import React from "react";
import {
  Box,
  Container,
  InputBase,
  //   IconButton,
  Toolbar,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import FlexBetBox from "./FlexBetBox";

const Logo = () => {
  const isLarge = useMediaQuery("(min-width: 900px)");

  return (
    <FlexBetBox gap="6px">
      {isLarge && (
        <Typography
          fontWeight="bold"
          fontSize="0.9rem"
          sx={{ cursor: "default", paddingTop: "2px" }}
        >
          STUDIO
        </Typography>
      )}
      <Box
        sx={{
          display: "flex",
          border: 2,
          borderColor: "black",
          pt: 1.4,
          pb: 1.4,
          pr: 0.5,
          pl: 1,
          cursor: "default",
          //   cursor: "pointer",
          //   "&:hover": {
          //     borderColor: "blue",
          //     "& .MuiBox-root": {
          //       color: "blue",
          //     },
          //   },
        }}
      >
        <Box
          sx={{
            display: "inline",
            fontWeight: "bold",
            fontSize: "24px",
          }}
        >
          UU
        </Box>
        <Box
          sx={{
            display: "inline",
            fontSize: "16px",
            paddingTop: "5px",
          }}
        >
          +
        </Box>
      </Box>
    </FlexBetBox>
  );
};

const Topbar = () => {
  /* xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 */
  const isSmall = !useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  console.log("theme?", theme);

  const openSearchInput = () => {
    console.log("openSearchInput");
  };

  const openLinkedIn = () => {
    console.log("openLinkedIn");
  };

  const openMenu = () => {
    console.log("openMenu");
  };

  const searchInput = () => {
    return (
      <>
        <InputBase placeholder="" />
        <Box
          onClick={openSearchInput}
          sx={{
            width: "34px",
            height: "34px",
            cursor: "pointer",
            marginTop: "2px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <SearchIcon
            sx={{
              fontSize: "26px",
              marginLeft: "4px",
              marginTop: "4px",
              color: "rgba(0, 0, 0, 0.85)",
              "&:hover": {
                color: "blue",
              },
            }}
          />
        </Box>
      </>
    );
  };

  return (
    <Container
      className="topbar"
      maxWidth="xl" // maxWidth="lg"
    >
      <Logo />
      <Toolbar
        sx={{
          width: "100%",
          marginLeft: "12px",
          // border: "1px solid red"    //-- testing
        }}
      >
        {/* LEFT SIDE */}
        {!isSmall ? (
          <FlexBetBox gap="24px" position="absolute" left="12px">
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "blue",
                },
              }}
            >
              <Typography
                // fontWeight="bold"
                fontSize="1rem"
              >
                WORKS
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "blue",
                },
                //   marginRight: "20px",
              }}
            >
              <Typography
                // fontWeight="bold"
                fontSize="1rem"
              >
                DATA VIZ & Misc
              </Typography>
            </Box>
          </FlexBetBox>
        ) : (
          <Box
            onClick={openMenu}
            sx={{
              width: "34px",
              height: "34px",
              cursor: "pointer",
              position: "absolute",
              left: "0px",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <MenuIcon
              sx={{
                fontSize: "34px",
                color: "rgba(0, 0, 0, 0.85)",
                "&:hover": {
                  color: "blue",
                },
              }}
            />
          </Box>
        )}
        {/* RIGHT SIDE */}
        <FlexBetBox
          gap="8px"
          position="absolute"
          right="-4px"
          //   border="2px solid green"
        >
          <FlexBetBox
            gap="4px"
            p="2px 12px"
            pr="4px"
            width="200px"
            height="30px"
            marginRight="4px"
            border="1px solid rgba(0,0,0, 1)"
          >
            {searchInput()}
          </FlexBetBox>
          <Box
            onClick={openLinkedIn}
            sx={{
              width: "34px",
              height: "34px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <GitHubIcon
              sx={{
                fontSize: "30px",
                marginTop: "2px",
                marginLeft: "2px",
                color: "rgba(0, 0, 0, 0.85)",
                "&:hover": {
                  color: "blue",
                },
              }}
            />
          </Box>
          <Box
            onClick={openLinkedIn}
            sx={{
              width: "34px",
              height: "34px",
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <LinkedInIcon
              sx={{
                fontSize: "34px",
                color: "rgba(0, 0, 0, 0.85)",
                "&:hover": {
                  color: "blue",
                },
              }}
            />
          </Box>
        </FlexBetBox>
      </Toolbar>
    </Container>
  );
};

export default Topbar;