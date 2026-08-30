(() => {
  const params = new URLSearchParams(window.location.search);
  const requestedLanguage = params.get("lang");
  const language = requestedLanguage === "en" ? "en" : "pt-BR";
  const isEnglish = language === "en";

  document.documentElement.lang = language;

  const languageToggle = document.getElementById("language-toggle");
  const toggleUrl = new URL(window.location.href);

  if (isEnglish) {
    toggleUrl.searchParams.delete("lang");
    languageToggle.textContent = "PT";
    languageToggle.hreflang = "pt-BR";
    languageToggle.setAttribute("aria-label", "Exibir esta página em português");
  } else {
    toggleUrl.searchParams.set("lang", "en");
  }

  languageToggle.href = `${toggleUrl.pathname}${toggleUrl.search}${toggleUrl.hash}`;

  if (!isEnglish) return;

  document.title = "Paulo Fernando - Developer";

  const translateAll = (selector, translations) => {
    const elements = document.querySelectorAll(selector);

    if (elements.length !== translations.length) {
      console.warn(`Translation mismatch for ${selector}: ${elements.length}/${translations.length}`);
      return;
    }

    elements.forEach((element, index) => {
      element.innerHTML = translations[index];
    });
  };

  translateAll("#mobile-nav option", [
    "About Me",
    "Education",
    "My Journey",
    "My Hobbies",
    "Contact"
  ]);

  translateAll(".nav-link", [
    "About Me",
    "Education",
    "My Journey",
    "My Hobbies",
    "Contact"
  ]);

  document.querySelector('label[for="mobile-nav"]').textContent = "Navigation";
  document.getElementById("mobile-nav").setAttribute("aria-label", "Quick navigation");
  document.querySelector("#sobre img").alt = "Photo of Paulo Fernando";

  translateAll("#sobre h2, #sobre p", [
    "About Me",
    `Hi, I'm Paulo. Nice to meet you! I am <span id="current-age">34</span> years old, born on day 256 (September 13), which, coincidentally, is Programmer's Day. I was born in the state of São Paulo, lived in Ferraz de Vasconcelos for 32 years, and currently live in São Paulo city.`,
    `I have worked in software development since 2011, when I started as an IT intern. I began studying programming in 2008, and nearly my entire career has been built on the .NET platform. I completed an MBA in Corporate Solutions and Cloud Computing on the .NET Platform in 2017 and an MBA in Data Engineering in 2026, both at <a href="https://www.fiap.com.br/" target="_blank" rel="noopener">FIAP</a>. During the Data Engineering MBA, I worked with data architecture, data pipelines, and analytics solutions, building a solid foundation for further study in these areas.`,
    `My experience has always focused on the web. I have worked with every kind of ASP.NET application (Web Forms, MVC, APIs, and SignalR), later moving to .NET Core with Blazor and SQL Server. I currently work at Dimensa as a developer and technical reference for Trindade's legacy projects; I was a partner at Trindade from 2021 to 2025. In this role, I maintain legacy systems. I enjoy studying performance, software architecture, and, more recently, data and AI.`
  ]);

  translateAll("#estudos h2, #estudos h3, #estudos p, #estudos li", [
    "Education",
    "I have studied technology since 2008 and enjoy following sources that provide real value. Today, many talented people publish articles, videos, and courses.",
    "Where I started",
    "The .NET Magazine publication was part of my early journey. Its subscription even helped me land my first job.",
    "Pluralsight",
    "A paid international platform with strong curation, featuring many MVPs and respected community experts. I consume a great deal of .NET and Microsoft content while continuing to explore other stacks. During the Data Engineering MBA I completed in 2026, I worked with Python, distributed data architecture, MongoDB, Apache Spark, Databricks, and other technologies, gaining a solid foundation for continued study.",
    "People and resources I follow",
    `Scott Allen — <a href="https://odetocode.com" target="_blank" rel="noopener">odetocode.com</a> (ASP.NET)`,
    `Paul Randal — <a href="https://www.sqlskills.com/" target="_blank" rel="noopener">sqlskills.com</a> (SQL Server)`,
    `Pinal Dave — <a href="https://blog.sqlauthority.com/" target="_blank" rel="noopener">sqlauthority.com</a> (SQL Server)`,
    `Julie Lerman — <a href="https://thedatafarm.com/" target="_blank" rel="noopener">thedatafarm.com</a> (EF &amp; data)`,
    "Also: Vladimir Khorikov, Jimmy Bogard, Steven Smith, Steve Gordon, Filip Ekberg, Deborah Kurata, Shawn Wildermuth, and others.",
    "Among Brazilian experts: Giovani Bassi; Elemar Jr.; Diego Nogare, whom I had the pleasure of having as a professor at FIAP; and Fabiano Amorim, whose Power Tuning courses on SQL Server Internals I attended. Early in my career, I closely followed Alexandre Tarifa, who worked at the Minha Vida portal. Many of these professionals are excellent references in ASP.NET, IIS, software development, and SQL Server.",
    "Beyond Pluralsight",
    `Brent Ozar — <a href="https://www.brentozar.com/" target="_blank" rel="noopener">brentozar.com</a> is another SQL Server authority.`,
    "Books and additional resources",
    "I am from the generation that learned from Microsoft's Step by Step books. I still have my copies on C# and ASP.NET development. I also enjoy Tech Leads Club, LinkedIn Learning, and PacktPub."
  ]);

  translateAll("#trajetoria h2, #trajetoria h3, #trajetoria p", [
    "My Journey",
    "December 2005",
    `I completed the Introduction to Computing course at SENAI Suzano through <a href="https://www.reinodagarotada.org.br/" target="_blank" rel="noopener">Reino da Garotada de Poá</a>. It was my first contact with the world of computing: a 100-hour course where, still unsure of what this universe could offer, I learned the main productivity tools available at the time. The greatest joy was creating a PowerPoint presentation and adding animations.`,
    "December 2006",
    "I completed the Residential Electrical Installations course at SENAI Suzano, also through Reino da Garotada. The 400-hour course was my first contact with electricity, and I still put what I learned into practice today. Over the years, I have completed a few installations where I was able to rebuild everything from scratch.",
    "December 2008",
    "I completed the Furniture Woodworking course at SENAI Suzano. I learned technical drawing and how to build furniture such as shelves and cabinets. It was 800 hours of extensive learning.",
    "During the same period, I also completed a vocational course in computer maintenance, which allowed me to start earning some money by repairing equipment for friends and neighbors.",
    "December 2009",
    "I graduated from high school at Escola Estadual Jardim São Paulo II, where I also worked as an office assistant during my final year. That same year, I completed a technical degree in Information Technology at ETEC Ferraz de Vasconcelos, where I took a programming logic class. Some classmates and a friend said I had a knack for it and, in a way, I believed them! During the program, I learned VB6, Delphi 7, SQL Server, and VB.NET.",
    "April 2010",
    "My first formal job was as a Computer Instructor at Liceu Brasil school in Itaquaquecetuba, São Paulo. I maintained the computers and taught children and teenagers. Although I stayed at the school for only seven months, I was responsible for setting up the computer lab at its Poá branch.",
    "June 2011",
    `I began my professional career as an IT intern at <a href="https://unisaudemaster.com.br/" target="_blank" rel="noopener">Unisaúde</a>, a brokerage specializing in health insurance, through <a href="https://portal.ciee.org.br/" target="_blank" rel="noopener">CIEE</a> (Center for Business-School Integration). I gave up a formal job offer I received at the same time because I believed I could stand out and grow in the field, so I followed my convictions despite the unfavorable circumstances. I optimized my internship time by maintaining the computers—my main responsibility—and used the remaining time to learn programming. I studied until I received my first opportunity to build a health-insurance sales website with ASP.NET Web Forms.`,
    "February 2013",
    `I was hired as a Junior .NET Developer at Unisaúde and helped develop the Broker Portal with ASP.NET MVC 2. I learned a great deal from <a href="https://www.linkedin.com/in/oliveiracdz/" target="_blank" rel="noopener">Daniel Oliveira</a>, who was my mentor and taught me so much. I am certain that what I learned from him helped me get where I am today.`,
    "December 2013",
    `I earned my bachelor's degree in Information Systems from <a href="https://uniesp.edu.br/sites/unisuzano/" target="_blank" rel="noopener">UNISUZ</a>, in Suzano, a city where I have always enjoyed spending time. It took four years of dedication because I had a scholarship and needed to maintain good grades. I also made great friends at university whom I remain close to today.`,
    "January 2014",
    `I became a Systems Analyst and progressed from Junior to Senior between 2014 and 2024, moving from <a href="https://unisaudemaster.com.br" target="_blank" rel="noopener">Unisaúde</a> to <a href="https://trindadetecnologia.com.br/" target="_blank" rel="noopener">Trindade Tecnologia</a> in 2017. During this period, I worked on the company's main projects and on infrastructure migrations—from UOL Diveo through AWS and CL9 to Google Cloud, the platform where I gained most of my cloud computing experience. Over the years, I developed expertise in both software development and infrastructure.`,
    "July 2017",
    "I completed the MBA in Corporate Solutions and Cloud Computing on the .NET Platform (the program's name at the time) at FIAP, where I had the opportunity to advance my software development career using Microsoft's cloud ecosystem, Microsoft Azure.",
    "February 2021",
    "In February 2021, I became a partner at Trindade in recognition of the dedication, commitment, and results I had delivered throughout my journey since 2011. This stage broadened my perspective beyond technology, providing hands-on learning about how a company operates: decision-making, risk, operational challenges, strategic responsibilities, and the real impact of choices on the business and its people. It was a period of intense professional and personal growth that improved my understanding of products, management, and long-term sustainability.",
    "February 2024",
    "I took the lead in revitalizing SisWeb, focusing on performance, process automation, security, and application distribution.",
    "February 2025",
    `In February 2025, <a href="https://exame.com/negocios/casa-do-corretor-de-seguros-agger-faz-segunda-aquisicao-em-um-ano/" target="_blank" rel="noopener">Trindade completed its cycle through a sale to Agger S.A.</a>, marking the end of one journey and the beginning of a new phase within a larger organization whose principles strongly aligned with Trindade's. In this new context, I continued in a technical leadership role, supporting Agger in maintaining its legacy systems. This transition later extended to Dimensa Tecnologia (TOTVS + B3), the company that acquired Agger.`,
    "February 2026",
    "In February 2026, I began a new chapter at Dimensa as the lead developer and technical reference for Trindade's legacy projects, supporting the evolution and restructuring of products within the Insurance business unit.",
    "July 2026",
    `I completed the MBA in Data Engineering at <a href="https://www.fiap.com.br/" target="_blank" rel="noopener">FIAP</a>, where I worked with data architecture, data pipelines, analytics solutions, artificial intelligence, open-source models, and tools such as LangChain, Ollama, and LM Studio. This gave me a solid foundation for continuing my studies.`,
    "More about me",
    "Throughout this period, I took on freelance work—always in the .NET ecosystem—and contributed to other projects, including the maintenance of existing systems and a startup using MySQL, APIs, and a new Blazor WebAssembly application. I migrated environments from AWS to Google Cloud and gained experience with database administration and maintenance routines in both SQL Server and MySQL.",
    "Between 2021 and 2025, I was a partner at Trindade Tecnologia. Beyond my technical role, I actively participated in strategic decisions, product evolution, and the direction of the business. During that period, I had the opportunity to take part in the company's sale and experience an M&A process firsthand."
  ]);

  translateAll("#hobbies h2, #hobbies h3, #hobbies p", [
    "My Hobbies",
    "Visiting parks",
    "I enjoy being close to nature and visiting parks to walk and maintain balance in my life.",
    "Soccer and São Paulo FC",
    "I am passionate about soccer and support São Paulo FC. I have followed the sport since 2001 and have gone to the stadium whenever possible since 2016. On September 24, 2023, during the Copa do Brasil final, I experienced my greatest moment as a fan in the stadium when the club completed its collection of major titles!",
    "Swimming",
    "In 2023, I began making several changes in my life. One of them was taking on the challenge of learning to swim. Beyond being physical exercise, the connection with water is unquestionably therapeutic in everyday life. I had to take a break because of changes in my life, but I intend to return soon!",
    "Wine",
    "I also enjoy a good wine—to celebrate, accompany a good movie or good company, listen to music on Spotify, or simply relax after a demanding day.",
    "Dancing",
    "Dancing has become a way to break out of my routine and take care of myself. Forró, a long-held dream I finally decided to pursue, has been like therapy for me. I am now also beginning to learn sertanejo universitário, a Brazilian style of country dance.",
    "Going out more",
    "Living in São Paulo, I have made an effort to go out more—whether to attend parties and concerts, meet new people, or share new experiences with friends. I want to keep broadening my horizons by exploring restaurants, theaters, and the many other places and activities the city offers."
  ]);

  translateAll("#contato h2, #contato h3", [
    "Contact",
    "Phone",
    "Email addresses",
    "Instagram",
    "Facebook"
  ]);

  translateAll("footer p", [
    `&copy; <span id="current-year">2026</span> Paulo Fernando. All rights reserved.`
  ]);

  const linkedInBadge = document.querySelector(".LI-profile-badge");
  if (linkedInBadge) linkedInBadge.dataset.locale = "en_US";
})();
