import HeadingBigVariable from "@/components/heading-big-variable";
import HeadingSmallVariable from "@/components/heading-small-variable";
import NextImageWithAspectRatioVariableParentWidth from "@/components/next-image-with-aspect-ratio-variable-parent-width";
import ETab from "@/types/e-tab";
import { LOREM_100_STRING } from "@/utils/constants";
import { infoBigVariableParentWidth, infoSmallVariableParentWidth } from "@/utils/utils";


import { Alert } from "@mui/material";

const AspectRatioNextImageVariableParent = () => {
  return (
    <>
      <h1>{ETab.aspectRatioNextImageVariableParent}</h1>
      <h2>
        <Alert severity="success">
          Use next.js Image with fill , and relative+aspect-ratio+max-width:widthPx
          for parent ==
          {">"} <strong>CLS</strong> ok : ....
        </Alert>
        <Alert severity="success">
          <strong>LCP</strong> is ok ~ ... sec
        </Alert>
      </h2>
      <HeadingSmallVariable />
      <NextImageWithAspectRatioVariableParentWidth
        info={infoSmallVariableParentWidth}
      />
      <HeadingBigVariable />
      <NextImageWithAspectRatioVariableParentWidth
        info={infoBigVariableParentWidth}
      />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default AspectRatioNextImageVariableParent;
