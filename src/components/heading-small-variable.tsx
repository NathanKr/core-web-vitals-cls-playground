import { SMALL_LION_IMG_WIDTH_PX } from "@/utils/constants";
import { infoSmallVariableParentWidth } from "@/utils/utils";

const HeadingSmallVariable = () => {
  return (
    <h3>
      image width ({SMALL_LION_IMG_WIDTH_PX}px) , parent max width (
      {infoSmallVariableParentWidth.parentMaxWidthPx}px)
    </h3>
  );
};

export default HeadingSmallVariable;
