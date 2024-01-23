import ETab from "@/types/e-tab";
import {
  BIG_LION_IMG,
  BIG_LION_IMG_HEIGHT_PX,
  BIG_LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
  PARENT_WIDTH_PX,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const UiProblemWithBoundingParent = () => {
  return (
    <div style={{ maxWidth: `${PARENT_WIDTH_PX}px` }}>
      <h1>{ETab.uiProblemWithBoundParent}</h1>
      <h2>
        <Alert severity="warning">
          img with width\height but parent bounding the width =={">"} check on
          vercel and see no CLS problem but UI distorted
        </Alert>
      </h2>
      <img
        style={{ width: "100%" }}
        src={`/${BIG_LION_IMG}`}
        width={BIG_LION_IMG_WIDTH_PX}
        height={BIG_LION_IMG_HEIGHT_PX}
      />
      <p>{LOREM_100_STRING}</p>
    </div>
  );
};

export default UiProblemWithBoundingParent;
