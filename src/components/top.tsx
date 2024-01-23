import ETab from "@/types/e-tab";
import Link from "next/link";
import styles from "@/styles/top.module.css";

const Top = () => {
  const tabsValues: string[] = Object.values(ETab);
  const elemsLink = tabsValues.map((tab, i) => (
    <>
      <Link key={i} href={`/${tab}`}>
        {tab}
      </Link>
    </>
  ));

  return <div className={styles.container_top}>{elemsLink}</div>;
};

export default Top;
