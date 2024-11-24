import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./FrameComponent1.module.css";

const FrameComponent1 = () => {
  const navigate = useNavigate();

  const onLimeMilanoText1Click = useCallback(() => {
    navigate("/locale");
  }, [navigate]);

  const onRectangleClick = useCallback(() => {
    navigate("/prenotaz-locale");
  }, [navigate]);

  return (
    <section className={styles.prenParent}>
      <div className={styles.pren}>
        <div className={styles.prenChild} />
        <h1 className={styles.leMiePrenotazioni}>Le mie prenotazioni</h1>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameParent}>
          <div className={styles.parent}>
            <div className={styles.div}>27/03/2024</div>
            <div className={styles.limeMilanoWrapper}>
              <div
                className={styles.limeMilano}
                onClick={onLimeMilanoText1Click}
              >
                Lime Milano
              </div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.rectangleWrapper}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src="/rectangle-49@2x.png"
                />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.tavoloWrapper}>
                    <div className={styles.tavolo}>Tavolo:</div>
                  </div>
                  <div className={styles.equipe}>
                    <p className={styles.equipe1}>{`Equipe `}</p>
                  </div>
                </div>
                <div className={styles.vokdaAllaFruttaWrapper}>
                  <div className={styles.vokdaAllaFrutta}>
                    -Vokda alla frutta
                  </div>
                </div>
                <div className={styles.frameWrapper1}>
                  <div className={styles.vokdaAllaFruttaParent}>
                    <div className={styles.vokdaAllaFrutta1}>
                      -Vokda alla frutta
                    </div>
                    <div className={styles.vokdaAllaFrutta2}>
                      -Vokda alla frutta
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.bottonePrenotaWrapper}>
                <div className={styles.bottonePrenota}>
                  <div
                    className={styles.bottonePrenotaChild}
                    onClick={onRectangleClick}
                  />
                  <div className={styles.modificaPrenotazione}>
                    Modifica prenotazione
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent1;
