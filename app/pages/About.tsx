import React, { useRef, useState } from "react";
import Typography from "@mui/material/Typography";
import Typewriter from "typewriter-effect";

const About = () => {
  // const statementRef = useRef(null);
  // const footerRef = useRef(null);
  const [showName, setShowName] = useState(false);
  const [showStatement, setShowStatement] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  const removeCursor = () => {
    const cursor = document.querySelector(".Typewriter__cursor");
    cursor?.remove();
  };

  // const typoStyle = {
  //   statement: {
  //     opacity: 0,
  //     transition: "all 1s ease-out",
  //   },
  //   // footer: {
  //   //   position: absolute,
  //   //   bottom: 0px,
  //   //   opacity: 0,
  //   //   transition: "all .5s ease-out",
  //   // }
  // };

  return (
    <div className="page about">
      <Typography
        variant="h1"
        sx={{ display: "inline-block", wordBreak: "break-word" }}
      >
        <Typewriter
          options={{
            delay: 65,
            deleteSpeed: 35,
            autoStart: true,
            loop: false,
          }}
          onInit={(typewriter) => {
            typewriter
              .typeString("UUUUUUUUUUUUUUUUUUUUUUUUUUUUUU") //-- 30 Us
              .pauseFor(2000)
              .deleteChars(28)
              .pauseFor(150)
              .changeDelay(250)
              .typeString("+i")
              .pauseFor(750)
              .callFunction(() => {
                removeCursor();
                setShowStatement(true)
              })
              .pauseFor(750)
              .callFunction(() => {
                setShowName(true);
              })
              .start();
          }}
        />
      </Typography>
      { showStatement &&
      <div className="statement">
        <Typography pt="36px">
          I believe in the synergy of working together, <b>U & i</b>, for
          creating the most delightful User Experience.
        </Typography>
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
                  .callFunction(() => {
                    setShowFooter(true);
                  })
                  .pauseFor(750)
                  .callFunction(() => {
                    removeCursor();
                  })
                  .start();
              }}
            />
          </Typography>
        )}
      </div>
      }
      {showFooter && (
        <div className="footer">
          &copy; 2023 &nbsp;&nbsp;&nbsp;whoinlee@gmail.com
        </div>
      )}
    </div>
  );
};

export default About;
