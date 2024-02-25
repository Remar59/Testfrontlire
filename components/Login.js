import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styles from "../styles/Login.module.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../reducers/users";
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const dispatch = useDispatch();
  const [signupOpen, setsignupOpen] = useState(false);
  const [signinOpen, setsigninOpen] = useState(false);
  const [usernameSignup, setUsernameSignup] = useState("");
  const [passwordSignup, setPasswordSignup] = useState("");
  const [usernameSignin, setUsernameSignin] = useState("");
  const [passwordSignin, setPasswordSignin] = useState("");


  const openSignup = () => {
    setsignupOpen(true);
  };
  const closeSignup = () => {
    setsignupOpen(false);
  };
  const openSignin = () => {
    setsigninOpen(true);
  };
  const closeSignin = () => {
    setsigninOpen(false);
  };

  const signup = (e) => {
    e.preventDefault();
    const profil = {
      username: usernameSignup,
      password: passwordSignup,
    };
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profil),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(addUser(data));
        if (data.result) {
          router.push("/home");
        }
      });
    setUsernameSignup("");
    setPasswordSignup("");
  };

  const signin = (e) => {
    e.preventDefault();
    const profil = {
      username: usernameSignin,
      password: passwordSignin,
    };
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(profil),
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(addUser(data));
        console.log(data);
        if (data.result) {
          router.push("/home");
        }
      });
    setUsernameSignin("");
    setPasswordSignin("");
  };

  return (
    <div className={styles.container}>
      <aside className={styles.aside}>
        <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
      </aside>
      <main className={styles.main}>
        <div>
          <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
        </div>
        <h1 className={styles.title}>Ambiance ta lecture !</h1>
        <div className={styles.btnLogin}>
          <h2>Rejoins Liremersion</h2>
          <button className={styles.signup} onClick={openSignup}>
            S'inscrire
          </button>
          <p>Déjà inscrit ?</p>
          <button className={styles.signin} onClick={openSignin}>
            S'identifier
          </button>
        </div>
      </main>
      {signupOpen && (
        <div className={styles.modalSignup}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeSignup}>
              &times;
            </button>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            <h4>Rejoins nous !</h4>
            <form className={styles.modalForm}>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsernameSignup(e.target.value)}
                value={usernameSignup}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPasswordSignup(e.target.value)}
                value={passwordSignup}
              />
              <button className={styles.signupBtn} onClick={signup}>
                S'enregistrer
              </button>
            </form>
          </div>
        </div>
      )}
      {signinOpen && (
        <div className={styles.modalSignup}>
          <div className={styles.modalContent}>
            <button className={styles.modalClose} onClick={closeSignin}>
              &times;
            </button>
            <FontAwesomeIcon icon={faTwitter} className={styles.icon} />
            <h4>Connect to Hackatweet</h4>
            <form className={styles.modalForm}>
              <input
                type="text"
                placeholder="username"
                onChange={(e) => setUsernameSignin(e.target.value)}
                value={usernameSignin}
              />
              <input
                type="password"
                placeholder="password"
                onChange={(e) => setPasswordSignin(e.target.value)}
                value={passwordSignin}
              />
              <button className={styles.signupBtn} onClick={signin}>
                S'identifier
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

export default Login;
