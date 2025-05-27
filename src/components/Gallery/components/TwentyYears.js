import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import gallery1 from "../../../assets/images/img_49.jpg";

const TwentyYears = () => {
  const theme = useTheme();

  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const photos = [
    { img: gallery1, description: "Matriculation Day in UNAAB" },
    { img: gallery1, description: "Matriculation Day @UNAAB" },
    { img: gallery1, description: "Matriculation Day @UNAAB" },
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
        1996 - 2005 in Pictures
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

export default TwentyYears;
