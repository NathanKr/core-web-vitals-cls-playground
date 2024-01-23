import { infoSmallFixedParentWidth } from "@/utils/utils";

const HeadingSmallFixed = () => {
  const {imgWidthPx,parentWidthPx} = infoSmallFixedParentWidth;

  return (
    <h3>
      image width ({imgWidthPx}px) {"<"} than parent
      parent width ({parentWidthPx}px)
    </h3>
  );
};

export default HeadingSmallFixed;
