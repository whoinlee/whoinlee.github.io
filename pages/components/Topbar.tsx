import React from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Container,
  InputBase,
  Toolbar,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import MenuIcon from "@mui/icons-material/Menu";
import FlexBetBox from "./FlexBetBox";

const BLACK_85P = "rgba(0,0,0,.85)";
const BLUE_85P = "rgba(15,10,222,.85)";
const Logo = ({ isLarge = true }) => {
  const theme = useTheme();

  return (
    <FlexBetBox gap="0px">
      {isLarge && (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            height: "59px",
            border: 2,
            borderColor: BLACK_85P,
            paddingLeft: "8px",
            paddingRight: "8px",
            paddingBottom: "0px",
            margitnRight: "-1px",
          }}
        >
          <Typography
            fontWeight="700"
            fontSize="22px"
            sx={{
              cursor: "default",
              paddingTop: "0px",
              color: BLACK_85P,
              alignItems: "center",
            }}
          >
            STUDIO
          </Typography>
        </Box>
      )}
      <Tooltip
        title=" i "
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "white",
              color: "black",
              boxShadow: theme.shadows[2],
              padding: "5px 15px",
              fontSize: "18px",
            },
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            borderBottom: 1,
            borderLeft: 2,
            borderRight: 2,
            borderTop: 0,
            borderColor: BLACK_85P,
            backgroundColor: BLACK_85P,
            pt: 1.4,
            pb: 1.4,
            pr: 0.5,
            pl: 1,
            cursor: "pointer",
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
      </Tooltip>
    </FlexBetBox>
  );
};

const Topbar = () => {
  /* xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 */
  const isXSmall = !useMediaQuery("(min-width: 400px)");
  const isLarge = useMediaQuery("(min-width: 800px)");
  //   const theme = useTheme();

  const runSearch = () => {
    console.log("runSearch");
  };

  const openLinkedIn = () => {
    console.log("openLinkedIn");
    window
      .open("https://www.linkedin.com/in/whoin-lee-9729061/", "_blank")
      ?.focus();
  };

  const openGithub = () => {
    console.log("openLinkedIn");
    window
      .open("https://github.com/whoinlee/whoinlee.github.io", "_blank")
      ?.focus();
  };

  const openMenu = () => {
    console.log("openMenu");
  };

  const renderSearchInput = () => {
    return (
      <FlexBetBox
        gap="4px"
        p="2px 10px"
        pr="4px"
        width="158px"
        height="30px"
        marginRight="4px"
        // marginRight="60px"
        border="1.5px solid rgba(0, 0, 0, 0.85)"
        // border="1px solid #9e9e9e"
        // borderRadius="4px"
        sx={{
          "&:hover": {
            border: "1.5px solid rgba(15, 10, 222, 0.85)",
            borderBottom: "2px solid rgba(15, 10, 222, 0.85)",
            "& .MuiSvgIcon-root": {
              color: BLUE_85P,
              marginTop: "4.5px",
            },
          },
        }}
      >
        <InputBase placeholder="" className="search_input" />
        <Box
          onClick={runSearch}
          sx={{
            width: "34px",
            height: "34px",
            "&:hover": {
              backgroundColor: "transparent",
            },
          }}
        >
          <SearchIcon
            className="search_icon"
            sx={{
              fontSize: "26px",
              marginLeft: "6px",
              marginTop: "4px",
              color: BLACK_85P,
              "&:hover": {
                color: BLUE_85P,
              },
            }}
          />
        </Box>
      </FlexBetBox>
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
              className="topbar_menuItem"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "yellow",
                  "& .MuiTypography-body1": {
                    color: "black",
                  },
                },
              }}
            >
              <Typography
                fontWeight="400"
                fontSize="20px"
                padding="2px 12px"
                color={BLACK_85P}
                sx={{ textDecoration: "underline" }}
              >
                Works
              </Typography>
            </Box>
            <Box
              className="topbar_menuItem"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "yellow",
                  "& .MuiTypography-body1": {
                    color: "black",
                  },
                },
              }}
            >
              <Typography
                fontWeight="500"
                fontSize="20px"
                padding="2px 12px"
                letterSpacing="0.075px"
                color={BLACK_85P}
              >
                Data Viz & Misc
              </Typography>
            </Box>
            <Box
              className="topbar_menuItem"
              sx={{
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "yellow",
                  "& .MuiTypography-body1": {
                    color: "black",
                  },
                },
              }}
            >
              <Typography
                fontWeight="500"
                fontSize="20px"
                padding="2px 12px"
                color={BLACK_85P}
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
                color: BLACK_85P,
              }}
            />
          </Box>
        )}
        {/* RIGHT SIDE */}
        <FlexBetBox gap="6px" position="absolute" right="-2px">
          {!isXSmall && renderSearchInput()}
          <Box
            onClick={openGithub}
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
                color: BLACK_85P,
                "&:hover": {
                  color: BLUE_85P,
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
                color: BLACK_85P,
                "&:hover": {
                  color: BLUE_85P,
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
