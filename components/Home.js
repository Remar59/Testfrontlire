import styles from "../styles/Home.module.css";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

function Home() {

  const [tweet, setTweet] = useState("");
  const user = useSelector((state) => state.users.value[0].newUser);


  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>Home</h2>
        <input
          type="text"
          placeholder="What's up?"
          className={styles.input}
          maxLength={280}
          require
          onChange={(e) => setTweet(e.target.value)}
        />
        <div className={styles.addContainer}>
          <p className={styles.counter}>
            <span>{tweet.length}</span>/280
          </p>
          <button className={styles.button} onClick={() => addTweet()}>
            Tweet
          </button>
        </div>
      </div>
      <div className={styles.content}></div>
    </div>
  );
}

export default Home;
