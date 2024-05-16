import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent3.module.css";

const FrameComponent3 = () => {
  const navigate = useNavigate();

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPRENOTATextClick = useCallback(() => {
    navigate("/profilo-utente");
  }, [navigate]);

  const onABOUTUSTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='aboutUsText']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAccediClick = useCallback(() => {
    navigate("/login-utente");
  }, [navigate]);

  return (
    <header className={styles.rett2Parent}>
      <input className={styles.rett2} type="text" />
      <div className={styles.nNightblesContainer} onClick={onNNightblesClick}>
        <span>N</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.span1}>{`| `}</span>
        <span className={styles.nightbles}>nightbles</span>
      </div>
      <nav className={styles.frameWrapper}>
        <nav className={styles.prenotaParent}>
          <div className={styles.prenota} onClick={onPRENOTATextClick}>
            PRENOTA
          </div>
          <div className={styles.aboutUs} onClick={onABOUTUSTextClick}>
            ABOUT US
          </div>
          <div className={styles.contatti}>CONTATTI</div>
        </nav>
      </nav>
      <div className={styles.accediWrapper}>
        <button className={styles.accedi} onClick={onAccediClick}>
          <div className={styles.accediChild} />
          <img className={styles.userIcnIcon} alt="" src="/user-icn.svg" />
          <div className={styles.accedi1}>ACCEDI</div>
        </button>
      </div>
    </header>
  );
};

export default FrameComponent3;
