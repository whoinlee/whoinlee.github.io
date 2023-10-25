import React from "react";
import {
  Box,
  Container,
  InputBase,
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

const Logo = ({ isLarge = true }) => {
  return (
    <FlexBetBox gap="0px">
      {isLarge && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "59px",
            border: 2,
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingBottom: "0px",
            margitnRight: "-1px",
          }}
        >
          <Typography
            fontWeight="700"
            fontSize="22px"
            sx={{ cursor: "default", paddingTop: "0px", alignItems: "center" }}
          >
            STUDIO
          </Typography>
        </Box>
      )}
      <Box
        sx={{
          display: "flex",
          borderBottom: 1,
          borderLeft: 2,
          borderRight: 2,
          borderTop: 0,
          borderColor: "black",
          pt: 1.4,
          pb: 1.4,
          pr: 0.5,
          pl: 1,
          cursor: "default",
          backgroundColor: "black",
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
            color: "#fefefe",
          }}
        >
          UU
        </Box>
        <Box
          sx={{
            display: "inline",
            fontSize: "16px",
            paddingTop: "5px",
            color: "#fefefe",
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
  //   const isSmall = !useMediaQuery("(min-width: 600px)");
  const isLarge = useMediaQuery("(min-width: 900px)");
  const theme = useTheme();
  console.log("theme?", theme);

  const runSearch = () => {
    console.log("runSearch");
  };

  const openLinkedIn = () => {
    console.log("openLinkedIn");
  };

  const openMenu = () => {
    console.log("openMenu");
  };

  const renderSearchInput = () => {
    return (
      <>
        <InputBase placeholder="" />
        <Box
          onClick={runSearch}
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
      <Logo isLarge={isLarge} />
      <Toolbar
        sx={{
          width: "100%",
          // border: "1px solid red"    //-- testing
        }}
      >
        {/* LEFT SIDE */}
        {isLarge ? (
          <FlexBetBox gap="4px" position="absolute" left="18px">
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                  backgroundColor: "yellow",
                  "& .MuiTypography-body1": {
                    color: "black",
                  },
                },
              }}
            >
              <Typography fontWeight="400" fontSize="20px" padding="2px 12px">
                Works
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                  backgroundColor: "yellow",
                },
                "& .MuiTypography-body1": {
                  color: "black",
                },
              }}
            >
              <Typography
                fontWeight="500"
                fontSize="20px"
                padding="2px 12px"
                letterSpacing="0.075px"
              >
                Data Viz & Misc
              </Typography>
            </Box>
            <Box
              sx={{
                cursor: "pointer",
                "&:hover": {
                  color: "black",
                  backgroundColor: "yellow",
                },
                "& .MuiTypography-body1": {
                  color: "black",
                },
              }}
            >
              <Typography
                fontWeight="500"
                fontSize="20px"
                padding="2px 12px"
              >
                About
              </Typography>
            </Box>
          </FlexBetBox>
        ) : (
          <Box
            onClick={openMenu}
            sx={{
              position: "absolute",
              display: "flex",
              alignItems: "center",
              height: "59px",
              border: 2,
              padding: "0px 12px",
              cursor: "pointer",
              left: "0px",
              "&:hover": {
                backgroundColor: "yellow",
              },
            }}
          >
            <MenuIcon
              sx={{
                fontSize: "34px",
                color: "rgba(0, 0, 0, 0.85)",
              }}
            />
          </Box>
        )}
        {/* RIGHT SIDE */}
        <FlexBetBox
          gap="6px"
          position="absolute"
          right="-2px"
          //   border="2px solid green"
        >
          <FlexBetBox
            gap="4px"
            p="2px 12px"
            pr="4px"
            width="200px"
            height="30px"
            marginRight="4px"
            border="1.5px solid black"
          >
            {renderSearchInput()}
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
