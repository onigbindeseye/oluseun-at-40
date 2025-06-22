import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profile1 from "../../../assets/images/birthday/8.jpg";

const ProfilePage2 = () => {
  return (
    <Box paddingTop={{ xs: "25%", sm: "5%" }} data-aos={"fade-up"}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography
            textAlign={"center"}
            variant={"h4"}
            color={"#071783"}
            padding={{ xs: "4% 0% 4% 0%", sm: "2% 0% 2% 0%" }}
            fontFamily={"Alex Brush"}
          >
            "He has rebuilt a computer lab for his alma mater, Loyola College,
            and provided over 700 scholarships for youths in Christ Apostolic
            Church, Agbala Itura, Ibadan, since 2019"
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          marginTop={{ xs: "6%", sm: "0%" }}
          display={{ xs: "block", sm: "none" }}
        >
          <Box
            component="img"
            height={{ xs: "70vh", sm: "650px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={profile1}
            alt={"Profile Image"}
          />
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            textAlign={"left"}
            variant={"h4"}
            padding={{ xs: "4% 2% 0% 0%", sm: "2% 4% 0% 0%" }}
            fontWeight={700}
            color={"#071783"}
            fontFamily={"Cardo"}
          >
            God's Engineering
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"h6"}
            padding={{ xs: "4% 2% 0% 0%", sm: "2% 4% 0% 0%" }}
          >
            Oluseun Onigbinde has visited at least 28 countries expanding
            conversations on the need for accountability & inclusive civic
            engagement. He has contributed to over 40 BudgIT publications on
            issues of fiscal transparency, accountability, civic engagement,
            extractives reform and public sector reform. He has worked with the
            National Assembly on Cost of Governance reform committee and also
            briefly served as Technical Adviser to the Minister of State for
            Budget and National Assembly.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"h6"}
            padding={{ xs: "4% 2% 0% 0%", sm: "2% 4% 2% 0%" }}
          >
            He has made presentations at Chatham House, Bloomberg Media
            Innovators Africa (Naivasha & Dakar), Jesus House DC, This Present
            House, Covenant Nation's The Platform, Daystar’s Excellence in
            Leadership Conference, Open Government Partnership Summits (London,
            Paris & Ottawa), Skoll Foundation Summit (Oxford), Open Knowledge
            Conference (Helsinki & Berlin), African Philanthropy Forum and
            Transparency Camp. He's also TV analyst for Channels TV, CNBC Africa
            and TVC Nigeria.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"h6"}
            padding={{ xs: "4% 2% 10% 0%", sm: "0% 4% 2% 0%" }}
          >
            Oluseun Onigbinde received education at Loyola College, Ibadan,
            Federal University of Agriculture, Abeokuta, Stanford University &
            Columbia University.
          </Typography>
        </Grid>
        <Grid
          item
          xs={12}
          sm={5}
          marginTop={{ xs: "6%", sm: "0%" }}
          display={{ xs: "none", sm: "block" }}
        >
          <Box
            component="img"
            height={{ xs: "70vh", sm: "650px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={profile1}
            alt={"Profile Image"}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage2;
