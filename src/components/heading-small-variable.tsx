import { SMALL_LION_IMG_WIDTH_PX } from "@/utils/constants";
import { infoSmallVariableParentWidth } from "@/utils/utils";


const HeadingSmallVariable = () => {
  return (
    <h3>
      <p>image width ({SMALL_LION_IMG_WIDTH_PX}px)</p>
      <p>parent max width ({infoSmallVariableParentWidth.parentMaxWidthPx}px)</p>
    </h3>
  );
};

export default HeadingSmallVariable;
