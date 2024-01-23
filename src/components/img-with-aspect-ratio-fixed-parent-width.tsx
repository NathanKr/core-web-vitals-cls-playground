import IImageWithAspectRatioFixedParentWidth from "@/types/i-image-with-aspect-ratio-fixed-parent-width";
import { getFixedParentStyle } from "@/utils/utils";
import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatioFixedParentWidth;
}

const ImgWithAspectRatioFixedParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const style = getFixedParentStyle(info);

  return (
    <div style={style}>
      <img style={{ width: "100%" }} src={`/${imgSrc}`} alt={title} />
    </div>
  );
};

export default ImgWithAspectRatioFixedParentWidth;
