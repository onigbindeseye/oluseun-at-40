import React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import birthday from "./birthday";
const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const Wishes = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box padding={{ xs: "20% 0%", sm: "2% 0%" }}>
      <Typography
        variant="h2"
        color="#DD9D37"
        fontWeight={400}
        padding={"5% 0% 2% 0%"}
        fontFamily={"Alex Brush"}
        textAlign={"center"}
      >
        Birthday Wishes
      </Typography>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={5000}
      >
        {birthday.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box paddingTop={{ xs: "6%", sm: "0% " }}>
                <Box width={{ xs: "90%", sm: "75% " }}>
                  <Typography
                    variant="h5"
                    fontWeight={700}
                    textAlign={"center"}
                    paddingBottom={{ xs: "4%", sm: "0% " }}
                    color={"#DD9D37"}
                    fontFamily={"Cardo"}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    color="#000"
                    fontWeight={400}
                    paddingTop={{ xs: "6%", sm: "2% " }}
                    paddingBottom={{ xs: "4%", sm: "2% " }}
                    lineHeight={1.75}
                    textAlign={"center"}
                  >
                    {step.greetings}
                  </Typography>
                </Box>

                <Typography
                  variant="h5"
                  fontWeight={700}
                  textAlign={"center"}
                  paddingBottom={{ xs: "4%", sm: "0% " }}
                  color={"#071783"}
                  fontFamily={"Cardo"}
                >
                  - {step.name}
                </Typography>
                <Typography
                  variant="body1"
                  color="#000"
                  fontWeight={700}
                  paddingBottom={"2%"}
                  textAlign={"center"}
                >
                  {step.relationship}
                </Typography>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
};

export default Wishes;
