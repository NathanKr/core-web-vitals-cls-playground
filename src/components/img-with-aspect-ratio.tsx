import IImageWithAspectRatio from "@/types/i-image-with-aspect-ratio";
import { getParentStyle } from "@/utils/utils";
import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatio;
}

const ImgWithAspectRatio: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const style = getParentStyle(info);

  return (
    <div style={style}>
      <img style={{ width: "100%" }} src={`/${imgSrc}`} alt={title} />
    </div>
  );
};

export default ImgWithAspectRatio;
