import styles from "./customerStories.module.scss";

const stories: { story: string[]; person: string }[] = [
  {
    story: [
      `"Päivin ja Aijan Rinnekodille suunnitteleman ja toteuttaman johtamisvalmennuksen aikana Rinnekodin
johto ja esihenkilöt laativat yhteisen johtamislupauksen. Johtamislupaus muotoutui Päivin ja Aijan
sparrauksessa innostavaan päämääräämme #ihmistälähellä-visioomme sopivaksi. Valmennuksen
aihealueiden mukainen toiminta on kehittynyt Rinnekodissa hienosti. Konkreettista yksilö- sekä
yksikkötason kehitystä on havaittavissa selvästi valmennuksen jälkeen tehdyissä Työvire-mittauksissa ja
asiakaspalautteissa.`,
      `Valmennuksessa käytettyjä monipuolisia yksilö- ja ryhmätyöskentelymenetelmiä on hyödynnetty niin
yksiköiden kuin palvelualueiden kehittämisessä. Valmennus lisäsi johdon ja esihenkilöiden johtamis- ja
tiimityötaitoja. Yhteiset toimintatavat, yhteinen tekeminen ja vuorovaikutus lisääntyivät. Yhteinen
tekeminen on kirkastanut toimintaamme, samalla sitouttaen työntekijöitä uuden strategiamme mukaiseen
työhön.`,
      `Valmennus edisti positiivisella tavalla tunnejohtamisen taitoja ja Rinnekodin tunneilmastoja, kytkeytyen
näin myös strategisiin tavoitteisiin. Päivin ja Aijan innostava ja sparraava asiantuntijuus on kartuttanut
Rinnekodin johdon ja esihenkilöiden toimintakulttuurin muutokseen tarvittavia johtamistaitoja ja lisännyt
myös heidän sitoutumisen astetta."`,
    ],
    person:
      "Leila Rutanen, liiketoimintajohtaja, johtoryhmän puheenjohtaja, Rinnekoti",
  },
  {
    story: [
      `"Valmennuksesta oli oikein kovasti hyötyä. Saimme lyhyessä ajassa hahmoteltua ratkaisuvaihtoehtoja
haasteisiimme ja jokaisella kerralla rakennettua toimivan suunnitelman. Päivi pystyi hyvin haastamaan
asioiden monipuoliseen pohdiskeluun ja omat ajatuksemme jäsentyivät aiempaa paremmin.
Ajankäytöllisesti olimme tehokkaita ja yksin asioiden pohtiminen olisi varmaan vienyt pidempään. Kaiken
lisäksi jokaisesta valmennuskerrasta sai energiaa. Valmentajana Päivi toimi erittäin hyvin ja vei keskustelun
hyvin kohti tavoitetta. Hän esitti hyviä kysymyksiä ja pysyi hyvin valmentajan roolissa, auttoi oivaltamaan
itse."`,
    ],
    person: "Johtaja, Viestintätoimisto",
  },
  {
    story: [
      `"Päivi on valmentajana ammattitaitoinen ja erittäin hyvin organisoitunut. Hän kuljettaa asiakkaan
kehittymisprosessia taitavasti tilaa antaen. Työskentely Päivin ohjauksessa on tavoitteellista ja tuloksellista,
ja yhteistyö hänen kanssaan sujuu mutkattomasti ja helposti. Voin lämpimästi suositella Päiviä
valmentajaksi."`,
    ],
    person: "Henkilöstöpäällikkö, Keskisuuri IT-alan yritys",
  },
  {
    story: [
      `"Työelämäni taitekohdassa, työpaikkojen välillä kilpailukiellon aikana, oli coaching enemmän kuin
tarpeellinen ja ennen kaikkea valaiseva. Päivin apu oli uramietinnöissäni oleellinen ja hyödyllinen. Hän esitti
kysymyksiä, kysymyksiä ja jatkokysymyksiä, joihin ääneen vastaaminen auttoi minua ymmärtämään omaa
tahtoani. Tapaamisemme tukivat ja lisäsivät myös omaa käsitystäni mm vahvuuksistani, Päivi ohjasi
keskusteluja kuitenkin ohjailematta. Kaiken kaikkiaan hyödyllinen ja minua vahvistava coachaus. Kiitos."`,
    ],
    person: "Toimitusjohtaja, SOTE-alan yritys",
  },
  {
    story: [
      `"En aluksi oikein tiennyt, kuinka coachingiin suhtautuisin, olin ehkä hieman skeptinen sen suhteen.
Coaching osoittautui kuitenkin hyvin käyttökelpoiseksi tavaksi käsitellä ongelmia oman työn kannalta. Sain
coachingista konkreettisia työkaluja ja ratkaisuja omiin arkipäivän ongelmiini, tiiminvetämiseen,
esimiestyöhön ja työkiireisiin liittyen. Päivi oli helposti lähestyttävä ja hänen kanssaan oli helppo keskustella
ja keskustelusessioiden jälkeen, minulla oli monesti jo työlista seuraavista konkreettisista toimenpiteistä,
joilla helpotan omaa arkeani."`,
    ],
    person: "Asiakaspalvelupäällikkö, Koulutusalan yritys",
  },
  {
    story: [
      `"Valmennuksen hyöty ylitti odotukseni. Valmennus tarjosi ajan työstää meille ajankohtaisia asioita
eteenpäin. Päivi ohjasi ajatteluamme hyvillä kysymyksillä, jotka johtivat pohdintaan ja tuottivat oivalluksia
työhömme. Antoisa kokemus. Päivi toimi ammattimaisesti ja inhimillisen empaattisesti valmentajana."`,
    ],
    person: "Toimitusjohtaja, Koulutusalan yritys",
  },
];

const CustomerStories = () => {
  return (
    <div>
      <h2 id="asiakaskokemuksia">ASIAKASKOKEMUKSIA</h2>
      <div>
        {stories.map((s, i) => (
          <div className={styles.storyWrapper} key={i}>
            <div className={styles.story}>
              {s.story.map((st, j) => (
                <p key={j}>{st}</p>
              ))}
            </div>
            <p className={styles.person}>{s.person}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CustomerStories;
