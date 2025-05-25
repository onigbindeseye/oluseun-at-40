import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

const dotenv = require("dotenv");

const RsvpForm = () => {
  dotenv.config();

  const [attendance, setAttendance] = useState({
    attend: "",
  });

  const handleAttendanceChange = (e) => {
    setAttendance({
      ...attendance,
      attend: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        e.target,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          Swal.fire({
            icon: "success",
            title: "RSVP Sent Successfully",
          });
        },
        (error) => {
          Swal.fire({
            icon: "error",
            title: "Ooops, something went wrong",
            text: error.text,
          });
        }
      );
    setAttendance({ attend: "" });
    e.target.reset();
  };

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

  return (
    <Box margin={{ xs: "5% 0%", sm: "5% 0% 0% 0%" }}>
      <Typography
        variant="h2"
        color="#DD9D37"
        fontWeight={400}
        padding={"5% 0% 2% 0%"}
        fontFamily={"Alex Brush"}
        textAlign={"center"}
      >
        RSVP
      </Typography>
      <Box
        width={"100%"}
        margin={{ xs: "5% 0%", sm: "2% 0% 2% 0%" }}
        display={"flex"}
        justifyContent={"space-between"}
        alignItems={"flex-start"}
        flexWrap={"wrap"}
      >
        <Box
          width={{ xs: "100%", sm: "50%" }}
          marginLeft={{ xs: "0%", sm: "0%" }}
        >
          <form onSubmit={handleSubmit}>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={12}>
                <TextField
                  placeholder="Full Name *"
                  variant="outlined"
                  name={"name"}
                  fullWidth
                  required
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <FormControl required>
                  <Typography
                    fontWeight={700}
                    variant="body1"
                    padding={"2% 0%"}
                    color={"#071783"}
                  >
                    Will you be attending?
                  </Typography>
                  <RadioGroup
                    row
                    name="attend"
                    value={attendance.attend}
                    onChange={handleAttendanceChange}
                  >
                    <FormControlLabel
                      value={"Attending"}
                      control={<Radio required />}
                      label="Yes, I am attending"
                    />
                    <FormControlLabel
                      value="Not attending"
                      control={<Radio required />}
                      label="No, I am not attending"
                    />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  placeholder="Phone Number *"
                  variant="outlined"
                  name={"phone"}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  placeholder="Email *"
                  variant="outlined"
                  name={"email"}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <Typography
                  fontWeight={700}
                  variant="body1"
                  padding={"2% 2%"}
                  color={"#071783"}
                >
                  Birthday Wishes
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  placeholder="Title *"
                  variant="outlined"
                  name={"title"}
                  fullWidth
                />
              </Grid>
              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  placeholder="Relationship with Oluseun/Organization *"
                  variant="outlined"
                  name={"relationship"}
                  fullWidth
                />
              </Grid>

              <Grid item xs={12} sm={12}>
                <TextField
                  required
                  placeholder="Birthday Wishes *"
                  variant="outlined"
                  name={"message"}
                  fullWidth
                  multiline
                  rows={4}
                />
              </Grid>
              <Grid
                item
                container
                xs={12}
                margin={{ xs: "5% 0%", sm: "2% 0%" }}
              >
                <Box width={"100%"}>
                  <ColorButton
                    size={"large"}
                    variant={"contained"}
                    type={"submit"}
                  >
                    Submit
                  </ColorButton>
                </Box>
              </Grid>
            </Grid>
          </form>
        </Box>
        <Box
          width={{ xs: "100%", sm: "48%" }}
          padding={{ xs: "25% 1%", sm: "0% 2%" }}
        >
          {" "}
          <Box
            component={"iframe"}
            borderRadius={2}
            minHeight={500}
            width="100%"
            height="100%"
            frameBorder="0"
            title="map"
            marginHeight="0"
            marginWidth="0"
            scrolling="no"
            src="https://www.google.com/maps/embed/v1/place?q=the+monarch+event+center&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          />
        </Box>
      </Box>
    </Box>
  );
};

export default RsvpForm;
