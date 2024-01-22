import ImgWithAspectRatio from "@/components/next-image-with-aspect-ratio";
import ETab from "@/types/e-tab";
import { LOREM_100_STRING } from "@/utils/constants";
import { infoBig, infoSmall } from "@/utils/utils";
import { Alert } from "@mui/material";

const KeepRealAspectRatioHtmlImg = () => {
  
  return (
    <>
      <h1>{ETab.keepRealAspectRatioHtmlImg}</h1>
      <h2>
        <Alert severity="success">
          Use html img with width : 100% , and relative+aspect-ratio for parent
          ==
          {">"} <strong>CLS</strong> ok : 0
        </Alert>
        <Alert severity="success"><strong>LCP</strong> is ok ~ 2 sec but not as good as for next.js Image</Alert>
      </h2>
      <h3>pic width {'<'} than parent width</h3>
      <ImgWithAspectRatio info={infoSmall}/>
      <h3>pic width {'>'} than parent width</h3>
      <ImgWithAspectRatio info={infoBig}/>
      <p>{LOREM_100_STRING}</p>
    </>
  );
};

export default KeepRealAspectRatioHtmlImg;
