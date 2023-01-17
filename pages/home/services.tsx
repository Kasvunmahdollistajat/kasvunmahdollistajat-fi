import { Element } from "react-scroll";
import styles from "./services.module.scss";

const ServiceBox = ({ service }: { service: string }) => (
  <div className={styles.serviceBox}>
    <span>{service}</span>
  </div>
);

const serviceList = [
  "Päivittämään strategian, kirkastamaan uuden suunnan ja toteuttamaan strategiaa koko organisaation voimin",
  "Varmistamaan tulevan muutoksen onnistumisen ja henkilöstön sitoutumisen",
  "Muokkaamaan organisaation kulttuuria",
  "Määrittelemään johtamistavan ja viemään sen käytäntöön",
  "Nostamaan johtamisen ja johtoryhmätyön uudelle tasolle",
  "Selkeyttämään omaa johtamistasi ja kasvamaan johtajuudessa",
  "Parantamaan vuorovaikutustaitoja",
  "Löytämään ratkaisuja kiperiin tilanteisiin",
];

const Services = () => (
  <Element name="palvelut" className={styles.services}>
    <h2>PALVELUT</h2>
    <h4>Autamme sinua ja organisaatiotasi</h4>
    <ul>
      {serviceList.map((srv, i) => (
        <li key={i}>{srv}</li>
      ))}
    </ul>
    <div className={styles.serviceWrapper}>
      <ServiceBox service="KONSULTOINTI" />
      <ServiceBox service="VALMENNUS" />
      <ServiceBox service="FASILITOINTI" />
      <ServiceBox service="COACHING" />
    </div>
    <div>
      <p>
        Tarjoamme tueksesi konsultointia, valmennusta, työpajojen ja kokousten
        fasilitointia sekä yksilö- ja ryhmäcoachingia.
      </p>
      <p>
        Asiakkaan tilanne on aina uniikki. Siksi räätälöimme palvelumme
        asiakkaalle tämän tilanteen ja tavoitteiden mukaisesti. Saat juuri sen
        hyödyn, mitä kussakin tilanteessa tarvitset.
      </p>
    </div>
  </Element>
);

export default Services;
