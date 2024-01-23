import { PARENT_WITH_PX } from "@/utils/constants";
import { infoBig } from "@/utils/utils";

const HeadingBig = () => {
    return <h3>
    image width ({infoBig.imgWidthPx}px) {">"} than parent width (
    {PARENT_WITH_PX}px)
  </h3>;
};

export default HeadingBig;