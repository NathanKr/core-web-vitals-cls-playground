import Tab from "@/types/tab";
import Link from "next/link";

const Top = () => {
  const tabsValues: string[] = Object.values(Tab);
  const elemsLink = tabsValues.map((tab,i) => <Link key={i} href={`/${tab}`}>{tab}</Link>)

  return <>{elemsLink}</>;
};

export default Top;
