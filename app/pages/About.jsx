import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

const About = () => {
  const [showName, setShowName] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const removeCursor = () => {
    const cursor = document.querySelector(".Typewriter__cursor");
    if (cursor) {
      cursor.style.opacity = 0;
      cursor.style.visibility = "hidden";
    }
  };

  return (
    <div className="page about">
      {/* <div className="headlineHolder"> */}
        <Typography
          variant="h1"
          sx={{ display: "inline-block", wordBreak: "break-word", mt: "32px" }}
        >
          <Typewriter
            options={{
              delay: 50,
              deleteSpeed: 5,
              autoStart: true,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("UUUUUUUUUUUUUUUUUUUUUUUUU") //-- 25 Us
                .pauseFor(1250)
                .deleteChars(23)
                .typeString("+")
                .pauseFor(85)
                .callFunction(() => {
                  removeCursor();
                })
                .pauseFor(150)
                .typeString("i")
                // .pauseFor(125)
                .callFunction(() => {
                  setShowStatement(true);
                  // removeCursor();
                })
                .pauseFor(2250)
                .callFunction(() => {
                  setShowName(true);
                })
                .pauseFor(750)
                .callFunction(() => {
                  setShowFooter(true);
                })
                .start();
            }}
          />
        </Typography>
      {/* </div> */}
      {showStatement && (
        // <div className="statement">
        <Typography pt="36px" className="statement">
          I believe in the synergy of working together, <b>U</b> & <b>i</b>, for
          creating a <b>U</b>nified <b>U</b>ser Experience.
        </Typography>
      )}
      {showName && (
        <Typography pt="12px" variant="h6" mr="8px">
          <Typewriter
            options={{
              delay: 65,
              deleteSpeed: 35,
              autoStart: false,
              loop: false,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("Whoin Lee") //-- 30 Us
                .start();
            }}
          />
        </Typography>
      )}
      {showFooter && (
        <div className="footer">
          {/* <MailOutlineIcon sx={{fontSize:"12px", color: "rgba(255,255,255, .85)" }} /><span style={{display: "inline-block", marginBottom: "1px"}}>&nbsp;&nbsp;whoinlee@gmail.com&nbsp;&nbsp;&nbsp;</span> */}
          &copy;
          2023&nbsp;&nbsp;&nbsp;whoinlee@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      )}
    </div>
  );
};

export default About;
