import { Element } from 'react-scroll'
import styles from './experts.module.scss'

type Partner = {
  url: string
  text: string
}

type Person = {
  imageSrc: string
  name: string
  title: string
  children: React.ReactNode
}

const Partner = ({ url, text }: Partner) => (
  <li>
    <a href={url} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  </li>
)

const Person = ({ imageSrc, name, title, children }: Person) => (
  <div className={styles.person}>
    <div>
      <img src={imageSrc} alt={name} />
    </div>
    <div>
      <h3>{name}</h3>
      <span>{title}</span>
      {children}
    </div>
  </div>
)

const Experts = () => (
  <Element name="asiantuntijat" className={styles.experts}>
    <h2>ASIANTUNTIJAT</h2>
    <p>
      Kasvun mahdollistajat Oy tekee aktiivista yhteistyötä eri alojen kokeneiden ammattilaisten kanssa. Verkostomme
      avulla voimme tarjota sinulle aina parhaat osaajat erilaisiin tilanteisiin ja myös laajempiin kehityshankkeisiin.
    </p>
    <div className={styles.partnerList}>
      <p>Kasvun mahdollistajat Oy:n yhteistökumppaneita ovat mm.</p>
      <ul>
        <Partner url="https://www.cxopro.fi" text={'CxO Professional Oy'} />
        <Partner url="https://www.aijabarlund.fi" text={'Aija Bärlund Oy'} />
        <Partner url="https://www.keyconsulting.fi" text={'Key Consulting Oy'} />
        <Partner url="https://motivaatiotalo.fi" text={'Suomen Motivaatiotalo Oy'} />
        <Partner url="https://kettu.fi" text={'KETTU valmennus ja viestintä Oy'} />
        <Partner url="https://www.katrisipila.com" text={'Katri Sipilä Consulting Oy'} />
      </ul>
    </div>
    <Person
      imageSrc="/paivi1.jpg"
      name="Päivi"
      title="Innostunut ja inspiroiva ammattimentori, valmentaja, coach ja fasilitaattori"
    >
      <p>
        Missioni on auttaa organisaatioita ja niiden ihmisiä onnistumaan paremmin työssään ja kasvamaan johtajuudessa.
        Ydinosaamistani ovat valmentava johtaminen, esihenkilötyö, mentorointi ja näkemyksellinen toiminnan kehittäminen
        vastaamaan tarpeita alati muuttuvassa toimintaympäristössä. Olen erittäin kokenut strategiatyön ja strategian
        toteuttamisen sparraaja sekä muutosjohtamisen ammattilainen. Oman tuoreen johtajakokemukseni kautta tiedän,
        miten laajoja kehityshankkeita johdetaan ja miten koko henkilöstö saadaan innostumaan ja uudistamaan
        toimintatapojaan. Tuen sinua, johtajia ja esihenkilöitä kehittymään inhimillisessä johtajuudessa.
      </p>
      <p>
        Työtapani on tavoitteellinen, konkreettinen ja energinen. Valmennusten ja mentoroinnin pohdinnat ja oivallukset
        kytkeytyvät suoraan osallistujien työhön. Olen sekä näkemyksellinen visionääri että vahva käytännön tekijä.
        Luontainen uteliaisuuteni ja kehittymisen palo ovat kuljettaneet minua mitä moninaisempiin työrooleihin ja
        luottamustehtäviin. Tunnen laajasti erilaisia organisaatioita ja niiden tilanteita ja tarpeita.
      </p>
      <p>
        Vapaa-ajallani liikun luonnossa, käyn zumbassa ja salilla ja reissaan niin kotimaassa kuin maailmalla. Toimin
        aktiivisesti muutaman organisaation hallituksessa sekä erilaisissa luottamustehtävissä ja laajoissa
        verkostoissa.
      </p>
      <p>
        Koulutus: KTM, Certified Business Mentor, Certified Business Coach, Sertifioitu fasilitaattori, NLP
        Practitioner, RMP Motivaatiovalmentaja, Henkilöstöjohtajan tutkinto, Tuotekehittäjän erikoisammattitutkinto,
        Tiedottajan tutkinto MTi.
      </p>
    </Person>
  </Element>
)

export default Experts
