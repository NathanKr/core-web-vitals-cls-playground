import ETab from "@/types/e-tab";
import {
  LION_IMG,
  LION_IMG_HEIGHT_PX,
  LION_IMG_WIDTH_PX,
  LOREM_100_STRING,
  PARENT_WITH_PX,
} from "@/utils/constants";
import { Alert } from "@mui/material";

const UiProblemWithBoundingParent = () => {
  return (
    <div style={{ maxWidth: `${PARENT_WITH_PX}px` }}>
      <h1>{ETab.uiProblemWithBoundParent}</h1>
      <h2>
        <Alert severity="warning">
          img with width\height but parent bounding the width =={">"} check on
          vercel and see no CLS problem but UI distorted
        </Alert>
      </h2>
      <img
        style={{ width: "100%" }}
        src={`/${LION_IMG}`}
        width={LION_IMG_WIDTH_PX}
        height={LION_IMG_HEIGHT_PX}
      />
      <p>{LOREM_100_STRING}</p>
    </div>
  );
};

export default UiProblemWithBoundingParent;
