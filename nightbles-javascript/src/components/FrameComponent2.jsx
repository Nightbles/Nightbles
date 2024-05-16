import styles from "./FrameComponent2.module.css";

const FrameComponent2 = () => {
  return (
    <div className={styles.frameWrapper}>
      <div className={styles.frameParent}>
        <div className={styles.profiloWrapper}>
          <h1 className={styles.profilo}>Profilo</h1>
        </div>
        <div className={styles.ellipseParent}>
          <img
            className={styles.frameChild}
            loading="lazy"
            alt=""
            src="/ellipse-12@2x.png"
          />
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.germanaPelliniWrapper}>
                <h3 className={styles.germanaPellini}>Germana Pellini</h3>
              </div>
              <div className={styles.lineWrapper}>
                <div className={styles.frameItem} />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.frameParent2}>
                    <div className={styles.germanapellini99gmailcomWrapper}>
                      <div className={styles.germanapellini99gmailcom}>
                        Germanapellini99@gmail.com
                      </div>
                    </div>
                    <div className={styles.frameInner} />
                  </div>
                  <div className={styles.wrapper}>
                    <div className={styles.div}>+39 3333333333</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent2;
