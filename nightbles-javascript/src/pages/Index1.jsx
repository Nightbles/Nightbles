import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Index1.module.css";
import Map from "../components/Map";

const Index1 = () => {
  const navigate = useNavigate();
  
  /*const map =  readJSON();
  
  //console.log(Promise.resolve(map));

  async function readJSON(){
    const response =  await fetch("https://api.tomtom.com/map/1/sprite/25.2.3-0/basic_light-map/metadata.json?key=jKSFnRSYQMbNShEZwLzQkHUBODWwI4Gz")
    const json = await response.json();
    return json.content;
  }*/

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
    <div className={styles.index20}>
      <header className={styles.localeCard}>
        <div className={styles.searchBar}>
          <div className={styles.rett1} />
          <div className={styles.callToAction}>
            <div className={styles.ilTuoLocale}>IL TUO LOCALE</div>
          </div>
          <div className={styles.unsplashCard} />
          <div className={styles.creaAccountWrapper}>
            <div className={styles.creaAccount}>CREA ACCOUNT</div>
          </div>
        </div>
        <div className={styles.destinationSelector}>
          <div className={styles.rett2} />
          <h1 className={styles.nNightblesContainer}>
            <span>N</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.span1}>{`| `}</span>
            <span className={styles.nightbles}>nightbles</span>
          </h1>
          <nav className={styles.destinationSelectorInner}>
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
          <div className={styles.accessButton}>
            <button className={styles.accedi} onClick={onAccediClick}>
              <div className={styles.accediChild} />
              <img className={styles.userIcnIcon} alt="" src="/user-icn.svg" />
              <div className={styles.accedi1}>ACCEDI</div>
            </button>
          </div>
        </div>
      </header>
      <section className={styles.contentCard}>
        <div className={styles.bar}>
          <img
            className={styles.unsplashcfblmp12zt8Icon}
            alt=""
            src="/unsplashcfblmp12zt8@2x.png"
          />
          <div className={styles.localeInstance}>
            <h1 className={styles.doveVuoiAndare}>Dove vuoi andare stasera?</h1>
          </div>
          <div className={styles.search}>
            <div className={styles.searchParent}>
              <div className={styles.search1}>search...</div>
              <img className={styles.unionIcon} alt="" src="/union.svg" />
            </div>
          </div>
        </div>
      </section>
      <section className={styles.instagramLogoWrapper}>
        <div className={styles.instagramLogo}>
          <div className={styles.facebookLogo}>
            <div className={styles.card}>
              <div className={styles.cardChild} />
              <img
                className={styles.unsplashy5pxvs1lpy4Icon}
                loading="lazy"
                alt=""
                src="/unsplashy5pxvs1lpy4@2x.png"
              />
              <div className={styles.frameParent}>
                <div className={styles.nomeLocaleParent}>
                  <div className={styles.nomeLocale}>Nome locale</div>
                  <div className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet consectetur. Proin tristique
                    libero tortor tellus pretium magna sollicitudin. Diam
                    feugiat sodales velit feugiat eget eros.
                  </div>
                </div>
                <div className={styles.tikTokLink}>
                  <div className={styles.div}>€€€</div>
                </div>
              </div>
            </div>
            <div className={styles.card1}>
              <div className={styles.cardItem} />
              <img
                className={styles.unsplashy5pxvs1lpy4Icon1}
                alt=""
                src="/unsplashy5pxvs1lpy4@2x.png"
              />
              <div className={styles.instagramLink}>
                <div className={styles.facebookLink}>
                  <div className={styles.nomeLocale1}>Nome locale</div>
                  <div className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet consectetur. Proin tristique
                    libero tortor tellus pretium magna sollicitudin. Diam
                    feugiat sodales velit feugiat eget eros.
                  </div>
                </div>
                <div className={styles.wrapper}>
                  <div className={styles.div1}>€€€</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.facebookLogo1}>
            <div className={styles.card2}>
              <div className={styles.cardInner} />
              <img
                className={styles.unsplashy5pxvs1lpy4Icon2}
                alt=""
                src="/unsplashy5pxvs1lpy4@2x.png"
              />
              <div className={styles.frameGroup}>
                <div className={styles.nomeLocaleGroup}>
                  <div className={styles.nomeLocale2}>Nome locale</div>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet consectetur. Proin tristique
                    libero tortor tellus pretium magna sollicitudin. Diam
                    feugiat sodales velit feugiat eget eros.
                  </div>
                </div>
                <div className={styles.container}>
                  <div className={styles.div2}>€€€</div>
                </div>
              </div>
            </div>
            <div className={styles.card3}>
              <div className={styles.rectangleDiv} />
              <img
                className={styles.unsplashy5pxvs1lpy4Icon3}
                alt=""
                src="/unsplashy5pxvs1lpy4@2x.png"
              />
              <div className={styles.frameContainer}>
                <div className={styles.nomeLocaleContainer}>
                  <div className={styles.nomeLocale3}>Nome locale</div>
                  <div className={styles.loremIpsumDolor3}>
                    Lorem ipsum dolor sit amet consectetur. Proin tristique
                    libero tortor tellus pretium magna sollicitudin. Diam
                    feugiat sodales velit feugiat eget eros.
                  </div>
                </div>
                <div className={styles.frame}>
                  <div className={styles.div3}>€€€</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.facebookLogo2}>
            <div className={styles.card4}>
              <div className={styles.cardChild1} />
              <img
                className={styles.unsplashy5pxvs1lpy4Icon4}
                alt=""
                src="/unsplashy5pxvs1lpy4@2x.png"
              />
              <div className={styles.frameDiv}>
                <div className={styles.nomeLocaleParent1}>
                  <div className={styles.nomeLocale4}>Nome locale</div>
                  <div className={styles.loremIpsumDolor4}>
                    Lorem ipsum dolor sit amet consectetur. Proin tristique
                    libero tortor tellus pretium magna sollicitudin. Diam
                    feugiat sodales velit feugiat eget eros.
                  </div>
                </div>
                <div className={styles.wrapper1}>
                  <div className={styles.div4}>€€€</div>
                </div>
              </div>
            </div>
            <div className={styles.card5}>
              <div className={styles.cardChild2} />
              <img
                className={styles.unsplashy5pxvs1lpy4Icon5}
                alt=""
                src="/unsplashy5pxvs1lpy4@2x.png"
              />
              <div className={styles.frameParent1}>
                <div className={styles.nomeLocaleParent2}>
                  <div className={styles.nomeLocale5}>Nome locale</div>
                  <div className={styles.loremIpsumDolor5}>
                    Lorem ipsum dolor sit amet consectetur. Proin tristique
                    libero tortor tellus pretium magna sollicitudin. Diam
                    feugiat sodales velit feugiat eget eros.
                  </div>
                </div>
                <div className={styles.wrapper2}>
                  <div className={styles.div5}>€€€</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.index20Inner}>
        <div className={styles.aboutUsParent}>
          <h1 className={styles.aboutUs1} data-scroll-to="aboutUsText">
            About us
          </h1>
          <div className={styles.eventInfoWrapper}>
            <div className={styles.eventInfo}>
              <div className={styles.aboutUs2}>
                <div className={styles.easyWrapper}>
                  <img
                    className={styles.easyIcon}
                    loading="lazy"
                    alt=""
                    src="/easy@2x.png"
                  />
                </div>
                <h2 className={styles.facile}>Facile</h2>
              </div>
              <div className={styles.cardsRow}>
                <img
                  className={styles.checkmarkIcon}
                  loading="lazy"
                  alt=""
                  src="/checkmark@2x.png"
                />
                <h2 className={styles.veloce}>Veloce</h2>
              </div>
              <div className={styles.aboutUs3}>
                <div className={styles.champagneBottleWrapper}>
                  <img
                    className={styles.champagneBottleIcon}
                    loading="lazy"
                    alt=""
                    src="/champagne-bottle@2x.png"
                  />
                </div>
                <h2 className={styles.iMiglioriEventi}>I migliori eventi</h2>
              </div>
              <div className={styles.aboutUs4}>
                <div className={styles.facebookLikeWrapper}>
                  <img
                    className={styles.facebookLikeIcon}
                    loading="lazy"
                    alt=""
                    src="/facebook-like@2x.png"
                  />
                </div>
                <h2 className={styles.iLocaliPiu}>I locali piu adatti</h2>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.easyContainer}>
         <Map/>
      </section>
      <div className={styles.rett3} />
      <footer className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/rectangle-8.svg" />
        <div className={styles.checkmarks}>
          <div className={styles.contactInfo}>
            <h1
              className={styles.nNightblesContainer1}
              onClick={onNNightbles1Click}
            >
              <span>N</span>
              <span className={styles.span2}>{` `}</span>
              <span className={styles.span3}>{`| `}</span>
              <span className={styles.nightbles1}>nightbles</span>
            </h1>
            <div className={styles.contatti1}>
              <h1 className={styles.contatti2}>Contatti</h1>
            </div>
          </div>
        </div>
        <div className={styles.socialMedia}>
          <div className={styles.privacyPolicy} />
        </div>
        <div className={styles.footerRow}>
          <div className={styles.contactUs}>
            <div className={styles.giuseppeNightblesParent}>
              <div className={styles.giuseppeNightbles}>
                <b className={styles.contactUs1}>Contact us</b>
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
              <div className={styles.brandNames}>
                <b className={styles.ourBrands}>Our brands</b>
              </div>
              <div className={styles.socialNavParent}>
                <div className={styles.socialNav}>
                  <b className={styles.social}>Social</b>
                  <div className={styles.frameParent2}>
                    <button className={styles.platformIconsWrapper}>
                      <div className={styles.platformIcons}>
                        <div className={styles.profileCircles} />
                        <img
                          className={styles.instagramIcon}
                          alt=""
                          src="/instagram@2x.png"
                        />
                      </div>
                    </button>
                    <button className={styles.frameWrapper}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameChild} />
                        <img
                          className={styles.facebookIcon}
                          alt=""
                          src="/facebook@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <button className={styles.linkedInTikTok}>
                  <div className={styles.networkLogosParent}>
                    <div className={styles.networkLogos} />
                    <img
                      className={styles.linkedinIcon}
                      alt=""
                      src="/linkedin@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.linkedInTikTok1}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameItem} />
                    <img
                      className={styles.tiktokIcon}
                      alt=""
                      src="/tiktok@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.linkedInTikTok2}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameInner} />
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
              className={styles.privacyPolicy1}
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

export default Index1;
