import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar/sidebar";
import styles from "./dashboard-layout.module.css";
import Header from "./components/header/header";

export default function DashboardLayout() {
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.dashboard}>
        <Sidebar />
        <main className={styles.main}>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
