import IPicWithAspectRatio from "@/types/i-pic-with-aspect-ratio";
import { FC } from "react";

interface IProps {
  info: IPicWithAspectRatio;
}

const ImgWithAspectRatio: FC<IProps> = ({ info }) => {
  const { parentWidthPx, aspectRatio, imgSrc ,title} = info;

  return (
    <div>
      <div
        style={{
          width: `${parentWidthPx}px`,
          position: "relative",
          aspectRatio: `${aspectRatio} / 1`,
        }}
      >
        <img
          style={{ width: "100%"  }}
          src={`/${imgSrc}`}
          alt={title}
        />
      </div>
    </div>
  );
};

export default ImgWithAspectRatio;
