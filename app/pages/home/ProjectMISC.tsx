import React, { useContext } from "react";
import { styled } from "@mui/material/styles";
import {
  Box,
  Button,
  Card,
  CardActions,
  CardMedia,
  CardContent,
  Grid,
  Paper,
  Typography,
  // useMediaQuery,
  useTheme,
} from "@mui/material";
import LaunchIcon from "@mui/icons-material/Launch";
import FlexStartBox from "@/app/components/base/FlexStartBox";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../page";

const ProjectMISC = () => {
  const theme = useTheme();
  const { isXS, isLG } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        <Box component="span" fontWeight="bold">
          Kiosk
        </Box>
        , Touchscreen{" "}
        <Box component="span" fontWeight="bold">
          Game
        </Box>
        ,{" "}
        <Box component="span" fontWeight="bold">
          Social Media
        </Box>{" "}
        App, and{" "}
        <Box
          component="span"
          sx={{
            // backgroundColor: "rgba(0, 0, 0, .85)",
            // color: "#fefefe",
            // pl: "2px",
            // pr: "2px"
            fontWeight: "bold",
          }}
        >
          3D
        </Box>{" "}
        Apps
      </Typography>
    </>
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));

  return (
    <div className="project misc">
      <Box sx={{ textAlign: `${isXS ? "center" : "left"}`, mb: "24px" }}>
        {titleContent}
      </Box>
      {/* /*   imgPath = "",
  imgWidth = 0,
  imgHeight = 0,
  imgAlt = "",
  fontSize = "0.75rem",
  cardWidth = 425,
  cardTitle = "",
  cardDesc = "",
  buttonLabel = "",
  cardBkgColor = "rgba(150, 150, 150, .15)",
  onClick, 
  */}
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={1} justifyContent="space-between">
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/MiscOsiao265x210.jpg"
              imgWidth={202}
              imgHeight={165}
              cardWidth={800}
              imgAlt="OSIAO Kiosk"
              cardTitle="Estée Lauder"
              cardDesc="CMS managed OSIAO Kiosk in Chinese and English"
              fontSize=".75rem"
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/MiscXerox265x210.jpg"
              imgWidth={202}
              imgHeight={160}
              cardWidth={800}
              imgAlt="Automated Intelligence Challenge Game"
              cardTitle="Blue Telescope"
              cardDesc={`Xerox 'Automated Intelligence Challenge' Touchscreen Game`}
              fontSize=".75rem"
              awards={new Array("Summit Creative Awards, Gold")}
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/MiscSubtexter265x210.jpg"
              imgWidth={202}
              imgHeight={165}
              cardWidth={800}
              imgAlt="Subtexter Facebook App"
              cardTitle="Droga5, Solarsilk"
              cardDesc="Newcastle 'Subtexter' Facebook App"
              fontSize=".75rem"
              buttonLabel="See More"
              awards={["One Show Awards", "Facebook Studio Awards"]}
              // cardDescPB = "8px"
              onClick={() =>
                openLink(
                  "https://solarsilk.com/work/newcastle-droga5-solarsilk-nobollocks/"
                )
              }
            />
          </Grid>
          <Grid item sm={12} md={6} lg={4}>
            <WorkCardWide
              imgPath="/media/Misc3DCard265x210.jpg"
              imgWidth={202}
              imgHeight={165}
              cardWidth={800}
              imgAlt="3D Holiday Card"
              cardTitle="Ogilvy"
              cardDesc="3D Holiday Card Website with YouTube Videos"
              fontSize=".75rem"
              buttonLabel=""
              isOverlay={false}
            />
          </Grid>
          {isLG && (
            <>
              <Grid item lg={4}>
                <WorkCardWide
                  imgPath="/media/Misc3DIBM265x210.jpg"
                  imgWidth={202}
                  imgHeight={165}
                  cardWidth={800}
                  imgAlt="3D Banner"
                  cardTitle="Ogilvy"
                  cardDesc="IBM, 'Tivoli Foundation' 3D Banner"
                  fontSize=".75rem"
                  buttonLabel=""
                  isOverlay={false}
                />
              </Grid>
              <Grid item lg={4}>
                <WorkCardWide
                  imgPath="/media/Misc3DApple265x210.jpg"
                  imgWidth={202}
                  imgHeight={160}
                  cardWidth={800}
                  imgAlt="3D Apple Iphone"
                  cardTitle="Studio UU+i"
                  cardDesc="The Study of 3D Apple Iphone built in Three.js"
                  fontSize=".75rem"
                  buttonLabel="VIEW"
                  isOverlay={true}
                  onClick={() =>
                    openLink(
                      "https://6509f51c636e3d3eb21f8b0a--lucky-marshmallow-07bdb6.netlify.app/"
                    )
                  }
                />
              </Grid>
            </>
          )}
        </Grid>
      </Box>
      {/* <FlexStartBox gap="12px" sx={{ alignItems: "flex-start" }}> */}
      {/* <Card sx={{ flexGrow: 1, maxWidth: 265 }}>
          <CardMedia
            sx={{ width: 265, height: 210 }}
            image="/media/MiscOsiao265x210.jpg"
            title="OSIAO Kiosk"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Estée Lauder
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="14px">
              OSIAO Kiosk
            </Typography>
          </CardContent>
        </Card> */}
      {/* <Card sx={{ flexGrow: 1, maxWidth: 265, height: "100%" }}>
          <CardMedia
            sx={{ width: 265, height: 210 }}
            image="/media/MiscXerox265x210.jpg"
            title="Automated Intelligence Challenge Game"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Blue Telescope
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="13px">
              Xerox {`"Automated Intelligence Challenge"`} Touchscreen Game
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              fontSize="13px"
              fontWeight="bold"
              mt="6px"
            >
              Summit Creative Award 2015
            </Typography>
          </CardContent>
        </Card> */}
      {/* <Card sx={{ flexGrow: 1, maxWidth: 265 }}>
          <CardMedia
            sx={{ width: 265, height: 210 }}
            image="/media/MiscSubtexter265x210.jpg"
            title="Subtexter Facebook App"
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h6"
              component="div"
              sx={{ display: "flex", justifyContent: "space-between" }}
            >
              Droga5, Solarsilk{" "}
              <Box component="span">
                <Button
                  variant="outlined"
                  onClick={() =>
                    openLink(
                      "https://solarsilk.com/work/newcastle-droga5-solarsilk-nobollocks/"
                    )
                  }
                >
                  <LaunchIcon
                    sx={{
                      cursor: "pointer",
                      fontSize: "20px",
                      // mt:"4px",
                      color: theme.palette.primary.light,
                      "&:hover": {
                        color: theme.palette.primary.dark,
                      }
                    }}
                    onClick={() =>
                      openLink(
                        "https://solarsilk.com/work/newcastle-droga5-solarsilk-nobollocks/"
                      )
                    }
                  />
                </Button>
              </Box>
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="13px">
              Newcastle {`"Subtexter"`} Facebook App
            </Typography>
            <Typography
              variant="body2"
              color="text.primary"
              fontSize="13px"
              fontWeight="bold"
              mt="6px"
            >
              One Show Award 2013, Facebook Studio Award 2013
            </Typography>
          </CardContent>
        </Card> */}
      {/* <Card sx={{ flexGrow: 2, maxWidth: 500 }}>
          <CardMedia
            sx={{ width: 265, height: 210 }}
            image="/media/Misc3DCard265x210.jpg"
            title="Holiday Card"
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              Ogilvy
            </Typography>
            <Typography variant="body2" color="text.secondary" fontSize="13px">
              3D Holiday Card
            </Typography>
          </CardContent>
        </Card> */}
      {/* </FlexStartBox> */}
    </div>
  );
};

export default ProjectMISC;
