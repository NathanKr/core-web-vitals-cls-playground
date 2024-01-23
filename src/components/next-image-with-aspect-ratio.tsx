import IImageWithAspectRatio from "@/types/i-image-with-aspect-ratio";
import { getParentStyle } from "@/utils/utils";
import Image from "next/image";

import { CSSProperties, FC } from "react";

interface IProps {
  info: IImageWithAspectRatio;
}

const NextImageWithAspectRatio: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const style = getParentStyle(info);

  return (
    <div style={style}>
      <Image src={`/${imgSrc}`} alt={title} fill={true} />
    </div>
  );
};

export default NextImageWithAspectRatio;
