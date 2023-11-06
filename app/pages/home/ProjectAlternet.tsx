import React, { useContext } from "react";
import { Box, Card, Typography, useTheme } from "@mui/material";
import FlexBetBox from "@/app/components/base/FlexBetBox";
import WorkCardWide from "@/app/components/base/WorkCardWide";
import { SiteContext } from "../../page";

const ProjectAlternet = () => {
  const theme = useTheme();
  const { isXS } = useContext<any>(SiteContext);

  const openLink = (url: string) => {
    window.open(url, "_blank")?.focus();
  };

  const titleContent = (
    <>
      <Typography
        variant="h2"
        sx={{
          cursor: "pointer",
          "&:hover": {
            color: "#1976d2",
          },
        }}
        color={theme.palette.primary.light}
        onClick={() => openLink("http://www.alternetinc.com/index.html")}
      >
        Alternet
      </Typography>
      <Typography
        variant="h2"
        sx={{
          cursor: "default",
          width: `${isXS ? "275px" : "186px"}`,
          backgroundColor: "rgba(0, 0, 0, .85)",
          color: "#fefefe",
          mt: "2px",
          mb: "2px",
        }}
      >
        Large Scale
      </Typography>
      <Typography
        variant="h2"
        sx={{
          cursor: "default",
          width: `${isXS ? "275px" : "186px"}`,
          backgroundColor: "rgba(0, 0, 0, .85)",
          color: "#fefefe",
          mb: "2px",
        }}
      >
        Data-Driven
      </Typography>
      <Typography
        variant="h2"
        sx={{
          width: `${isXS ? "275px" : "260px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("http://www.alternetinc.com/bmg.html")}
      >
        Music Publishing Application
      </Typography>
      <Typography variant="h2" sx={{ cursor: "default" }}>
        and
      </Typography>
      <Typography
        variant="h2"
        sx={{
          width: `${isXS ? "275px" : "265px"}`,
          textDecoration: "underline",
          cursor: "pointer",
          "&:hover": { backgroundColor: "yellow" },
        }}
        onClick={() => openLink("http://www.alternetinc.com/ivy.html")}
      >
        Interactive Video Platform
      </Typography>
    </>
  );

  const projectCardStyles = {
    card: {
      padding: "18px",
      paddingRight: "0px",
      minWidth: 874,
      minHeight: 560,
      border: "none",
      borderRadius: "12px",
      borderTopRightRadius: 0,
      borderBottomRightRadius: 0,
      backgroundColor: "rgba(150, 150, 150, .075)", //-- grey
      // backgroundColor: "rgba(66, 165, 245, .075)"  //-- light blue
    },

    vGap: "10px",
    hGap: "6px",
  };

  return (
    <div className="project appD">
      <FlexBetBox
        sx={{ justifyContent: `${isXS ? "center" : "space-between"}` }}
      >
        <Box minWidth={275} sx={{ textAlign: `${isXS ? "center" : "left"}` }}>
          {titleContent}
        </Box>
        {!isXS && (
          <Card variant="outlined" sx={projectCardStyles.card}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "flex-start",
                gap: "10px",
              }}
            >
              <WorkCardWide
                imgPath="/media/alternetBMG425x250.jpg"
                imgWidth={425}
                imgHeight={250}
                cardWidth={858}
                imgAlt="BMG/ZOMBA Music Publishing"
                cardTitle="BMG/ZOMBA Music Publishing"
                cardDesc="Dynamic data driven RIAs for music album publishing, supporting 4 templates (Sony BMG, Killer Tracks, Koka Media, and FirstCom) in 11 languages"
                buttonLabel="See More"
                onClick={() => openLink("http://www.alternetinc.com/bmg.html")}
              />
              <WorkCardWide
                imgPath="/media/alternetIVY425x250.jpg"
                imgWidth={425}
                imgHeight={250}
                cardWidth={858}
                imgAlt="Interactive Video Platform"
                cardTitle="Ivy™, The Interactive Video Agency"
                cardDesc="Interactive Video Platform built utilizing MVC design pattern based framework, ARIAware"
                buttonLabel="See More"
                onClick={() => openLink("http://www.alternetinc.com/ivy.html")}
              />
            </Box>
          </Card>
        )}
      </FlexBetBox>
    </div>
  );
};

export default ProjectAlternet;
