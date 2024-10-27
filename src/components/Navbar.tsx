import Link from "next/link";
import BarChartIcon from "../Icon/BarChartIcon";
import styles from "./styles/Navbar.module.css"

const Navbar = () => {
  return (
    <div className="w-[75%]">
      <nav className="flex justify-between p-8 items-center ">
        <div className="logo flex justify-center items-center gap-3 text-black text-3xl">
          <BarChartIcon />
          FinChat
        </div>
        <div className={styles.navbar_options}>
          <Link className={styles.options} href="/pricing">PRICING</Link>
          <Link className={styles.options} href="/api">API</Link>
          <Link className={styles.options} href="/login">LOGIN</Link>
          <button className={styles.button_option}>Sign Up Free</button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
