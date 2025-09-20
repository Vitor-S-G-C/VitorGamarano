import { styled } from "@mui/material";
import { type ReactNode } from "react";

interface VideoContainerProps {
  src: string;
  children?: ReactNode;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

const VideoContainer: React.FC<VideoContainerProps> = ({
  src,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
}) => {
  const Container = styled("div")(({ theme }) => ({
    position: "relative",
    width: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    borderRadius: 12,
    boxShadow: "0 4px 12px rgba(0,0,0,0.3)",
    "& video": {
      width: "100%",
      height: "auto",
      display: "block",
      objectFit: "cover",
    },
    // Media queries para mobile
    [theme.breakpoints.down("md")]: {
      borderRadius: 8,
    },
    [theme.breakpoints.down("sm")]: {
      borderRadius: 6,
    },
  }));

  return (
    <Container>
      <video
        src={src}
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
      />
    </Container>
  );
};

export default VideoContainer;
