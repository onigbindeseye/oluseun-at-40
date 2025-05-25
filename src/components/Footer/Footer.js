import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Avatar from "@mui/material/Avatar";
import { blue, red } from "@mui/material/colors";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedinIcon from "@mui/icons-material/LinkedIn";
import { Divider } from "@mui/material";

const Footer = () => {
  return (
    <Grid container spacing={1} marginTop={2}>
      <Grid item xs={12}>
        <Divider color={"#DD9D37"} />
        <Box
          display="flex"
          justifyContent={"space-between"}
          alignItems={"center"}
          flexWrap={"wrap"}
          width={"100%"}
          marginTop={{ xs: "10%", sm: "3%" }}
        >
          <Box
            width={{ xs: "100%", sm: "70%" }}
            marginLeft={{ xs: "3%", sm: "0%" }}
            marginTop={{ xs: "5%", sm: "0%" }}
          >
            <Typography align={"center"} variant={"subtitle2"} color="#DD9D37">
              &copy;{new Date().getFullYear()} Oluseun Onigbinde. All rights
              reserved
            </Typography>
          </Box>
          <Box
            display={"flex"}
            justifyContent={"space-between"}
            alignItems={"center"}
            flexDirection={{ xs: "row", sm: "row" }}
            width={{ xs: "60%", sm: "15%" }}
            marginRight={{ xs: "0%", sm: "0%" }}
            marginTop={{ xs: "8%", sm: "0%" }}
          >
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://x.com/seunonigbinde"
              title="X"
            >
              <Avatar
                sx={{
                  bgcolor: "#000",
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: "#000",
                  },
                }}
              >
                <XIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://web.facebook.com/oluseun.onigbinde/"
              title="Facebook"
            >
              <Avatar
                sx={{
                  bgcolor: blue[900],
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: blue[900],
                  },
                }}
              >
                <FacebookIcon />
              </Avatar>
            </Box>

            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://www.instagram.com/gbainde/?hl=en"
              title="Instagram"
            >
              <Avatar
                sx={{
                  bgcolor: red[800],
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: red[800],
                  },
                }}
              >
                <InstagramIcon />
              </Avatar>
            </Box>
            <Box
              display={"flex"}
              component="a"
              underline="none"
              target={"_blank"}
              href="https://www.linkedin.com/in/oluseunonigbinde"
              title="LinkedIN"
            >
              <Avatar
                sx={{
                  bgcolor: blue[600],
                  width: 36,
                  height: 36,
                  "&:hover": {
                    bgcolor: blue[600],
                  },
                }}
              >
                <LinkedinIcon />
              </Avatar>
            </Box>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Footer;
