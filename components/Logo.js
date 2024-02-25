import styles from "../styles/Logo.module.css";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";

function Logo() {
    const dispatch = useDispatch();
    const router = useRouter();
    const user = useSelector((state) => state.users.value[0].newUser);
    console.log(user);

    function logout() {

        router.push("/login");
    }

    return (
        <div className={styles.container}>
            <div>
                <FontAwesomeIcon icon={faTwitter} className={styles.logo} />
            </div>

            <div>
                <div className={styles.logoutContainer}>
                    <img src="/images/iconAvatar.png" />
                    <div>
                        
                        <p className={styles.username}>@{user.username}</p>
                    </div>
                </div>
                <button className={styles.button} onClick={logout}>
                    Logout
                </button>
            </div>
        </div>
    );
}

export default Logo;
