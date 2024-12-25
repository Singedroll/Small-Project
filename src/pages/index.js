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
      <a href="/signup" className={styles.button}>
        <div>Link to Sign up and Subscribe</div>
      </a>
      <a href="/deliciousrecipes" className={styles.button}>
        <div>Link to Delicious Recipes</div>
      </a>
      <a href="/catmap" className={styles.button}>
        <div>Link to Cat Map</div>
      </a>
    </div>
  );
};

export default Home;
