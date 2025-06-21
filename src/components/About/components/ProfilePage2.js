import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import profile1 from "../../../assets/images/birthday/8.jpg";

const ProfilePage2 = () => {
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
            "Oluseun Onigbinde was named one of the 100 Companies to Inspire
            Africa by the London Stock Exchange in 2019"
          </Typography>
        </Grid>
        <Grid item xs={12} sm={7}>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 2% 0% 0%", sm: "2% 4% 0% 0%" }}
          >
            As a leader in the civic-tech ecosystem, Oluseun also founded Civic
            Hive, Nigeria’s leading incubator for civic-tech ideas. Civic Hive
            has supported over 40 organizations in data, design, and technology
            development. Additionally, during his time as a Knight Fellow with
            the US-based International Center for Journalists, he revolutionized
            the use of health data by connecting data-driven designs with
            newsrooms and civic leaders. Oluseun Onigbinde founded Kwerty
            Systems in 2019, a private data service company for international
            clients, which also provides investment advisory for inclusive
            economies.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 2% 10% 0%", sm: "2% 4% 2% 0%" }}
          >
            Oluseun’s entrepreneurial achievements have earned international
            recognition. He was named one of the 100 Companies to Inspire Africa
            by the London Stock Exchange in 2019 and one of the 100 Most
            Influential Africans. He is also a recipient of prestigious honors,
            including the Bloomberg Media Fellowship, Obama Foundation
            Scholarship at Columbia University, Archbishop Desmond Tutu
            Fellowship, Quartz Africa 30 Innovators Award, Knight Foundation
            Fellowship, Aspen New Voices Fellowship, Ashoka Fellowship,
            Harambean (Harambe Entrepreneur Alliance), Seras Award for
            Outstanding Leader, and the JCI TOYP Award.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 2% 10% 0%", sm: "0% 4% 2% 0%" }}
          >
            A strong advocate for fiscal transparency and the power of Open
            Data, Oluseun received the Future Awards Prize for Science and Tech
            Innovation in 2012. In 2019, he was appointed as a Technical Adviser
            to Nigeria’s Ministry of Budget and National Planning.
          </Typography>
          <Typography
            textAlign={"left"}
            variant={"body1"}
            padding={{ xs: "4% 2% 10% 0%", sm: "0% 4% 2% 0%" }}
          >
            Through The Proximity Trust, Oluseun has demonstrated his commitment
            to his roots and communities. He has rebuilt a computer lab for his
            alma mater, Loyola College, and provided over 700 scholarships for
            youths in Christ Apostolic Church, Agbala Itura, Ibadan, since 2019.
            In 2024, he transformed The Proximity Trust into the Oluseun
            Onigbinde Resource Centre, which has supported his alma mater’s
            library, organized literacy awards program and also provided free
            internet access and learning materials to young people in Ogbomoso.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={5} marginTop={{ xs: "6%", sm: "0%" }}>
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
