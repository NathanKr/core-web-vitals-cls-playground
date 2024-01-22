import IPicWithAspectRatio from "@/types/i-pic-with-aspect-ratio";
import Image from "next/image";

import { FC } from "react";

interface IProps {
  info: IPicWithAspectRatio;
}

const NextImageWithAspectRatio: FC<IProps> = ({ info }) => {
  const { parentWidthPx, imgWidthPx, imgHeightPx, imgSrc } = info;

  return (
    <>
      <div
        style={{
          width: `${parentWidthPx}px`,
          position: "relative",
          aspectRatio: `${imgWidthPx} / ${imgHeightPx}`,
        }}
      >
        <Image src={`/${imgSrc}`} alt="some title" fill={true} />
      </div>
    </>
  );
};

export default NextImageWithAspectRatio;
