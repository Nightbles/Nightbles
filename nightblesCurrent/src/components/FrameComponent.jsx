import styles from "./FrameComponent.module.css";

const FrameComponent = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.parent}>
          <div className={styles.div}>20/03/2024</div>
          <div className={styles.limeMilanoWrapper}>
            <div className={styles.limeMilano}>Lime Milano</div>
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
                <div className={styles.frameWrapper1}>
                  <div className={styles.listaParent}>
                    <div className={styles.lista}>Lista:</div>
                    <div className={styles.listaconDrinkWrapper}>
                      <div className={styles.listaconDrink}>
                        Lista(con drink)
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.listaconDrinkParent}>
                  <div className={styles.listaconDrink1}>Lista(con drink)</div>
                  <div className={styles.listaconDrinkGroup}>
                    <div className={styles.listaconDrink2}>
                      Lista(con drink)
                    </div>
                    <div className={styles.listaconDrink3}>
                      Lista(con drink)
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.bottonePrenotaWrapper}>
              <div className={styles.bottonePrenota}>
                <div className={styles.bottonePrenotaChild} />
                <div className={styles.modificaPrenotazione}>
                  Modifica prenotazione
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
