import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/images/img_2.jpg";
import gallery2 from "../../../assets/images/img_44.jpg";
import gallery3 from "../../../assets/images/img_32.jpg";
import gallery4 from "../../../assets/images/img_28.jpg";
import gallery5 from "../../../assets/images/img_46.jpg";
import gallery6 from "../../../assets/images/img_1.jpg";
import gallery7 from "../../../assets/images/img_9.jpg";
import gallery8 from "../../../assets/images/img_10.jpg";
import gallery9 from "../../../assets/images/img_11.jpg";
import gallery10 from "../../../assets/images/img_54.jpg";
import gallery11 from "../../../assets/images/img_55.jpg";
import gallery12 from "../../../assets/images/img_56.jpg";
import gallery13 from "../../../assets/images/img_57.jpg";
import gallery14 from "../../../assets/images/img_58.jpg";
import gallery15 from "../../../assets/images/img_59.jpg";

const ThirtyYears = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    { img: gallery6, description: "Graduation Day @UNAAB" },
    { img: gallery7, description: "Oluseun with his Dad & Mum" },
    { img: gallery8, description: "Oluseun on his Graduation Day" },
    { img: gallery14, description: "Oluseun with Mr Wale Ajiboye" },
    { img: gallery9, description: "Intense prayer session after Graduation" },
    { img: gallery13, description: "Oluseun rejoicing with his Mum" },
    { img: gallery15, description: "Oluseun with his Dad" },
    { img: gallery1, description: "Oluseun reporting for National duties" },
    { img: gallery12, description: "Oluseun during NYSC" },
    {
      img: gallery2,
      description: "Oluseun pitching the idea of BudgIT, March 26, 2011",
    },
    { img: gallery3, description: "Oluseun in the early days of BudgIT" },
    { img: gallery5, description: "Oluseun in the early days of BudgIT" },
    { img: gallery10, description: "Oluseun with his mum at his wedding" },
    { img: gallery11, description: "Oluseun with his mum at his wedding" },
    {
      img: gallery4,
      description: "Oluseun with Dr. (Mrs) Ngozi Okonjo-Iweala",
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
        2006 - 2015 in Pictures
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

export default ThirtyYears;
