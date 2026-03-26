const navButtons = Array.from(document.querySelectorAll(".rail button[data-target]"));
const panels = Array.from(document.querySelectorAll(".panel"));
const appRoot = document.querySelector(".app");
let activeIndex = 0;

const translations = {
  en: {
    "head.title": "Efrem's Portfolio",
    "nav.primary": "Primary",
    "nav.about.aria": "About panel",
    "nav.about.title": "About",
    "nav.projects.aria": "Projects panel",
    "nav.projects.title": "Projects",
    "nav.experience.aria": "Work experience panel",
    "nav.experience.title": "Work Experience",
    "nav.journey.aria": "Journey panel",
    "nav.journey.title": "Journey",
    "nav.education.aria": "Education and skills panel",
    "nav.education.title": "Education & Skills",
    "nav.contact.aria": "Contact panel",
    "nav.contact.title": "Contact",
    "lang.toggleLabel": "Switch language",
    "lang.switchToSwedish": "Switch to Swedish",
    "lang.switchToEnglish": "Switch to English",
    "theme.toLight": "Switch to light theme",
    "theme.toDark": "Switch to dark theme",
    "theme.light": "LIGHT",
    "theme.dark": "DARK",
    "profile.aria": "Profile",
    "profile.role": "Full-Stack Developer",
    "profile.socials": "Social links",
    "profile.resume": "Download CV ->",
    "about.title": "About Me",
    "about.meta": "Based in Sweden · Available for work · Fluent in 4 languages",
    "about.meta.location": "Based in Sweden",
    "about.meta.status": "Available for work",
    "about.meta.languages": "Fluent in 4 languages",
    "about.intro":
      "I'm Efrem, a full-stack developer specializing in .NET and modern web architecture. I design and build structured, scalable web applications from database to interface. My background in ASP.NET Core, Entity Framework, and modern frontend technologies allows me to deliver secure, maintainable systems with polished, performance-focused user experiences.",
    "about.section.core": "Core Competencies",
    "about.services.title": "What I Do",
    "about.card.fullstack.title": "Full-Stack Development",
    "about.card.fullstack.desc":
      "End-to-end application development using ASP.NET Core, Entity Framework, and modern frontend standards.",
    "about.card.frontend.title": "Frontend Engineering",
    "about.card.frontend.desc":
      "Responsive, accessible interfaces built with clean architecture, modern CSS, and structured JavaScript.",
    "about.card.database.title": "Database Architecture",
    "about.card.database.desc":
      "Relational schema design, migrations, and API-ready data modeling with performance in mind.",
    "about.card.security.title": "Application Security",
    "about.card.security.desc":
      "Secure authentication flows, role-based authorization, and privacy-conscious system design.",
    "projects.title": "Projects",
    "projects.subtitle": "Recent Projects",
    "projects.intro":
      "Selected projects spanning product design, full-stack development, and modern web architecture.",
    "projects.section.featured": "Featured Work",
    "projects.carousel.prev": "Prev",
    "projects.carousel.next": "Next",
    "projects.links.github": "GitHub",
    "projects.links.demo": "Live demo",
    "projects.links.case": "Case study",
    "projects.card.vibemix.label": "Featured project",
    "projects.card.vibemix.desc":
      "Mood-based playlist generator designed to create personalized music experiences using modern web technologies.",
    "projects.card.nest.label": "Product concept",
    "projects.card.nest.desc":
      "Concept platform focused on simplifying everyday digital experiences through clean design and structured systems.",
    "projects.card.booking.label": "System build",
    "projects.card.booking.desc":
      "Full-stack booking platform with authentication, role-based access control, and structured scheduling workflows.",
    "projects.card.portfolio.label": "Portfolio",
    "projects.card.portfolio.desc":
      "Modern developer portfolio built with Eleventy, featuring multilingual support and animated panel navigation.",
    "projects.image.vibemix.alt": "VibeMix application interface preview",
    "projects.image.portfolio.alt": "Web portfolio interface preview",
    "projects.image.nest.alt": "Nest project interface preview",
    "projects.image.booking.alt": "Booking system project preview",
    "experience.title": "Work Experience",
    "experience.intro": "Highlights from my professional roles and responsibilities.",
    "experience.entries.0.title": "Project Manager",
    "experience.entries.0.company": "Robertsfors Municipality",
    "experience.entries.0.location": "Robertsfors, Sweden",
    "experience.entries.0.period": "Aug 2022 - Sep 2023",
    "experience.entries.0.details.0":
      "Supported newly arrived residents with labor market introduction and social orientation.",
    "experience.entries.0.details.1": "Planned and organized internships and study visits.",
    "experience.entries.0.details.2": "Followed up participant progress in collaboration with employers.",
    "experience.entries.0.details.3":
      "Worked in a structured way with follow-up, coordination, and communication between multiple parties.",
    "experience.entries.1.title": "Project Manager",
    "experience.entries.1.company": "Robertsfors Municipality",
    "experience.entries.1.location": "Robertsfors, Sweden",
    "experience.entries.1.period": "Mar 2018 - Dec 2019",
    "experience.entries.1.details.0":
      "Supported job seekers with applications (CV, cover letter, and interview preparation).",
    "experience.entries.1.details.1":
      "Identified and established internship opportunities in collaboration with employers.",
    "experience.entries.1.details.2": "Organized study visits and labor market activities.",
    "experience.entries.1.details.3":
      "Acted as language support and a bridge between job seekers and employers.",
    "experience.entries.2.title": "Assistant",
    "experience.entries.2.company": "Swedish Public Employment Service",
    "experience.entries.2.location": "Robertsfors, Sweden",
    "experience.entries.2.period": "Jun 2017 - Mar 2018",
    "experience.entries.2.details.0":
      "Provided administrative support in the integration program and information management.",
    "experience.entries.2.details.1":
      "Delivered language support during meetings, registrations, and participant communication.",
    "experience.entries.2.details.2":
      "Followed up internship and employment processes together with employers.",
    "experience.entries.2.details.3":
      "Contributed to structured workflows and effective information sharing.",
    "experience.entries.3.title": "Project Incharge",
    "experience.entries.3.company": "Almarai Company (IPNC Division)",
    "experience.entries.3.location": "Jeddah, Saudi Arabia",
    "experience.entries.3.period": "Sep 2012 - Apr 2014",
    "experience.entries.3.details.0":
      "Led the launch of a new project in collaboration with Mead Johnson (USA).",
    "experience.entries.3.details.1":
      "Coordinated and led teams consisting of representatives and regional sales leads.",
    "experience.entries.3.details.2":
      "Oversaw inventory, sales, and distribution to hospitals and pharmacies.",
    "experience.entries.3.details.3":
      "Ensured effective coordination and goal achievement throughout project phases.",
    "experience.entries.4.title": "Sales Supervisor / Acting Sales Manager",
    "experience.entries.4.company": "Almarai Company (Dairy Division)",
    "experience.entries.4.location": "Jeddah, Saudi Arabia",
    "experience.entries.4.period": "Jan 2008 - Sep 2012",
    "experience.entries.4.details.0": "Led and developed a sales team of 22 people.",
    "experience.entries.4.details.1": "Owned budget, sales targets, and distribution planning.",
    "experience.entries.4.details.2":
      "Tracked daily and weekly performance to ensure target achievement.",
    "experience.entries.4.details.3":
      "Focused on leadership, coaching, and optimizing team outcomes.",
    "experience.entries.5.title": "Key Account Manager",
    "experience.entries.5.company": "Almarai Company (Dairy Division)",
    "experience.entries.5.location": "Jeddah, Saudi Arabia",
    "experience.entries.5.period": "May 2005 - Dec 2007",
    "experience.entries.5.details.0":
      "Managed key accounts and long-term business relationships.",
    "experience.entries.5.details.1": "Forecasted demand and optimized product distribution.",
    "experience.entries.5.details.2":
      "Ensured payment flows and customer satisfaction according to company standards.",
    "experience.entries.5.details.3":
      "Worked with data-driven follow-up of sales and inventory.",
    "experience.entries.6.title": "Marketing & Team Leader",
    "experience.entries.6.company": "Salim Mohammed Bakhashwen & Sons (SEB & Tefal Group)",
    "experience.entries.6.location": "Jeddah, Saudi Arabia",
    "experience.entries.6.period": "Mar 2000 - Dec 2004",
    "experience.entries.6.details.0":
      "Planned and executed marketing activities and campaigns.",
    "experience.entries.6.details.1":
      "Coordinated order handling and deliveries to stores and customers.",
    "experience.entries.6.details.2":
      "Ensured strong in-store product presentation to increase sales.",
    "experience.entries.6.details.3":
      "Led teams and contributed to efficient daily operations and customer experience.",
    "journey.title": "GitHub",
    "journey.intro": "Open Source Projects",
    "journey.techStackTbd": "Tech stack TBD",
    "journey.viewGithub": "View on GitHub",
    "journey.stars.title": "Stars",
    "journey.forks.title": "Forks",
    "journey.noDescription": "No description provided.",
    "education.title": "Education & Skills",
    "education.intro": "Academic background and core technical strengths.",
    "education.focus.title": "Core Focus",
    "education.focus.copy":
      "Full-stack development with .NET and modern frontend technologies, focused on building structured, scalable, and user-friendly applications.",
    "education.section.skills": "Skills",
    "education.section.languages": "Language Skills",
    "education.skills.item1": "Frontend Architecture",
    "education.skills.item2": "Modern JavaScript (ES6+)",
    "education.skills.item3": "Responsive & Accessible UI",
    "education.skills.item4": "Performance Optimization",
    "education.languages.item1": "English",
    "education.languages.item2": "Swedish",
    "education.languages.item3": "Tigrinja",
    "education.languages.item4": "Arabic",
    "education.skill.html.desc": "Semantic structure, layout systems, and responsive UI.",
    "education.skill.js.desc": "Interactive experiences and modern ES tooling.",
    "education.skill.design.desc": "Reusable components with accessible patterns.",
    "education.skill.performance.desc": "Rendering optimization and Lighthouse tuning.",
    "education.section.technical": "Technical Skills",
    "education.tech.backend": "Backend",
    "education.tech.backend.item1": "C# / .NET",
    "education.tech.backend.item2": "ASP.NET Core MVC",
    "education.tech.backend.item3": "Entity Framework Core",
    "education.tech.backend.item4": "ASP.NET Identity",
    "education.tech.backend.item5": "REST API design",
    "education.tech.backend.item6": "Role-based access control",
    "education.tech.frontend": "Frontend",
    "education.tech.frontend.item1": "TypeScript",
    "education.tech.frontend.item2": "Angular",
    "education.tech.frontend.item5": "Component-based UI architecture",
    "education.tech.frontend.item6": "Responsive design",
    "education.tech.databases": "Databases",
    "education.tech.databases.item1": "SQL Server",
    "education.tech.databases.item2": "PostgreSQL",
    "education.tech.databases.item3": "SQLite",
    "education.tech.databases.item4": "Schema design & relational modeling",
    "education.tech.tools": "Tools & Environment",
    "education.tech.tools.item1": "Git / GitHub",
    "education.tech.tools.item2": "Supabase",
    "education.tech.tools.item5": "Vercel / Netlify (explored)",
    "education.section.education": "Education",
    "education.section.courses": "Courses",
    "education.entries.0.title": "System Development .NET",
    "education.entries.0.date": "Sep 2023 - Apr 2025",
    "education.entries.0.location": "Remote",
    "education.entries.0.description":
      ".NET system development vocational program with AI focus (EduGrade). Emphasis on backend development, databases, and modern web applications.",
    "education.entries.1.title": "Upper Secondary Diploma",
    "education.entries.1.date": "Sep 1994 - Jul 1998",
    "education.entries.1.location": "St. Anna Upper Secondary School, Asmara, Eritrea",
    "education.entries.1.description": "Completed general upper secondary studies.",
    "education.courses.0.title": "Programming 1",
    "education.courses.0.date": "Jan 2023 - Jun 2023",
    "education.courses.0.location": "Hermods, Remote",
    "education.courses.0.description":
      "Fundamental programming in C# with focus on problem solving and logic.",
    "education.courses.1.title": "Computer Networks (course)",
    "education.courses.1.date": "Aug 2020 - Dec 2020",
    "education.courses.1.location": "LTU, Skelleftea",
    "education.courses.1.description":
      "Studies in networking technology, including network mathematics and digital and analog systems.",
    "education.courses.2.title": "Negotiation Techniques",
    "education.courses.2.date": "Mar 2011",
    "education.courses.2.location": "Riyadh, Saudi Arabia",
    "education.courses.2.description":
      "Workshops in negotiation, KPI management, and consultative sales influence.",
    "education.courses.3.title": "Presentation Techniques",
    "education.courses.3.date": "Apr 2009",
    "education.courses.3.location": "Riyadh, Saudi Arabia",
    "education.courses.3.description":
      "Workshop in presentation and communication techniques.",
    "education.courses.4.title": "Leadership & Sales Development",
    "education.courses.4.date": "2009",
    "education.courses.4.location": "Riyadh, Saudi Arabia",
    "education.courses.4.description":
      "Advanced training for sales leaders focused on team leadership and performance.",
    "skills.title": "Skills",
    "skills.intro": "Frontend core strengths and supporting tools.",
    "skills.section.core": "Core Skills",
    "skills.skill.html.title": "HTML / CSS",
    "skills.skill.js.title": "JavaScript",
    "skills.skill.design.title": "Design Systems",
    "skills.skill.performance.title": "Performance",
    "skills.skill.html.desc": "Semantic structure, layout systems, and responsive UI.",
    "skills.skill.js.desc": "Interactive experiences and modern ES tooling.",
    "skills.skill.design.desc": "Reusable components with accessible patterns.",
    "skills.skill.performance.desc": "Rendering optimization and Lighthouse tuning.",
    "resume.title": "Resume",
    "resume.intro": "Download the latest CV as a PDF.",
    "resume.button": "Download CV ->",
    "contact.title": "Contact",
    "contact.intro": "Let's Work Together",
    "contact.heading": "Get In Touch",
    "contact.description":
      "I'm always interested in hearing about new projects and opportunities. Whether you have a question or just want to say hi, feel free to reach out!",
    "contact.details.email.label": "Email",
    "contact.details.phone.label": "Phone",
    "contact.details.address.label": "Location",
    "contact.details.address.value": "Ånäset, Sweden",
    "contact.availability.aria": "Availability",
    "contact.availability.title": "Availability",
    "contact.availability.heading": "Available for Opportunities",
    "contact.availability.description":
      "Currently open to full-time roles, freelance projects, or collaborations within full-stack development and modern web applications.",
    "contact.availability.point1": "Full-stack .NET development",
    "contact.availability.point2": "Clean and scalable architecture",
    "contact.availability.point3": "Strong business and product understanding",
    "contact.availability.footnote": "Based in Sweden • Open to remote work",
    "contact.form.name": "Your Name",
    "contact.form.email": "Your Email",
    "contact.form.message": "Your Message",
    "contact.firstName": "First name",
    "contact.lastName": "Last name",
    "contact.email": "Email",
    "contact.message": "Message",
    "contact.button": "Send Message",
  },
  sv: {
    "head.title": "Efrems Portfölj",
    "nav.primary": "Primär",
    "nav.about.aria": "Om-panel",
    "nav.about.title": "Om",
    "nav.projects.aria": "Projekt-panel",
    "nav.projects.title": "Projekt",
    "nav.experience.aria": "Arbetslivserfarenhet-panel",
    "nav.experience.title": "Arbetslivserfarenhet",
    "nav.journey.aria": "Resa-panel",
    "nav.journey.title": "Resa",
    "nav.education.aria": "Utbildning och kompetens-panel",
    "nav.education.title": "Utbildning & kompetens",
    "nav.contact.aria": "Kontakt-panel",
    "nav.contact.title": "Kontakt",
    "lang.toggleLabel": "Byt språk",
    "lang.switchToSwedish": "Byt till svenska",
    "lang.switchToEnglish": "Byt till engelska",
    "theme.toLight": "Byt till ljust tema",
    "theme.toDark": "Byt till mörkt tema",
    "theme.light": "LJUST",
    "theme.dark": "MÖRKT",
    "profile.aria": "Profil",
    "profile.role": "Fullstackutvecklare",
    "profile.socials": "Sociala länkar",
    "profile.resume": "Ladda ner CV ->",
    "about.title": "Om mig",
    "about.meta": "Baserad i Sverige · Tillgänglig för arbete · Flytande i 4 språk",
    "about.meta.location": "Baserad i Sverige",
    "about.meta.status": "Tillgänglig för arbete",
    "about.meta.languages": "Flytande i 4 språk",
    "about.intro":
      "Jag är Efrem, en fullstackutvecklare specialiserad på .NET och modern webbarkitektur. Jag designar och bygger strukturerade, skalbara webbapplikationer från databas till gränssnitt. Min bakgrund inom ASP.NET Core, Entity Framework och moderna frontendtekniker gör att jag kan leverera säkra, underhållbara system med polerade, prestandafokuserade användarupplevelser.",
    "about.section.core": "Kärnkompetenser",
    "about.services.title": "Det här gör jag",
    "about.card.fullstack.title": "Fullstackutveckling",
    "about.card.fullstack.desc":
      "End-to-end-utveckling med ASP.NET Core, Entity Framework och moderna frontendstandarder.",
    "about.card.frontend.title": "Frontendutveckling",
    "about.card.frontend.desc":
      "Responsiva, tillgängliga gränssnitt byggda med ren arkitektur, modern CSS och strukturerad JavaScript.",
    "about.card.database.title": "Databasarkitektur",
    "about.card.database.desc":
      "Relationsmodellering, migreringar och API-anpassad datamodellering med fokus på prestanda.",
    "about.card.security.title": "Applikationssäkerhet",
    "about.card.security.desc":
      "Säkra autentiseringsflöden, rollbaserad auktorisering och integritetsmedveten systemdesign.",
    "projects.title": "Projekt",
    "projects.subtitle": "Senaste projekt",
    "projects.intro":
      "Utvalda projekt inom produktdesign, fullstackutveckling och modern webbarkitektur.",
    "projects.section.featured": "Utvalda projekt",
    "projects.carousel.prev": "Föregående",
    "projects.carousel.next": "Nästa",
    "projects.links.github": "GitHub",
    "projects.links.demo": "Live demo",
    "projects.links.case": "Case study",
    "projects.card.vibemix.label": "Utvalt projekt",
    "projects.card.vibemix.desc":
      "Stämningsbaserad spellistegenerator som skapar personliga musikupplevelser med moderna webbtekniker.",
    "projects.card.nest.label": "Produktkoncept",
    "projects.card.nest.desc":
      "Konceptplattform som förenklar vardagens digitala upplevelser med ren design och strukturerade system.",
    "projects.card.booking.label": "Systembygge",
    "projects.card.booking.desc":
      "Fullstack-bokningsplattform med autentisering, rollbaserad åtkomstkontroll och strukturerade flöden.",
    "projects.card.portfolio.label": "Portfölj",
    "projects.card.portfolio.desc":
      "Modern utvecklarportfölj byggd med Eleventy, med flerspråksstöd och panelbaserad navigation.",
    "projects.image.vibemix.alt": "Förhandsvisning av VibeMix-gränssnitt",
    "projects.image.portfolio.alt": "Förhandsvisning av webbportfolio",
    "projects.image.nest.alt": "Förhandsvisning av Nest-gränssnitt",
    "projects.image.booking.alt": "Förhandsvisning av bokningssystem",
    "experience.title": "Arbetslivserfarenhet",
    "experience.intro": "Höjdpunkter från mina roller och ansvarsområden.",
    "experience.entries.0.title": "Projektledare",
    "experience.entries.0.company": "Robertsfors kommun",
    "experience.entries.0.location": "Robertsfors, Sverige",
    "experience.entries.0.period": "Aug 2022 - Sep 2023",
    "experience.entries.0.details.0":
      "Stöttade nyanlända i etablering genom arbetsmarknadsintroduktion och samhällsorientering.",
    "experience.entries.0.details.1": "Planerade och organiserade praktikplatser samt studiebesök.",
    "experience.entries.0.details.2":
      "Följde upp deltagarnas utveckling i samarbete med arbetsgivare.",
    "experience.entries.0.details.3":
      "Arbetade strukturerat med uppföljning, koordinering och kommunikation mellan flera parter.",
    "experience.entries.1.title": "Projektledare",
    "experience.entries.1.company": "Robertsfors kommun",
    "experience.entries.1.location": "Robertsfors, Sverige",
    "experience.entries.1.period": "Mar 2018 - Dec 2019",
    "experience.entries.1.details.0":
      "Stöttade arbetssökande i jobbsökning (CV, personligt brev och intervjuförberedelse).",
    "experience.entries.1.details.1":
      "Identifierade och etablerade praktikmöjligheter i samarbete med arbetsgivare.",
    "experience.entries.1.details.2": "Organiserade studiebesök och arbetsmarknadsaktiviteter.",
    "experience.entries.1.details.3":
      "Agerade språkstöd och länk mellan arbetssökande och arbetsgivare.",
    "experience.entries.2.title": "Assistent",
    "experience.entries.2.company": "Arbetsförmedlingen",
    "experience.entries.2.location": "Robertsfors, Sverige",
    "experience.entries.2.period": "Jun 2017 - Mar 2018",
    "experience.entries.2.details.0":
      "Administrativt stöd inom etableringsprogrammet och informationshantering.",
    "experience.entries.2.details.1":
      "Språkstöd vid möten, inskrivningar och kommunikation med deltagare.",
    "experience.entries.2.details.2":
      "Uppföljning av praktik- och anställningsprocesser tillsammans med arbetsgivare.",
    "experience.entries.2.details.3":
      "Bidrog till strukturerade arbetsflöden och effektiv informationsspridning.",
    "experience.entries.3.title": "Project Incharge",
    "experience.entries.3.company": "Almarai Company (IPNC Division)",
    "experience.entries.3.location": "Jeddah, Saudiarabien",
    "experience.entries.3.period": "Sep 2012 - Apr 2014",
    "experience.entries.3.details.0":
      "Ledde lansering av nytt projekt i samarbete med Mead Johnson (USA).",
    "experience.entries.3.details.1":
      "Samordnade och ledde team bestående av representanter och säljledare i regionen.",
    "experience.entries.3.details.2":
      "Övervakade lager, försäljning och distribution till sjukhus och apotek.",
    "experience.entries.3.details.3":
      "Säkerställde effektiv koordinering och måluppfyllelse i projektets olika faser.",
    "experience.entries.4.title": "Sales Supervisor / Acting Sales Manager",
    "experience.entries.4.company": "Almarai Company (Dairy Division)",
    "experience.entries.4.location": "Jeddah, Saudiarabien",
    "experience.entries.4.period": "Jan 2008 - Sep 2012",
    "experience.entries.4.details.0": "Ledde och utvecklade ett säljteam om 22 personer.",
    "experience.entries.4.details.1":
      "Ansvarade för budget, försäljningsmål och distributionsplanering.",
    "experience.entries.4.details.2":
      "Följde upp dagliga och veckovisa prestationer för att säkerställa måluppfyllelse.",
    "experience.entries.4.details.3":
      "Arbetade med ledarskap, coaching och optimering av teamets resultat.",
    "experience.entries.5.title": "Key Account Manager",
    "experience.entries.5.company": "Almarai Company (Dairy Division)",
    "experience.entries.5.location": "Jeddah, Saudiarabien",
    "experience.entries.5.period": "May 2005 - Dec 2007",
    "experience.entries.5.details.0":
      "Ansvarade för nyckelkunder och långsiktiga affärsrelationer.",
    "experience.entries.5.details.1": "Prognostiserade efterfrågan och optimerade produktdistribution.",
    "experience.entries.5.details.2":
      "Säkerställde betalningsflöden och kundnöjdhet enligt företagets riktlinjer.",
    "experience.entries.5.details.3":
      "Arbetade med datadriven uppföljning av försäljning och lager.",
    "experience.entries.6.title": "Marketing & Team Leader",
    "experience.entries.6.company": "Salim Mohammed Bakhashwen & Sons (SEB & Tefal Group)",
    "experience.entries.6.location": "Jeddah, Saudiarabien",
    "experience.entries.6.period": "Mar 2000 - Dec 2004",
    "experience.entries.6.details.0":
      "Planerade och genomförde marknadsaktiviteter samt kampanjer.",
    "experience.entries.6.details.1":
      "Koordinerade orderhantering och leveranser till butiker och kunder.",
    "experience.entries.6.details.2":
      "Säkerställde attraktiv produktpresentation i butik för ökad försäljning.",
    "experience.entries.6.details.3":
      "Ledde team och bidrog till effektiv daglig drift och kundupplevelse.",
    "journey.title": "GitHub",
    "journey.intro": "Open Source-projekt",
    "journey.techStackTbd": "Teknikstack kommer",
    "journey.viewGithub": "Visa på GitHub",
    "journey.stars.title": "Stjärnor",
    "journey.forks.title": "Forkar",
    "journey.noDescription": "Ingen beskrivning tillgänglig.",
    "education.title": "Utbildning & kompetens",
    "education.intro": "Akademisk bakgrund och tekniska styrkor.",
    "education.focus.title": "Kärnfokus",
    "education.focus.copy":
      "Fullstackutveckling med .NET och moderna frontendtekniker, med fokus på att bygga strukturerade, skalbara och användarvänliga applikationer.",
    "education.section.skills": "Kompetenser",
    "education.section.languages": "Språkkunskaper",
    "education.skills.item1": "Frontendarkitektur",
    "education.skills.item2": "Modern JavaScript (ES6+)",
    "education.skills.item3": "Responsivt och tillgängligt UI",
    "education.skills.item4": "Prestandaoptimering",
    "education.languages.item1": "Engelska",
    "education.languages.item2": "Svenska",
    "education.languages.item3": "Tigrinja",
    "education.languages.item4": "Arabiska",
    "education.skill.html.desc": "Semantisk struktur, layouter och responsivt UI.",
    "education.skill.js.desc": "Interaktiva upplevelser och moderna ES-verktyg.",
    "education.skill.design.desc": "Återanvändbara komponenter med tillgängliga mönster.",
    "education.skill.performance.desc": "Renderingoptimering och Lighthouse-tuning.",
    "education.section.technical": "Tekniska kompetenser",
    "education.tech.backend": "Backend",
    "education.tech.backend.item1": "C# / .NET",
    "education.tech.backend.item2": "ASP.NET Core MVC",
    "education.tech.backend.item3": "Entity Framework Core",
    "education.tech.backend.item4": "ASP.NET Identity",
    "education.tech.backend.item5": "REST API-design",
    "education.tech.backend.item6": "Rollbaserad åtkomstkontroll",
    "education.tech.frontend": "Frontend",
    "education.tech.frontend.item1": "TypeScript",
    "education.tech.frontend.item2": "Angular",
    "education.tech.frontend.item5": "Komponentbaserad UI-arkitektur",
    "education.tech.frontend.item6": "Responsiv design",
    "education.tech.databases": "Databaser",
    "education.tech.databases.item1": "SQL Server",
    "education.tech.databases.item2": "PostgreSQL",
    "education.tech.databases.item3": "SQLite",
    "education.tech.databases.item4": "Schemadesign och relationsmodellering",
    "education.tech.tools": "Verktyg & miljö",
    "education.tech.tools.item1": "Git / GitHub",
    "education.tech.tools.item2": "Supabase",
    "education.tech.tools.item5": "Vercel / Netlify (utforskat)",
    "education.section.education": "Utbildning",
    "education.section.courses": "Kurser",
    "education.entries.0.title": "Systemutveckling .NET",
    "education.entries.0.date": "4 sep 2023 - 25 apr 2025",
    "education.entries.0.location": "Distans",
    "education.entries.0.description":
      "YH-program i systemutveckling .NET med AI-inriktning (EduGrade). Fokus på backendutveckling, databaser och moderna webbapplikationer.",
    "education.entries.1.title": "Gymnasieexamen",
    "education.entries.1.date": "sep 1994 - jul 1998",
    "education.entries.1.location": "St. Anna gymnasieskola, Asmara, Eritrea",
    "education.entries.1.description": "Läst allmänna gymnasiestudier.",
    "education.courses.0.title": "Programmering 1",
    "education.courses.0.date": "jan 2023 - juni 2023",
    "education.courses.0.location": "Hermods, Distans",
    "education.courses.0.description":
      "Grundläggande programmering i C# med fokus på problemlösning och logik.",
    "education.courses.1.title": "Datanätverk (kurs)",
    "education.courses.1.date": "aug 2020 - dec 2020",
    "education.courses.1.location": "LTU, Skellefteå",
    "education.courses.1.description":
      "Studier i nätverksteknik, inklusive matematik för nätverk samt digitala och analoga system.",
    "education.courses.2.title": "Förhandlingsteknik",
    "education.courses.2.date": "mar 2011",
    "education.courses.2.location": "Riyadh, Saudiarabien",
    "education.courses.2.description":
      "Workshops i förhandling, KPI-styrning och påverkande försäljning.",
    "education.courses.3.title": "Presentationsteknik",
    "education.courses.3.date": "apr 2009",
    "education.courses.3.location": "Riyadh, Saudiarabien",
    "education.courses.3.description": "Workshop i presentation och kommunikationsteknik.",
    "education.courses.4.title": "Ledarskap & säljutveckling",
    "education.courses.4.date": "2009",
    "education.courses.4.location": "Riyadh, Saudiarabien",
    "education.courses.4.description":
      "Avancerad utbildning för säljledare med fokus på teamledning och prestation.",
    "skills.title": "Kompetenser",
    "skills.intro": "Frontendstyrkor och stödjande verktyg.",
    "skills.section.core": "Kärnkompetenser",
    "skills.skill.html.title": "HTML / CSS",
    "skills.skill.js.title": "JavaScript",
    "skills.skill.design.title": "Designsystem",
    "skills.skill.performance.title": "Prestanda",
    "skills.skill.html.desc": "Semantisk struktur, layouter och responsivt UI.",
    "skills.skill.js.desc": "Interaktiva upplevelser och moderna ES-verktyg.",
    "skills.skill.design.desc": "Återanvändbara komponenter med tillgängliga mönster.",
    "skills.skill.performance.desc": "Renderingoptimering och Lighthouse-tuning.",
    "resume.title": "CV",
    "resume.intro": "Ladda ner senaste CV som PDF.",
    "resume.button": "Ladda ner CV ->",
    "contact.title": "Kontakt",
    "contact.intro": "Låt oss arbeta tillsammans",
    "contact.heading": "Kontakta mig",
    "contact.description":
      "Jag är alltid intresserad av nya projekt och möjligheter. Oavsett om du har en fråga eller bara vill säga hej är du varmt välkommen att höra av dig.",
    "contact.details.email.label": "E-post",
    "contact.details.phone.label": "Telefon",
    "contact.details.address.label": "Plats",
    "contact.details.address.value": "Ånäset, Sverige",
    "contact.availability.aria": "Tillgänglighet",
    "contact.availability.title": "Tillgänglighet",
    "contact.availability.heading": "Tillgänglig för möjligheter",
    "contact.availability.description":
      "Öppen för heltidsroller, frilansprojekt eller samarbeten inom fullstackutveckling och moderna webbapplikationer.",
    "contact.availability.point1": "Fullstackutveckling i .NET",
    "contact.availability.point2": "Ren och skalbar arkitektur",
    "contact.availability.point3": "Stark förståelse för affär och produkt",
    "contact.availability.footnote": "Baserad i Sverige • Öppen för distansarbete",
    "contact.form.name": "Ditt namn",
    "contact.form.email": "Din e-post",
    "contact.form.message": "Ditt meddelande",
    "contact.firstName": "Förnamn",
    "contact.lastName": "Efternamn",
    "contact.email": "E-post",
    "contact.message": "Meddelande",
    "contact.button": "Skicka meddelande",
  },
};

const applyTranslations = (lang) => {
  const dict = translations[lang] || translations.en;
  const elements = document.querySelectorAll("[data-i18n], [data-i18n-aria-label], [data-i18n-title]");

  elements.forEach((el) => {
    const textKey = el.getAttribute("data-i18n");
    if (textKey && dict[textKey]) {
      el.textContent = dict[textKey];
    }

    Array.from(el.attributes).forEach((attr) => {
      if (!attr.name.startsWith("data-i18n-") || attr.name === "data-i18n") return;
      const targetAttr = attr.name.replace("data-i18n-", "");
      const key = attr.value;
      if (dict[key]) {
        el.setAttribute(targetAttr, dict[key]);
      }
    });
  });
};

const langToggle = document.querySelector("#lang-toggle");
const themeToggle = document.querySelector("#theme-toggle");
const storedLang = localStorage.getItem("lang");
let currentLang = storedLang === "sv" ? "sv" : "en";
if (!storedLang) {
  localStorage.setItem("lang", "en");
}

const storedTheme = localStorage.getItem("theme");
let currentTheme = storedTheme === "light" ? "light" : "dark";
if (!storedTheme) {
  localStorage.setItem("theme", "dark");
}

const updateThemeToggle = () => {
  if (!themeToggle) return;
  const dict = translations[currentLang] || translations.en;
  const isDark = currentTheme === "dark";
  const nextAria = isDark ? dict["theme.toLight"] : dict["theme.toDark"];
  const nextIcon = isDark
    ? `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 5.25a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75Zm0 11a.75.75 0 0 1 .75.75v1.5a.75.75 0 0 1-1.5 0V17a.75.75 0 0 1 .75-.75Zm6-3.25a.75.75 0 0 1 0-1.5h1.5a.75.75 0 0 1 0 1.5H18Zm-13.5 0a.75.75 0 0 1 0-1.5H6a.75.75 0 0 1 0 1.5H4.5ZM16.773 8.28a.75.75 0 0 1 1.06-1.06l1.06 1.06a.75.75 0 1 1-1.06 1.06l-1.06-1.06Zm-10.606 10.607a.75.75 0 0 1 0-1.06l1.06-1.061a.75.75 0 1 1 1.06 1.06l-1.06 1.061a.75.75 0 0 1-1.06 0Zm12.727 0a.75.75 0 0 1-1.06 0l-1.061-1.06a.75.75 0 1 1 1.06-1.06l1.061 1.06a.75.75 0 0 1 0 1.06ZM7.227 9.34a.75.75 0 0 1-1.06 0L5.106 8.28a.75.75 0 1 1 1.06-1.06l1.061 1.06a.75.75 0 0 1 0 1.06ZM12 9a3 3 0 1 1 0 6 3 3 0 0 1 0-6Z"/></svg>`
    : `<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M15.8 4.8a7.2 7.2 0 1 0 3.4 10.3A6.2 6.2 0 1 1 15.8 4.8Z" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

  themeToggle.innerHTML = nextIcon;
  themeToggle.setAttribute("aria-label", nextAria);
  themeToggle.setAttribute("title", nextAria);
};

const setTheme = (theme) => {
  currentTheme = theme;
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("data-theme", theme);
  updateThemeToggle();
};

const updateLanguageToggle = () => {
  if (!langToggle) return;
  const dict = translations[currentLang] || translations.en;
  const nextLangLabel = currentLang === "en" ? dict["lang.switchToSwedish"] : dict["lang.switchToEnglish"];
  langToggle.textContent = currentLang.toUpperCase();
  langToggle.setAttribute("title", nextLangLabel);
  langToggle.setAttribute("aria-label", nextLangLabel);
};

const setLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem("lang", lang);
  document.documentElement.lang = lang;
  applyTranslations(lang);
  updateLanguageToggle();
  updateThemeToggle();
};

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const updateProfileVisibility = (panelId) => {
  if (!appRoot) return;
  const showProfile = panelId === "about";
  appRoot.classList.toggle("profile-hidden", !showProfile);
};

const setActive = (nextIndex) => {
  if (nextIndex === activeIndex) return;
  const currentPanel = panels[activeIndex];
  const direction = nextIndex > activeIndex ? "exit-left" : "exit-right";

  currentPanel.classList.add(direction);
  currentPanel.classList.remove("active");
  panels[nextIndex].classList.add("active");

  const nextPanelId = panels[nextIndex]?.id;
  updateProfileVisibility(nextPanelId);
  navButtons.forEach((button) => {
    const isActive = button.getAttribute("data-target") === nextPanelId;
    button.setAttribute("aria-current", isActive ? "page" : "false");
  });

  const cleanup = () => {
    currentPanel.classList.remove("exit-left", "exit-right");
    currentPanel.removeEventListener("transitionend", cleanup);
  };

  currentPanel.addEventListener("transitionend", cleanup);
  activeIndex = nextIndex;

  const nextPanel = panels[nextIndex];
  if (nextPanel) {
    nextPanel.scrollTo({
      top: 0,
      left: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }
  window.scrollTo({ top: 0, left: 0, behavior: prefersReducedMotion ? "auto" : "smooth" });
};

navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    const nextPanel = panels.find((panel) => panel.id === targetId);
    if (!nextPanel) return;
    const panelIndex = Number(nextPanel.getAttribute("data-index"));
    const nextIndex = Number.isFinite(panelIndex) && panelIndex >= 0 && panelIndex < panels.length
      ? panelIndex
      : panels.indexOf(nextPanel);
    if (nextIndex < 0) return;
    setActive(nextIndex);
  });
});


if (langToggle) {
  langToggle.addEventListener("click", () => {
    const nextLang = currentLang === "en" ? "sv" : "en";
    setLanguage(nextLang);
  });
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const nextTheme = currentTheme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
  });
}

setLanguage(currentLang);
setTheme(currentTheme);
updateProfileVisibility(panels[activeIndex]?.id);

const carousel = document.querySelector(".projects-carousel");
if (carousel) {
  const cards = Array.from(carousel.querySelectorAll(".project-card"));
  const dotsRoot = carousel
    .closest(".panel")
    ?.querySelector(".projects-dots");
  const controls = carousel
    .closest(".panel")
    ?.querySelectorAll(".projects-control");

  const setActiveDot = () => {
    if (!dotsRoot) return;
    const slideWidth = carousel.clientWidth || 1;
    const index = Math.min(
      cards.length - 1,
      Math.max(0, Math.round(carousel.scrollLeft / slideWidth))
    );
    Array.from(dotsRoot.children).forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === index);
    });
  };

  if (dotsRoot && cards.length > 0) {
    dotsRoot.innerHTML = cards
      .map((_, index) => `<button type="button" class="projects-dot${index === 0 ? " is-active" : ""}" aria-label="Go to project ${index + 1}"></button>`)
      .join("");

    Array.from(dotsRoot.children).forEach((dot, index) => {
      dot.addEventListener("click", () => {
        carousel.scrollTo({
          left: carousel.clientWidth * index,
          behavior: prefersReducedMotion ? "auto" : "smooth",
        });
      });
    });
  }

  controls?.forEach((button) => {
    button.addEventListener("click", () => {
      const direction = button.getAttribute("data-action");
      const scrollAmount = carousel.clientWidth;
      carousel.scrollBy({
        left: direction === "next" ? scrollAmount : -scrollAmount,
        behavior: prefersReducedMotion ? "auto" : "smooth",
      });
    });
  });

  carousel.addEventListener("scroll", setActiveDot, { passive: true });
  window.addEventListener("resize", setActiveDot);
  setActiveDot();
}

const portfolioImageTriggers = Array.from(document.querySelectorAll("#projects .portfolio-media-trigger"));
if (portfolioImageTriggers.length > 0) {
  const lightbox = document.createElement("div");
  lightbox.className = "project-image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");
  lightbox.innerHTML = `
    <div class="project-image-lightbox-content" role="dialog" aria-modal="true" aria-label="Expanded project image">
      <button type="button" class="project-image-lightbox-close" aria-label="Close expanded image">×</button>
      <img src="" alt="">
    </div>
  `;
  document.body.appendChild(lightbox);

  const lightboxImage = lightbox.querySelector("img");
  const closeButton = lightbox.querySelector(".project-image-lightbox-close");

  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    lightboxImage.setAttribute("src", "");
    lightboxImage.setAttribute("alt", "");
  };

  const openLightbox = (src, alt) => {
    lightboxImage.setAttribute("src", src);
    lightboxImage.setAttribute("alt", alt || "Expanded project image");
    lightbox.classList.add("is-open");
    lightbox.setAttribute("aria-hidden", "false");
  };

  portfolioImageTriggers.forEach((trigger) => {
    trigger.addEventListener("click", () => {
      const image = trigger.querySelector("img");
      if (!image) return;
      openLightbox(image.getAttribute("src"), image.getAttribute("alt"));
    });
  });

  closeButton?.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}
