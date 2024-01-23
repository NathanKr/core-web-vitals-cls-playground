import IImageWithAspectRatio from "@/types/i-image-with-aspect-ratio";
import Image from "next/image";

import { FC } from "react";

interface IProps {
  info: IImageWithAspectRatio;
}

const NextImageWithAspectRatio: FC<IProps> = ({ info }) => {
  const { parentWidthPx, aspectRatio, imgSrc, title, imgWidthPx } = info;

  return (
    <>
      <div
        style={{
          maxWidth: `${imgWidthPx}px`,
          width: `${parentWidthPx}px`,
          position: "relative",
          aspectRatio: `${aspectRatio} / 1`,
        }}
      >
        <Image src={`/${imgSrc}`} alt={title} fill={true} />
      </div>
    </>
  );
};

export default NextImageWithAspectRatio;
