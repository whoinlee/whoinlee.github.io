import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

const About = () => {
  const [showName, setShowName] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const removeCursor = () => {
    const cursor = document.querySelector(".Typewriter__cursor");
    if (cursor) cursor.style.visibility = "hidden";
    console.log("cursor.?", cursor);
    console.log("cursor.style?", cursor.style);
  };

  return (
    <div className="page about">
      <Typography
        variant="h1"
        sx={{ display: "inline-block", wordBreak: "break-word" }}
      >
        <Typewriter
          options={{
            delay: 65,
            deleteSpeed: 25,
            autoStart: true,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("UUUUUUUUUUUUUUUUUUUUUUUUU") //-- 25 Us
              .pauseFor(1500)
              .deleteChars(23)
              .typeString("+")
              .callFunction(() => {
                removeCursor();
              })
              .pauseFor(85)
              
              
              .typeString("i")
              .pauseFor(125)
              .callFunction(() => {
                setShowStatement(true);
              })
              .pauseFor(250)
              .pauseFor(1000)
              .callFunction(() => {
                setShowName(true);
              })
              .pauseFor(125)
              .callFunction(() => {
                setShowFooter(true);
              })
              .start();
          }}
        />
      </Typography>
      {showStatement && (
        // <div className="statement">
        <Typography pt="36px" className="statement">
          I believe in the synergy of working together, <b>U & i</b>, for
          creating the most delightful <b>User Experience</b>.
        </Typography>
      )}
      {showName && (
        <Typography pt="12px" variant="h6">
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
                // .callFunction(() => {
                //   setShowFooter(true);
                // })
                .start();
            }}
          />
        </Typography>
      )}
      {showFooter && (
        <div className="footer">
          &copy; 2023 &nbsp;&nbsp;&nbsp;whoinlee@gmail.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </div>
      )}
    </div>
  );
};

export default About;
