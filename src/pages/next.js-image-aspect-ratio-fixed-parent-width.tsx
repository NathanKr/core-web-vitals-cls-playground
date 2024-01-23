import HeadingBigFixed from "@/components/heading-big-fixed";
import HeadingSmallFixed from "@/components/heading-small-fixed";
import NextImageWithAspectRatioFixedParentWidth from "@/components/next-image-with-aspect-ratio-fixed-parent-width";
import ETab from "@/types/e-tab";
import { LOREM_100_STRING } from "@/utils/constants";
import {
  infoBigFixedParentWidth,
  infoSmallFixedParentWidth,
} from "@/utils/utils";

import { Alert } from "@mui/material";

const AspectRatioNextImageFixedParent = () => {
  return (
    <>
      <h1>{ETab.aspectRatioNextImageFixedParent}</h1>
      <h2>
        <Alert severity="success">
          Use next.js Image with fill , and relative+aspect-ratio+width:widthPx
          for parent ==
          {">"} <strong>CLS</strong> ok : 0
        </Alert>
        <Alert severity="success">
          <strong>LCP</strong> is ok ~ 2 sec on average
        </Alert>
      </h2>
      <HeadingSmallFixed />
      <NextImageWithAspectRatioFixedParentWidth
        info={infoSmallFixedParentWidth}
      />
      <HeadingBigFixed />
      <NextImageWithAspectRatioFixedParentWidth
        info={infoBigFixedParentWidth}
      />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default AspectRatioNextImageFixedParent;
