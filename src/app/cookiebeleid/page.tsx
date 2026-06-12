import type { Metadata } from 'next'
import { LegalPage } from '@/components/blocks/legal-page'
import CookiePreferencesButton from '@/components/CookiePreferencesButton'

export const metadata: Metadata = {
  title: 'Cookiebeleid — Kwikflow',
  description: 'Welke cookies Kwikflow gebruikt en hoe je je toestemming beheert.',
}

export default function CookiebeleidPage() {
  return (
    <LegalPage title="Cookiebeleid" lastUpdated="12 juni 2026">
      <p>
        Deze website (kwikflow.nl) gebruikt cookies en vergelijkbare technieken.
        In dit beleid lees je welke dat zijn, waarom we ze gebruiken en hoe je je
        keuzes beheert.
      </p>

      <h2>1. Wat zijn cookies</h2>
      <p>
        Cookies zijn kleine tekstbestanden die bij bezoek aan een website op je
        apparaat worden geplaatst. Vergelijkbare technieken zijn onder meer pixels
        en scripts. We gebruiken hieronder voor het gemak overal het woord
        &ldquo;cookies&rdquo;.
      </p>

      <h2>2. Welke cookies wij gebruiken</h2>
      <p>
        <strong>Functionele cookies (altijd actief):</strong> Noodzakelijk om de
        website goed te laten werken, zoals het onthouden van je cookievoorkeur.
        Hiervoor is geen toestemming vereist.
      </p>
      <p>
        <strong>Analytische cookies (na toestemming):</strong> Google Analytics 4
        en Google Tag Manager, om te meten hoe de website wordt gebruikt en deze
        te verbeteren.
      </p>
      <p>
        <strong>Marketingcookies (na toestemming):</strong> Meta Pixel
        (Facebook/Instagram), om de effectiviteit van onze advertenties te meten
        en relevante advertenties te tonen. Hierbij kunnen gegevens worden gedeeld
        met Meta Platforms Ireland Ltd. en verwerkt buiten de EER op basis van
        passende waarborgen.
      </p>

      <h2>3. Toestemming</h2>
      <p>
        Bij je eerste bezoek tonen wij een cookiebanner. Analytische en
        marketingcookies plaatsen wij pas nadat je daarvoor toestemming hebt
        gegeven. Zonder toestemming worden deze cookies niet geladen en wordt de
        Meta Pixel niet geactiveerd.
      </p>

      <h2>4. Je keuze aanpassen of intrekken</h2>
      <p>
        Je kunt je toestemming op elk moment aanpassen of intrekken. Gebruik de
        knop hieronder om je cookievoorkeuren opnieuw te openen. Daarnaast kun je
        cookies verwijderen via de instellingen van je browser.
      </p>
      <p>
        <CookiePreferencesButton />
      </p>

      <h2>5. Bewaartermijnen</h2>
      <p>
        Functionele cookies: maximaal 12 maanden. Analytische cookies: maximaal 14
        maanden. Marketingcookies: maximaal 12 maanden, afhankelijk van de
        instellingen van de aanbieder.
      </p>

      <h2>6. Vragen</h2>
      <p>
        Vragen over dit cookiebeleid? Mail ons via info@kwikflow.nl. Zie ook onze
        Privacyverklaring voor hoe wij met persoonsgegevens omgaan.
      </p>

      <p className="text-sm text-muted">
        Sjabloon op maat van Kwikflow, geen juridisch advies. Belangrijk: dit
        beleid klopt pas zodra de cookiebanner technisch zo is ingesteld dat de
        Meta Pixel en GA4 ook echt pas na toestemming vuren.
      </p>
    </LegalPage>
  )
}
