import ETab from "@/types/e-tab";
import Link from "next/link";
import styles from "@/styles/top.module.css";
import { mapPageNames } from "@/utils/utils";

const Top = () => {
  const tabsValues: string[] = Object.values(ETab);
  console.log(tabsValues);

  const elemsLink = tabsValues.map((tab, i) => (
    <Link key={i} href={`/${mapPageNames.get(tab as ETab)}`}>
      {tab}
    </Link>
  ));

  return <div className={styles.container_top}>{elemsLink}</div>;
};

export default Top;
