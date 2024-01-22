import IPicWithAspectRatio from "@/types/i-pic-with-aspect-ratio";
import Image from "next/image";

import { FC } from "react";

interface IProps {
  info: IPicWithAspectRatio;
}

const NextImageWithAspectRatio: FC<IProps> = ({ info }) => {
  const { parentWidthPx, aspectRatio, imgSrc } = info;

  return (
    <>
      <div
        style={{
          width: `${parentWidthPx}px`,
          position: "relative",
          aspectRatio: `${aspectRatio} / 1`,
        }}
      >
        <Image src={`/${imgSrc}`} alt="some title" fill={true} />
      </div>
    </>
  );
};

export default NextImageWithAspectRatio;
