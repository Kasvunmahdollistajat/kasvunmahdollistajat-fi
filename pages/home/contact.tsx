import styles from "./contact.module.scss";

const Contact = () => {
  return (
    <div className={styles.contact}>
      <h2 id="yhteys">OTA YHTEYTTÄ</h2>
      <p>
        Hankalia henkilöstötilanteita, muutoksia, uusi strategia? Tavoitteenasi
        seuraava askel urallasi vaiko uran suunta hukassa? kesken.
      </p>
      <p>
        Otapa yhteyttä, niin jutellaan tarkemmin. Olemme sinuun yhteydessä parin
        työpäivän sisällä. Sitoumuksetta, tottakai.
      </p>
      <p>
        Tarjoamme joka kuukausi yhdelle onnekkaalle ilmaiseksi henkilökohtaisen
        tunnin mentoroinnin etätoteutuksena. Arvomme saajan joka kuukauden
        ensimmäinen päivä kaikkien yhteydenottajien kesken.
      </p>
      <form
        action="https://formbold.com/s/9RdjX"
        method="POST"
        id="contact-form"
      >
        <div className={styles.row}>
          <div>
            <label htmlFor="nimi">Nimi*</label>
            <input type="text" name="nimi" required />
          </div>
          <div>
            <label htmlFor="phone">Puhelinnumero</label>
            <input type="text" name="phone" />
          </div>
        </div>
        <div>
          <label htmlFor="email">Sähköposti*</label>
          <input type="email" name="email" required />
        </div>
        <label htmlFor="viesti">Viesti*</label>
        <textarea name="viesti" placeholder="Viestisi..." required rows={5} />
        <div className={styles.checkboxWrapper}>
          <input type="checkbox" name="markkinointilupa" defaultChecked />
          <label htmlFor="markkinointilupa">
            Minulle voi lähettää Kasvun&nbsp;mahdollistajat&nbsp;Oy:n
            tiedotteita sähköpostitse
          </label>
        </div>
        <div className={styles.buttonWrapper}>
          <button type="submit">Lähetä</button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
