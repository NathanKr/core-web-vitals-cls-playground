import { BIG_LION_IMG_WIDTH_PX } from "@/utils/constants";
import { infoBigVariableParentWidth } from "@/utils/utils";

const HeadingBigVariable = () => {
  return (
    <h3>
      image width ({BIG_LION_IMG_WIDTH_PX}px) , parent max width (
      {infoBigVariableParentWidth.parentMaxWidthPx}px)
    </h3>
  );
};

export default HeadingBigVariable;
