import PageType from "./e-page-type";
import ETab from "./e-tab";

export default interface IPage {
  displayName: ETab;
  url: string;
  type: PageType;
}
