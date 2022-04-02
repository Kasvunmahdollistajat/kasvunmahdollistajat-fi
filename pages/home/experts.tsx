import styles from "./experts.module.scss";

type Partner = {
  url: string;
  text: string;
};

type Person = {
  imageSrc: string;
  name: string;
  title: string;
  linkedInUser: string;
  children: React.ReactNode;
};

const Partner = ({ url, text }: Partner) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
);

const Person = ({ imageSrc, name, title, linkedInUser, children }: Person) => (
  <div className={styles.person}>
    <div>
      <img src={imageSrc} alt={name} />
    </div>
    <div>
      <h3>{name}</h3>
      <span>{title}</span>
      {children}
      <p>
        Tutustu taustaani tarkemmin{" "}
        <a
          href={`https://www.linkedin.com/in/${linkedInUser}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedInissä
        </a>
        .
      </p>
    </div>
  </div>
);

const Experts = () => (
  <div id="asiantuntijat" className={styles.experts}>
    <h2>ASIANTUNTIJAT</h2>
    <p>
      Kasvun mahdollistajat Oy tekee aktiivista yhteistyötä eri alojen
      kokeneiden ammattilaisten kanssa. Verkostomme avulla voimme tarjota
      sinulle aina parhaat osaajat erilaisiin tilanteisiin ja myös laajempiin
      kehityshankkeisiin.
    </p>
    <div className={styles.partnerList}>
      <p>Kasvun mahdollistajat Oy:n yhteistökumppaneita ovat mm.</p>
      <ul>
        <Partner url="https://www.cxopro.fi" text={"CxO Professional Oy"} />
        <Partner url="https://www.aijabarlund.fi" text={"Aija Bärlund Oy"} />
        <Partner
          url="https://www.keyconsulting.fi"
          text={"Key Consulting Oy"}
        />
        <Partner
          url="https://motivaatiotalo.fi"
          text={"Suomen Motivaatiotalo Oy"}
        />
        <Partner
          url="https://kettu.fi"
          text={"KETTU valmennus ja viestintä Oy"}
        />
        <Partner
          url="https://www.katrisipila.com"
          text={"Katri Sipilä Consulting Oy"}
        />
      </ul>
    </div>
    <Person
      imageSrc="/paivi1.jpg"
      name="Päivi Vuorimaa"
      title="Innostunut ja innostava valmentaja, coach ja fasilitaattori"
      linkedInUser="paivivuorimaa"
    >
      <p>
        Missioni on auttaa organisaatioita ja niiden avainihmisiä onnistumaan
        paremmin ja kasvamaan. Ydinosaamistani ovat valmentava johtaminen ja
        näkemyksellinen toiminnan kehittäminen vastaamaan tarpeita tämän päivän
        ja huomisen toimintaympäristössä. Olen kokenut strategiatyön ja
        strategian toteuttamisen sparraaja. Oman tuoreen johtajakokemukseni
        kautta tiedän, miten laajoja kehityshankkeita johdetaan ja miten koko
        henkilöstö saadaan innostumaan ja uudistamaan toimintatapojaan. Autan
        sinua, johtajia ja esimiehiä kehittymään johtajuudessa.
      </p>
      <p>
        Työtapani on tavoitteellinen, konkreettinen ja energinen. Valmennusten
        ja coachingin hyöty kytkeytyy suoraan käytäntöön. Ihmiset oivaltavat ja
        innostuvat. Olen sekä näkemyksellinen visionääri että vahva käytännön
        tekijä. Luontainen uteliaisuuteni ja haluni kehittyä ovat kuljettaneet
        minua mitä moninaisempiin työrooleihin ja luottamustehtäviin. Siksi
        tunnen laajalti erilaisia organisaatioita ja niiden tilanteita ja
        tarpeita.
      </p>
      <p>
        Vapaa-ajallani liikun luonnossa, käyn jumpassa ja reissaan niin
        kotimaassa kuin maailmalla. Toimin aktiivisesti muutaman organisaation
        hallituksessa sekä erilaisissa luottamustehtävissä ja laajoissa
        verkostoissa.
      </p>
    </Person>
  </div>
);

export default Experts;
