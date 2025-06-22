import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profile1 from "../../../assets/images/birthday/1.jpg";

const Profile = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography
            textAlign={"center"}
            variant={"h2"}
            padding={{ xs: "20% 0% 4% 0%", sm: "2% 0% 0% 0%" }}
            color="#DD9D37"
            fontFamily={"Alex Brush"}
          >
            Oluseun Onigbinde
          </Typography>
          <Typography
            textAlign={"center"}
            variant={"h5"}
            padding={{ xs: "0% 0% 4% 0%", sm: "0% 0% 2% 0%" }}
            color="#071783"
            fontWeight={700}
          >
            Co-founder, BudgIT & Chief Executive, Kwerty
          </Typography>

          <Typography
            variant="h5"
            color="#071783"
            fontWeight={400}
            padding={"5% 0% 2% 0%"}
            textAlign={"center"}
            fontStyle={"italic"}
          >
            "Olúwa ló pin, kí se agbára"
            <Typography
              component={"span"}
              variant="h5"
              color="#071783"
              fontWeight={700}
              textAlign={"center"}
              fontStyle={"normal"}
              fontFamily={"Alex Brush"}
            >
              {" "}
              - Ayinla Omowura
            </Typography>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography
            textAlign={"center"}
            variant={"h6"}
            color={"#071783"}
            padding={{ xs: "4%", sm: "2% 6%" }}
          >
            Oluseun Onigbinde was born on September 18, 1985, in Osogbo, Osun
            State. He is from Ile Asipa, Masifa, Ogbomoso. Oluseun Onigbinde
            previously worked as Strategy Officer at First Bank of Nigeria.
            Oluseun Onigbinde is a member of the ONE Africa Policy Advisory
            Board. He is a member of Covenant Nation and Christ Apostolic
            Church, Agbala Itura, Ibadan. He is a member of Ikeja Dynamic Lions
            Club.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} marginTop={{ xs: "15%", sm: "5%" }}>
          <Box
            component="img"
            height={{ xs: "80vh", sm: "780px" }}
            sx={{
              objectFit: "cover",
              width: "100%",
            }}
            src={profile1}
            alt={"Profile Image"}
          />
        </Grid>
        <Grid item xs={12} sm={7} marginTop={{ xs: "0%", sm: "5%" }}>
          <Typography
            textAlign={"center"}
            variant={"h4"}
            color={"#071783"}
            padding={{ xs: "4% 0% 4% 0%", sm: "2% 0% 2% 0%" }}
            fontFamily={"Alex Brush"}
          >
            "Oluseun Onigbinde is a highly respected technology entrepreneur and
            a pioneer in Nigeria and Africa's civic-technology ecosystem."
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"h6"}
            padding={{ xs: "4% 0% 0% 2%", sm: "2% 0% 0% 4%" }}
          >
            Oluseun Onigbinde runs The Proximity Trust, a revolving fund with a
            focus on being proximate to his roots and communities. He has worked
            to rebuild a computer lab for his alma mater, Loyola College & also
            provides scholarship awards for youths in Christ Apostolic Church,
            Agbala Itura, Ibadan, since 2019.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"h6"}
            padding={{ xs: "4% 0% 0% 2%", sm: "2% 0% 0% 4%" }}
          >
            Oluseun Onigbinde is an award-winning public data visualization
            expert and open government advocate and co-founder of BudgIT, the
            leading fiscal transparency & data visualization organization in
            Nigeria. Since 2011, he has worked to strengthen fiscal transparency
            in Nigeria, building a reputation for public sector efficiency. His
            organization has reached over 12 million Nigerians and also support
            over 45 civil society organizations and public institutions such as
            NEITI, National Assembly, Nigerian Investment Promotion Commission
            and Kaduna State Government. Oluseun is a recipient of over 10
            international awards.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"h6"}
            padding={{ xs: "4% 0% 10% 2%", sm: "2% 0% 2% 4%" }}
          >
            Oluseun Onigbinde chairs the Citizen's Gavel Board and is also a
            member of the board of trustees for SustyVibes & Eduplana. In 2018,
            Oluseun Onigbinde was selected by the Obama Foundation for its
            inaugural Obama Scholars Program at Columbia University.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
