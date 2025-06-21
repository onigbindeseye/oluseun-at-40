import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profile1 from "../../../assets/images/birthday/9.jpg";

const ProfilePage3 = () => {
  return (
    <Box paddingTop={{ xs: "25%", sm: "10%" }} data-aos={"fade-up"}>
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
        <Grid item xs={12} sm={5} marginTop={{ xs: "6%", sm: "0%" }}>
          <Box
            component="img"
            height={{ xs: "70vh", sm: "620px" }}
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
            variant={"body1"}
            padding={{ xs: "4% 0% 0% 2%", sm: "2% 0% 0% 4%" }}
          >
            Oluseun has also contributed to academic and policy discourse. He
            published a journal article in the Field Actions Reports detailing
            the processes and impact of his work and has contributed to the
            Aspen Institute Journal (Development as Dignity) and the Data
            Journalism Handbook. He is the author of The Existential Questions,
            a critical analysis of Nigeria’s development trajectory.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 0% 10% 2%", sm: "2% 0% 2% 4%" }}
          >
            Oluseun has also contributed his expertise to several institutions,
            including the Budget Office of the Federation, Nigerian Extractive
            Industries Transparency Initiative, National Assembly, Nigerian
            Investment Promotion Commission, Economic and Financial Crimes
            Commission, Nigerian Economic Summit Group, and Kaduna State
            Government. He chairs the Citizen’s Gavel Board and serves as a
            trustee for SustyVibes and Eduplana. Additionally, he has served as
            a Fiscal Commissioner for the Nigerian Economic Summit Group and as
            a member of the Expert Committee on the Aig-Imoukhuede Public Sector
            Performance Index. He is among the few Nigerians invited to
            prestigious international exchange programs such as the UK
            International Leaders Programme Fellow and the French Government
            Prominent Persons Program Fellow.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 0% 10% 2%", sm: "2% 0% 2% 4%" }}
          >
            As a sought-after speaker, Oluseun has made impactful presentations
            at global events, including Chatham House, Bloomberg Media
            Innovators Africa, Open Government Partnership Summits (London,
            Paris, Ottawa), Skoll Foundation Summit (Oxford), and the African
            Philanthropy Forum. ​He has also spoken at leading Nigerian
            platforms like Covenant Nation’s The Platform, Daystar’s Excellence
            in Leadership Conference, and This Present House. Additionally, he
            contributes as a TV analyst for Channels TV, CNBC Africa, and TVC
            Nigeria, and has authored thought-provoking articles for Stears, The
            Guardian UK, and Premium Times.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProfilePage3;
