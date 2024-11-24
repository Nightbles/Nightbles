import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginUtente.module.css";

const LoginUtente = () => {
  const navigate = useNavigate();

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPuoiRegistrartiQuiClick = useCallback(() => {
    navigate("/registrazione-utente");
  }, [navigate]);

  return (
    <div className={styles.loginUtente}>
      <h1 className={styles.nNightblesContainer} onClick={onNNightblesClick}>
        <span>N</span>
        <span className={styles.span}>{` `}</span>
        <span className={styles.span1}>{`| `}</span>
        <span className={styles.nightbles}>nightbles</span>
      </h1>
      <div className={styles.accessButtonWrapper}>
        <div className={styles.accessButton}>
          <h2 className={styles.accedi}>Accedi</h2>
          <div className={styles.emailInputField}>
            <div
              className={styles.seNonHai}
            >{`Se non hai ancora un account `}</div>
            <div
              className={styles.puoiRegistrartiQuiContainer}
              onClick={onPuoiRegistrartiQuiClick}
            >
              <span className={styles.puoi}>{`Puoi   `}</span>
              <span className={styles.registrartiQui}>Registrarti qui!</span>
            </div>
          </div>
        </div>
      </div>
      <section className={styles.passwordInputField}>
        <div className={styles.instanceParent}>
          <div className={styles.emailParent}>
            <div className={styles.email}>Email</div>
            <div className={styles.messageDisplayParent}>
              <div className={styles.messageDisplay}>
                <div className={styles.loginButton}>
                  <img
                    className={styles.message1Icon}
                    alt=""
                    src="/message-1.svg"
                  />
                </div>
                <input
                  className={styles.enterYourEmail}
                  placeholder="Inserisci la tua email"
                  type="text"
                />
              </div>
              <div className={styles.frameChild} />
            </div>
          </div>
          <div className={styles.rememberMeCheckbox}>
            <div className={styles.password}>Password</div>
            <div className={styles.submitButton}>
              <div className={styles.googleLoginButton}>
                <div className={styles.lockIcon}>
                  <div className={styles.passwordLabel}>
                    <img className={styles.lockIcon1} alt="" src="/lock.svg" />
                  </div>
                  <input
                    className={styles.inserisciLaPassword}
                    placeholder="inserisci la password"
                    type="text"
                  />
                </div>
                <img className={styles.hideIcon} alt="" src="/hide.svg" />
              </div>
              <div className={styles.loginButtonContainer} />
            </div>
            <div className={styles.registrationLinkContainer}>
              <div className={styles.rememberMeCheckboxContainer}>
                <input className={styles.frameInput} type="checkbox" />
                <div className={styles.ricordami}>ricordami</div>
              </div>
              <div className={styles.passwordDimenticata}>
                Password dimenticata?
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.loginSuccessMessage}>
        <div className={styles.tastoAccediParent}>
          <button className={styles.tastoAccedi}>
            <div className={styles.tastoAccediChild} />
            <div className={styles.accedi1}>Accedi</div>
          </button>
          <div className={styles.googleLoginButtonContainer}>
            <div className={styles.orElseLabel}>
              <div className={styles.googleAuthButton}>
                <div className={styles.oppureAccediCon}>oppure accedi con:</div>
              </div>
              <img
                className={styles.googApplFacIcon}
                loading="lazy"
                alt=""
                src="/goog-appl-fac.svg"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginUtente;
