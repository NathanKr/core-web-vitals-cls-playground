import ETab from "@/types/e-tab";
import Link from "next/link";
import styles from "@/styles/top.module.css";
import { pagesInfo } from "@/utils/utils";
import PageType from "@/types/e-page-type";

const Top = () => {
  function getElemsByType(type: PageType): JSX.Element {
    const elemsLink = pagesInfo
      .filter((page) => page.type == type)
      .map((page, i) => (
        <Link key={i} href={`/${page.url}`}>
          {page.displayName}
        </Link>
      ));
    return (
      <>
        <strong>{type}</strong> : {elemsLink}
      </>
    );
  }

  return (
    <div className={styles.container_top}>
      <>
        {getElemsByType(PageType.playground)}
        <br />
        {getElemsByType(PageType.solution)}
      </>
    </div>
  );
};

export default Top;
