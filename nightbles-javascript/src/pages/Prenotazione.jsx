import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import React, { Suspense, lazy } from "react";
import CustomSlider from "../components/CustomSlider";
import styles from "./Prenotazione.module.css";
import {discoteche} from "../../public/prova.json"
import Map from "../components/Map";



const Prenotazione = () => {

  console.log(discoteche[0].id);
  //const minLista = 0;

  //const maxLista = 70;
  //const [lista, setLista] = useState([minLista, maxLista]);

  const navigate = useNavigate();
  
  const onNNightbles1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPRENOTATextClick = useCallback(() => {
    navigate("/prenotazione");
  }, [navigate]);

  const onLocaleTextClick = useCallback(() => {
    navigate("/gestore");
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

  /*const onCARDContainerClick = useCallback((props) => {
    console.log(props)
    navigate(`/locale/${props}`);
  }, [navigate]);*/
  

  const onCreaAccount = useCallback(() => {
    navigate("/profilo-utente");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "Privacy_policy" to the project
  }, []);

  return (
    <div className={styles.prenotazione}>
      
      <header className={styles.featureExtractor}>
        <div className={styles.algorithmManager}>
          <div className={styles.rett1} />
          <div className={styles.treeStructure}>
            <div className={styles.ilTuoLocale} onClick={onLocaleTextClick}>IL TUO LOCALE</div>
          </div>
          <div className={styles.inputProcessor} />
          <div className={styles.outputAggregator}>
            <div className={styles.creaAccount} onClick={onCreaAccount}>CREA ACCOUNT</div>
          </div>
        </div>
        <div className={styles.splitter}>
          <input className={styles.rett2} type="text" />
          <h1
            className={styles.nNightblesContainer}
            onClick={onNNightblesClick}
          >
            <span>N</span>
            <span className={styles.span}>{` `}</span>
            <span className={styles.span1}>{`| `}</span>
            <span className={styles.nightbles}>nightbles</span>
          </h1>
          <nav className={styles.splitterInner}>
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
              <img className={styles.userIcnIcon} alt="" src="/user-icn1.svg" />
              <div className={styles.accedi1}>ACCEDI</div>
            </button>
          </div>
        </div>
      </header>
      <div className={styles.rett3} />
      <div className={styles.prenotazioneInner}>
        <div className={styles.cittaParent}>
          <img className={styles.cittaIcon} alt="" src="/citta@2x.png" />
          <div className={styles.srcBar}>
            <div className={styles.srcBarChild} />
            <div className={styles.locationWrapper}>
              <img
                className={styles.locationIcon}
                loading="lazy"
                alt=""
                src="/location@2x.png"
              />
            </div>
            <div className={styles.milanoWrapper}>
              <h1 className={styles.milano}>Milano</h1>
            </div>
            <div className={styles.lineParent}>
              <div className={styles.frameChild} />
              <div className={styles.cercaAdEsempioLocaliTechnoWrapper}>
                <h1 className={styles.cercaAdEsempio}>
                  Cerca ad esempio locali techno...
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className={styles.prenotazioneChild}>
        <section className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.filtriParent}>
                <div className={styles.filtri}>
                  <div className={styles.filtriChild} />
                  <div className={styles.frameContainer}>
                    <div className={styles.filtraPerWrapper}>
                      <h1 className={styles.filtraPer}>Filtra per:</h1>
                    </div>
                    <img
                      className={styles.frameItem}
                      alt=""
                      src="/line-8.svg"
                    />
                  </div>
                  
                  <div className={styles.filtriInner}>
                  
                    <div className={styles.frameDiv}>
                      <div className={styles.frameParent1}>
                        <div className={styles.budgetListaParent}>
                          <h1 className={styles.budgetLista}>Budget lista:</h1>
                          <div className={styles.free40Wrapper}>
                            <div className={styles.free40}>free - €70+</div>
                          </div>
                          <CustomSlider minPrezzo={0} maxPrezzo={70}/>
                        </div>
                      </div>
                      
                      <div className={styles.modelTrainer}>
                        <div className={styles.predictionEngine}>
                          <div className={styles.budgetTavoloaPersonaContainer}>
                            <span>Budget tavolo</span>
                            <span className={styles.aPersona}>(a persona)</span>
                            <span>:</span>
                          </div>
                          <div className={styles.dataSerializer}>
                            <div className={styles.div2}>€20 - €100+</div>
                          </div>
                          <CustomSlider minPrezzo={20} maxPrezzo={100}/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ruleExecutor}>
                    <img
                      className={styles.ruleExecutorChild}
                      loading="lazy"
                      alt=""
                      src="/line-7.svg"
                    />
                    <div className={styles.treeBuilder}>
                      <h1 className={styles.tipologiaDiDiscoteca}>
                        Tipologia di discoteca:
                      </h1>
                    </div>
                  </div>
                </div>
                <div className={styles.dataModeler}>
                  <div className={styles.component1}>
                    <div className={styles.sliderBarMask}>
                      <div className={styles.sliderBar} />
                    </div>
                    <img
                      className={styles.sliderControlIcon}
                      loading="lazy"
                      alt=""
                      src="/slider-control.svg"
                    />
                    <div className={styles.predictionEngineAdvanced}>
                      <div className={styles.numbers}>
                        <div className={styles.div6}>
                          <p className={styles.p}>€0</p>
                          <p className={styles.p1}>€10</p>
                          <p className={styles.p2}>€20</p>
                          <p className={styles.p3}>€30</p>
                          <p className={styles.p4}>€40</p>
                          <p className={styles.p5}>€50</p>
                          <p className={styles.p6}>€60</p>
                          <p className={styles.p7}>€70</p>
                          <p className={styles.p8}>€80</p>
                          <p className={styles.p9}>€90</p>
                          <p className={styles.p10}>€100</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Map/>
          </div>
          <div className={styles.networkInterfaceAdvanced}>
            <div className={styles.userInputProcessorAdvanced}>
              <div className={styles.outputDisplayAdvanced}>
                <Link to={`/locale/${discoteche[0].id}`} className={styles.card} >
                  <div className={styles.cardChild} />
                  <img
                    className={styles.unsplashy5pxvs1lpy4Icon}
                    loading="lazy"
                    alt=""
                    src="/unsplashy5pxvs1lpy41@2x.png"
                  />
                  <div className={styles.dataFlowManagerAdvanced}>
                    <div className={styles.dataValidationAdvanced}>
                      <div className={styles.nomeLocale}>{discoteche[0].nome}</div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Proin tristique
                        libero tortor tellus pretium magna sollicitudin. Diam
                        feugiat sodales velit feugiat eget eros.
                      </div>
                    </div>
                    <div className={styles.dataParserAdvanced}>
                      <div className={styles.div7}>€€€</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.outputDisplayAdvanced1}>
              <Link to={`/locale/${discoteche[1].id}`} className={styles.card} >
                  <div className={styles.cardChild} />
                  <img
                    className={styles.unsplashy5pxvs1lpy4Icon}
                    loading="lazy"
                    alt=""
                    src="/unsplashy5pxvs1lpy41@2x.png"
                  />
                  <div className={styles.dataFlowManagerAdvanced}>
                    <div className={styles.dataValidationAdvanced}>
                      <div className={styles.nomeLocale}>{discoteche[1].nome}</div>
                      <div className={styles.loremIpsumDolor}>
                        Lorem ipsum dolor sit amet consectetur. Proin tristique
                        libero tortor tellus pretium magna sollicitudin. Diam
                        feugiat sodales velit feugiat eget eros.
                      </div>
                    </div>
                    <div className={styles.dataParserAdvanced}>
                      <div className={styles.div7}>€€€</div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className={styles.predictionEngineExpert}>
                <div className={styles.card2}>
                  <div className={styles.cardInner} />
                  <img
                    className={styles.unsplashy5pxvs1lpy4Icon2}
                    alt=""
                    src="/unsplashy5pxvs1lpy41@2x.png"
                  />
                  <div className={styles.inputProcessor1}>
                    <div className={styles.outputHandler}>
                      <div className={styles.nomeLocale2}>Nome locale</div>
                      <div className={styles.loremIpsumDolor2}>
                        Lorem ipsum dolor sit amet consectetur. Proin tristique
                        libero tortor tellus pretium magna sollicitudin. Diam
                        feugiat sodales velit feugiat eget eros.
                      </div>
                    </div>
                    <div className={styles.container}>
                      <div className={styles.div9}>€€€</div>
                    </div>
                  </div>
                </div>
                <div className={styles.card3}>
                  <div className={styles.cardChild1} />
                  <img
                    className={styles.unsplashy5pxvs1lpy4Icon3}
                    alt=""
                    src="/unsplashy5pxvs1lpy41@2x.png"
                  />
                  <div className={styles.frameParent3}>
                    <div className={styles.nomeLocaleGroup}>
                      <div className={styles.nomeLocale3}>Nome locale</div>
                      <div className={styles.loremIpsumDolor3}>
                        Lorem ipsum dolor sit amet consectetur. Proin tristique
                        libero tortor tellus pretium magna sollicitudin. Diam
                        feugiat sodales velit feugiat eget eros.
                      </div>
                    </div>
                    <div className={styles.frame}>
                      <div className={styles.div10}>€€€</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.card4}>
                <div className={styles.cardChild2} />
                <img
                  className={styles.unsplashy5pxvs1lpy4Icon4}
                  alt=""
                  src="/unsplashy5pxvs1lpy41@2x.png"
                />
                <div className={styles.graphProcessorAdvanced}>
                  <div className={styles.dataModelerAdvanced}>
                    <div className={styles.nomeLocale4}>Nome locale</div>
                    <div className={styles.loremIpsumDolor4}>
                      Lorem ipsum dolor sit amet consectetur. Proin tristique
                      libero tortor tellus pretium magna sollicitudin. Diam
                      feugiat sodales velit feugiat eget eros.
                    </div>
                  </div>
                  <div className={styles.featureExtractorExpert}>
                    <div className={styles.div11}>€€€</div>
                  </div>
                </div>
              </div>
              <div className={styles.card5}>
                <div className={styles.cardChild3} />
                <img
                  className={styles.unsplashy5pxvs1lpy4Icon5}
                  alt=""
                  src="/unsplashy5pxvs1lpy41@2x.png"
                />
                <div className={styles.frameParent4}>
                  <div className={styles.nomeLocaleContainer}>
                    <div className={styles.nomeLocale5}>Nome locale</div>
                    <div className={styles.loremIpsumDolor5}>
                      Lorem ipsum dolor sit amet consectetur. Proin tristique
                      libero tortor tellus pretium magna sollicitudin. Diam
                      feugiat sodales velit feugiat eget eros.
                    </div>
                  </div>
                  <div className={styles.wrapper1}>
                    <div className={styles.div12}>€€€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/rectangle-8.svg" />
        <div className={styles.footerInner}>
          <div className={styles.nNightblesParent}>
            <h1
              className={styles.nNightblesContainer1}
              onClick={onNNightbles1Click}
            >
              <span>N</span>
              <span className={styles.span2}>{` `}</span>
              <span className={styles.span3}>{`| `}</span>
              <span className={styles.nightbles1}>nightbles</span>
            </h1>
            <div className={styles.contattiWrapper}>
              <h1 className={styles.contatti1}>Contatti</h1>
            </div>
          </div>
        </div>
        <div className={styles.footerInner1}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.footerInner2}>
          <div className={styles.frameParent5}>
            <div className={styles.frameParent6}>
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
              <div className={styles.frameParent7}>
                <div className={styles.socialParent}>
                  <b className={styles.social}>Social</b>
                  <div className={styles.frameParent8}>
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
                    <button className={styles.frameWrapper1}>
                      <div className={styles.ellipseGroup}>
                        <div className={styles.frameChild1} />
                        <img
                          className={styles.facebookIcon}
                          alt=""
                          src="/facebook@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <button className={styles.frameWrapper2}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.frameChild2} />
                    <img
                      className={styles.linkedinIcon}
                      alt=""
                      src="/linkedin@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameWrapper3}>
                  <div className={styles.ellipseParent1}>
                    <div className={styles.frameChild3} />
                    <img
                      className={styles.tiktokIcon}
                      alt=""
                      src="/tiktok@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.frameWrapper4}>
                  <div className={styles.ellipseParent2}>
                    <div className={styles.frameChild4} />
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

export default Prenotazione;
