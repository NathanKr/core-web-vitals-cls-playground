import { PARENT_WITH_PX } from "@/utils/constants";
import { infoSmall } from "@/utils/utils";

const HeadingSmall = () => {
  return (
    <h3>
      image width ({infoSmall.imgWidthPx}px) {"<"} than parent width (
      {PARENT_WITH_PX}px)
    </h3>
  );
};

export default HeadingSmall;
