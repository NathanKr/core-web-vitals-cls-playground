import ETab from "@/types/tab";
import Image from "next/image";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
  PARENT_WITH_PX,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const KeepAspectRatioSolutionWithBoundParent = () => {
  const aspectRatio = 1 / LION_IMG_WIDTH_PX / LION_IMG_HEIGHT_PX;
  const paddingTopPercentage = `${(100 * 1) / aspectRatio}%`;

  return (
    <>
      <h1>{ETab.keepAspectRatio}</h1>
      <h2>.........paragraph + alert</h2>
      <div
        style={{
          width: `${PARENT_WITH_PX}px`,
          position: "relative",
          paddingTop: paddingTopPercentage,
        }}
      >
        <Image
          src={`/${LION_IMG}`}
          alt="some title"
          // width={LION_IMG_WIDTH_PX}
          // height={LION_IMG_HEIGHT_PX}
          fill={true}
        />
      </div>

      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default KeepAspectRatioSolutionWithBoundParent;
