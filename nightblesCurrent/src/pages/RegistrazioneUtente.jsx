import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrazioneUtente.module.css";

const RegistrazioneUtente = () => {
  const navigate = useNavigate();

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPuoiAccedereQuiClick = useCallback(() => {
    navigate("/login-utente");
  }, [navigate]);

  return (
    <div className={styles.registrazioneUtente}>
      <section className={styles.emailInput}>
        <div className={styles.usernameInput}>
          <h1
            className={styles.nNightblesContainer}
            onClick={onNNightblesClick}
          >
            <span>N</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.span1}>{`| `}</span>
            <span className={styles.nightbles}>nightbles</span>
          </h1>
          <div className={styles.passwordInput}>
            <h2 className={styles.registrati}>Registrati</h2>
          </div>
          <div className={styles.loginForm}>
            <div className={styles.alreadyRegisteredArea}>
              <div className={styles.seHaiGi}>
                Se hai già un account registrato
              </div>
              <div
                className={styles.puoiAccedereQuiContainer}
                onClick={onPuoiAccedereQuiClick}
              >
                <span className={styles.puoi}>{`Puoi   `}</span>
                <span className={styles.accedereQui}>Accedere qui!</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.frameParent}>
        <div className={styles.emailLabelParent}>
          <div className={styles.emailLabel}>
            <div className={styles.email}>Email</div>
          </div>
          <div className={styles.signUpButtonParent}>
            <div className={styles.signUpButton}>
              <div className={styles.mailIcon}>
                <img className={styles.bustaIcon} alt="" src="/busta@2x.png" />
              </div>
              <input
                className={styles.inserisciLaTua}
                placeholder="Inserisci la tua email"
                type="text"
              />
            </div>
            <div className={styles.frameChild} />
          </div>
          <div className={styles.username}>Username</div>
        </div>
        <div className={styles.logoutParent}>
          <div className={styles.passwordLabelWrapper}>
            <div className={styles.passwordLabel}>
              <div className={styles.lockIcon}>
                <img
                  className={styles.logoUtenteIcon}
                  loading="lazy"
                  alt=""
                  src="/logo-utente.svg"
                />
              </div>
              <div className={styles.inserisciIlTuo}>
                inserisci il tuo username
              </div>
            </div>
          </div>
          <div className={styles.logoutParentChild} />
        </div>
        <div className={styles.passwordParent}>
          <div className={styles.password}>Password</div>
          <div className={styles.hideParentParent}>
            <div className={styles.hideParent}>
              <div className={styles.passwordIcon}>
                <img
                  className={styles.lockIcon1}
                  loading="lazy"
                  alt=""
                  src="/lock1.svg"
                />
              </div>
              <div className={styles.inserisciLaPassword}>
                inserisci la password
              </div>
            </div>
            <img
              className={styles.hideIcon}
              loading="lazy"
              alt=""
              src="/hide1.svg"
            />
          </div>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.passwordGroup}>
          <div className={styles.password1}>Password</div>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameDiv}>
                <div className={styles.lockWrapper}>
                  <img className={styles.lockIcon2} alt="" src="/lock-1.svg" />
                </div>
                <input
                  className={styles.confermaLaPassword}
                  placeholder="conferma la password"
                  type="text"
                />
              </div>
              <img className={styles.hideIcon1} alt="" src="/hide-1.svg" />
            </div>
            <div className={styles.frameInner} />
          </div>
        </div>
      </div>
      <button className={styles.tastoRegistrati}>
        <div className={styles.tastoRegistratiChild} />
        <div className={styles.r}>Registrati</div>
      </button>
    </div>
  );
};

export default RegistrazioneUtente;
