import Link from "next/link";
import styles from "../components/Home.module.css";

const Home = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundImage: "url('/reactbg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Link href="/signup" className={styles.button}>
        <div>Link to Sign up and Subscribe</div>
      </Link>
      <Link href="/deliciousrecipes" className={styles.button}>
        <div>Link to Delicious Recipes</div>
      </Link>
      <Link href="/catmap" className={styles.button}>
        <div>Link to Cat Map</div>
      </Link>
    </div>
  );
};

export default Home;
