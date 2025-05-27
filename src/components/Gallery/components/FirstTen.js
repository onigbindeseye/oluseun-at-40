import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/images/img_6.jpg";
import gallery2 from "../../../assets/images/img_8.jpg";
import gallery3 from "../../../assets/images/img_5.jpg";
import gallery4 from "../../../assets/images/img_7.jpg";
import gallery5 from "../../../assets/images/img_4.jpg";
import gallery6 from "../../../assets/images/img_3.jpg";
import gallery7 from "../../../assets/images/img_47.jpg";
import gallery8 from "../../../assets/images/img_48.jpg";
import gallery9 from "../../../assets/images/img_52.jpg";

const FirstTen = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    { img: gallery9, description: "Oluseun's naming ceremony" },
    { img: gallery7, description: "Oluseun in the hands of his mother" },
    { img: gallery1, description: "Oluseun at 3 Months" },
    { img: gallery2, description: "Oluseun celebrating one year birthday" },
    { img: gallery3, description: "Oluseun celebrating one year birthday" },
    { img: gallery8, description: "Oluseun with mum and younger brother" },
    { img: gallery4, description: "Oluseun leaping for joy" },
    { img: gallery5, description: "Oluseun @ 5" },
    { img: gallery6, description: "Oluseun celebrating 10th year birthday" },
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
      >
        1985 - 1995 in Pictures
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

export default FirstTen;
