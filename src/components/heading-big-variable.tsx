import { BIG_LION_IMG_WIDTH_PX } from "@/utils/constants";
import { infoBigVariableParentWidth } from "@/utils/utils";

const HeadingBigVariable = () => {
  return (
    <h3>
      <p>image width ({BIG_LION_IMG_WIDTH_PX}px)</p>
      <p>parent max width ({infoBigVariableParentWidth.parentMaxWidthPx}px)</p>
    </h3>
  );
};

export default HeadingBigVariable;
