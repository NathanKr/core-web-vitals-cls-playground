import HeadingBigVariable from "@/components/heading-big-variable";
import HeadingSmallVariable from "@/components/heading-small-variable";
import ImgWithAspectRatioVariableParentWidth from "@/components/img-with-aspect-ratio-variable-parent-width";
import ETab from "@/types/e-tab";
import { LOREM_100_STRING } from "@/utils/constants";
import {
  infoBigVariableParentWidth,
  infoSmallVariableParentWidth,
} from "@/utils/utils";
import { Alert } from "@mui/material";

const AspectRatioHtmlImgVariableParent = () => {
  return (
    <>
      <h1>{ETab.aspectRatioHtmlImgVariableParent}</h1>
      <h2>
        <Alert severity="success">
          Use html img with width : 100% , and
          relative+aspect-ratio+max-width:widthPx for parent ==
          {">"} <strong>CLS</strong> ok : ~0
        </Alert>
        <Alert severity="error">
          <strong>LCP</strong> not ok ~ 4-5 sec
        </Alert>
      </h2>

      <h3>Small image</h3>
      <HeadingSmallVariable />
      <ImgWithAspectRatioVariableParentWidth
        info={infoSmallVariableParentWidth}
      />
      <h3>Big image</h3>
      <HeadingBigVariable />
      <ImgWithAspectRatioVariableParentWidth
        info={infoBigVariableParentWidth}
      />
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default AspectRatioHtmlImgVariableParent;
