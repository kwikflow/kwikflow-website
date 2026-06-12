import type { Metadata } from 'next'
import { LegalPage } from '@/components/blocks/legal-page'

export const metadata: Metadata = {
  title: 'Privacyverklaring — Kwikflow',
  description: 'Hoe Kwikflow omgaat met je persoonsgegevens.',
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacyverklaring" lastUpdated="12 juni 2026">
      <p>
        Kwikflow, handelsnaam van Gone Clear, ingeschreven bij de Kamer van
        Koophandel onder nummer 90132521 (vestigingsadres volgt) (hierna:
        &ldquo;Kwikflow&rdquo;, &ldquo;wij&rdquo;), is verantwoordelijk voor de
        verwerking van persoonsgegevens zoals beschreven in deze
        privacyverklaring. Contact: <a href="mailto:info@kwikflow.nl">info@kwikflow.nl</a>,{' '}
        <a href="tel:+31613979782">+31 6 13979782</a>.
      </p>

      <h2>1. Welke gegevens wij verzamelen</h2>
      <p>
        Wij verwerken persoonsgegevens die je zelf aan ons verstrekt en gegevens
        die automatisch worden verzameld bij gebruik van onze website
        kwikflow.nl:
      </p>
      <p>
        <strong>Contact- en aanvraaggegevens:</strong> naam, bedrijfsnaam,
        e-mailadres, telefoonnummer en de inhoud van je bericht wanneer je ons
        contactformulier invult, een demo aanvraagt of contact opneemt via
        WhatsApp, e-mail of telefoon.
      </p>
      <p>
        <strong>Klantgegevens:</strong> gegevens die nodig zijn voor het leveren
        van onze diensten, waaronder facturatiegegevens en accountinformatie.
      </p>
      <p>
        Zakelijke contactgegevens van bedrijven die wij benaderen voor onze
        dienstverlening (naam bedrijf, openbare contactgegevens zoals
        telefoonnummer, e-mailadres en website), afkomstig uit openbare bronnen
        zoals Google Maps en bedrijfswebsites.
      </p>
      <p>
        <strong>Websitegegevens:</strong> IP-adres, browsertype, bezochte
        pagina&apos;s en klikgedrag, via cookies en vergelijkbare technieken (zie
        ons Cookiebeleid).
      </p>
      <p>
        <strong>Gespreksopnames:</strong> telefoongesprekken met prospects en
        klanten kunnen worden opgenomen voor trainings- en kwaliteitsdoeleinden.
        Dit wordt aan het begin van het gesprek gemeld.
      </p>

      <h2>2. Waarvoor wij je gegevens gebruiken</h2>
      <ul>
        <li>
          Het beantwoorden van aanvragen en het inplannen van demo&apos;s en
          gesprekken.
        </li>
        <li>Het leveren, onderhouden en verbeteren van onze diensten.</li>
        <li>Facturatie en administratie.</li>
        <li>
          Commerciele benadering van bedrijven (b2b-prospectie), waarbij je je
          altijd eenvoudig kunt afmelden.
        </li>
        <li>
          Marketing en het meten van de effectiviteit van onze website en
          advertenties.
        </li>
        <li>Het voldoen aan wettelijke verplichtingen.</li>
      </ul>

      <h2>3. Op welke grondslagen</h2>
      <p>
        Wij verwerken gegevens op basis van: de uitvoering van een overeenkomst
        (levering van onze diensten), toestemming (zoals voor marketingcookies),
        gerechtvaardigd belang (zoals b2b-prospectie en het verbeteren van onze
        dienstverlening) en wettelijke verplichtingen (zoals de fiscale
        bewaarplicht).
      </p>

      <h2>4. Met wie wij gegevens delen</h2>
      <p>
        Wij verkopen je gegevens nooit. Wij delen gegevens alleen met partijen
        die ons helpen onze diensten te leveren (verwerkers), waaronder:
      </p>
      <ul>
        <li>Hosting en infrastructuur (o.a. Vercel)</li>
        <li>E-mail en kantoorsoftware (o.a. Google Workspace)</li>
        <li>Betalingsverwerkers (o.a. Mollie / Stripe)</li>
        <li>
          Plannings- en communicatietools (o.a. Calendly, WhatsApp Business,
          telefoniediensten)
        </li>
        <li>
          AI-dienstverleners voor het functioneren van onze chat- en
          voice-oplossingen (o.a. Anthropic)
        </li>
        <li>
          Advertentie- en analyseplatforms (o.a. Meta, Google), uitsluitend na
          jouw toestemming via de cookiebanner
        </li>
      </ul>
      <p>
        Met verwerkers sluiten wij verwerkersovereenkomsten. Worden gegevens
        buiten de EER verwerkt, dan gebeurt dit op basis van passende waarborgen
        zoals EU-standaardcontractbepalingen.
      </p>

      <h2>5. Hoe lang wij gegevens bewaren</h2>
      <ul>
        <li>Aanvraag- en leadgegevens: maximaal 2 jaar na het laatste contact.</li>
        <li>Gespreksopnames: maximaal 90 dagen, daarna automatisch verwijderd.</li>
        <li>Klant- en factuurgegevens: 7 jaar (fiscale bewaarplicht).</li>
        <li>Websitedata en cookies: zie het Cookiebeleid.</li>
      </ul>

      <h2>6. Jouw rechten</h2>
      <p>
        Je hebt het recht op inzage, rectificatie, verwijdering, beperking van de
        verwerking, overdraagbaarheid van je gegevens en het recht om bezwaar te
        maken tegen verwerking, waaronder direct marketing. Gegeven toestemming
        kun je altijd intrekken. Stuur je verzoek naar info@kwikflow.nl; wij
        reageren binnen 30 dagen. Je hebt daarnaast het recht een klacht in te
        dienen bij de Autoriteit Persoonsgegevens (autoriteitpersoonsgegevens.nl).
      </p>

      <h2>7. Beveiliging</h2>
      <p>
        Wij nemen passende technische en organisatorische maatregelen om je
        gegevens te beschermen, waaronder versleutelde verbindingen (TLS),
        toegangsbeheer en het minimaliseren van de gegevens die wij opslaan.
      </p>

      <h2>8. Diensten die wij voor onze klanten uitvoeren</h2>
      <p>
        Wanneer onze AI-oplossingen (zoals chatbots en voice agents) berichten of
        telefoongesprekken verwerken namens onze klanten, treedt de betreffende
        klant op als verwerkingsverantwoordelijke en is Kwikflow verwerker. Wij
        verwerken die gegevens uitsluitend in opdracht van de klant en volgens een
        verwerkersovereenkomst.
      </p>

      <h2>9. Wijzigingen</h2>
      <p>
        Wij kunnen deze privacyverklaring aanpassen. De actuele versie staat
        altijd op kwikflow.nl. Bij ingrijpende wijzigingen informeren wij je
        actief.
      </p>

      <p className="text-sm text-muted">
        Dit document is een werkbaar sjabloon op maat van Kwikflow en geen
        juridisch advies. Laat het kort toetsen door een jurist voordat je
        structureel opschaalt.
      </p>
    </LegalPage>
  )
}
