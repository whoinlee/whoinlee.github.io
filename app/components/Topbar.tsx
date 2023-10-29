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
import { colorTokens } from "../theme";
import { SiteContext } from "../page";
import { WorksArr } from "../page";
import "../styles/topbar.scss";

const Topbar = () => {
  const {
    selectedPage,
    setSelectedPage,
    selectedSubIndex,
    setSelectedSubIndex,
  } = useContext<any>(SiteContext);
  // console.log("Topbar :: selectedPage? ", selectedPage);

  //-- mediaQueries
  /* MUI:: xs: 0, sm: 600, md: 900, lg: 1200, xl: 1536 */
  const isLT400 = !useMediaQuery("(min-width: 425px)"); //-- less than 400
  const isLT600 = !useMediaQuery("(min-width: 625px)"); //-- less than 600
  const isGTE700 = useMediaQuery("(min-width: 700px)"); //-- greter than or equal to 700

  //-- theme settings
  const theme = useTheme();

  //-- colors

  const BLACK_85P = "rgba(0,0,0,.85)";
  const BLUE_75P = "rgba(15,10,222,.75)";
  const YELLOW_75P = "rgba(255,255,0,.75)";

  //-- subMenu related
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const showSubmenu = (e: any) => {
    if (anchorEl !== e.currentTarget) setAnchorEl(e.currentTarget);
    console.log("showSubmenu :: index? ", selectedSubIndex);
  };
  const hideSubmenu = () => {
    setAnchorEl(null);
    console.log("hideSubmenu :: index? ", selectedSubIndex);
  };
  const onSubmenuClick = (e: any, index: number) => {
    hideSubmenu();
    setSelectedSubIndex(index);
    if (selectedPage !== "works") setSelectedPage("works");
    console.log("onSubmenuClick :: index? ", index);
  };
  const resetSelectedSubIndex = () => {
    if (selectedSubIndex !== -1) setSelectedSubIndex(-1);
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
        // placement="right-start"
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

  const onHomeLogoClick = (e: any) => {
    if (selectedPage !== "home") setSelectedPage("home");
    resetSelectedSubIndex();
  };

  const onAboutClick = (e: any) => {
    if (selectedPage !== "about") setSelectedPage("about");
    resetSelectedSubIndex();
  };

  const Logo = () => {
    const StudioLogo = () => {
      return (
        <MenuTooltip title="home">
          <Box
            // onClick={onHomeLogoClick}
            sx={{
              display: "flex",
              alignItems: "center",
              height: "60px",
              border: 2,
              borderColor: BLACK_85P,
              pl: "8px",
              pr: "8px",
              pb: "0px",
              mr: "0px",
              background: `${
                selectedPage === "home" ? YELLOW_75P : "transparent"
              }`,
              // cursor: `${selectedPage === "home" ? "default" : "pointer"}`,
              cursor: "pointer",
              "&:hover": {
                // background: `${
                //   selectedPage === "home" ? "transparent" : YELLOW_75P
                // }`,
                background: YELLOW_75P,
              },
            }}
          >
            <Typography
              fontWeight="700"
              fontSize={`${isGTE700 ? "22px" : "16px"}`}
              sx={{
                paddingTop: "0px",
                color: BLACK_85P,
                alignItems: "center",
              }}
            >
              STUDIO
            </Typography>
          </Box>
        </MenuTooltip>
      );
    };

    return (
      // <FlexBetBox gap="0px" height="59px"></FlexBetBox>
      // <MenuTooltip title="Studio W+">
          <Box
            onClick={onHomeLogoClick}
            sx={{
              display: "flex",
              border: "none",
              backgroundColor: BLACK_85P,
              color: "#fefefe",
              // pl: "7px",
              // pr: "4px",
              // pt: "8px",
              // pb: "8px",
              cursor: "pointer",

              // color: `${selectedPage === "home" ? "yellow" : "#fefefe"}`,
              
              pl: `${isLT400 ? "7px" : "10px"}`,
              pr: `${isLT400 ? "4px" : "7px"}`,
              pt: `${isLT400 ? "8px" : "12px"}`,
              pb: `${isLT400 ? "8px" : "12px"}`,
              // cursor: `${selectedPage === "home" ? "default" : "pointer"}`,
              
              // "&:hover": {
              //   "& .MuiBox-root": {
              //     // color: `${selectedPage === "home" ? "#fefefe" : "yellow"}`,
              //     color: "yellow",
              //   },
              // },
            }}
          >
            <Box
              sx={{
                display: "inline",
                fontWeight: "bold",
                // fontSize: "14px",
                fontSize: `${isLT400 ? "14px" : "24px"}`,
              }}
            >
              UU
            </Box>
            <Box
              sx={{
                display: "inline",
                // paddingTop: "4px",
                paddingTop: `${isLT400 ? "3px" : "4px"}`,
                // fontSize: "10px",
                fontSize: `${isLT400 ? "8px" : "16px"}`,
              }}
            >
              +
            </Box>
          </Box>
        // </MenuTooltip>
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

  const IconComponents = [
    WebIcon,
    DesktopMacIcon,
    ConnectedTvIcon,
    TouchAppIcon,
    ExtensionIcon,
  ];

  return (
    <div className="topbar">
      <FlexBetBox width="100%">
        {/* LEFT SIDE */}
        <FlexBetBox>
          <Logo />
          {/* MENU */}
          {!isLT600 ? (
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
                  // fontWeight="400"
                  fontSize={`${isGTE700 ? "19px" : "17px"}`}
                  padding="0px 10px"
                  color={BLACK_85P}
                  // sx={{
                  //   // textDecoration: "underline"
                  //   textDecoration: `${(selectedPage === "works")? "underline":"none"}`
                  //  }}
                >
                  Works
                </Typography>
                <ArrowDropDownIcon
                  sx={{
                    marginLeft: "-12px",
                    color: BLACK_85P,
                    transform: `${open ? "rotate(180deg)" : "rotate(0deg)"}`,
                  }}
                />
              </Box>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={hideSubmenu}
                MenuListProps={{ onMouseLeave: hideSubmenu }}
              >
                {WorksArr.map((category, index) => {
                  const ComponentName = IconComponents[index];
                  return (
                    <MenuItem
                      key={category + index}
                      onClick={(e) => onSubmenuClick(e, index)}
                      disabled={selectedSubIndex === index}
                      selected={selectedSubIndex === index}
                    >
                      <ListItemIcon>
                        <ComponentName
                          fontSize="small"
                          sx={{ color: "black" }}
                        />
                      </ListItemIcon>
                      <ListItemText>{category}</ListItemText>
                    </MenuItem>
                  );
                })}
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
                  // fontWeight="500"
                  fontSize={`${isGTE700 ? "19px" : "17px"}`}
                  padding="0px 10px"
                  letterSpacing="0.075px"
                  color={BLACK_85P}
                >
                  {`Data Viz &${isGTE700 ? " Misc" : ""}`}
                </Typography>
              </Box>
              {/* </MenuTooltip> */}
              {/* Menu3: About */}
              <Box
                onClick={onAboutClick}
                sx={{
                  cursor: "pointer",
                  backgroundColor: `${
                    selectedPage === "about"
                      ? "rgba(255,255,0,.75)"
                      : "transparent"
                  }`,
                  "&:hover": {
                    backgroundColor: YELLOW_75P,
                    "& .MuiTypography-body1": {
                      color: "black",
                    },
                  },
                }}
              >
                <Typography
                  // fontWeight="500"
                  fontSize={`${isGTE700 ? "19px" : "17px"}`}
                  padding="0px 10px"
                  color={BLACK_85P}
                >
                  i
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
    </div>
  );
};

export default Topbar;
