import FrameComponent3 from "../components/FrameComponent3";
import FrameComponent2 from "../components/FrameComponent2";
import FrameComponent1 from "../components/FrameComponent1";
import FrameComponent from "../components/FrameComponent";
import Footer from "../components/Footer";
import styles from "./ProfiloUtente.module.css";



const ProfiloUtente = () => {
  /*const onNNightblesClick = useCallback(() => {
    navigate("/");
  }, [navigate]);
  
  const onLocaleTextClick = useCallback(() => {
    navigate("/gestore");
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
  }, [navigate]);*/
  return (
    <div className={styles.profiloUtente}>
      <div className={styles.rett1Parent}>
        <div className={styles.rett1} />
        <div className={styles.ilTuoLocaleWrapper}>
          <div className={styles.ilTuoLocale} >IL TUO LOCALE</div>
        </div>
        <div className={styles.frameChild} />
        <div className={styles.creaAccountWrapper}>
          <div className={styles.creaAccount}>CREA ACCOUNT</div>
        </div>
      </div>
      <div className={styles.rett3} />
      <section className={styles.frameParent}>
        <FrameComponent3 />
        <FrameComponent2 />
        <div className={styles.frameItem} />
      </section>
      <FrameComponent1 />
      <section className={styles.vectorParent}>
        <img
          className={styles.frameInner}
          loading="lazy"
          alt=""
          src="/line-12.svg"
        />
        <FrameComponent />
        <div className={styles.lineDiv} />
      </section>
      <Footer />
    </div>
  );
};

export default ProfiloUtente;
