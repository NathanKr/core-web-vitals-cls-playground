import { infoBigFixedParentWidth } from "@/utils/utils";

const HeadingBigFixed = () => {
  const {imgWidthPx,parentWidthPx} = infoBigFixedParentWidth;
  return (
    <h3>
      image width ({imgWidthPx}px) {">"} than parent
      parent width ({parentWidthPx}px)
    </h3>
  );
};

export default HeadingBigFixed;
