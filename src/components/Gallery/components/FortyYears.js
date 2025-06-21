import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/images/img_15.jpg";
import gallery2 from "../../../assets/images/img_16.jpg";
import gallery3 from "../../../assets/images/img_17.jpg";
import gallery4 from "../../../assets/images/img_18.jpg";
import gallery5 from "../../../assets/images/img_19.jpg";
import gallery6 from "../../../assets/images/img_20.jpg";
import gallery7 from "../../../assets/images/img_21.jpg";
import gallery8 from "../../../assets/images/img_22.jpg";
import gallery9 from "../../../assets/images/img_23.jpg";
import gallery10 from "../../../assets/images/img_24.jpg";
import gallery11 from "../../../assets/images/img_12.jpg";
import gallery12 from "../../../assets/images/img_13.jpg";
import gallery13 from "../../../assets/images/img_14.jpg";
import gallery14 from "../../../assets/images/img_25.jpg";
import gallery15 from "../../../assets/images/img_26.jpg";
import gallery16 from "../../../assets/images/img_27.jpg";
import gallery17 from "../../../assets/images/img_29.jpg";
import gallery18 from "../../../assets/images/img_30.jpg";
import gallery19 from "../../../assets/images/img_31.jpg";
import gallery20 from "../../../assets/images/img_33.jpg";
import gallery21 from "../../../assets/images/img_34.jpg";
import gallery22 from "../../../assets/images/img_35.jpg";
import gallery23 from "../../../assets/images/img_36.jpg";
import gallery24 from "../../../assets/images/img_37.jpg";
import gallery25 from "../../../assets/images/img_38.jpg";
import gallery26 from "../../../assets/images/img_39.jpg";
import gallery27 from "../../../assets/images/img_40.jpg";
import gallery28 from "../../../assets/images/img_41.jpg";
import gallery29 from "../../../assets/images/img_42.jpg";
import gallery30 from "../../../assets/images/img_43.jpg";
import gallery31 from "../../../assets/images/img_45.jpg";
import gallery32 from "../../../assets/images/img_51.jpg";
import gallery33 from "../../../assets/images/img_61.jpg";

const FortyYears = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    { img: gallery1, description: "Oluseun with his wife, Oluwaseun" },
    { img: gallery2, description: "Oluseun's portrait" },
    { img: gallery3, description: "Oluseun's portrait" },
    { img: gallery4, description: "Oluseun's portrait" },
    {
      img: gallery5,
      description: "Oluseun with his mum and brother at BudgIT @ 5",
    },
    { img: gallery32, description: "Oluseun with his siblings" },
    { img: gallery6, description: "Oluseun with BankyW" },
    {
      img: gallery7,
      description: "Oluseun at the 2025 Ogbomoso Digital Economy Summit",
    },
    {
      img: gallery8,
      description: "Oluseun with the Hon. Minister of Foreign Affairs",
    },
    {
      img: gallery9,
      description: "Oluseun gisting with the Richest Man in Africa",
    },
    {
      img: gallery10,
      description: "Oluseun at the George Washington University",
    },
    {
      img: gallery11,
      description:
        "Oluseun obtaining his Masters in Int'l Policy & Practice from the George Washington University",
    },
    {
      img: gallery12,
      description:
        "Oluseun with Hon. Akin Alabi representing his Mum Constituent",
    },
    { img: gallery13, description: "Oluseun with his mum in Abuja" },
    {
      img: gallery14,
      description: "Oluseun visiting the Sierra Leone Office of BudgIT",
    },
    {
      img: gallery15,
      description:
        "Oluseun with Hon. Minister of Communications and Digital Economy",
    },
    {
      img: gallery16,
      description: "Oluseun speaking at the 2024 Platform Nigeria event",
    },
    {
      img: gallery17,
      description:
        "Oluseun speaking at an event in Indiana University Bloomington, US",
    },
    {
      img: gallery18,
      description:
        "Oluseun on an official assignment to the office of the Chairman of EFCC",
    },
    {
      img: gallery19,
      description:
        "Oluseun paying homage to the Soun of Ogbomoso, Oba Ghandi Olaoye, Orumogege III",
    },
    { img: gallery20, description: "Oluseun speaking at an event in FUNAAB" },
    { img: gallery21, description: "Oluseun visiting Harvard Business School" },
    {
      img: gallery22,
      description: "Oluseun exercising his civic rights in 2023",
    },
    {
      img: gallery23,
      description: "Oluseun speaking at Chatham House, London",
    },
    {
      img: gallery24,
      description: "Oluseun with the former Minister of State for Finance",
    },
    { img: gallery25, description: "Oluseun addressing the press" },
    {
      img: gallery26,
      description: "Oluseun with Dr. Oby Ezekwesili and Chimamanda",
    },
    {
      img: gallery27,
      description:
        "Oluseun with the former President Olusegun Obasanjo and other Lions' Club members",
    },
    {
      img: gallery28,
      description: "Oluseun at the opening of BudgIT US office",
    },
    {
      img: gallery29,
      description: "Oluseun at one of the Literacy Awards events in Ogbomoso",
    },
    {
      img: gallery33,
      description:
        "Oluseun at the opening of the Oluseun Onigbinde Resource Centre, Ogbomoso",
    },
    {
      img: gallery30,
      description: "Oluseun speaking with the former Minister of Information",
    },
    {
      img: gallery31,
      description: "Oluseun at the Obama Foundation Scholars programme",
    },
  ];

  const photosToShow = isMd ? photos : photos.slice(0, photos.length);

  return (
    <Box>
      <Typography
        variant="h2"
        color="#DD9D37"
        fontWeight={400}
        padding={{ xs: "20% 0%", sm: "2% 0%" }}
        textAlign={"center"}
        fontFamily={"Alex Brush"}
        data-aos={"fade-up"}
      >
        2016 - 2025 in Pictures
      </Typography>
      <Box marginTop={{ xs: "5%", sm: "2%" }} display="flex" flexWrap="wrap">
        {photosToShow.map((item, index) => (
          <Box
            key={index}
            width={{ xs: "100%", sm: "32.5%" }}
            marginRight={{ xs: "0%", sm: "0.5%" }}
            marginBottom={{ xs: "5%", sm: "1.5%" }}
          >
            <Box
              component="img"
              height={{ xs: "45vh", sm: "350px" }}
              onClick={() => {
                setCurrentImageIndex(index);
                setIsViewerOpen(!isViewerOpen);
              }}
              sx={{
                cursor: "pointer",
                objectFit: "cover",
                width: "100%",
              }}
              src={item.img}
              alt={item.description || "Gallery Image"}
            />
            <Typography
              variant="body2"
              align="center"
              mt={1}
              color={"#071783"}
              fontWeight={700}
            >
              {item.description}
            </Typography>
          </Box>
        ))}

        <FsLightbox
          toggler={isViewerOpen}
          sources={photos.map((photo) => photo.img)}
          slide={currentImageIndex + 1}
        />
      </Box>
    </Box>
  );
};

export default FortyYears;
