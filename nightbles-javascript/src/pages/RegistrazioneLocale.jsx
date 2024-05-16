import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./RegistrazioneLocale.module.css";

const RegistrazioneLocale = () => {
  const navigate = useNavigate();

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onGroupButtonClick = useCallback(() => {
    navigate("/registrazione-locale-2");
  }, [navigate]);

  return (
    <div className={styles.registrazioneLocale}>
      <div className={styles.nNightblesParent}>
        <h1 className={styles.nNightblesContainer} onClick={onNNightblesClick}>
          <span>N</span>
          <span className={styles.span}>{` `}</span>
          <span className={styles.span1}>{`| `}</span>
          <span className={styles.nightbles}>nightbles</span>
        </h1>
        <div className={styles.frameWrapper}>
          <div className={styles.registraIlTuoLocaleParent}>
            <h2 className={styles.registraIlTuo}>Registra il tuo locale</h2>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <div className={styles.inserisciIlNomeDelLocaleParent}>
                  <div className={styles.inserisciIlNome}>
                    inserisci il nome del locale
                  </div>
                  <div className={styles.rectangleParent}>
                    <div className={styles.frameChild} />
                    <div className={styles.inserisciNomeLocale}>
                      inserisci nome locale
                    </div>
                  </div>
                </div>
                <div className={styles.inserisciLindirizzoParent}>
                  <div className={styles.inserisciLindirizzo}>
                    inserisci l’indirizzo
                  </div>
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.indirizzoLocale}>
                      indirizzo locale
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.nomeParent}>
                  <div className={styles.nome}>nome</div>
                  <div className={styles.rectangleContainer}>
                    <div className={styles.frameInner} />
                    <div className={styles.inserisciNome}>inserisci nome</div>
                  </div>
                </div>
                <div className={styles.cognomeParent}>
                  <div className={styles.cognome}>cognome</div>
                  <div className={styles.frameDiv}>
                    <div className={styles.rectangleDiv} />
                    <div className={styles.inserisciCognome}>
                      inserisci cognome
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.emailParent}>
                <div className={styles.email}>email</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild1} />
                  <div className={styles.inserisciEmail}>inserisci email</div>
                </div>
              </div>
              <div className={styles.frameParent1}>
                <div className={styles.numeroDiTelefonoWrapper}>
                  <div className={styles.numeroDiTelefono}>
                    numero di telefono
                  </div>
                </div>
                <div className={styles.frameParent2}>
                  <button className={styles.frameButton}>
                    <div className={styles.frameChild2} />
                    <div className={styles.it39}>IT +39</div>
                    <div className={styles.doubleDownLabel}>
                      <img
                        className={styles.doubleDownIcon}
                        alt=""
                        src="/double-down@2x.png"
                      />
                    </div>
                  </button>
                  <div className={styles.rectangleParent2}>
                    <div className={styles.frameChild3} />
                    <div className={styles.inserisciNumeroTelefonico}>
                      inserisci numero telefonico
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <button
                className={styles.groupButton}
                onClick={onGroupButtonClick}
              >
                <div className={styles.frameChild4} />
                <div className={styles.r}>Invia Registrazione</div>
              </button>
              <div className={styles.cosaRendiNightbles}>
                <div className={styles.seIlTuoLocaleGiRegistrParent}>
                  <div
                    className={styles.seIlTuo}
                  >{`Se il tuo locale è già registrato `}</div>
                  <div className={styles.puoiAccedereQuiContainer}>
                    <span className={styles.puoi}>{`Puoi   `}</span>
                    <span className={styles.accedereQui}>Accedere qui!</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.lastHoursLabel}>
        <div className={styles.clientsCanBookLabel}>
          <h1 className={styles.cosaRendeNightbles}>
            Cosa rende Nightbles la piattaforma ideale per il tuo locale?
          </h1>
          <div className={styles.frameParent4}>
            <div className={styles.frameWrapper1}>
              <div className={styles.conferenceParent}>
                <img
                  className={styles.conferenceIcon}
                  loading="lazy"
                  alt=""
                  src="/conference@2x.png"
                />
                <div className={styles.aumentaLaTuaVisibilitIncWrapper}>
                  <h3 className={styles.aumentaLaTuaVisibilitInc}>
                    Aumenta la tua visibilità, incrementa i guadagni e fidelizza
                    la tua clientela
                  </h3>
                </div>
              </div>
            </div>
            <div className={styles.eliminaLaNecessitDiEffettParent}>
              <h3 className={styles.eliminaLaNecessit}>
                Elimina la necessità di effettuare prenotazioni tramite telefono
                o di persona, risparmiando tempo
              </h3>
              <div className={styles.timeWrapper}>
                <img
                  className={styles.timeIcon}
                  loading="lazy"
                  alt=""
                  src="/time@2x.png"
                />
              </div>
            </div>
          </div>
          <div className={styles.frameParent5}>
            <div className={styles.last24HoursWrapper}>
              <img
                className={styles.last24Hours}
                loading="lazy"
                alt=""
                src="/last-24-hours@2x.png"
              />
            </div>
            <h3 className={styles.iClientiPossono}>
              I clienti possono effettuare prenotazioni in qualsiasi momento, 24
              ore su 24, 7 giorni su 7, senza doversi preoccupare degli orari di
              apertura della discoteca.
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrazioneLocale;
