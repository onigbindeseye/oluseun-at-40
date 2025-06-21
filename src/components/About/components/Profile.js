import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profile1 from "../../../assets/images/birthday/1_1.jpg";

const Profile = () => {
  return (
    <Box>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={12}>
          <Typography
            textAlign={"center"}
            variant={"h2"}
            padding={{ xs: "20% 0% 4% 0%", sm: "2% 0%" }}
            color="#DD9D37"
            fontFamily={"Alex Brush"}
          >
            Oluseun Onigbinde
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Typography
            textAlign={"center"}
            variant={"h6"}
            color={"#071783"}
            padding={{ xs: "4%", sm: "2% 6%" }}
          >
            ​Born in Osogbo, Osun State, Oluseun hails from Ile Asipa, Masifa,
            Ogbomoso. He attended Queens Primary School, Oluyoro, Ibadan; St
            John’s College, Ilupeju, Lagos; Loyola College, Ibadan; and the
            Federal University of Agriculture, Abeokuta. He holds a Masters
            degree from The George Washington University. His global
            perspective, shaped by travels to 28 countries, underscores his
            commitment to inclusive civic engagement and public accountability.
            He is happily married to Oluwaseun Agbelusi-Onigbinde with three
            children: Wuraola, Ireoluwa and Adesuwa.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} marginTop={{ xs: "15%", sm: "5%" }}>
          <Box
            component="img"
            height={{ xs: "70vh", sm: "750px" }}
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
            variant={"body1"}
            padding={{ xs: "4% 0% 0% 2%", sm: "2% 0% 0% 4%" }}
          >
            Oluseun Onigbinde founded Kwerty Systems in 2019, a private data
            service company for international clients, which also provides
            investment advisory for inclusive economies. Oluseun Onigbinde is a
            highly respected technology entrepreneur and a pioneer in Nigeria
            and Africa's civic-technology ecosystem. He has dedicated his career
            to leveraging technology to intersect citizen engagement with
            institutional improvement, driving societal change. Over the past
            decade, Oluseun has led the field of social advocacy through
            innovative use of technology, simplifying budgets and public
            spending for citizens. His efforts have significantly raised the
            standards of transparency and accountability in government,
            particularly in the areas of fiscal analysis, civic technology, and
            data representation. Through his work, he has crafted insights for
            both civic and industry decisions, impacting over 22 million
            citizens across West Africa and fostering their interest in the
            value of data for communities. With headquarters in Lagos, Nigeria,
            BudgIT has offices across five African countries and also in the
            United States.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 0% 10% 2%", sm: "2% 0% 2% 4%" }}
          >
            Since founding BudgIT (budgit.org) in 2011, Oluseun has served as
            its Founder, Director, and Chief Executive. Under his leadership,
            BudgIT has developed notable initiatives like Tracka (a service
            delivery tracking platform) and Fitila (a bespoke design and data
            agency for private clients). BudgIT’s work has received commendation
            from global figures such as Bono, Mark Zuckerberg, Bill Gates, and
            Ngozi Okonjo-Iweala. It has also been supported by major
            organizations including the Bill and Melinda Gates Foundation, Ford
            Foundation, Luminate, Omidyar Network, Open Society Foundations, and
            MacArthur Foundation. BudgIT’s for-profit spinoff, Fitila, which
            Oluseun chairs, has collaborated with clients like Nestlé, the UK
            Department for International Development, and Union Bank.
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Profile;
