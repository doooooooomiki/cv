<template>
  <main>
    <section class="section-hero">
      <div class="section-hero-img-container">
        <img src="/dominickirste--3_4.jpg" alt="">
      </div>
      <div class="section-hero-text-container">
        <div class="section-hero-text-inner">
          <h1>
            DOMINIC KIRSTE
          </h1>
          <address>
            <ul role="list">
              <li>Adresse: Flaschenhofstraße 14, 90402 Nürnberg</li>
              <li>E-Mail: <a href="mailto:dominic.kirste@gmail.com">dominic.kirste@gmail.com</a></li>
              <li>Mobil: <a href="tel:+4915566440372">+49 15566 440372</a></li>
              <li>GitHub: <a href="https://github.com/doooooooomiki">github.com/doooooooomiki</a></li>
              <li>Webseite: <a href="https://dominickirste.dev/">dominickirste.dev</a></li>
            </ul>
          </address>
        </div>
      </div>
    </section>
    <section>
      <h2>Mein Stack</h2>
      <ul role="list">
        <li>Frontend: HTML5, CSS3, Tailwind, JS / TS, Vue, Nuxt, Pinia, GSAP</li>
        <li>Backend: Node.js, Strapi CMS, REST APIs</li>
        <li>Tools & Workflows: Git, Docker, Gitlab CI/CD, Jira, SCRUM, Kanban, Agile Development</li>
      </ul>
    </section>
    <section>
      <h2>BERUFLICHER WERDEGANG</h2>
      <ul role="list">
        <li>
          <h3>JUNIOR FRONTEND DEVELOPER</h3>
          <p>Deutsche Bahn Connect GmbH (Dez 2022 - heute)</p>
          <ul>
            <li>Entwicklung interner Admin-Tools mit Vue 3, TypeScript und REST-API-Integration</li>
            <li>Implementierung eines Node.js-basierten Backend-for-Frontend (BFF)</li>
            <li>Zusammenarbeit mit DevOps, UI/UX und Marketing bei Deployment, Design System (Tailwind) und SEO-/A11y-optimierten Webseiten (Nuxt 3, Strapi)</li>
          </ul>
        </li>
        <li>
          <h3>WEBENTWICKLER</h3>
          <p>die wollwinderei GmbH (Sep 2021 - Nov 2022)</p>
          <ul>
            <li>Entwicklung responsiver Webseiten mit HTML, CSS/Less, JavaScript/jQuery und PHP</li>
            <li>Umsetzung eines fluiden CSS-Layouts mit Grid, Flexbox und Custom Properties</li>
            <li>Modularisierung und Dokumentation der CSS-/Less-Codebasis in enger Abstimmung mit Design</li>
          </ul>
        </li>
        <li>
          <h3>JUNIOR PROJEKT INGENIEUR</h3>
          <p>ProLeiT GmbH (Jul 2020 - Aug 2021)</p>
          <ul>
            <li>Entwicklung von Cross-Browser Web-Applikationen mit Angular</li>
            <li>Aufbau eines automatisierten Codeformatierungs- & Linting-Workflows (Prettier, ESLint, Husky)</li>
            <li>Mitarbeit in SCRUM-Teams bei Architektur, Planung und Stakeholder-Kommunikation</li>
          </ul>
        </li>
      </ul>
    </section>
    <section class="section-motivation">
      <h2>
        Initiativbewerbung um eine Stelle als Frontend Developer
      </h2>
      <p><strong>HEY IHR!</strong></p>
      <p>
        Mein Name ist Dominic und mein Zuhause ist das Frontend. Die lebhafte
        Community rund um Vue und Nuxt begeistert mich hier besonders. Ich verfolge
        regelmäßig Podcasts, Blogs, die offiziellen Docs und besuche Konferenzen sowie
        Meetups, um am Puls der Zeit zu bleiben. Meine berufliche Zukunft sehe ich
        weiterhin eng mit diesen Frameworks und ihrem Ökosystem verknüpft.
      </p>
      <p>
        Ich arbeite gerne dort, wo sich Design und Code die Hand geben, um gemeinsam
        die bestmögliche User Experience zu schaffen. In Zukunft möchte ich mein Wissen
        über komponentenbasierte Design-Systeme weiter ausbauen und dieses
        gewinnbringend in meine Arbeit einfließen lassen sowie teamübergreifend teilen.
      </p>
      <p>
        Der interdisziplinäre Austausch und über den eigenen Tellerrand zu blicken ist mir
        wichtig. Ob UI/UX, Marketing, DevOps oder Backend – ich arbeite gern
        bereichsübergreifend, um gemeinsam die Extrameile zu gehen, um das
        bestmögliche Produkt zu entwickeln.
      </p>
      <p>
        Ich bin auf der Suche nach einem Unternehmen, welches meine intrinsische
        Motivation um ein förderndes, sinnstiftendes Arbeitsumfeld ergänzt. Einem
        Unternehmen, in welchem mein Schaffen Wirkung entfalten und Mehrwert
        generieren kann. Einem Unternehmen, mit welchem ich gemeinsam als Entwickler
        und Mensch wachsen kann.
      </p>
      <p>
        Servus und bis bald,
      </p>
      <p><strong>Dominic</strong></p>
    </section>
  </main>
</template>
<style>

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Prevent font size inflation */
html {
  -moz-text-size-adjust: none;
  -webkit-text-size-adjust: none;
  text-size-adjust: none;
}

/* Remove default margin in favour of better control in authored CSS */
body, h1, h2, h3, h4, p,
figure, blockquote, dl, dd {
  margin-block-end: 0;
}

/* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
ul[role='list'],
ol[role='list'] {
  list-style: none;
  padding-inline-start: unset;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  line-height: 1.5;
}

/* https://stackoverflow.com/questions/5110833/css-how-to-print-a-table-with-background-color-without-print-settings-changes */
body {
  -webkit-print-color-adjust:exact !important;
  print-color-adjust:exact !important;
}

/* Set shorter line heights on headings and interactive elements */
h1, h2, h3, h4,
button, input, label {
  line-height: 1.1;
}

/* Balance text wrapping on headings */
h1, h2,
h3, h4 {
  text-wrap: balance;
}

/* A elements that don't have a class get default styles */
a:not([class]) {
  text-decoration-skip-ink: auto;
  color: currentColor;
}

/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input, button,
textarea, select {
  font-family: inherit;
  font-size: inherit;
}

/* Make sure textareas without a rows attribute are not tiny */
textarea:not([rows]) {
  min-height: 10em;
}

/* Anything that has been anchored to should have extra scroll margin */
:target {
  scroll-margin-block: 5ex;
}

:root {
  /* @link https://utopia.fyi/type/calculator?c=360,18,1.2,1680,32,1.25,5,2,&s=0.75|0.5|0.25,1.5|2|3|4|6,s-l&g=s,l,xl,12 */
  --step--2: clamp(0.7813rem, 0.6452rem + 0.6045vw, 1.28rem);
  --step--1: clamp(0.9375rem, 0.7568rem + 0.803vw, 1.6rem);
  --step-0: clamp(1.125rem, 0.8864rem + 1.0606vw, 2rem);
  --step-1: clamp(1.35rem, 1.0364rem + 1.3939vw, 2.5rem);
  --step-2: clamp(1.62rem, 1.2095rem + 1.8242vw, 3.125rem);
  --step-3: clamp(1.944rem, 1.4088rem + 2.3785vw, 3.9063rem);
  --step-4: clamp(2.3328rem, 1.6373rem + 3.0909vw, 4.8828rem);
  --step-5: clamp(2.7994rem, 1.4821rem + 5.8546vw, 7.6294rem);

  /* @link https://utopia.fyi/space/calculator?c=360,24,1.2,1680,64,1.25,5,2,&s=0.75,1.5|2|3,s-l&g=s,l,xl,12 */
  --space-xs: clamp(1.125rem, 0.6136rem + 2.2727vw, 3rem);
  --space-s: clamp(1.5rem, 0.8182rem + 3.0303vw, 4rem);
  --space-m: clamp(2.25rem, 1.2273rem + 4.5455vw, 6rem);
  --space-l: clamp(3rem, 1.6364rem + 6.0606vw, 8rem);
  --space-xl: clamp(4.5rem, 2.4545rem + 9.0909vw, 12rem);

  --color-primary: #fcf237;
}

body {
  font-family: 'Roboto';
  font-size: 1rem;
  font-weight: 400;
}

h1 {
  font-family: 'Bebas Neue';
  font-size: var(--step-5);
  font-weight: 900;
  color: black;
  margin-block-start: unset;
}

.section-hero {
  display: flex;
  background-color: var(--color-primary);
}

.section-hero-img-container {
  aspect-ratio: 3/4;
  flex-basis: 33%;
}

.section-hero-text-container {
  flex-grow: 1;
  padding: 32px;
}

.section-motivation {
  background-color: var(--color-primary);
  padding: 32px;
  min-block-size: 100vh;

  p {
    font-size: 1.3rem;
  }
}
</style>