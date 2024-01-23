import HeadingBigVariable from "@/components/heading-big-variable";
import HeadingSmallVariable from "@/components/heading-small-variable";
import ImgWithAspectRatioVariableParentWidth from "@/components/img-with-aspect-ratio-variable-parent-width";
import ETab from "@/types/e-tab";
import {
  infoBigVariableParentWidth,
  infoSmallVariableParentWidth,
} from "@/utils/utils";

const VariableParentWidth = () => {
  return (
    <>
      <h1>{ETab.variableParentWidth}</h1>
      <h3>Big image</h3>
      <HeadingBigVariable />
      <ImgWithAspectRatioVariableParentWidth
        info={infoBigVariableParentWidth}
      />
      <h3>Small image</h3>
      <HeadingSmallVariable />
      <ImgWithAspectRatioVariableParentWidth
        info={infoSmallVariableParentWidth}
      />
    </>
  );
};

export default VariableParentWidth;
