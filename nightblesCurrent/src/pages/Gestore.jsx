import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Gestore.module.css";

const Gestore = () => {
  const navigate = useNavigate();

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  

  const onPRENOTATextClick = useCallback(() => {
    navigate("/prenotazione");
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

  const onNNightbles1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "Privacy_policy" to the project
  }, []);

  return (
    <div className={styles.gestore}>
      <header className={styles.userAccess}>
        <div className={styles.rett1Parent}>
          <div className={styles.rett1} />
          <div className={styles.mainContainer}>
            <div className={styles.ilTuoLocale}>IL TUO LOCALE</div>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.creaAccountWrapper}>
            <div className={styles.creaAccount}>CREA ACCOUNT</div>
          </div>
        </div>
        <div className={styles.rett2Parent}>
          <input className={styles.rett2} type="text" />
          <div
            className={styles.nNightblesContainer}
            onClick={onNNightblesClick}
          >
            <span>N</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.span1}>{`| `}</span>
            <span className={styles.nightbles}>nightbles</span>
          </div>
          <nav className={styles.createAccountButtonWrapper}>
            <nav className={styles.createAccountButton}>
              <div className={styles.prenota} onClick={onPRENOTATextClick}>
                PRENOTA
              </div>
              <div className={styles.aboutUs} onClick={onABOUTUSTextClick}>
                ABOUT US
              </div>
              <div className={styles.contatti}>CONTATTI</div>
            </nav>
          </nav>
          <div className={styles.containerSeparator}>
            <button className={styles.accedi} onClick={onAccediClick}>
              <div className={styles.accediChild} />
              <img className={styles.userIcnIcon} alt="" src="/user-icn2.svg" />
              <div className={styles.accedi1}>ACCEDI</div>
            </button>
          </div>
        </div>
      </header>
      <div className={styles.mainSeparator}>
        <div className={styles.ilTuoLocaleContainer}>
          <span className={styles.ilTuoLocale1}>{`IL TUO LOCALE |  `}</span>
          <span className={styles.limeMilano}>LIME MILANO</span>
        </div>
      </div>
      <section className={styles.childrenContainerWrapper}>
        <div className={styles.childrenContainer}>
          <div className={styles.frameParent}>
            <div className={styles.image1Parent}>
              <img
                className={styles.image1Icon}
                loading="lazy"
                alt=""
                src="/image-1@2x.png"
              />
              <div className={styles.image2Parent}>
                <img
                  className={styles.image2Icon}
                  loading="lazy"
                  alt=""
                  src="/image-2@2x.png"
                />
                <img
                  className={styles.image3Icon}
                  loading="lazy"
                  alt=""
                  src="/image-3@2x.png"
                />
                <img
                  className={styles.image4Icon}
                  loading="lazy"
                  alt=""
                  src="/image-4@2x.png"
                />
                <img
                  className={styles.image5Icon}
                  loading="lazy"
                  alt=""
                  src="/image-5@2x.png"
                />
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.prenotazioniWrapper}>
                  <div className={styles.prenotazioni}>PRENOTAZIONI</div>
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.dataWrapper}>
                    <div className={styles.data}>27/03/2024</div>
                  </div>
                  <div className={styles.piantinaDiscoteca}>
                    <div className={styles.piantinaDiscotecaChild} />
                    <div className={styles.piantinaDiscotecaItem} />
                    <div className={styles.vectorParent}>
                      <img
                        className={styles.frameItem}
                        alt=""
                        src="/polygon-1.svg"
                      />
                      <div className={styles.frameInner} />
                      <div className={styles.rectangleDiv} />
                      <div className={styles.frameChild1} />
                      <div className={styles.frameChild2} />
                      <div className={styles.frameChild3} />
                      <div className={styles.frameChild4} />
                      <img
                        className={styles.tableIcon}
                        loading="lazy"
                        alt=""
                        src="/table@2x.png"
                      />
                      <img
                        className={styles.tableIcon1}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon2}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon3}
                        alt=""
                        src="/table@2x.png"
                      />
                      <img
                        className={styles.tableIcon4}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon5}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon6}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon7}
                        alt=""
                        src="/table@2x.png"
                      />
                      <img
                        className={styles.tableIcon8}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon9}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon10}
                        alt=""
                        src="/table-1@2x.png"
                      />
                      <img
                        className={styles.tableIcon11}
                        alt=""
                        src="/table-1@2x.png"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.bloccoDescrizioneLocale}>
            <div className={styles.bloccoDescrizioneLocaleChild} />
            <div className={styles.descrizioneWrapper}>
              <div className={styles.descrizione}>Descrizione</div>
            </div>
            <div className={styles.laSala1}>
              La Sala 1 con oltre 1500 mq e con una capienza effettiva di 1000
              persone, si presenta all’ingresso con un ampio ingresso dove vi è
              la cassa d’ingresso e il guardaroba con una capienza di 1000 capi,
              per entrare nella sala si scendono delle scale e si arriva al
              centro pista. Dove al lato troviamo un ampio bar con diverse
              postazioni è un bar secondario, un ampio prive allestito con dei
              divanetti e due bagni divisi tra uomo e donna.
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.frameDiv}>
          <div className={styles.containerWithButtonsParent}>
            <div className={styles.containerWithButtons}>
              <div className={styles.frameParent1}>
                <div className={styles.frameParent2}>
                  <div className={styles.tavoloWrapper}>
                    <div className={styles.tavolo}>Tavolo:</div>
                  </div>
                  <div className={styles.equipe10PersoneContainer}>
                    <p className={styles.equipe10Persone}>Equipe: 10 persone</p>
                  </div>
                </div>
                <div className={styles.vokdaAllaFruttaWrapper}>
                  <div className={styles.vokdaAllaFrutta}>
                    -Vokda alla frutta
                  </div>
                </div>
              </div>
              <div className={styles.germanaPelliniParent}>
                <div className={styles.germanaPellini}>Germana Pellini</div>
                <div className={styles.frameParent3}>
                  <div className={styles.germanapellini99gmailcomParent}>
                    <input
                      className={styles.germanapellini99gmailcom}
                      placeholder="Germanapellini99@gmail.com"
                      type="text"
                    />
                    <div className={styles.lineDiv} />
                  </div>
                  <div className={styles.div}>+39 3333333333</div>
                </div>
              </div>
            </div>
            <div className={styles.vokdaAllaFruttaContainer}>
              <div className={styles.vokdaAllaFrutta1}>-Vokda alla frutta</div>
            </div>
            <div className={styles.vokdaAllaFruttaFrame}>
              <div className={styles.vokdaAllaFrutta2}>-Vokda alla frutta</div>
            </div>
            <div className={styles.ellipseParent}>
              <div className={styles.ellipseDiv} />
              <div className={styles.statoPrenotazioneConfermataWrapper}>
                <div className={styles.statoPrenotazioneConfermata}>
                  stato prenotazione: Confermata
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.separazioneWrapper}>
          <img
            className={styles.separazioneIcon}
            loading="lazy"
            alt=""
            src="/separazione.svg"
          />
        </div>
        <div className={styles.frameWrapper1}>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
              <div className={styles.frameParent6}>
                <div className={styles.frameParent7}>
                  <div className={styles.tavoloContainer}>
                    <div className={styles.tavolo1}>Tavolo:</div>
                  </div>
                  <div className={styles.equipe10PersoneContainer1}>
                    <p className={styles.equipe10Persone1}>
                      Equipe: 10 persone
                    </p>
                  </div>
                </div>
                <div className={styles.vokdaAllaFruttaWrapper1}>
                  <div className={styles.vokdaAllaFrutta3}>
                    -Vokda alla frutta
                  </div>
                </div>
              </div>
              <div className={styles.germanaPelliniGroup}>
                <div className={styles.germanaPellini1}>Germana Pellini</div>
                <div className={styles.frameParent8}>
                  <div className={styles.germanapellini99gmailcomGroup}>
                    <input
                      className={styles.germanapellini99gmailcom1}
                      placeholder="Germanapellini99@gmail.com"
                      type="text"
                    />
                    <div className={styles.frameChild5} />
                  </div>
                  <div className={styles.div1}>+39 3333333333</div>
                </div>
              </div>
            </div>
            <div className={styles.vokdaAllaFruttaWrapper2}>
              <div className={styles.vokdaAllaFrutta4}>-Vokda alla frutta</div>
            </div>
            <div className={styles.vokdaAllaFruttaWrapper3}>
              <div className={styles.vokdaAllaFrutta5}>-Vokda alla frutta</div>
            </div>
            <div className={styles.ellipseGroup}>
              <div className={styles.frameChild6} />
              <div className={styles.statoPrenotazioneDaConfermWrapper}>
                <div
                  className={styles.statoPrenotazioneDa}
                >{`stato prenotazione: Da confermare `}</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className={styles.rett3} />
      <footer className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/rectangle-8.svg" />
        <div className={styles.footerInner}>
          <div className={styles.nNightblesParent}>
            <div
              className={styles.nNightblesContainer1}
              onClick={onNNightbles1Click}
            >
              <span>N</span>
              <span className={styles.span2}>{` `}</span>
              <span className={styles.span3}>{`| `}</span>
              <span className={styles.nightbles1}>nightbles</span>
            </div>
            <div className={styles.contattiWrapper}>
              <div className={styles.contatti1}>Contatti</div>
            </div>
          </div>
        </div>
        <div className={styles.footerInner1}>
          <div className={styles.frameChild7} />
        </div>
        <div className={styles.footerInner2}>
          <div className={styles.frameParent9}>
            <div className={styles.frameParent10}>
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
              <div className={styles.frameParent11}>
                <div className={styles.socialParent}>
                  <b className={styles.social}>Social</b>
                  <div className={styles.frameParent12}>
                    <button className={styles.frameButton}>
                      <div className={styles.ellipseContainer}>
                        <div className={styles.frameChild8} />
                        <img
                          className={styles.instagramIcon}
                          alt=""
                          src="/instagram@2x.png"
                        />
                      </div>
                    </button>
                    <button className={styles.frameWrapper2}>
                      <div className={styles.ellipseParent1}>
                        <div className={styles.frameChild9} />
                        <img
                          className={styles.facebookIcon}
                          alt=""
                          src="/facebook@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <button className={styles.frameWrapper3}>
                  <div className={styles.ellipseParent2}>
                    <div className={styles.frameChild10} />
                    <img
                      className={styles.linkedinIcon}
                      alt=""
                      src="/linkedin@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameWrapper4}>
                  <div className={styles.ellipseParent3}>
                    <div className={styles.frameChild11} />
                    <img
                      className={styles.tiktokIcon}
                      alt=""
                      src="/tiktok@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameWrapper5}>
                  <div className={styles.ellipseParent4}>
                    <div className={styles.frameChild12} />
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
    </div>
  );
};

export default Gestore;
