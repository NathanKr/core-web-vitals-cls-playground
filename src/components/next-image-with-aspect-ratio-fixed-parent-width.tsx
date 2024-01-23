import IImageWithAspectRatioFixedParentWidth from "@/types/i-image-with-aspect-ratio-fixed-parent-width";
import { getParentStyle } from "@/utils/utils";
import Image from "next/image";

import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatioFixedParentWidth;
}

const NextImageWithAspectRatioFixedParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const style = getParentStyle(info);

  return (
    <div style={style}>
      <Image src={`/${imgSrc}`} alt={title} fill={true} />
    </div>
  );
};

export default NextImageWithAspectRatioFixedParentWidth;
