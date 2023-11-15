import React, { useContext, useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import WebIcon from "@mui/icons-material/Web";
import DesktopMacIcon from "@mui/icons-material/DesktopMac";
import ConnectedTvIcon from "@mui/icons-material/ConnectedTv";
import TouchAppIcon from "@mui/icons-material/TouchApp";
import ExtensionIcon from "@mui/icons-material/Extension";
import { SiteContext } from "../contexts/SiteState";
import { WorkCatetories } from "../components/Topbar";
import "../styles/page.scss";

const BLACK_85P = "rgba(0,0,0,.85)";
const API_URL = "/data/works.json";

const Works = () => {
  const { selectedSubIndex } = useContext(SiteContext);
  const [works, setWorks] = useState([]);

  const Icons = [
    WebIcon,
    DesktopMacIcon,
    ConnectedTvIcon,
    TouchAppIcon,
    ExtensionIcon,
  ];

  let ComponentName;
  if (selectedSubIndex > 0) {
    ComponentName = Icons[selectedSubIndex];
  }

  //-- get data
  useEffect(() => {
    const getData = async () => {
      const result = await (await fetch(API_URL)).json();
      console.log("data ? ", result.data);
      setWorks(result.data);
    };
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const cardStyles = {
    card: {
      // width: "265px",
      borderRadius: "0px",
      border: "0.5px solid rgba(0,0,0,.5)",
    },

    media: {
      // width: "265px"
    },

    title: {
      mt: "12px",
      lineHeight: "1.25",
      // textTransform: "uppercase"
    },

    desc: {
      mt: "8px",
      mb: "8px",
      fontSize: "0.70rem",
      lineHeight: "1.25",
    },

    award: {
      fontSize: "0.70rem",
      lineHeight: "1.25",
      fontWeight: "bold",
    },

    awardList: {
      fontSize: "0.70rem",
      lineHeight: "1.25",
      fontWeight: "normal",
    },
  };

  return (
    <div className="page works">
      {selectedSubIndex > 0 && ComponentName && (
        //-- page headline
        <div className="headlineHolder">
          <Typography variant="h1">
            {WorkCatetories[selectedSubIndex]}
          </Typography>
          <ComponentName
            fontSize="large"
            sx={{ color: BLACK_85P, ml: "12px" }}
          />
        </div>
      )}
      {works.length > 0 && (
        <Box>
          <Grid
            container
            spacing={{ xs: 2, sm: 4, md: 5, lg: 6 }}
          >
            {works.map((workData, index) => (
              <Grid
                item
                key={index}
                lg={3}  //4 items in a row
                md={4}  //3 items 
                sm={6}  //2 items 
                xs={6}  //2 items
                // xs={12}
              >
                <Card variant="outlined" sx={cardStyles.card}>
                  <CardMedia
                    component="img"
                    image={workData["attributes"].imgSrc}
                    // alt={imgAlt}
                    sx={cardStyles.media}
                  />
                </Card>
                <Typography variant="h6" sx={cardStyles.title}>
                  {workData["attributes"].header}
                </Typography>
                <Typography sx={cardStyles.desc}>
                  {workData["attributes"].descText}
                </Typography>
                {workData["attributes"].Awards && (
                  <Typography sx={cardStyles.award}>
                    Awards
                    {workData["attributes"].Awards.map((award, index) => (
                      <Typography key={index} sx={cardStyles.awardList} fontWeight={400} >
                        {award}
                      </Typography>
                    ))}
                  </Typography>
                )}
              </Grid>
            ))}
          </Grid>
        </Box>
      )}
      <div className="footer">&copy; 2023 &nbsp;&nbsp;&nbsp;Studio UU+i</div>
    </div>
  );
};

export default Works;
