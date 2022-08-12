import { ReactNode } from "react";
import styles from "../styles/components/PrimaryPageTitle.module.css";

const PrimaryPageTitle = ({
  className,
  children,
}: {
  className?: string;
  children: ReactNode;
}) => {
  return (
    <div
      className={`heading-5 ${styles.primaryPageTitle}
                  mx-auto sm:text-left text-center ${className || ""}`}
    >
      <h1>
        {children}
      </h1>
    </div>
  );
};

export default PrimaryPageTitle;
