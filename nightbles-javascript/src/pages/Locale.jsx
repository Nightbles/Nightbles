import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Locale.module.css";

const Locale = () => {
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

  const onBottonePrenotaContainerClick = useCallback(() => {
    navigate("/prenotaz-locale");
  }, [navigate]);

  const onNNightbles1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  return (
    <div className={styles.locale}>
      <header className={styles.frameParent}>
        <div className={styles.rett1Parent}>
          <div className={styles.rett1} />
          <div className={styles.ilTuoLocaleWrapper}>
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
        </div>
      </header>
      <section className={styles.limeMilano}>Lime Milano</section>
      <section className={styles.localeInner}>
        <div className={styles.image1Parent}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-11@2x.png"
          />
          <div className={styles.image2Parent}>
            <img
              className={styles.image2Icon}
              loading="lazy"
              alt=""
              src="/image-21@2x.png"
            />
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-31@2x.png"
            />
            <img
              className={styles.image4Icon}
              loading="lazy"
              alt=""
              src="/image-41@2x.png"
            />
            <img
              className={styles.image5Icon}
              loading="lazy"
              alt=""
              src="/image-51@2x.png"
            />
          </div>
        </div>
      </section>
      <section className={styles.rectangleParent}>
        <div className={styles.frameItem} />
        <div className={styles.laSala1}>
          La Sala 1 con oltre 1500 mq e con una capienza effettiva di 1000
          persone, si presenta all’ingresso con un ampio ingresso dove vi è la
          cassa d’ingresso e il guardaroba con una capienza di 1000 capi, per
          entrare nella sala si scendono delle scale e si arriva al centro
          pista. Dove al lato troviamo un ampio bar con diverse postazioni è un
          bar secondario, un ampio prive allestito con dei divanetti e due bagni
          divisi tra uomo e donna.
        </div>
      </section>
      <section className={styles.localeChild}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.infoLocaleWrapper}>
                <h1 className={styles.infoLocale}>Info locale:</h1>
              </div>
              <div className={styles.locationParent}>
                <img
                  className={styles.locationIcon}
                  loading="lazy"
                  alt=""
                  src="/location@2x.png"
                />
                <div className={styles.viaTullioMassarani6Wrapper}>
                  <div className={styles.viaTullioMassarani}>
                    Via Tullio Massarani, 6
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper1}>
              <div className={styles.musicRecordParent}>
                <img
                  className={styles.musicRecordIcon}
                  loading="lazy"
                  alt=""
                  src="/music-record@2x.png"
                />
                <div className={styles.commercialeTrap}>Commerciale- Trap</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.banknotesParent}>
              <img
                className={styles.banknotesIcon}
                loading="lazy"
                alt=""
                src="/banknotes@2x.png"
              />
              <div className={styles.wrapper}>
                <div className={styles.div}>
                  <span>€€</span>
                  <span className={styles.span2}>€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.frameSection}>
        <div className={styles.calendarioParent}>
          <img
            className={styles.calendarioIcon}
            loading="lazy"
            alt=""
            src="/calendario@2x.png"
          />
          <div className={styles.frameParent1}>
            <div className={styles.valutazioneParent}>
              <h1 className={styles.valutazione}>Valutazione:</h1>
              <div className={styles.frameWrapper3}>
                <div className={styles.starParent}>
                  <img
                    className={styles.frameInner}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.starIcon}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.frameChild1}
                    loading="lazy"
                    alt=""
                    src="/star-1.svg"
                  />
                  <img
                    className={styles.frameChild2}
                    loading="lazy"
                    alt=""
                    src="/star-3.svg"
                  />
                  <img
                    className={styles.frameChild3}
                    loading="lazy"
                    alt=""
                    src="/star-3.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper4}>
              <div className={styles.frameParent2}>
                <div className={styles.frameParent3}>
                  <div className={styles.musicaParent}>
                    <div className={styles.musica}>Musica:</div>
                    <div className={styles.servizi}>Servizi:</div>
                    <div className={styles.bar}>Bar:</div>
                  </div>
                  <div className={styles.starGroup}>
                    <img
                      className={styles.frameChild4}
                      loading="lazy"
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild5}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild6}
                      alt=""
                      src="/star-9.svg"
                    />
                    <img
                      className={styles.frameChild7}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild8}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild9}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild10}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild11}
                      alt=""
                      src="/star-9.svg"
                    />
                    <img
                      className={styles.frameChild12}
                      alt=""
                      src="/star-13.svg"
                    />
                    <img
                      className={styles.frameChild13}
                      alt=""
                      src="/star-13.svg"
                    />
                    <img
                      className={styles.frameChild14}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild15}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild16}
                      alt=""
                      src="/star-9.svg"
                    />
                    <img
                      className={styles.frameChild17}
                      alt=""
                      src="/star-6.svg"
                    />
                    <img
                      className={styles.frameChild18}
                      alt=""
                      src="/star-13.svg"
                    />
                  </div>
                </div>
                <div className={styles.bottonePrenotaWrapper}>
                  <div
                    className={styles.bottonePrenota}
                    onClick={onBottonePrenotaContainerClick}
                  >
                    <div className={styles.bottonePrenotaChild} />
                    <h3 className={styles.infoEPrenotazioni}>
                      Info e prenotazioni
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.localeInner1}>
        <div className={styles.prossimiEventiParent}>
          <h1 className={styles.prossimiEventi}>Prossimi eventi:</h1>
          <div className={styles.frameWrapper5}>
            <div className={styles.rectangleGroup}>
              <img
                className={styles.rectangleIcon}
                loading="lazy"
                alt=""
                src="/rectangle-37@2x.png"
              />
              <img
                className={styles.frameChild19}
                loading="lazy"
                alt=""
                src="/rectangle-39@2x.png"
              />
              <img
                className={styles.frameChild20}
                loading="lazy"
                alt=""
                src="/rectangle-38@2x.png"
              />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.immaginiAScorrimentoWrapper}>
        <img
          className={styles.immaginiAScorrimentoIcon}
          loading="lazy"
          alt=""
          src="/immagini-a-scorrimento.svg"
        />
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
              <span className={styles.span3}>{` `}</span>
              <span className={styles.span4}>{`| `}</span>
              <span className={styles.nightbles1}>nightbles</span>
            </div>
            <div className={styles.contattiWrapper}>
              <div className={styles.contatti1}>Contatti</div>
            </div>
          </div>
        </div>
        <div className={styles.footerInner1}>
          <div className={styles.rectangleDiv} />
        </div>
        <div className={styles.footerInner2}>
          <div className={styles.frameParent4}>
            <div className={styles.frameParent5}>
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
              <div className={styles.frameParent6}>
                <div className={styles.socialParent}>
                  <b className={styles.social}>Social</b>
                  <div className={styles.frameParent7}>
                    <button className={styles.frameButton}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.ellipseDiv} />
                        <img
                          className={styles.instagramIcon}
                          alt=""
                          src="/instagram@2x.png"
                        />
                      </div>
                    </button>
                    <button className={styles.frameWrapper6}>
                      <div className={styles.ellipseGroup}>
                        <div className={styles.frameChild21} />
                        <img
                          className={styles.facebookIcon}
                          alt=""
                          src="/facebook@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <button className={styles.frameWrapper7}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild22} />
                    <img
                      className={styles.linkedinIcon}
                      alt=""
                      src="/linkedin@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameWrapper8}>
                  <div className={styles.ellipseParent1}>
                    <div className={styles.frameChild23} />
                    <img
                      className={styles.tiktokIcon}
                      alt=""
                      src="/tiktok@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameWrapper9}>
                  <div className={styles.ellipseParent2}>
                    <div className={styles.frameChild24} />
                    <img
                      className={styles.youtubeIcon}
                      alt=""
                      src="/youtube@2x.png"
                    />
                  </div>
                </button>
              </div>
            </div>
            <b className={styles.privacyPolicy}>Privacy Policy</b>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Locale;
