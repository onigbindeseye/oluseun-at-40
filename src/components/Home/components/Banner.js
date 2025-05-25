import * as React from "react";
import { useTheme, styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import banner1 from "../../../assets/images/oluseun_2.jpg";
import banner2 from "../../../assets/images/oluseun_3.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "banner_image1",
    imgPath: banner1,
    title: "Celebrating",
    subtitle: "Oluseun Onigbinde @ 40",
    size: "h2",
  },
  {
    label: "banner_image2",
    imgPath: banner2,
    title: "Celebrating",
    subtitle: "A Transparency Advocate @ 40",
    size: "h2",
  },
  {
    label: "banner_image3",
    imgPath: banner1,
    title: "Celebrating",
    subtitle: "A Father, Friend and Mentor @ 40",
    size: "h2",
  },
  {
    label: "banner_image4",
    imgPath: banner2,
    title: "Celebrating",
    subtitle: "An Exceptional Philanthropist @ 40",
    size: "h2",
  },
];

const ColorButton = styled(Button)(() => ({
  color: "#fff",
  width: 200,
  height: 60,
  fontWeight: 400,
  fontSize: "18px",
  textTransform: "capitalize",
  backgroundColor: "#DD9D37",
  border: "2px solid #DD9D37",
  "&:hover": {
    color: "#DD9D37",
    backgroundColor: "#F5EEDC",
    borderColor: "#F5EEDC",
  },
}));

function Banner() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);

  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ flexGrow: 1 }} marginTop={{ xs: "0%", sm: "0%" }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
        interval={7500}
      >
        {images.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
              <Box>
                <Box
                  component="img"
                  height={{ xs: "100vh", sm: "850px" }}
                  display={{ xs: "none", sm: "block" }}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box display={{ xs: "none", sm: "block" }}>
                  <Box
                    position={"absolute"}
                    top={{ xs: "50%", sm: "25%" }}
                    marginLeft={{ xs: "0%", sm: "0%" }}
                    width={{ xs: "100%", sm: "100%" }}
                  >
                    <Typography
                      variant="h2"
                      color="#DD9D37"
                      fontWeight={400}
                      padding={"2% 10% 1% 10%"}
                      fontFamily={"Alex Brush"}
                      textAlign={"center"}
                    >
                      {step.title}
                    </Typography>
                    <Typography
                      variant="h1"
                      color="#fff"
                      fontWeight={300}
                      padding={"0% 10% 0% 10%"}
                      fontFamily={"Cardo"}
                      textAlign={"center"}
                    >
                      {step.subtitle}
                    </Typography>
                    <Box
                      padding={"2% 4%"}
                      display={"flex"}
                      justifyContent={"center"}
                    >
                      <ColorButton
                        component={"a"}
                        variant="contained"
                        size="medium"
                        href={"/rsvp"}
                      >
                        RSVP
                      </ColorButton>
                    </Box>
                  </Box>
                </Box>
                <Box
                  component="img"
                  height={{ xs: "100vh", sm: "110vh" }}
                  display={{ xs: "block", sm: "none" }}
                  sx={{
                    position: "relative",
                    overflow: "hidden",
                    width: "100%",
                    objectFit: "cover",
                  }}
                  src={step.imgPath}
                  alt={step.label}
                />
                <Box
                  display={{ xs: "inline", sm: "none" }}
                  paddingBottom={"10%"}
                  position={"absolute"}
                  top={{ xs: "30%", sm: "22%" }}
                  width={"100%"}
                >
                  <Typography
                    variant={step.size}
                    color="#DD9D37"
                    fontWeight={700}
                    padding={"2% 2% 1% 4%"}
                    textAlign={"center"}
                    fontFamily={"Alex Brush"}
                  >
                    {step.title}
                  </Typography>
                  <Typography
                    variant="h3"
                    color="#fff"
                    fontWeight={700}
                    padding={"2% 2% 1% 4%"}
                    textAlign={"center"}
                    fontFamily={"Cardo"}
                  >
                    {step.subtitle}
                  </Typography>
                  <Box
                    padding={"4% 0%"}
                    display={"flex"}
                    justifyContent={"center"}
                  >
                    <ColorButton
                      component={"a"}
                      variant="contained"
                      size="medium"
                      href={"/rsvp"}
                    >
                      RSVP
                    </ColorButton>
                  </Box>
                </Box>
              </Box>
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
    </Box>
  );
}

export default Banner;
