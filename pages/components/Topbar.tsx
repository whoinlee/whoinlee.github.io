import React, { useContext } from "react";
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
import { SiteContext } from "../contexts/SiteState";
import "../../styles/topbar.scss";

const Topbar = () => {
  const { selectedPage, setSelectedPage } = useContext(SiteContext);

  //-- mediaQueries
  /* MUI:: xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 */
  const isLT400 = !useMediaQuery("(min-width: 400px)"); //-- less than 400
  const isLT620 = !useMediaQuery("(min-width: 620px)"); //-- less than 600
  const isGTE800 = useMediaQuery("(min-width: 800px)"); //-- greter than or equal to 800

  //-- colors
  const BLACK_85P = "rgba(0,0,0,.85)";
  const BLUE_75P = "rgba(15,10,222,.75)";
  const YELLOW_75P = "rgba(255,255,0,.75)";
  // const YELLOW_LIGHT = "rgba(255,255,0,.5)";

  //-- theme settings
  const theme = useTheme();

  //-- subMenu related
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [selectedSubIndex, setSelectedSubIndex] = React.useState(-1);
  const open = Boolean(anchorEl);
  const showSubmenu = (e: any) => {
    if (anchorEl !== e.currentTarget)
    setAnchorEl(e.currentTarget);
    console.log("showSubmenu :: index? ", selectedSubIndex);
  };
  const hideSubmenu = () => {
    setAnchorEl(null);
    console.log("hideSubmenu :: index? ", selectedSubIndex);
  };
  const onSubmenuClick = (e: any, index: number) => {
    hideSubmenu();
    setSelectedSubIndex(index);
    console.log("onSubmenuClick :: index? ", index);
  };

  const MenuTooltip = ({
    children,
    title,
  }: {
    children: React.ReactElement;
    title: string;
  }) => {
    return (
      <Tooltip
        title={title}
        placement="bottom"
        // followCursor
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: "white",
              color: "black",
              boxShadow: theme.shadows[2],
              padding: "5px 15px",
              fontSize: "15px",
              // maxWidth: "200px",
            },
          },
        }}
      >
        {children}
      </Tooltip>
    );
  };
  const Logo = () => {
    return (
      <FlexBetBox
        gap="0px"
        height="59px"
        //   border="2px solid red"
      >
        {isGTE800 && (
          // <MenuTooltip title="home">
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
                cursor: "pointer",
                "&:hover": {
                  background: YELLOW_75P,
                },
              }}
            >
              <Typography
                fontWeight="700"
                fontSize={`${isGTE800 ? "22px" : "16px"}`}
                sx={{
                  paddingTop: "0px",
                  color: BLACK_85P,
                  alignItems: "center",
                }}
              >
                STUDIO
              </Typography>
            </Box>
          // </MenuTooltip>
        )}
        <MenuTooltip title="i">
          <Box
            sx={{
              display: "flex",
              border: "none",
              backgroundColor: BLACK_85P,
              pl: `${isLT400 ? "7px" : "11px"}`,
              pr: `${isLT400 ? "4px" : "7px"}`,
              pt: `${isLT400 ? "8px" : "12px"}`,
              pb: `${isLT400 ? "8px" : "12px"}`,
              cursor: "pointer",
              "&:hover": {
                "& .MuiBox-root": {
                  color: "yellow",
                },
              },
            }}
          >
            <Box
              sx={{
                display: "inline",
                fontWeight: "bold",
                //   fontSize: "24px",
                fontSize: `${isLT400 ? "14px" : "24px"}`,
                color: "#fefefe",
              }}
            >
              UU
            </Box>
            <Box
              sx={{
                display: "inline",
                fontSize: `${isLT400 ? "8px" : "16px"}`,
                paddingTop: "4px",
                color: "#fefefe",
              }}
            >
              +
            </Box>
          </Box>
        </MenuTooltip>
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
            border: "1px solid rgba(0, 0, 0, 0.75)",
            borderBottom: "1.5px solid black",
            // backgroundColor: YELLOW_75P,
            backgroundColor: "rgba(150, 150, 150, .075)", //grey
            "& .MuiSvgIcon-root": {
              marginTop: "4.5px",
              marginRight: "0.5px",
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

  return (
    // <Container className="topbar" maxWidth="lg">
    <div className="topbar">
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
            <FlexBetBox paddingLeft="12px">
              {/* Menu1: Works with subMenu*/}
              {/* <div onMouseEnter={showSubmenu} onMouseLeave={hideSubmenu}> */}
                
                  <Box
                    // onMouseEnter={showSubmenu}
                    // onMouseLeave={hideSubmenu}
                    onClick={showSubmenu}
                    /*
                    sx={{
                        marginLeft: "-12px",
                        color: BLACK_85P,
                        transform: `${
                          open ? "rotate(180deg)" : "rotate(0deg)"
                        }`,
                      }}
                    */
                    sx={{
                      backgroundColor: `${open? "rgba(255,255,0,.75)":"transparent"}`,
                      // border: "1px solid red",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      cursor: "pointer",
                      paddingRight: "4px",
                      "&:hover": {
                        backgroundColor: YELLOW_75P,
                        "& .MuiTypography-body1": {
                          color: "black",
                        },
                      },
                    }}
                  >
                    <Typography
                      fontWeight="400"
                      fontSize={`${isGTE800 ? "19px" : "17px"}`}
                      padding="0px 12px"
                      color={BLACK_85P}

                      //   sx={{ textDecoration: "underline" }}
                    >
                      Works
                    </Typography>
                    <ArrowDropDownIcon
                      sx={{
                        marginLeft: "-12px",
                        color: BLACK_85P,
                        transform: `${
                          open ? "rotate(180deg)" : "rotate(0deg)"
                        }`,
                      }}
                    />
                  </Box>
                <Menu
                  anchorEl={anchorEl}
                  open={open}
                  onClose={hideSubmenu}
                  // anchorOrigin={{
                  //   vertical: 0,
                  //   horizontal: 'left',
                  // }}
                  MenuListProps={{ onMouseLeave: hideSubmenu }}
                >
                  <MenuItem
                    onClick={(e) => onSubmenuClick(e, 0)}
                    disabled={selectedSubIndex === 0}
                    selected={selectedSubIndex === 0}
                  >
                    <ListItemIcon>
                      <WebIcon fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>Web</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => onSubmenuClick(e, 1)}
                    disabled={selectedSubIndex === 1}
                    selected={selectedSubIndex === 1}
                  >
                    <ListItemIcon>
                      <DesktopMacIcon
                        fontSize="small"
                        sx={{ color: "black" }}
                      />
                    </ListItemIcon>
                    <ListItemText>Desktop</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => onSubmenuClick(e, 2)}
                    disabled={selectedSubIndex === 2}
                    selected={selectedSubIndex === 2}
                  >
                    <ListItemIcon>
                      <ConnectedTvIcon
                        fontSize="small"
                        sx={{ color: "black" }}
                      />
                    </ListItemIcon>
                    <ListItemText>TV App</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => onSubmenuClick(e, 3)}
                    disabled={selectedSubIndex === 3}
                    selected={selectedSubIndex === 3}
                  >
                    <ListItemIcon>
                      <TouchAppIcon fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>Kiosk</ListItemText>
                  </MenuItem>
                  <MenuItem
                    onClick={(e) => onSubmenuClick(e, 4)}
                    disabled={selectedSubIndex === 4}
                    selected={selectedSubIndex === 4}
                  >
                    <ListItemIcon>
                      <ExtensionIcon fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>Plugin</ListItemText>
                  </MenuItem>
                </Menu>
              {/* </div> */}
              {/* Menu2: Data Viz & */}
              {/* <MenuTooltip title="data viz & personal works"> */}
                <Box
                  // border="2px solid cyan"
                  onClick={openBlog}
                  sx={{
                    cursor: "pointer",
                    "&:hover": {
                      backgroundColor: YELLOW_75P,
                      "& .MuiTypography-body1": {
                        color: "black",
                      },
                    },
                  }}
                >
                  <Typography
                    fontWeight="500"
                    fontSize={`${isGTE800 ? "19px" : "17px"}`}
                    padding="0px 12px"
                    letterSpacing="0.075px"
                    color={BLACK_85P}
                  >
                    {`Data Viz &${isGTE800 ? " Misc" : ""}`}
                  </Typography>
                </Box>
              {/* </MenuTooltip> */}
              {/* Menu3: About */}
              {/* <Box
                //   border="2px solid cyan"
                // className="topbar_menuItem"
                sx={{
                  cursor: "pointer",
                  "&:hover": {
                    backgroundColor: YELLOW_75P,
                    "& .MuiTypography-body1": {
                      color: "black",
                    },
                  },
                }}
              >
                <Typography
                  fontWeight="500"
                  fontSize={`${isGTE800 ? "19px" : "17px"}`}
                  padding="0px 12px"
                  color={BLACK_85P}
                >
                  About
                </Typography>
              </Box> */}
            </FlexBetBox>
          ) : (
            //-- hamburger menu
            <Box
              onClick={openMenu}
              sx={{
                display: "flex",
                alignItems: "center",
                height: `${isLT400 ? "37px" : "60px"}`,
                border: 2,
                padding: `${isLT400 ? "0px 2.5px" : "0px 12px"}`,
                cursor: "pointer",
                "&:hover": {
                  backgroundColor: "#FFFF33",
                },
              }}
            >
              <MenuIcon
                sx={{
                  fontSize: `${isLT400 ? "30px" : "34px"}`,
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
      {/* </Container> */}
    </div>
  );
};

export default Topbar;
