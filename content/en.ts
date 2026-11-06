import type { SiteCopy } from "./types";

export const en = {
  locale: "en",
  langName: "English",
  meta: {
    homeTitle: "Jael Tahan — Hi-tech & AI counsel for startups",
    description:
      "Israeli commercial counsel with in-house cyber experience. English, Hebrew, and Dutch. Based in Tel Aviv.",
    about:
      "Jael Tahan is an Israel-licensed lawyer in Tel Aviv. Commercial counsel for technology companies, in English, Hebrew, and Dutch.",
    services:
      "AI procurement review, employment and equity offers, contract redlines, and part-time counsel for seed to Series A startups.",
    insights:
      "Short notes on AI vendor clauses, Israeli tech offer letters, and early fundraising documents.",
    contact:
      "Write to Jael Tahan about a document. English, Hebrew, or Dutch. Based in Tel Aviv, on Israel Time.",
    privacy: "Privacy notice for the website of Jael Tahan. Static pages, no analytics cookies, no stored forms.",
  },
  nav: {
    about: "About",
    services: "Services",
    insights: "Insights",
    contact: "Contact",
    privacy: "Privacy",
  },
  ui: {
    skip: "Skip to content",
    languageLabel: "Language",
    portraitCaption: "Photograph to follow",
    portraitAlt: "Portrait of Jael Tahan",
    cta: "Request a conversation",
    present: "present",
    barYearPending: "Member of the Israel Bar. Admission year to be added.",
    barYearKnown: "Member of the Israel Bar, admitted in {year}.",
    included: "What is included",
    excluded: "What is not included",
    audience: "Who it is for",
    readNote: "Read the note",
    allNotes: "All notes",
    otherNotes: "Other notes",
    schedule: "Schedule a conversation",
    scheduleReady: "Open the scheduler",
    scheduleMissing: "A scheduling link will be added here.",
    whatsapp: "WhatsApp",
    whatsappReady: "Send a message",
    whatsappMissing: "A WhatsApp number will be added here.",
    email: "Email",
    emailMissing: "An email address will be added here.",
    newTab: "opens in a new tab",
    onThisPage: "On this page",
    checklistLink: "Read the clause list",
    profileLabel: "LinkedIn",
  },
  footer: {
    disclaimer:
      "Jael Tahan advises on Israeli law. She is not admitted as a Dutch advocaat. The contents of this site are general information and not legal advice.",
    location: "Tel Aviv",
  },
  home: {
    kicker: "Tel Aviv · Israel Bar · English, Hebrew, Dutch",
    tagline: "Hi-tech & AI counsel for startups",
    lede: "Israeli commercial counsel with in-house cyber experience. English, Hebrew, and Dutch.",
    introTitle: "A named counsel, not a firm.",
    intro:
      "Jael advises companies and the people who work in them on commercial documents where technology is the product: AI tools a company is buying, software contracts, employment and equity offers, and early-stage papers. She is licensed in Israel. She is not a Dutch advocaat. The work is remote. The scope is written down before it starts.",
    servicesTitle: "Four kinds of work",
    servicesLede: "Each one is a document, a note, or a monthly rhythm. The scope is agreed before the work begins.",
    otherTitle: "Narrower matters",
    otherLede: "Smaller or less frequent. Still agreed in writing, still on this site so you can see them.",
    notesTitle: "Notes",
    notesLede: "Short briefings. General information about Israeli commercial practice, not a reading of your document.",
    close: "If a contract, an offer, or a financing is in front of you, the next step is a conversation about the document and the scope.",
  },
  about: {
    title: "About",
    lede: "Israel-licensed lawyer in Tel Aviv, working in English, Hebrew, and Dutch on commercial matters for technology companies and the people who join them.",
    paragraphs: [
      "Jael Tahan is a lawyer admitted in Israel. On this site the work is commercial documents for technology companies, and employment and equity documents for people joining them. It is done remotely, and the scope is written down before it starts.",
      "She is legal counsel at Palo Alto Networks, and was legal counsel at CyberArk. Before the in-house roles she was an associate, and earlier an articled clerk, in the Hi-Tech department at Herzog. The clerkship was part of qualifying in Israel. A short period as a paralegal at Arnon Segev & Co. came just before that.",
      "She holds an LL.M. in International Corporate Law from Tel Aviv University (2019–2020) and an LL.B. in Global Law from Tilburg University in the Netherlands (2016–2019). The Tilburg degree is a university degree. It is not admission to the Dutch bar. She does not use the title advocaat.",
    ],
    experienceTitle: "Experience",
    educationTitle: "Education",
    writingTitle: "A public note",
    publication:
      "Co-author, with Yair Geva, of Herzog’s {link}, published 7 December 2023.",
    publicationLink: "overview of the October 2023 NVCA model-document updates",
    roles: {
      pan: "Legal counsel",
      cyberark: "Legal counsel",
      "herzog-associate": "Associate, Hi-Tech department",
      "herzog-clerk": "Articled clerk, Hi-Tech department",
      arnon: "Paralegal",
    },
    howTitle: "How the work is done",
    how: [
      "Remote. Documents and calls. There is no need to come to an office.",
      "Languages. English, Hebrew, or Dutch, including where a team mixes them.",
      "Hours. Based in Tel Aviv, on Israel Time. Overlap with the Netherlands can be arranged.",
      "Scope first. The document, the question, and what sits outside the work are agreed in writing before it starts.",
      "One side of a matter. She does not act for both sides. If she already acts for the company, she will not also act for the employee, and she will say so.",
    ],
    limitsTitle: "What this practice does not do",
    limits: [
      "She is not a Dutch advocaat and does not appear in Dutch courts. Questions of Dutch law go to a lawyer admitted in the Netherlands.",
      "Litigation is outside this practice.",
      "Tax opinions, pension calculations, and immigration filings belong with the specialist adviser. A contract review can show where those questions sit. It does not answer them.",
      "Nothing on this site is legal advice, and reading it does not create a lawyer-client relationship.",
      "Recruiting and talent-acquisition work are not part of this practice.",
    ],
  },
  services: {
    title: "Services",
    lede: "The work is document-led. Under each heading is what a typical matter includes, and what it does not. The actual scope is agreed in writing before the work starts.",
    otherTitle: "Narrower matters",
    otherLede: "These come up less often, or they are a single document rather than a review of a whole relationship.",
    checklistEyebrow: "Buying an AI tool",
    checklistTitle: "Clauses that usually matter",
    checklistIntro:
      "This is the same ground as an AI procurement review, written as questions a buyer can read before sending a contract. It is general information. It is not a mark-up of your paper, and it is not a statement that a clause is lawful or unlawful in your situation.",
    checklist: [
      {
        title: "Provider and deployer",
        text: "The EU AI Act distinguishes a provider, who places a system on the market, from a deployer, who uses it. A buyer can be a deployer even when the product feels like ordinary software. Read any clause that makes the customer responsible for lawful use or for high-risk duties, and separate the duties that belong with the user from the duties the vendor is moving down the page.",
      },
      {
        title: "Training and improvement",
        text: "Look for a right to use prompts, files, outputs, or usage data to train or improve a model. A right to run and maintain the service is not the same as a right to train a model the vendor also offers to other customers. If training is allowed, the clause should say on which data, for whose model, and whether the customer can refuse.",
      },
      {
        title: "Outputs and intellectual property",
        text: "See who owns the output, and whether the licence is wide enough for the way the company will actually use it. If the deal includes fine-tuning, see who owns the tuned model and whether the customer can take it when the contract ends. A line that says the customer owns its data often says nothing about outputs.",
      },
      {
        title: "Confidentiality",
        text: "A confidentiality clause written for people does not, by itself, say whether prompts are logged, who can read them, how long they are kept, or whether they are kept out of training. Those are the practical questions. Also read what notice the vendor owes if confidentiality fails.",
      },
      {
        title: "Indemnities and caps",
        text: "Read the indemnity and the limit on liability as one thought. A broad indemnity can be cut back to very little by the cap that follows it. The review points that relationship out. It does not predict what a court would do with the cap.",
      },
      {
        title: "Security, incidents, and logs",
        text: "Where the customer has its own duties to users or to a regulator, the contract needs a workable incident notice and, where that is realistic, access to the logs that matter. An annual summary is not notice of an incident that reached the customer’s prompts.",
      },
      {
        title: "Personal data",
        text: "If prompts or files can contain personal data, the contract needs a processing arrangement, not only a confidentiality clause. For European data the GDPR questions are roles, instructions, transfers, and deletion. For Israeli data, read the terms against Amendment 13 to the Privacy Protection Law, in force since August 2025. A vendor that calls itself only a processor should not also keep a right to train on the same material for its own model.",
      },
      {
        title: "When the model changes",
        text: "Models are replaced and retuned. Look for notice before a material change to the model, or to the way customer data is used, and for a way to end the contract if the change removes a feature the customer bought.",
      },
      {
        title: "Exit and deletion",
        text: "At the end, the customer will want its content, prompts, and outputs returned or deleted, and a direct answer on data that was used to train or improve a model. A deletion clause that speaks only of customer content, and is silent on training, should be read as silence.",
      },
    ],
    items: [
      {
        id: "ai-procurement",
        lead: true,
        title: "AI vendor and procurement review",
        summary:
          "A marked copy of the vendor’s terms, and a short note on training rights, outputs, liability, privacy, and the duties the draft places on the buyer.",
        audience: "Companies buying an AI tool, a model, or an AI feature inside other software.",
        included: [
          "A marked copy of the terms and a short written note of what they do.",
          "Training and improvement rights, ownership and use of outputs, confidentiality, indemnities, and limits on liability.",
          "Security, incident notice, and access to logs, where the draft deals with them.",
          "Personal data under the GDPR and under Amendment 13 to the Israeli Privacy Protection Law.",
          "EU AI Act duties the draft shifts onto the buyer, including where the buyer is a deployer.",
          "Notice of a material model change, and exit, return, and deletion.",
        ],
        excluded: [
          "Building, testing, or certifying the system.",
          "A conformity assessment under the EU AI Act.",
          "Acting for the vendor on the same deal.",
          "An opinion on Dutch law.",
        ],
      },
      {
        id: "employment-equity",
        lead: true,
        title: "Tech employment and equity offer review",
        summary:
          "A reading of the employment agreement, the equity grant, and the restrictions, for someone joining a technology company.",
        audience:
          "Employees, including English-speaking olim and expats, who have received an offer from a technology employer.",
        included: [
          "The employment agreement.",
          "An option or RSU grant, read with the plan documents that are provided.",
          "Non-compete, non-solicit, and confidentiality terms.",
          "Any reference to a Section 14 arrangement under the Severance Pay Law.",
          "A call to walk through what the papers say.",
        ],
        excluded: [
          "A claim against the employer.",
          "A tax opinion, including on Section 102.",
          "Immigration or visa filings.",
          "A prediction that a non-compete or other restriction will or will not be enforced.",
        ],
      },
      {
        id: "commercial-redlines",
        lead: true,
        title: "Commercial, SaaS, and vendor redlines",
        summary: "A redline and a plain list of issues on one customer agreement or one vendor agreement.",
        audience: "Startups closing a customer contract or a vendor contract.",
        included: [
          "A redline of one agreement.",
          "A short list of issues, in plain language.",
          "Data-processing terms read next to the commercial terms.",
          "A call, where it is part of the agreed scope.",
        ],
        excluded: [
          "A standing desk for every contract the company signs. Continuity of that kind is the part-time retainer.",
          "A dispute that has already been filed.",
          "Patent prosecution, or an opinion on freedom to operate.",
        ],
      },
      {
        id: "fractional",
        lead: true,
        title: "Fractional in-house counsel",
        summary:
          "Part-time commercial counsel for a seed to Series A company, on a monthly rhythm. Not a full-time seat.",
        audience: "Seed to Series A startups that need a continuing commercial counsel and are not hiring one full time.",
        included: [
          "A monthly rhythm for commercial contracts, routine NDAs, and founder questions.",
          "Continuity, so the next draft is read by the person who read the last one.",
          "Light playbooks drawn from the company’s own papers.",
        ],
        excluded: [
          "Round-the-clock cover, or a substitute for a full legal department.",
          "Litigation.",
          "A specialist regulatory project. That needs its own scope.",
          "Any matter that conflicts with an existing client.",
        ],
      },
      {
        id: "ai-policy",
        lead: false,
        title: "Internal AI use, and a light AI Act read",
        summary: "An employee-use policy and a short gap note. Not a certificate.",
        audience: "Startups whose teams already use AI tools, or that sell into the European Union.",
        included: [
          "An internal policy on how employees may use AI tools, including with confidential information.",
          "A simple inventory of tools and of provider or deployer roles.",
          "A short written gap note. It is a readiness note, not a certificate under the EU AI Act.",
        ],
        excluded: [
          "A conformity assessment, or a statement that the company complies with the AI Act.",
          "Technical testing of a model.",
        ],
      },
      {
        id: "safe-seed",
        lead: false,
        title: "SAFE and seed document review",
        summary: "A reading of the early financing draft in front of the company, and a plain explanation of what it does.",
        audience: "Founders looking at a SAFE, a convertible agreement, or other seed papers.",
        included: [
          "A review of the draft that was actually sent.",
          "A plain explanation of the cap, discount, and similar economics in that draft.",
          "A note of board or signature steps that are visible in the papers.",
        ],
        excluded: [
          "Acting for the investor who leads the round.",
          "Counsel on a late-stage venture round.",
          "Tax structuring.",
        ],
      },
      {
        id: "founders-ip",
        lead: false,
        title: "Founders’ agreement and IP assignment",
        summary: "Papers that put ownership and intellectual property in the company, within an agreed scope.",
        audience: "Founders who have not yet written down ownership, roles, and intellectual property.",
        included: [
          "A founders’ agreement, prepared or reviewed to an agreed scope.",
          "Assignments of intellectual property from the founders.",
          "A reading of contractor papers that are provided, to see whether they assign the work.",
        ],
        excluded: [
          "Forming companies in several countries as one package.",
          "Tax advice on founder shares.",
        ],
      },
      {
        id: "nda-contractor",
        lead: false,
        title: "NDAs and contractor agreements",
        summary: "One confidentiality agreement, or one contractor agreement, drafted or reviewed.",
        audience: "A company that needs a single confidentiality agreement or a single contractor agreement.",
        included: [
          "One non-disclosure agreement, mutual or one way.",
          "One contractor agreement, including confidentiality and intellectual property.",
        ],
        excluded: [
          "An audit of every employment arrangement in the company.",
          "A dispute that has already arisen with the contractor.",
        ],
      },
      {
        id: "israel-nl",
        lead: false,
        title: "Israel–Netherlands and EU setup, on Israeli law",
        summary:
          "Israeli-law guidance for a cross-border setup, and a referral where the question is Dutch law.",
        audience: "Founders moving between Israel and the Netherlands, or the wider European Union.",
        included: [
          "An Israeli-law memo on the setup, within an agreed scope.",
          "Israeli-law documents that fall inside that scope.",
          "A referral to a Dutch advocaat where the question is Dutch law or a Dutch court.",
        ],
        excluded: [
          "Advice given as a Dutch advocaat.",
          "Appearing before a Dutch court.",
          "Forming a Dutch company.",
        ],
      },
    ],
  },
  insights: {
    title: "Insights",
    lede: "Short notes. They are general information about Israeli commercial matters. They are not advice on a document that has not been read, and they are not advice on Dutch law.",
    disclaimer:
      "General information on Israeli law, not legal advice, and not a statement of Dutch law. Jael Tahan is not a Dutch advocaat.",
    posts: [
      {
        slug: "buying-ai-clauses",
        title: "Buying AI: clauses that matter",
        description:
          "Where the risk usually sits when a company buys an AI tool, and which clauses are worth reading slowly.",
        blocks: [
          {
            type: "p",
            text: "The short order form is rarely where the risk sits. It sits in the terms behind it: who may train on the customer’s data, who owns the output, what happens when the model is wrong, and which European or Israeli privacy duties the contract hands to the buyer.",
          },
          {
            type: "p",
            text: "This note is general information for companies buying AI tools. It is written from an Israeli commercial point of view. It is not a review of a particular contract, and it is not advice on Dutch law.",
          },
          { type: "h2", text: "Provider and deployer" },
          {
            type: "p",
            text: "The EU AI Act speaks about providers, who put a system on the market, and deployers, who use it. A customer can be a deployer even when the product feels like ordinary software. Some clauses make the customer solely responsible for lawful use, or for duties that attach to a high-risk system. Part of that responsibility does sit with the user. Part of it is the vendor moving its own duties down the page. The useful reading is the one that separates the two.",
          },
          { type: "h2", text: "Training and improvement" },
          {
            type: "p",
            text: "Look for a right to use prompts, files, outputs, or usage data to train or improve a model. A right to provide and maintain the service is not the same thing as a right to train a model the vendor also sells to others. If training is allowed, the contract should say on what data, for whose model, and whether the customer can refuse.",
          },
          { type: "h2", text: "Outputs and intellectual property" },
          {
            type: "p",
            text: "Check who owns the output, and whether the licence covers the product the company actually ships. If the company will fine-tune a model, read who owns the tuned model and whether it can leave with the customer when the contract ends. Marketing language that says the customer owns its data often says nothing about outputs.",
          },
          { type: "h2", text: "Confidentiality" },
          {
            type: "p",
            text: "A confidentiality clause written for a human adviser does not answer a system that logs prompts or keeps context. The practical questions are whether prompts are separated from training, how long they are kept, who at the vendor can read them, and what notice is given if they leak.",
          },
          { type: "h2", text: "Indemnities and caps" },
          {
            type: "p",
            text: "Read the indemnity beside the limit on liability. An indemnity for intellectual-property claims in the output can be narrowed, sometimes sharply, by the cap in the next clause. This note does not suggest a number. It suggests reading the two clauses as one.",
          },
          { type: "h2", text: "Security, incidents, and logs" },
          {
            type: "p",
            text: "If the buyer has its own security duties to customers or to a regulator, it needs incident notice in the contract and, where that is realistic, access to logs. A right to a polished yearly summary is not the same as notice of an incident that touched the buyer’s prompts.",
          },
          { type: "h2", text: "Personal data" },
          {
            type: "p",
            text: "If prompts or files can contain personal data, a confidentiality clause is not a processing arrangement. For European data, the GDPR questions are roles, instructions, international transfers, and deletion. For Israeli data, read the terms against Amendment 13 to the Privacy Protection Law, which took effect in August 2025. A vendor that says it acts only as a processor should not keep a separate right to train on the same data for its own model.",
          },
          { type: "h2", text: "When the model changes" },
          {
            type: "p",
            text: "Models are updated. A material change can alter accuracy, the use of data, or the feature that was bought. Look for notice before a material change, and for a way out if the change removes something the customer was relying on.",
          },
          { type: "h2", text: "Leaving" },
          {
            type: "p",
            text: "At the end, the buyer will want return or deletion of customer data, prompts, and outputs the vendor holds, and a plain answer on data that was used to train or improve a model. A promise to delete customer content that never mentions training should be read slowly. Silence is not the same thing as a comforting answer, and it is not, by itself, a reason to assume bad faith.",
          },
          { type: "h2", text: "What a review is" },
          {
            type: "p",
            text: "A procurement review of this kind is a marked agreement and a short note of what the terms do. It is not a technical test of the model, and it is not a certificate under the AI Act.",
          },
        ],
      },
      {
        slug: "tech-offer-letters",
        title: "Tech offer letters for olim — what to check",
        description:
          "What to read in an Israeli technology offer, the equity grant, and the restrictions that travel with them.",
        blocks: [
          {
            type: "p",
            text: "An offer from an Israeli technology company often arrives as a bundle: an employment agreement, a grant of options or RSUs, a non-compete, and a confidentiality agreement. For people who have moved, or who are about to, the papers are often in English and the law named in them is Israeli. This note lists what to look at.",
          },
          {
            type: "p",
            text: "It is general information, not a reading of your letter. It is not tax advice and it is not immigration advice.",
          },
          { type: "h2", text: "The employment agreement" },
          {
            type: "p",
            text: "Read the role, the place of work, and which parts of the remuneration are base salary and which are conditional. Notice, probation, and the governing law are short clauses with a long effect. If a foreign company is employing you through an Israeli entity, or the other way around, read who the employer actually is.",
          },
          { type: "h2", text: "Section 14" },
          {
            type: "p",
            text: "Israeli severance has a specific arrangement, often called Section 14 of the Severance Pay Law, under which contributions to a pension arrangement can stand in place of statutory severance when the conditions are met. The contract should say whether that arrangement is being applied, and the pension papers should match the contract. This note cannot say whether a particular arrangement qualifies. That is a reading of the documents, and the pension question itself belongs with a pension or tax adviser.",
          },
          { type: "h2", text: "Options and RSUs" },
          {
            type: "p",
            text: "The offer often states a number of options or RSUs. The plan, the grant notice, and the grant agreement are the documents that define vesting, what happens on departure, the exercise price of options, and how long an employee has to exercise. A sentence in an email about Section 102 is a prompt to ask a question, not a tax opinion. Section 102 is an Israeli tax track for employee equity. Which track applies, and whether the grant was deposited with a trustee, are questions for a tax adviser. A contract review can show where those questions sit. It cannot answer them.",
          },
          { type: "h2", text: "Non-compete and non-solicit" },
          {
            type: "p",
            text: "Israeli courts do not treat every non-compete as automatically valid, and they do not treat every non-compete as automatically void. Duration, place, the interest the employer is protecting, and whether the restricted period is compensated, all depend on the facts. Read the clause you were given. Do not rely on a general remark, including this one, about whether it will be enforced.",
          },
          { type: "h2", text: "Confidentiality and intellectual property" },
          {
            type: "p",
            text: "Most technology contracts assign to the employer the inventions and copyright created in the role. Read the definition. Some drafts reach earlier inventions, work done clearly outside the job, or an open-source project a person already maintains. A confidentiality clause should say how long it lasts, or why it continues, and should leave room for information the person already knew or that becomes public.",
          },
          { type: "h2", text: "What this kind of review is" },
          {
            type: "p",
            text: "It is a reading of the papers received, from the employee’s side, and a conversation about what they say. It is not a lawsuit, not a visa application, and not a negotiation with the employer unless that is separately agreed. If Jael already acts for that company, she will say so, and she will not act for both sides.",
          },
        ],
      },
      {
        slug: "fundraising-hygiene",
        title: "Fundraising document hygiene",
        description:
          "A short discipline for SAFEs, early-round papers, and the intellectual property investors expect to find in the company.",
        blocks: [
          {
            type: "p",
            text: "Early money is often raised on a short document. The problems that become expensive later are ordinary ones: signing a form that was not compared with the last form, promising a right the company cannot give, or finding that the intellectual property is still in a founder’s own name.",
          },
          {
            type: "p",
            text: "This note is general information for Israeli startups. It is not counsel on your round, and it is not Dutch company law.",
          },
          { type: "h2", text: "Name the instrument" },
          {
            type: "p",
            text: "A SAFE, a convertible loan, and a priced round are different promises. Before a discussion of a comma, it should be possible to say which instrument is on the table, which version, and whether it has been changed from the form it started as. Israeli rounds often adapt documents that began in the United States, including documents in the NVCA style. An adaptation is a different document. Read the one that will be signed.",
          },
          {
            type: "p",
            text: "In a public note dated 7 December 2023, while at Herzog, Jael and Yair Geva described the October 2023 updates to the NVCA model documents. An overview of a form is not the form an investor has sent. The overview is linked from the About page.",
          },
          { type: "h2", text: "Economics you can explain aloud" },
          {
            type: "p",
            text: "A cap, a discount, most-favoured treatment, and a pro-rata right each change the round that comes next. A full model is not required for the first conversation. A sentence on what the draft actually does is required. Where a draft stacks several of these, write down how they interact, instead of assuming a summary email was complete.",
          },
          { type: "h2", text: "Intellectual property in the company" },
          {
            type: "p",
            text: "Investors look for a chain from the person who built the product to the company. That chain is an assignment, from founders, employees, and contractors. A conversation, a slide, or a handshake is not the chain. Contractor agreements from before the round are a common gap, especially where someone was engaged personally by a founder rather than by the company.",
          },
          { type: "h2", text: "The same story in every folder" },
          {
            type: "p",
            text: "The cap table, the investment agreement, the board approvals, and any disclosure paper should describe the same round. Names of subsidiaries, the option pool, and outstanding SAFEs should match. This is not a matter of polish. A small inconsistency becomes a condition someone has to satisfy before money arrives.",
          },
          { type: "h2", text: "What this does not replace" },
          {
            type: "p",
            text: "A review of a SAFE or another seed document can explain the draft and mark the Israeli-law points that are visible on its face. It does not replace tax advice on founder equity or on Section 102. It is not an opinion on Dutch company law. Where the structure needs a lawyer admitted in the Netherlands, the honest next step is a referral.",
          },
        ],
      },
    ],
  },
  contact: {
    title: "Contact",
    lede: "Send the document, or a short description of it. Jael will reply on whether she can act, and on what the work would include. If she cannot act, she will say so.",
    timezone:
      "Based in Tel Aviv, on Israel Time. If you are writing from the Netherlands or elsewhere in Europe, say so. A time that overlaps can be arranged.",
    languages: "English, Hebrew, and Dutch.",
    noForm:
      "This page has no form, and the site does not store messages. Contact is through the channels above, once those links are in place. Please do not send confidential papers until it is agreed that Jael will act.",
  },
  privacy: {
    title: "Privacy notice",
    updatedLabel: "Updated",
    blocks: [
      {
        type: "p",
        text: "This notice describes this website only. It is general information about the site. It is not a privacy opinion for a company, and it is not legal advice.",
      },
      { type: "h2", text: "Who publishes the site" },
      { type: "p", text: "Jael Tahan, Tel Aviv, Israel." },
      { type: "h2", text: "What the site is" },
      {
        type: "p",
        text: "The pages are static files, hosted on GitHub Pages. There is no account, no mailing list, and no form that stores what anyone types, because the site does not ask anyone to type into it.",
      },
      { type: "h2", text: "Cookies and analytics" },
      {
        type: "p",
        text: "This version of the site does not use advertising trackers and does not set analytics cookies. It does not sell personal data. It does not carry third-party advertisements.",
      },
      { type: "h2", text: "When you make contact" },
      {
        type: "p",
        text: "Email, WhatsApp, and any scheduling page are run by their own providers. If you use them, that provider receives what you send, and Jael receives it so she can reply. Do not send confidential documents until you and she have agreed that she will act for you.",
      },
      { type: "h2", text: "Hosting" },
      {
        type: "p",
        text: "GitHub Pages may record technical data, such as an IP address, in logs kept under GitHub’s own terms. If the site later moves to a custom domain, that move does not by itself add a database or a form.",
      },
      { type: "h2", text: "How long correspondence is kept" },
      {
        type: "p",
        text: "Messages are kept as needed to answer them and, if an engagement follows, as needed for professional record-keeping.",
      },
      { type: "h2", text: "This notice" },
      {
        type: "p",
        text: "A question about this notice can be sent to the email address on the contact page once that address is published. If the notice changes, the date at the top will change.",
      },
    ],
  },
  notFound: {
    title: "This page is not on the site",
    lede: "The address does not match a page. The site is in English, Hebrew, and Dutch.",
  },
} satisfies SiteCopy;
