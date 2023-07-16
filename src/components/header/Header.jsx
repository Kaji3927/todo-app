import styles from "@/styles/header.module.scss";
import Image from "next/image";
import MoonIcon from "@/images/icon-moon.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Todo</h1>
      <button type="button">
        <Image src={MoonIcon} width={20} height={20} alt="change themes" />
      </button>
    </header>
  );
};

export default Header;
