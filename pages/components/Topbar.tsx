import React from "react";
import FlexBetBox from "./FlexBetBox";
import {
  Box,
  Container,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import WebIcon from "@mui/icons-material/Web";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ExtensionIcon from "@mui/icons-material/Extension";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import SearchIcon from "@mui/icons-material/Search";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../../styles/topbar.scss";

const Topbar = () => {
  /* xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 */
  const isXSmall = !useMediaQuery("(min-width: 400px)");    //-- less than 400
//   const isLT600 = !useMediaQuery("(min-width: 600px)");     //-- less than 600
  const isLT620 = !useMediaQuery("(min-width: 620px)");     //-- less than 600
//   const isLT700 = !useMediaQuery("(min-width: 700px)");     //-- less than or 700
//   const isGTE700 = useMediaQuery("(min-width: 700px)");     //-- greter than or equal to 700
//   const isNonSmall = useMediaQuery("(min-width: 800px)");   //-- greter than or equal to 800
//   const isLarge = useMediaQuery("(min-width: 900px)");      //-- greater than or equal to 900
  const isGTE800 = useMediaQuery("(min-width: 800px)");     //-- greter than or equal to 800
  
  const theme = useTheme();

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const showSubmenu = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const hideSubmenu = () => {
    setAnchorEl(null);
  };

  const BLACK_85P = "rgba(0,0,0,.85)";
  const BLUE_75P = "rgba(15,10,222,.75)";
  const YELLOW_95P = "rgba(255,255,0,.95)";
  const Logo = () => {
    return (
      <FlexBetBox
        gap="0px"
        height="59px"
        //   border="2px solid red"
      >
        {isGTE800 && (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              height: "60px",
              border: 2,
              borderColor: BLACK_85P,
              paddingLeft: "8px",
              paddingRight: "8px",
              paddingBottom: "0px",
              margitnRight: "0px",
            }}
          >
            <Typography
              fontWeight="700"
              fontSize={`${isGTE800 ? "22px":"16px"}`}
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
        {/* {!isXSmall && ( */}
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
                border: "none",
                backgroundColor: BLACK_85P,
                // pt: 1.45,
                // pb: 1.45,
                // pr: 0.65,
                // pl: 1.35,
                pl: `${isXSmall ? "8px" : "10px"}`,
                pr: `${isXSmall ? "4px" : "6px"}`,
                pt: `${isXSmall ? "8px" : "12px"}`,
                pb: `${isXSmall ? "8px" : "12px"}`,
                cursor: "pointer",
                // "&:hover": {
                //   "& .MuiBox-root": {
                //     color: "yellow",
                //   },
                // },
              }}
            >
              <Box
                sx={{
                  display: "inline",
                  fontWeight: "bold",
                //   fontSize: "24px",
                  fontSize: `${isXSmall ? "14px" : "24px"}`,
                  color: "#fefefe",
                }}
              >
                UU
              </Box>
              <Box
                sx={{
                  display: "inline",
                  fontSize: `${isXSmall ? "8px" : "16px"}`,
                  paddingTop: "4px",
                //   paddingTop: `${isXSmall ? "4px" : "4px"}`,
                  color: "#fefefe",
                }}
              >
                +
              </Box>
            </Box>
          </Tooltip>
        {/* )} */}
      </FlexBetBox>
    );
  };

  const SearchInput = () => {
    return (
      <FlexBetBox
        gap="4px"
        p="2px 10px"
        pr="4px"
        width="160px"
        height="30px"
        marginRight="4px"
        border="1.5px solid rgba(0, 0, 0, 0.75)"
        sx={{
          "&:hover": {
            border: "1.5px solid rgba(15, 10, 222, 0.75)",
            borderBottom: "2px solid rgba(15, 10, 222, 0.75)",
            "& .MuiSvgIcon-root": {
              color: BLUE_75P,
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
                color: BLUE_75P,
              },
            }}
          />
        </Box>
      </FlexBetBox>
    );
  };

  const runSearch = () => {
    console.log("runSearch");
  };

  const openLinkedIn = () => {
    window
      .open("https://www.linkedin.com/in/whoin-lee-9729061/", "_blank")
      ?.focus();
  };

  const openGithub = () => {
    window
      .open("https://github.com/whoinlee/whoinlee.github.io", "_blank")
      ?.focus();
  };

  const openMenu = () => {
    console.log("openMenu");
  };

  const openBlog = () => {
    window.open("http://www.whoin.net/", "_blank")?.focus();
  };

  const handleClose = () => {
    console.log("handleClose");
  };

  return (
    <Container className="topbar" maxWidth="lg">
      <FlexBetBox
        width="100%"
        //   border="2px solid pink"
      >
        {/* LEFT SIDE */}
        <FlexBetBox
        // border="2px solid pink"
        >
          <Logo />
          {/* MENU */}
          {!isLT620 ? (
            <FlexBetBox
              paddingLeft="12px"
              // border="2px solid magenta"
            >
              {/* Menu1: Works with subMenu*/}
              <>
                <Box
                  // border="2px solid cyan"
                  onClick={showSubmenu}
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-start",
                    cursor: "pointer",
                    paddingRight: "4px",
                    "&:hover": {
                      backgroundColor: YELLOW_95P,
                      "& .MuiTypography-body1": {
                        color: "black",
                      },
                      //   "& .MuiSvgIcon-root": {
                      //     transform: "rotate(180deg)",
                      //   },
                    },
                  }}
                >
                  <Typography
                    fontWeight="400"
                    fontSize={`${isGTE800 ? "20px":"18px"}`}
                    padding="0px 12px"
                    color={BLACK_85P}
                    //   sx={{ textDecoration: "underline" }}
                  >
                    Works
                  </Typography>
                  <ArrowDropDownIcon
                    sx={{
                      marginLeft: "-12px",
                    //   border: "1px solid red",
                      color: BLACK_85P,
                      transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}`,
                    }}
                  />
                </Box>
                <Menu anchorEl={anchorEl} open={open} onClose={hideSubmenu}>
                  <MenuItem onClick={hideSubmenu}>
                    <ListItemIcon>
                      <WebIcon fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>Web</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={hideSubmenu}>
                    <ListItemIcon>
                      <DesktopMacIcon
                        fontSize="small"
                        sx={{ color: "black" }}
                      />
                    </ListItemIcon>
                    <ListItemText>Desktop</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={hideSubmenu}>
                    <ListItemIcon>
                      <ConnectedTvIcon
                        fontSize="small"
                        sx={{ color: "black" }}
                      />
                    </ListItemIcon>
                    <ListItemText>TV App</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={hideSubmenu}>
                    <ListItemIcon>
                      <TouchAppIcon fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>Kiosk</ListItemText>
                  </MenuItem>
                  <MenuItem onClick={hideSubmenu}>
                    <ListItemIcon>
                      <ExtensionIcon fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>Plugin</ListItemText>
                  </MenuItem>
                </Menu>
                {/* Menu2: Data Viz & */}
              </>
              <Box
                // border="2px solid cyan"
                onClick={openBlog}
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: YELLOW_95P,
                    "& .MuiTypography-body1": {
                      color: "black",
                    },
                  },
                }}
              >
                <Typography
                  fontWeight="500"
                  fontSize={`${isGTE800 ? "20px":"18px"}`}
                  padding="0px 12px"
                  letterSpacing="0.075px"
                  color={BLACK_85P}
                >
                  {`Data Viz &${isGTE800 ? " Misc" : ""}`}
                </Typography>
              </Box>
              {/* Menu3: About */}
              <Box
                //   border="2px solid cyan"
                // className="topbar_menuItem"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: YELLOW_95P,
                    "& .MuiTypography-body1": {
                      color: "black",
                    },
                  },
                }}
              >
                <Typography
                  fontWeight="500"
                  fontSize={`${isGTE800 ? "20px":"18px"}`}
                  padding="0px 12px"
                  color={BLACK_85P}
                >
                  About
                </Typography>
              </Box>
            </FlexBetBox>
          ) : (
            //-- hamburger menu
            <Box
              onClick={openMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                height: `${isXSmall ? "37px" : "60px"}`,
                border: 2,
                padding: `${isXSmall ? "0px 2.5px" : "0px 12px"}`,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "yellow",
                },
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: `${isXSmall ? "30px" : "34px"}`,
                  color: BLACK_85P,
                }}
              />
            </Box>

          )}
        </FlexBetBox>
        {/* RIGHT SIDE */}
        <FlexBetBox
          gap="6px"
          marginRight="-4px"
          //   border="4px solid orange"
        >
          <SearchInput />
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
                  color: BLUE_75P,
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
                  color: BLUE_75P,
                },
              }}
            />
          </Box>
        </FlexBetBox>
      </FlexBetBox>
    </Container>
  );
};

export default Topbar;
