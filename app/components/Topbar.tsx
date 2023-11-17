import React, { useContext } from "react";
import FlexBetBox from "./base/FlexBetBox";
import {
  Box,
  InputBase,
  ListItemIcon,
  ListItemText,
  Menu,
  MenuItem,
  Tooltip,
  Typography,
  useTheme,
  // useMediaQuery,
} from "@mui/material";
//-- icons
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
import "../styles/topbar.scss";

export const WorkCatetories = ["Web", "Desktop", "TV App", "Kiosk", "Plugin"];

const Topbar = () => {
  const {
    selectedPage,
    setSelectedPage,
    selectedSubIndex,
    setSelectedSubIndex,
    isXXS,
    isSMED,
    // isXS,
  } = useContext<any>(SiteContext);

  //-- MUI theme
  const theme = useTheme();

  //-- colors
  const BLACK_85P = "rgba(0,0,0,.85)";
  const BLUE_85P = "rgba(15,10,222,.85)";
  const YELLOW_75P = "rgba(255,255,0,.75)";

  //-- subMenu related
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const showSubmenu = (e: any) => {
    // if (anchorEl !== e.currentTarget) setAnchorEl(e.currentTarget);
    // console.log("showSubmenu ===> showWorks");
    if (selectedPage !== "works") setSelectedPage("works");
  };
  const hideSubmenu = () => {
    setAnchorEl(null);
  };
  const onSubmenuClick = (e: any, index: number) => {
    hideSubmenu();
    setSelectedSubIndex(index);
    if (selectedPage !== "works") setSelectedPage("works");
  };
  const resetSelectedSubIndex = () => {
    if (selectedSubIndex !== -1) setSelectedSubIndex(-1);
  };

  const MenuTooltip = ({
    children,
    title,
    isLight = true
  }: {
    children: React.ReactElement;
    title: string;
    isLight: boolean;
  }) => {
    return (
      <Tooltip
        title={title}
        placement="bottom"
        componentsProps={{
          tooltip: {
            sx: {
              bgcolor: `${isLight? "white": "black"}`,
              // color: BLACK_85P,
              color: `${isLight? BLACK_85P: "white"}`,
              boxShadow: theme.shadows[2],
              padding: "5px 15px",
              fontSize: "14px",
            },
          },
        }}
      >
        {children}
      </Tooltip>
    );
  };

  const onHomeLogoClick = (e: any) => {
    if (selectedPage !== "home") setSelectedPage("home");
    resetSelectedSubIndex();
  };

  const onAboutClick = (e: any) => {
    if (selectedPage !== "about") setSelectedPage("about");
    resetSelectedSubIndex();
  };

  const Logo = () => {
    return (
      <MenuTooltip title="i" isLight={selectedPage === "about" ? true: false}>
        <Box
          onClick={onHomeLogoClick}
          sx={{
            display: "flex",
            border: "2px solid rgba(0,0,0,.85)",
            backgroundColor: `${selectedPage === "about" ? "#fefefe" : BLACK_85P}`,
            color: `${selectedPage === "about" ? BLACK_85P : "#fefefe"}`,
            pl: `${isXXS ? "5px" : "8px"}`,
            pr: `${isXXS ? "2px" : "5px"}`,
            pt: `${isXXS ? "6px" : "11px"}`,
            pb: `${isXXS ? "6px" : "11px"}`,
            cursor: "pointer",
            // cursor: `${selectedPage === "home" ? "default" : "pointer"}`,
            "&:hover": {
              backgroundColor: `${selectedPage === "about" ? BLACK_85P : "#fefefe"}`,
              "& .MuiBox-root": {
                color: `${selectedPage === "about" ? "#fefefe" : BLACK_85P}`,
              },
            },
          }}
        >
          <Box
            sx={{
              display: "inline",
              fontWeight: "bold",
              fontSize: `${isXXS ? "14px" : "24px"}`,
            }}
          >
            UU
          </Box>
          <Box
            sx={{
              display: "inline",
              paddingTop: `${isXXS ? "3px" : "4px"}`,
              fontSize: `${isXXS ? "8px" : "16px"}`,
            }}
          >
            +
          </Box>
        </Box>
      </MenuTooltip>
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
    // console.log("runSearch");
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
    // console.log("openMenu");
  };

  const openBlog = () => {
    window.open("http://www.whoin.net/", "_blank")?.focus();
  };

  const IconComponents = [
    WebIcon,
    DesktopMacIcon,
    ConnectedTvIcon,
    TouchAppIcon,
    ExtensionIcon,
  ];

  return (
    <FlexBetBox className="topbar" width="100%">
      {/* LEFT SIDE */}
      <FlexBetBox>
        <Logo />
        {/* MENU */}
        {/* {!isXS ? ( */}
        <FlexBetBox paddingLeft="12px">
          {/* Menu1: Works with subMenu*/}
          <Box
              onClick={showSubmenu}
              sx={{
                // backgroundColor: `${
                //   open ? "rgba(255,255,0,.75)" : "transparent"
                // }`,
                backgroundColor: `${
                  selectedPage === "works" || open
                    ? "rgba(255,255,0,.75)"
                    : "transparent"
                }`,
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
                fontSize={`${isSMED ? "19px" : "17px"}`}
                padding="0px 10px"
                color={BLACK_85P}
              >
                Works
              </Typography>
              {/* <ArrowDropDownIcon
                sx={{
                  marginLeft: "-12px",
                  color: BLACK_85P,
                  transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}`,
                }}
              /> */}
            </Box>
            {/* <Menu
              anchorEl={anchorEl}
              open={open}
              onClose={hideSubmenu}
              MenuListProps={{ onMouseLeave: hideSubmenu }}
            >
              {WorkCatetories.map((category, index) => {
                const ComponentName = IconComponents[index];
                return (
                  <MenuItem
                    key={category + index}
                    onClick={(e) => onSubmenuClick(e, index)}
                    disabled={selectedSubIndex === index}
                    selected={selectedSubIndex === index}
                  >
                    <ListItemIcon>
                      <ComponentName fontSize="small" sx={{ color: "black" }} />
                    </ListItemIcon>
                    <ListItemText>{category}</ListItemText>
                  </MenuItem>
                );
              })}
            </Menu> */}
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
              fontSize={`${isSMED ? "19px" : "17px"}`}
              padding="0px 10px"
              letterSpacing="0.075px"
              color={BLACK_85P}
            >
              {`Data Viz &${isSMED ? " Misc" : ""}`}
            </Typography>
          </Box>
          {/* </MenuTooltip> */}
          {/* Menu3: About */}
          <MenuTooltip title="About" isLight={true}> 
            <Box
              onClick={onAboutClick}
              sx={{
                borderRadius: "50%",
                // ml: "8px",
                ml: `${isSMED ? "8px" : "6px"}`,
                width: "24px",
                height: "24px",
                cursor: "pointer",
                border: "2px solid rgba(0,0,0,.85)",
                backgroundColor: `${
                  selectedPage === "about"
                    ? BLACK_85P           //--"rgba(255,255,0,.75)" (yellow)
                    : "transparent"
                }`,
                color: `${selectedPage === "about" ? "#fefefe" : BLACK_85P}`,
                "&:hover": {
                  border:"2px solid black",
                  backgroundColor: BLACK_85P,
                  "& .MuiTypography-body1": {
                    color: "white",
                  },
                },
              }}
            >
              <Typography
                mt="-3px"
                fontSize="16px"
                fontWeight={700}
                padding="1.5px 8px"
              >
                i
              </Typography>
            </Box>
            </MenuTooltip> 
        </FlexBetBox>
        {/* )  */}
        {/* : (
          //-- hamburger menu
          <Box
            onClick={openMenu}
            sx={{
              display: "flex",
              alignItems: "center",
              height: `${isXXS ? "37px" : "60px"}`,
              border: 2,
              ml: "-2px",
              padding: `${isXXS ? "0px 2.5px" : "0px 12px"}`,
              cursor: "pointer",
              "&:hover": {
                backgroundColor: "#FFFF33",
              },
            }}
          >
            <MenuIcon
              sx={{
                fontSize: `${isXXS ? "30px" : "34px"}`,
                color: BLACK_85P,
              }}
            />
          </Box>
        )} */}
      </FlexBetBox>
      {/* RIGHT SIDE */}
      <FlexBetBox
        gap="6px"
        marginRight="-4px"
      >
        {/* <SearchInput /> */}
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
    </FlexBetBox>
  );
};

export default Topbar;
