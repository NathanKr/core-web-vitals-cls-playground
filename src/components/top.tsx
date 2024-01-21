import Tab from "@/types/tab";
import Link from "next/link";

const Top = () => {
  const tabsValues: string[] = Object.values(Tab);
  const elemsLink = tabsValues.map(tab => <Link href={`/${tab}`}>{tab}</Link>)

  return <>{elemsLink}</>;
};

export default Top;
