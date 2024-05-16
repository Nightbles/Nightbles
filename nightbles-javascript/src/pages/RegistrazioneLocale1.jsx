import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrazioneLocale1.module.css";

const RegistrazioneLocale1 = () => {
  const navigate = useNavigate();

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.registrazioneLocale2}>
      <section className={styles.nNightblesParent}>
        <h3 className={styles.nNightblesContainer} onClick={onNNightblesClick}>
          <span>N</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.span1}>{`| `}</span>
          <span className={styles.nightbles}>nightbles</span>
        </h3>
        <div className={styles.scegliTuIlGiornoEProvvedeWrapper}>
          <h1 className={styles.scegliTuIl}>
            Scegli tu il giorno e provvederemo noi a chiamarti!
          </h1>
        </div>
      </section>
      <section className={styles.registrazioneLocale2Inner}>
        <div className={styles.frameParent}>
          <div className={styles.image7Wrapper}>
            <img
              className={styles.image7Icon}
              loading="lazy"
              alt=""
              src="/image-7@2x.png"
            />
          </div>
          <div className={styles.noteAggiuntiveParent}>
            <div className={styles.noteAggiuntive}>note aggiuntive</div>
            <textarea
              className={styles.frameChild}
              placeholder="aggiungi pure delle note aggiuntive"
              rows={14}
              cols={33}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegistrazioneLocale1;
