import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Footer.module.css";

const Footer = () => {
  const navigate = useNavigate();

  const onNNightbles1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "Privacy_policy" to the project
  }, []);

  return (
    <footer className={styles.footer}>
      <img className={styles.footerChild} alt="" src="/rectangle-8.svg" />
      <div className={styles.footerInner}>
        <div className={styles.nNightblesParent}>
          <div
            className={styles.nNightblesContainer}
            onClick={onNNightbles1Click}
          >
            <span>N</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.span1}>{`| `}</span>
            <span className={styles.nightbles}>nightbles</span>
          </div>
          <div className={styles.contattiWrapper}>
            <div className={styles.contatti}>Contatti</div>
          </div>
        </div>
      </div>
      <div className={styles.frameDiv}>
        <div className={styles.frameChild} />
      </div>
      <div className={styles.footerInner1}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.contactUsParent}>
              <b className={styles.contactUs}>Contact us</b>
              <div className={styles.andreanightblescomGiuseppe}>
                <p className={styles.andreanightblescom}>
                  andrea@nightbles.com
                </p>
                <p className={styles.giuseppenightblescom}>
                  giuseppe@nightbles.com
                </p>
                <p className={styles.francesconightblescom}>
                  francesco@nightbles.com
                </p>
              </div>
            </div>
            <div className={styles.ourBrandsWrapper}>
              <b className={styles.ourBrands}>Our brands</b>
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.socialParent}>
                <b className={styles.social}>Social</b>
                <div className={styles.frameParent1}>
                  <button className={styles.frameWrapper}>
                    <div className={styles.ellipseParent}>
                      <div className={styles.frameItem} />
                      <img
                        className={styles.instagramIcon}
                        alt=""
                        src="/instagram@2x.png"
                      />
                    </div>
                  </button>
                  <button className={styles.frameButton}>
                    <div className={styles.ellipseGroup}>
                      <div className={styles.frameInner} />
                      <img
                        className={styles.facebookIcon}
                        alt=""
                        src="/facebook@2x.png"
                      />
                    </div>
                  </button>
                </div>
              </div>
              <button className={styles.frameWrapper1}>
                <div className={styles.ellipseContainer}>
                  <div className={styles.ellipseDiv} />
                  <img
                    className={styles.linkedinIcon}
                    alt=""
                    src="/linkedin@2x.png"
                  />
                </div>
              </button>
              <button className={styles.frameWrapper2}>
                <div className={styles.ellipseParent1}>
                  <div className={styles.frameChild1} />
                  <img
                    className={styles.tiktokIcon}
                    alt=""
                    src="/tiktok@2x.png"
                  />
                </div>
              </button>
              <button className={styles.frameWrapper3}>
                <div className={styles.ellipseParent2}>
                  <div className={styles.frameChild2} />
                  <img
                    className={styles.youtubeIcon}
                    alt=""
                    src="/youtube@2x.png"
                  />
                </div>
              </button>
            </div>
          </div>
          <b
            className={styles.privacyPolicy}
            onClick={onPrivacyPolicyTextClick}
          >
            Privacy Policy
          </b>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
