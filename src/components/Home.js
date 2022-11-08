import styles from "./css/Home.module.css";

const Home = () => {
  return (
    <div>
      <nav className={styles.header}>
        <ul>
          <div className={styles.logo}>
            <a href="/">
              <img src={process.env.PUBLIC_URL + "/logo.png"} alt="AniList" />
            </a>
          </div>
          <div className={styles.links}>
            <a href="/fall">
              SEASONAL ANIME <span> {"   "}</span>
              <img
                src={process.env.PUBLIC_URL + "/seasonal.png"}
                style={{
                  width: "18px",
                  height: "18px",
                  marginBottom: "4px",
                  marginLeft: "7px",
                }}
                alt=""
              />{" "}
            </a>
          </div>
          <div id="login">
            <button className={styles.button}>
              <a
                href={`https://anilist.co/api/v2/oauth/authorize?client_id=9494&response_type=token`}
              >
                LOGIN
              </a>
            </button>
          </div>
        </ul>
      </nav>
    </div>
  );
};

export default Home;
