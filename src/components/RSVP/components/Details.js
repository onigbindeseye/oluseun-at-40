import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import image1 from "../../../assets/images/invitation.jpg";
import image2 from "../../../assets/images/img_16.jpg";
import image3 from "../../../assets/images/img_41.jpg";
import invitation from "../../../assets/icons/invitation.png";
import cake from "../../../assets/icons/cake.png";
import ballon from "../../../assets/icons/balloon.png";

const Details = () => {
  return (
    <Box>
      <Grid container>
        <Grid items sm={12} md={12}>
          <Typography
            variant="h2"
            color="#DD9D37"
            fontWeight={400}
            padding={{ xs: "25% 0%", sm: "5% 0%" }}
            fontFamily={"Alex Brush"}
            textAlign={"center"}
          >
            You are invited
          </Typography>
        </Grid>
        <Grid items sm={12} md={4}>
          <Box
            component="img"
            height={{ xs: "50vh", sm: "500px" }}
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              objectFit: "cover",
            }}
            src={image1}
            alt="image"
          />
        </Grid>
        <Grid items sm={12} md={4}>
          <Box padding={"20% 8%"}>
            <Box display={"flex"} justifyContent={"center"} marginBottom={"6%"}>
              <Box
                component="img"
                height={{ xs: "1050x", sm: "64px" }}
                width={{ xs: "28%", sm: "14%" }}
                sx={{
                  objectFit: "cover",
                  overflow: "hidden",
                  // width: "100%",
                }}
                src={invitation}
                alt={"icons"}
              />
            </Box>
            <Typography
              textAlign={"center"}
              variant="subtitle1"
              color={"#DD9D37"}
              paddingBottom={"4%"}
            >
              {" "}
              WHAT
            </Typography>
            <Typography
              textAlign={"center"}
              variant="h4"
              color={"#071783"}
              paddingBottom={"2%"}
            >
              {" "}
              JOIN US TO CELEBRATE OLUSEUN ONIGBINDE @ 40
            </Typography>
          </Box>
        </Grid>
        <Grid items sm={12} md={4}>
          <Box
            component="img"
            height={{ xs: "85vh", sm: "500px" }}
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              objectFit: "cover",
            }}
            src={image2}
            alt="image"
          />
        </Grid>
        <Grid items sm={12} md={4}>
          <Box padding={"25% 8%"}>
            <Box display={"flex"} justifyContent={"center"} marginBottom={"6%"}>
              <Box
                component="img"
                height={{ xs: "100px", sm: "64px" }}
                width={{ xs: "30%", sm: "14%" }}
                sx={{
                  objectFit: "cover",
                  overflow: "hidden",
                  // width: "100%",
                }}
                src={cake}
                alt={"icons"}
              />
            </Box>{" "}
            <Typography
              textAlign={"center"}
              variant="subtitle1"
              color={"#DD9D37"}
              paddingBottom={"2%"}
            >
              {" "}
              WHEN
            </Typography>
            <Typography
              textAlign={"center"}
              variant="h4"
              color={"#071783"}
              paddingBottom={"2%"}
            >
              {" "}
              SEPTEMBER 20, 2025
            </Typography>
            <Typography textAlign={"center"}> 2PM</Typography>
          </Box>
        </Grid>
        <Grid items sm={12} md={4}>
          <Box
            component="img"
            height={{ xs: "68vh", sm: "500px" }}
            sx={{
              position: "relative",
              overflow: "hidden",
              width: "100%",
              objectFit: "cover",
            }}
            src={image3}
            alt="image"
          />
        </Grid>
        <Grid items sm={12} md={4}>
          <Box padding={"25% 8%"}>
            <Box display={"flex"} justifyContent={"center"} marginBottom={"6%"}>
              <Box
                component="img"
                height={{ xs: "100px", sm: "64px" }}
                width={{ xs: "30%", sm: "14%" }}
                sx={{
                  objectFit: "cover",
                  overflow: "hidden",
                  // width: "100%",
                }}
                src={ballon}
                alt={"icons"}
              />
            </Box>{" "}
            <Typography
              textAlign={"center"}
              variant="subtitle1"
              color={"#DD9D37"}
              paddingBottom={"2%"}
            >
              {" "}
              WHERE
            </Typography>
            <Typography
              textAlign={"center"}
              variant="h4"
              color={"#071783"}
              paddingBottom={"2%"}
            >
              {" "}
              THE MONARCH EVENT CENTER
            </Typography>
            <Typography textAlign={"center"}>
              {" "}
              138 Lekki - Epe Expy, Lekki Penninsula II, Lekki, Lagos
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Details;
