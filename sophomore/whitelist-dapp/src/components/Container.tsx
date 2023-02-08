import { PropsWithChildren } from "react";
import styles from "../styles/Home.module.css";
import { Footer } from "./Footer";
import { TopHeader } from "./Header";

export const AppContainer = ({ children }: PropsWithChildren) => (
  <div className={styles.wrapper}>
    <TopHeader />
    <div className={styles.main}>
      {children}
    </div>
    <Footer />
  </div>
)
