import styles from "./index.module.scss";

const Home = () => {
  return (
    <>
      <div style={{ height: "90vh", textAlign: "center" }}>
        <img
          style={{ height: "100%", width: "100%" }}
          src="/Kivet.jpg"
          alt=""
        />
        <div
          style={{
            position: "absolute",
            top: "4.5rem",
            left: "0",
            backgroundColor: "rgba(0, 0, 0, 0.3)",
            width: "100%",
            color: "white",
            height: "calc(100% - 5.5rem)",
          }}
        >
          <h1 style={{ fontSize: "4rem", marginTop: "25vh" }}>
            KASVUN MAHDOLLISTAJAT
          </h1>
          <h2 style={{ fontSize: "2rem" }}>
            Autamme organisaatioita onnistumaan ja ihmisiä kasvamaan
            johtajuudessa
          </h2>
        </div>
      </div>
      <div style={{ textAlign: "center", padding: "6rem" }}>
        <h3>Miten voin olla sinulle avuksi? - Ota yhteyttä!</h3>
        <span>
          Päivi Vuorimaa - <strong>paivi.vuorimaa@gmail.com</strong>
        </span>
      </div>
    </>
  );
};

export default Home;
