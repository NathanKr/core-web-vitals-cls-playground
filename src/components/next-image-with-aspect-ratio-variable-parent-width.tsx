import IImageWithAspectRatioVariableParentWidth from "@/types/i-image-with-aspect-ratio-variable-parent-width";
import { getVariableParentStyle } from "@/utils/utils";
import Image from "next/image";

import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatioVariableParentWidth;
}

const NextImageWithAspectRatioVariableParentWidth: FC<IProps> = ({ info }) => {
  const { imgSrc, title } = info;
  const parentStyle = getVariableParentStyle(info);

  return (
    <div style={parentStyle}>
      <Image src={`${imgSrc}`} alt={title} fill={true} />
    </div>
  );
};

export default NextImageWithAspectRatioVariableParentWidth;
