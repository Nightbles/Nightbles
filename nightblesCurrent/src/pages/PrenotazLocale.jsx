import { useCallback, useState, useEffect} from "react";
import { useNavigate, useParams } from "react-router-dom";
import styles from "./PrenotazLocale.module.css";
import DropdownList from "../components/DropdownList";
import {discoteche} from "../../public/prova.json"
//menù a tendina per le bottiglie(0,70 - 1,5l ecc.) differenziare le bottiglie tra di loro
const PrenotazLocale = () => {
  const [totale, setTotale] = useState(0.00);
  const [quantita, setQuantita] = useState(0);
  const [budgetTavolo, setBudgetTavolo] = useState(0);
  const [spendibile, setSpendibile] = useState(0);
  const [prezzoBottiglie, setPrezzoBottiglie] = useState(150)
  const [quantitaBottiglie, setQuantitaBottiglie] = useState({"150" : 0, "300" : 0, "450" : 0})

  

  

  

  

  /*const [productData, setProductData] = useState(null);

  useEffect(() => {
    fetch('../prova.json') // Sostituisci con l'endpoint effettivo
      .then(response => response.json())
      .then(data => setProductData(data))
      .catch(error => console.error('Errore durante il recupero dei dati:', error));
  }, []);*/
  //let evento = [];

  /*function splittingEvento(){
    let {urlId} = useParams();
    let urlSplitted = urlId.split("+");

    let key = urlSplitted[0]

    let keyEvento = urlSplitted[1]; 

    return data[key].eventi[keyEvento];
  }*/
    let {urlId} = useParams();
    let urlSplitted = urlId.split("+");

    let key = parseInt(urlSplitted[0])
    let keyEvento = urlSplitted[1]; 

    
    console.log(discoteche[key])


  const evento =  discoteche[key].eventi[keyEvento];

  console.log(evento)

  const aggiornaQuantita = (prezzoBottiglia, quantita) => {
    if(quantita == "piu"){
      setQuantitaBottiglie(prevState => ({
        ...prevState,
        [prezzoBottiglia]: Math.max(0,prevState[prezzoBottiglia] + 1)
      }));
    }
    else if(quantita == "meno"){
      setQuantitaBottiglie(prevState => ({
        ...prevState,
        [prezzoBottiglia]: Math.max(0,prevState[prezzoBottiglia] - 1)
      }));
    }
    
  };
  const prezzoBiglietto = evento.prezzoIngresso;
  const navigate = useNavigate();

  const updateStateFromChild = (newValue) => {
    setPrezzoBottiglie(newValue);
  };

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

  const onNNightbles1Click = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onPrivacyPolicyTextClick = useCallback(() => {
    // Please sync "Privacy_policy" to the project
  }, []);

  return (
    <div className={styles.prenotazLocale}>
      <header className={styles.inputFilter}>
        <div className={styles.outputCollector}>
          <div className={styles.rett1} />
          <div className={styles.logicGate}>
            <div className={styles.ilTuoLocale} onClick={onLocaleTextClick}>IL TUO LOCALE</div>
          </div>
          <div className={styles.outputCollectorChild} />
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
          <nav className={styles.indexer}>
            <nav className={styles.sorter}>
              <div className={styles.prenota} onClick={onPRENOTATextClick}>
                PRENOTA
              </div>
              <div className={styles.aboutUs} onClick={onABOUTUSTextClick}>
                ABOUT US
              </div>
              <div className={styles.contatti}>CONTATTI</div>
            </nav>
          </nav>
          <div className={styles.comparator}>
            <button className={styles.accedi} onClick={onAccediClick}>
              <div className={styles.accediChild} />
              <img className={styles.userIcnIcon} alt="" src="/user-icn.svg" />
              <div className={styles.accedi1}>ACCEDI</div>
            </button>
          </div>
        </div>
      </header>
      <main className={styles.accumulator}>
        <section className={styles.tester}>
          <div className={styles.testerInner}>
            <div className={styles.frameParent}>
              <div className={styles.mercoled27MarzoWrapper}>
                <h2 className={styles.mercoled27Marzo}>Mercoledì {evento.giorno} {evento.mese}</h2>
              </div>
              <div className={styles.rectangleParent}>
                <img
                  className={styles.frameChild}
                  loading="lazy"
                  alt=""
                  src={evento.immagine}
                />
                <div className={styles.frameGroup}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.tagSerataParent}>
                      <div className={styles.tagSerata}>Tag Serata:</div>
                      <div className={styles.frameContainer}>
                        <div className={styles.frameDiv}>
                          <div className={styles.tagWrapper}>
                            <button className={styles.tag}>
                              <div className={styles.tagChild} />
                              <div className={styles.live}>Live</div>
                            </button>
                          </div>
                          <div className={styles.tag1}>
                            <div className={styles.tagItem} />
                            <div className={styles.trap}>Trap</div>
                          </div>
                          <button className={styles.tag2}>
                            <div className={styles.tagInner} />
                            <div className={styles.commerciale}>
                              Commerciale
                            </div>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.frameParent1}>
                    <div className={styles.listaWrapper}>
                      <h2 className={styles.lista}>Lista:</h2>
                    </div>
                    <div className={styles.frameParent2}>
                      <div className={styles.listaconDrinkWrapper}>
                        <div className={styles.listaconDrink}>
                          Lista(con drink):
                        </div>
                      </div>
                      <div className={styles.prezzoParent}>
                        <div className={styles.prezzo}>Prezzo</div>
                        <div className={styles.wrapper}>
                          <div className={styles.div}>{prezzoBiglietto}€</div>
                        </div>
                      </div>
                      <div className={styles.frameParent3}>
                        <div className={styles.dataAggregatorWrapper}>
                          <button className={styles.dataAggregator} 
                              onClick={() => {
                                setTotale(totale => Math.max(0, totale - prezzoBiglietto))
                                setQuantita(quantita => Math.max(0, quantita - 1))
                          }}>-</button>
                        </div>
                        <div className={styles.conditionalSplitter}>
                          <div className={styles.quantit}>Quantità</div>
                          <div className={styles.valueFilter}>
                            <div className={styles.inputMerger}>
                              <div className={styles.outputSorter}>
                                <div className={styles.errorHandler}>{quantita}</div>
                              </div>
                              <button className={styles.dataTransformer} 
                                      onClick={()=> {
                                        setTotale(totale + prezzoBiglietto)
                                        setQuantita(quantita + 1)
                              }}> + </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.featureExtractor}>
                    <div className={styles.dataSplitter}>
                      <div className={styles.totale}>Totale</div>
                      <div className={styles.modelTrainer}>
                        <div className={styles.div1}>{totale}€</div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.ruleApplier}>
                    <button className={styles.bottonePrenota}>
                      <div className={styles.bottonePrenotaChild} />
                      <div className={styles.acquista}>Acquista</div>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.distanceCalculator}>
            <div className={styles.neuralNetworkParent}>
              <div className={styles.neuralNetwork}>
                <div className={styles.tavoliParent}>
                  <h2 className={styles.tavoli}>Tavoli:</h2>
                  <div className={styles.naiveBayes}>
                    <div className={styles.selezionaTavolo}>
                      Seleziona tavolo:
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.regressionAnalysis}>
                <img
                  className={styles.piantinaDiscotecaIcon}
                  loading="lazy"
                  alt=""
                  src="/piantina-discoteca.svg"
                />
              </div>
              <div className={styles.fourierTransform}>
                <div className={styles.waveletTransform}>
                  <div className={styles.tipologia}>Tipologia:</div>
                  <div className={styles.prezzo1}>Prezzo:</div>
                </div>
                <div className={styles.fFT}>
                  <div className={styles.dCT}>
                    <div className={styles.dBT}>
                      <div className={styles.tavoloBase}>Tavolo base</div>
                    </div>
                    <div className={styles.edgeDetectorParent}>
                      <button className={styles.edgeDetector} 
                              onClick={() => {
                                setBudgetTavolo(budgetTavolo => Math.max(0, budgetTavolo - 50))
                                setSpendibile(spendibile => Math.max(0, spendibile - 50))
                          }}><span class="material-symbols-rounded">remove</span>
                          </button>
                      <div className={styles.div2}>{budgetTavolo}€</div>
                      <button className={styles.edgeDetector} 
                                      onClick={()=> {
                                        setBudgetTavolo(budgetTavolo + 50)
                                        setSpendibile(spendibile + 50)
                              }}>
                                <span class="material-symbols-rounded">add</span>
                              </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.erosionWrapper}>
            <div className={styles.erosion}>
              <div className={styles.scegliBottiglie}>Scegli bottiglie:</div>
              <div className={styles.opening}>
                <div className={styles.closing}>
                  <div className={styles.spendibile}>Spendibile:</div>
                  <div className={styles.borderFollowing}>
                    <div className={styles.div3}>{spendibile}€</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.regionGrowing}>
            <div className={styles.watershedTransform}>
              <div className={styles.watershedSeedFill}>
                <div className={styles.vodkaFrutta}>Vodka Frutta 
                    <DropdownList 
                      misura={[0.5,0.75,1]} 
                      prezzi={[150, 300, 450]}
                      updateParentState={updateStateFromChild}/>
                </div>
                <div className={styles.vodkaFrutta1}>Vodka Frutta</div>
                <div className={styles.vodkaFrutta2}>Vodka Frutta</div>
                <div className={styles.vodkaFrutta3}>Vodka Frutta</div>
                <div className={styles.vodkaFrutta4}>Vodka Frutta</div>
                <div className={styles.vodkaFrutta4}>Vodka Frutta</div>
              </div> 
            </div>
            <div className={styles.distanceMap}>
              <div className={styles.reachabilityGraph}>
                <div className={styles.frameParent4}>
                  <div className={styles.parent}>
                    <div className={styles.div4}>{prezzoBottiglie}€</div>
                    <div className={styles.imageResizerWrapper}>
                      <div className={styles.imageResizer}>
                        <div className={styles.numberFormatter}>
                            <button className={styles.meno} 
                              onClick={() => {
                                console.log("meno")
                                if(quantitaBottiglie[prezzoBottiglie] > 0){
                                  aggiornaQuantita(prezzoBottiglie, "meno")
                                  console.log(parseInt(spendibile,10) + parseInt(prezzoBottiglie,10))
                                  setSpendibile(spendibile => Math.max(0, parseInt(spendibile,10) + parseInt(prezzoBottiglie,10)))
                                }
                          }}></button>
                        </div>
                        <b className={styles.treeStructurer}>{quantitaBottiglie[prezzoBottiglie]}</b>
                        <div className={styles.linkConnector}>
                          <div className={styles.piu}>
                          <button className={styles.piu}
                              onClick={() => {
                                if(150 > spendibile){
                                  alert("budget insufficiente");
                                }
                                else{
                                  aggiornaQuantita(prezzoBottiglie, "piu")
                                  setSpendibile(spendibile => Math.max(0, spendibile - prezzoBottiglie))
                                  console.log("prezzoBottiglie: " + typeof(prezzoBottiglie));
                                } 
                          }}></button>
                            <div className={styles.errorHandler1} />
                            <div className={styles.responseSender} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.requestReceiver}>
                    <div className={styles.vodkaFrutta5}>Vodka Frutta</div>
                  </div>
                </div>
                <div className={styles.frameParent5}>
                  <div className={styles.group}>
                    <div className={styles.div5}>150€</div>
                    <div className={styles.frameWrapper1}>
                      <div className={styles.frameParent6}>
                        <div className={styles.menoWrapper}>
                          <div className={styles.meno1}>
                            <div className={styles.menoItem} />
                          </div>
                        </div>
                        <b className={styles.b}>0</b>
                        <div className={styles.piuWrapper}>
                          <div className={styles.piu1}>
                            <div className={styles.piuChild} />
                            <div className={styles.piuItem} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.vodkaFruttaWrapper}>
                    <div className={styles.vodkaFrutta6}>Vodka Frutta</div>
                  </div>
                </div>
                <div className={styles.frameParent7}>
                  <div className={styles.container}>
                    <div className={styles.div6}>150€</div>
                    <div className={styles.frameWrapper2}>
                      <div className={styles.frameParent8}>
                        <div className={styles.menoContainer}>
                          <div className={styles.meno2}>
                            <div className={styles.menoInner} />
                          </div>
                        </div>
                        <b className={styles.b1}>0</b>
                        <div className={styles.piuContainer}>
                          <div className={styles.piu2}>
                            <div className={styles.piuInner} />
                            <div className={styles.rectangleDiv} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.vodkaFruttaContainer}>
                    <div className={styles.vodkaFrutta7}>Vodka Frutta</div>
                  </div>
                </div>
                <div className={styles.searchEngine}>
                  <div className={styles.sortingSystem}>
                    <div className={styles.div7}>150€</div>
                    <div className={styles.div8}>150€</div>
                  </div>
                  <div className={styles.compressionComponent}>
                    <div className={styles.encryptionEncoder}>
                      <div className={styles.meno3}>
                        <div className={styles.menoChild1} />
                      </div>
                      <div className={styles.meno4}>
                        <div className={styles.menoChild2} />
                      </div>
                    </div>
                  </div>
                  <div className={styles.authenticationAuthenticator}>
                    <div className={styles.authorizationAuthorizer}>
                      <div className={styles.tokenManager}>
                        <div className={styles.sessionSaver}>
                          <div className={styles.cookieCraftsman}>
                            <div className={styles.logLoader}>
                              <b className={styles.errorLogger}>0</b>
                              <div className={styles.statusTracker}>
                                <div className={styles.piu3}>
                                  <div className={styles.queueManager} />
                                  <div className={styles.processPool} />
                                </div>
                              </div>
                            </div>
                            <div className={styles.logLoader1}>
                              <b className={styles.b2}>0</b>
                              <div className={styles.piuFrame}>
                                <div className={styles.piu4}>
                                  <div className={styles.piuChild1} />
                                  <div className={styles.piuChild2} />
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className={styles.workflowWorker}>
                            <div className={styles.vodkaFruttaParent}>
                              <div className={styles.vodkaFrutta8}>
                                Vodka Frutta
                              </div>
                              <div className={styles.vodkaFrutta9}>
                                Vodka Frutta
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <button className={styles.bottonePrenota1}>
                        <div className={styles.bottonePrenotaItem} />
                        <div className={styles.inviaPrenotazione}>
                          invia prenotazione
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.alertAlertor}>
              <div className={styles.eventEngine}>
                <div className={styles.signalSender}>
                  <div className={styles.div9}>150€</div>
                  <div className={styles.div10}>150€</div>
                </div>
                <div className={styles.topicTracker}>
                  <div className={styles.subscriptionSystem}>
                    <div className={styles.publishingPlatform}>
                      <div className={styles.meno5}>
                        <div className={styles.menoChild3} />
                      </div>
                    </div>
                    <b className={styles.listenerLoader}>0</b>
                    <div className={styles.topicTransformer}>
                      <div className={styles.piu5}>
                        <div className={styles.topicFilter} />
                        <div className={styles.topicFilter1} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.topicCompressor}>
                <div className={styles.div11}>150€</div>
                <div className={styles.topicDecryptor}>
                  <div className={styles.topicAuthenticator}>
                    <div className={styles.topicAuthorizer}>
                      <div className={styles.meno6}>
                        <div className={styles.menoChild4} />
                      </div>
                    </div>
                    <b className={styles.b3}>0</b>
                    <div className={styles.imageProcessor}>
                      <div className={styles.piu6}>
                        <div className={styles.linkConnector1} />
                        <div className={styles.linkConnector2} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.shapeSorter}>
                <div className={styles.labelCreator}>
                  <div className={styles.div12}>150€</div>
                  <div className={styles.iconLibrary}>
                    <div className={styles.gridOrganizer}>
                      <div className={styles.proximitySensor}>
                        <div className={styles.meno7}>
                          <div className={styles.menoChild5} />
                        </div>
                      </div>
                      <b className={styles.interactionHandler}>0</b>
                      <div className={styles.colorPalette}>
                        <div className={styles.piu7}>
                          <div className={styles.sizeScaler} />
                          <div className={styles.rotationTransform} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.labelCreator1}>
                  <div className={styles.div13}>150€</div>
                  <div className={styles.labelCreatorInner}>
                    <div className={styles.frameParent9}>
                      <div className={styles.menoFrame}>
                        <div className={styles.meno8}>
                          <div className={styles.menoChild6} />
                        </div>
                      </div>
                      <b className={styles.b4}>0</b>
                      <div className={styles.piuWrapper1}>
                        <div className={styles.piu8}>
                          <div className={styles.piuChild3} />
                          <div className={styles.piuChild4} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className={styles.labelCreator2}>
                  <div className={styles.div14}>150€</div>
                  <div className={styles.labelCreatorChild}>
                    <div className={styles.frameParent10}>
                      <div className={styles.menoWrapper1}>
                        <div className={styles.meno9}>
                          <div className={styles.menoChild7} />
                        </div>
                      </div>
                      <b className={styles.b5}>0</b>
                      <div className={styles.piuWrapper2}>
                        <div className={styles.piu9}>
                          <div className={styles.piuChild5} />
                          <div className={styles.piuChild6} />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.rett3} />
      <footer className={styles.footer}>
        <img className={styles.footerChild} alt="" src="/rectangle-8.svg" />
        <div className={styles.shearTransform}>
          <div className={styles.skewTransform}>
            <div
              className={styles.nNightblesContainer1}
              onClick={onNNightbles1Click}
            >
              <span>N</span>
              <span className={styles.span2}>{` `}</span>
              <span className={styles.span3}>{`| `}</span>
              <span className={styles.nightbles1}>nightbles</span>
            </div>
            <div className={styles.brightnessAdjustor}>
              <div className={styles.contatti1}>Contatti</div>
            </div>
          </div>
        </div>
        <div className={styles.invertFilter}>
          <div className={styles.sepiaFilter} />
        </div>
        <div className={styles.saturationSlider}>
          <div className={styles.grayscaleFilter}>
            <div className={styles.frameParent11}>
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
              <div className={styles.pathCreator}>
                <b className={styles.ourBrands}>Our brands</b>
              </div>
              <div className={styles.connectionManager}>
                <div className={styles.spinner}>
                  <b className={styles.social}>Social</b>
                  <div className={styles.buttonParent}>
                    <button className={styles.button}>
                      <div className={styles.modalDialog}>
                        <div className={styles.toolTip} />
                        <img
                          className={styles.instagramIcon}
                          alt=""
                          src="/instagram@2x.png"
                        />
                      </div>
                    </button>
                    <button className={styles.button1}>
                      <div className={styles.ellipseParent}>
                        <div className={styles.frameItem} />
                        <img
                          className={styles.facebookIcon}
                          alt=""
                          src="/facebook@2x.png"
                        />
                      </div>
                    </button>
                  </div>
                </div>
                <button className={styles.toggleSwitchWrapper}>
                  <div className={styles.toggleSwitch}>
                    <div className={styles.progressBar} />
                    <img
                      className={styles.linkedinIcon}
                      alt=""
                      src="/linkedin@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.connectionManagerInner}>
                  <div className={styles.ellipseGroup}>
                    <div className={styles.frameInner} />
                    <img
                      className={styles.tiktokIcon}
                      alt=""
                      src="/tiktok@2x.png"
                    />
                  </div>
                </button>
                <button className={styles.connectionManagerChild}>
                  <div className={styles.ellipseContainer}>
                    <div className={styles.ellipseDiv} />
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

export default PrenotazLocale;
