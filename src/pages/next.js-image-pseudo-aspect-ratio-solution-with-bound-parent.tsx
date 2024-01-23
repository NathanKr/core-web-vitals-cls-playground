import ETab from "@/types/e-tab";
import Image from "next/image";
import {
  BIG_LION_IMG,
  BIG_LION_IMG_HEIGHT_PX,
  BIG_LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
  PARENT_WIDTH_PX,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const KeepPseudoAspectRatioNextImage = () => {
  const aspectRatio = BIG_LION_IMG_WIDTH_PX / BIG_LION_IMG_HEIGHT_PX;
  const paddingTopPercentage = `${(100 * 1) / aspectRatio}%`;

  return (
    <>
      <h1>{ETab.keepPseudoAspectRatioNextImage}</h1>
      <h2>
        <Alert severity="error">
          Use next.js Image with fill , and relative\absolute for parents ==
          {">"} CLS ok but elements after it have wrong layout
        </Alert>
      </h2>
      <div style={{ position: "absolute" }}>
        <div
          style={{
            width: `${PARENT_WIDTH_PX}px`,
            position: "relative",
            paddingTop: paddingTopPercentage,
          }}
        >
          <Image src={`/${BIG_LION_IMG}`} alt="some title" fill={true} />
        </div>
      </div>

      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default KeepPseudoAspectRatioNextImage;
