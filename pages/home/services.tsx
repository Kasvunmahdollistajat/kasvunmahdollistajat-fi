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
  "Muokkaamaan organisaation kulttuuria ja käytäntöjä tavoiteltuun suuntaan",
  "Määrittelemään johtamistavan ja konkretisoimaan sen esihenkilöiden käytännön työhön",
  "Nostamaan johtamisen ja johtotiimityön uudelle tasolle",
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
      <ServiceBox service="YKSILÖ- JA RYHMÄMENTOROINTI, TYÖNOHJAUS" />
      <ServiceBox service="URAOHJAUS" />
      <ServiceBox service="VALMENNUS" />
      <ServiceBox service="TYÖPAJOJEN JA KOKOUSTEN FASILITOINTI" />
    </div>
    <div>
      <p>
        Tarjoamme tueksesi sekä henkilökohtaista että pienryhmissä tapahtuvaa
        mentorointia, työnohjausta, uraohjausta, valmennusta sekä työpajojen ja
        kokousten fasilitointia.
      </p>
      <p>
        Asiakkaan tilanne on aina uniikki. Siksi räätälöimme palvelumme
        jokaiselle asiakkaalle tämän tilanteen ja tavoitteiden mukaisesti. Saat
        täsmätoteutuksena juuri sen hyödyn, mitä kussakin tilanteessa tarvitset.
      </p>
    </div>
  </Element>
);

export default Services;
