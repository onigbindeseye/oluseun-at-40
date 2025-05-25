import * as React from "react";
import Timeline from "@mui/lab/Timeline";
import Box from "@mui/material/Box";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineOppositeContent from "@mui/lab/TimelineOppositeContent";
import TimelineDot from "@mui/lab/TimelineDot";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import logo from "../../../assets/images/oluseun_1.jpg";
import story from "./story";

export default function OluseunTimeline() {
  return (
    <Box margin={{ xs: "25% 0% 10% 0%", sm: "10% 0% 0% 0%" }}>
      <Typography
        variant="h2"
        color="#DD9D37"
        fontWeight={400}
        padding={"2% 0%"}
        textAlign={"center"}
        fontFamily={"Alex Brush"}
      >
        Oluseun in Timeline
      </Typography>
      <Box data-aos={"fade-up"}>
        <Box display={{ xs: "none", sm: "block" }}>
          <Timeline position="alternate">
            {story.map((stories, index) => (
              <TimelineItem key={index} data-aos={"fade-up"}>
                <TimelineOppositeContent
                  sx={{ m: "auto 0" }}
                  align="right"
                  variant="body1"
                  color="#071783"
                  fontWeight={700}
                >
                  {stories.year}
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineConnector sx={{ bgcolor: "#DD9D37" }} />
                  <TimelineDot
                    sx={{ width: 44, height: 44, bgcolor: "#071783" }}
                  >
                    {stories.icon}
                  </TimelineDot>
                  <TimelineConnector sx={{ bgcolor: "#DD9D37" }} />
                </TimelineSeparator>
                <TimelineContent sx={{ py: "12px", px: 2 }}>
                  <Typography
                    variant="h6"
                    component="span"
                    fontWeight={700}
                    color={"#27548A"}
                    gutterBottom
                  >
                    {stories.title}
                  </Typography>
                  <Typography variant="body1" color={"#4f4f4f"}>
                    {stories.description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            ))}
            <TimelineItem>
              <TimelineOppositeContent></TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineDot sx={{ width: 106, height: 106, bgcolor: "#fff" }}>
                  <Box
                    component="img"
                    sx={{
                      objectFit: "cover",
                      width: "100%",
                      borderRadius: "50%",
                    }}
                    src={logo}
                    alt={"image"}
                  />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent sx={{ py: "12px", px: 2 }}></TimelineContent>
            </TimelineItem>
          </Timeline>
        </Box>
        <Box display={{ xs: "block", sm: "none" }}>
          {story.map((stories, index) => (
            <Box
              component={Card}
              key={index}
              margin={"10% 0%"}
              data-aos={"fade-up"}
            >
              <CardContent>
                <Box></Box>
                <Box
                  display={"flex"}
                  justifyContent={"space-between"}
                  alignItems={"center"}
                  width={"100%"}
                >
                  <Box marginLeft={"0%"}>
                    <Avatar sx={{ bgcolor: "#DD9D37", width: 56, height: 56 }}>
                      {stories.icon2}
                    </Avatar>
                  </Box>
                  <Box marginRight={"0%"}>
                    <Chip
                      label={stories.year}
                      sx={{
                        bgcolor: "#071783",
                        color: "#fff",
                        fontWeight: 700,
                      }}
                    />
                  </Box>
                </Box>
                <Typography
                  variant="h5"
                  color="#071783"
                  fontWeight={700}
                  padding={"5% 0%"}
                >
                  {stories.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="#4f4f4f" variant="body1">
                  {stories.description}
                </Typography>
              </CardContent>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
