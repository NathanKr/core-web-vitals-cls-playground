import HeadingBigFixed from "@/components/heading-big-fixed";
import HeadingSmall from "@/components/heading-small-fixed";
import ImgWithAspectRatio from "@/components/next-image-with-aspect-ratio-fixed-parent-width";
import ETab from "@/types/e-tab";
import { LOREM_100_STRING, PARENT_WIDTH_PX } from "@/utils/constants";
import {
  infoBigFixedParentWidth,
  infoSmallFixedParentWidth,
} from "@/utils/utils";
import { Alert } from "@mui/material";

const AspectRatioHtmlImgFixedParent = () => {
  return (
    <>
      <h1>{ETab.aspectRatioHtmlImgFixedParent}</h1>
      <h2>
        <Alert severity="success">
          Use html img with width : 100% , and relative+aspect-ratio for parent
          ==
          {">"} <strong>CLS</strong> ok : 0
        </Alert>
        <Alert severity="success">
          <strong>LCP</strong> is ok ~ 2 sec
        </Alert>
      </h2>
      <HeadingSmall />
      <ImgWithAspectRatio info={infoSmallFixedParentWidth} />
      <HeadingBigFixed />
      <ImgWithAspectRatio info={infoBigFixedParentWidth} />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default AspectRatioHtmlImgFixedParent;
