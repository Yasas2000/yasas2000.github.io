/* =====================================================================
   EDIT THIS FILE to change anything on your portfolio.
   - Text: change the strings.
   - Images: only your photo and organisation logos are used. Drop the
     files into public/assets/ and keep the paths written here.
   - Links: replace url: "" with the real address.
   - To add an entry: copy an existing { ... } block and edit it.
   - To remove an entry: delete its { ... } block.
   ===================================================================== */

// While true, a missing photo/logo or an empty link shows a dashed
// placeholder so you can see where it goes. Set to false before publishing.
export const SHOW_PLACEHOLDERS = true;

/* ------------------------------ Profile ------------------------------ */
export const profile = {
  name: "Yasas Manujaya Ekanayake",
  shortName: "Yasas Ekanayake",   // navigation bar and script figure
  nativeName: "",      // set to "" to hide the script figure
  greeting: "Hi, I'm,",
  headline: "Yasas Manujaya Ekanayake",
  subtitle: "Lecturer, Software Engineer, Researcher, AI/ML Enthusiast",
  intro:
    "I am a Lecturer in the Department of Computer Science and Engineering at the University of Moratuwa. My research covers AI/ML, Multi Agent Software Systems, Database Security/Optimization and the security and privacy of intelligent systems. I am also interested in the development of resillent and scalable software systems, to solve real world problems with scalability and security.",
  tags: ["AI & Machine Learning", "Intelligent Systems and Multi Agent Systems", "System Security and Cyber Security", "Software Engineering", "Database Security and Optimization"],
  photo: "assets/profile.jpeg",
  cv: "https://drive.google.com/file/d/12zA701fiG-9d_qL-kKGZ_p3vLjrpIQpC/view?usp=drive_link",
  email: "yasas@cse.mrt.ac.lk",
  address: "Department of Computer Science and Engineering, University of Moratuwa, Sri Lanka",
  contactText:
    "I am happy to hear from students and researchers about collaboration, supervision and reviewing. The best way to reach me is by email.",
  links: [
    { label: "Google Scholar", url: "https://scholar.google.com/citations?user=k6oM1N0AAAAJ&hl=en" },
    { label: "GitHub", url: "https://github.com/Yasas2000" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/yasas-manujaya-ekanayaka-a0a962231" },
    // { label: "ORCID", url: "" },
  ],
};

// Top menu. "id" must match a section id on the page.
export const nav = [
  { id: "research", label: "Research" },
  { id: "projects", label: "Projects" },
  { id: "publications", label: "Publications" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "service", label: "Service" },
  { id: "honors", label: "Honors" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
];

/* ------------------------ Research interests ------------------------- */
export const interests = [
  {
    title: "Artificial Intelligence and Machine Learning",
    text: "Designing and evaluating deep learning architectures with a focus on transformer-based models and their deployment in real-world applications.",
  },
  {
    title: "Software System Security and Cyber Security",
    text: "Building intelligent, cyber-resilient systems using machine learning to detect and prevent emerging threats.",
  },
  {
    title: "Intelligent Systems and Multi Agent Systems",
    text: "Leveraging multi-agent architectures and autonomous decision-making to solve complex problems in distributed environments.",
  },
  {
    title: "Database Security and Optimization",
    text: "Optimizing and securing relational and NoSQL databases to balance performance with data confidentiality.",
  },
];

/* ------------------------------ Projects ----------------------------- */
// type: "Research" or "Software" (drives the filter buttons)
// tag:  small status label (optional)
export const projects = [
  {
    type: "Research",
    period: "2026",
    title: "Script and tokenization effects in low-resource LLMs",
    tag: "Supervisor/Co-Author",
    text: "Evaluates 31 open-source language models on Sinhala script versus Romanized Sinhala. Shows that a reported 312-fold performance gap is largely a tokenization artifact, separating tokenizer loss from real model degradation using bits-per-byte.",
    tags: ["Python", "PyTorch", "NLP", "LLM evaluation"],
    links: [
    ],
  },
  {
    type: "Research",
    period: "2026 to present",
    title: "Re-identification risk in de-identified ECG signals",
    tag: "In progress",
    text: "Quantifies how much perturbation different ECG de-identification methods introduce, and how accurate re-identification attacks remain, to find practical thresholds that protect privacy while keeping the signal useful.",
    tags: ["Python", "PyTorch", "Privacy", "Biomedical signals"],
    links: [
    ],
  },
  {
    type: "Research",
    period: "2025 to 2026",
    title: "Personality-Aware Hybrid Sentiment Analysis with Explainable AI for Early Mental Health Risk Screening on Social Media",
    tag: "Author",
    text: "A transformer-based system pairing DistilBERT with cross-attention, adversarial training, LIME explanations and a rule-based component, trained on a custom dataset with MBTI labels.",
    tags: ["DistilBERT", "LIME", "PyTorch", "XAI"],
    links: [
    ],
  },
  {
    type: "Research",
    period: "2024 to 2025",
    title: "Detection System for Online Safety Against Cyber Threats and Social Engineering Attacks (FYP)",
    tag: "Final year project",
    text: "A multi-layered framework that flags manipulation and fraud in chat and audio conversations, by humans or bots, combining DistilBERT with adversarial training and rule-based checks. Led to my ICIIS 2025 paper.",
    tags: ["NLP", "TensorFlow", "Keras", "Security"],
    links: [
      { label: "Paper", url: "https://doi.org/10.1109/iciis69028.2026.11450818" },
    ],
  },
  {
    type: "Software",
    period: "2025",
    title: "AI-powered resume search chatbot",
    text: "Retrieval-augmented generation that lets hiring managers search resumes in plain language, using NVIDIA NeMo Retriever, Llama 3.1 70B, ChromaDB, LangChain and Streamlit.",
    tags: ["RAG", "LangChain", "ChromaDB", "NVIDIA NIM"],
    links: [{ label: "Repository", url: "https://github.com/Yasas2000/resume-chatbot" }],
  },
  {
    type: "Software",
    period: "2025",
    title: "Bus-Ease: route and seat reservation",
    text: "Full-stack platform for searching and booking highway bus trips, with real-time seat updates, Stripe payments and an intelligent route planning algorithm.",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    links: [
      { label: "Live demo", url: "https://bus-ease-frontend.vercel.app/dashboard" },
      { label: "Repository", url: "https://github.com/Yasas2000/BusBookingApp" },
    ],
  },
  {
    type: "Software",
    period: "2024",
    title: "Document processing mediator for WSO2 MI",
    text: "A Java mediator that extracts structured JSON from PDFs and images through an AI vision model, cutting manual processing by 60%.",
    tags: ["Java", "Maven", "WSO2 MI", "Vision API"],
  },
];

/* --------------------------- Publications ---------------------------- */
// Your name is shown in bold wherever it matches profile.name exactly.
export const publications = [
  {
    year: "2025",
    type: "Conference paper",
    title:
      "Hybrid sensing approach for real-time chat behavior detection and classification of social engineering attacks",
    authors: ["Yasas Manujaya Ekanayake", "Lochandaka Ranathunga"],
    venue:
      "2025 IEEE 19th International Conference on Industrial and Information Systems (ICIIS), pp. 19 to 24",
    links: [
      { label: "DOI", url: "https://doi.org/10.1109/iciis69028.2026.11450818" },
      { label: "PDF", url: "https://drive.google.com/file/d/1w5j0-ajiPcKG7oGJjO3towQIbgNPLZV8/view?usp=sharing" },
      { label: "Slides", url: "https://canva.link/jzubzf39r0tqyk0" },
      //{ label: "Code", url: "" },
    ],
  },
];
export const scholarUrl = "https://scholar.google.com/citations?user=k6oM1N0AAAAJ&hl=en";

/* ---------------------------- Experience ----------------------------- */
// logo: organisation logo (optional). tags: small skill labels (optional).
export const experience = [
  {
    period: "Jul 2026 to present",
    title: "Visiting Lecturer",
    org: "University of Moratuwa, BIT (External)",
    orgUrl: "https://uom.lk/",
    logo: "assets/logos/moratuwa.png",
    text: "Design and deliver the lectures and coursework for the Cloud Computing module.",
    tags: ["Cloud Computing", "Teaching"],
  },
  {
    period: "Jun 2026 to present",
    title: "Final Year Project Supervisor",
    org: "Informatics Institute of Technology, School of Computing",
    orgUrl: "https://www.iit.ac.lk/",
    logo: "assets/logos/iit.png",
    text: "Direct final-year undergraduate research projects.",
    tags: ["Supervision", "Research"],
  },
  {
    period: "Nov 2025 to present",
    title: "Lecturer",
    org: "University of Moratuwa, Department of Computer Science and Engineering",
    orgUrl: "https://uom.lk/",
    logo: "assets/logos/moratuwa.png",
    text: "Teach undergraduate courses, take part in collaborative research, and mentor, evaluate and supervise student projects.",
    tags: ["Teaching", "Research", "Mentoring"],
  },
  {
    period: "2024 to 2025",
    title: "Undergraduate Research Thesis",
    org: "University of Moratuwa, Department of Information Technology",
    orgUrl: "https://uom.lk/",
    logo: "assets/logos/moratuwa.png",
    text: "Developed an intelligent detection system to identify and mitigate manipulative behavior and fraudulent activity in real-time conversations. The project targeted social engineering attacks conducted through chat and audio messages by both humans and web bots, leveraging cutting-edge AI to safeguard users.",
    tags: ["NLP", "Explainable AI", "LLM", "DistilBERT", "Rule-based AI"],
  },
  {
    period: "Jan to Jul 2024",
    title: "Software Engineer Intern",
    org: "WSO2",
    orgUrl: "https://wso2.com/",
    logo: "assets/logos/wso2.png",
    text: "Worked with the Micro Integrator and R&D teams on AI-integrated mediators and the MI VS Code extension, and wrote tests and technical documentation.",
    tags: ["Java", "VS Code extension", "AI integration"],
  },
];

/* ----------------------------- Education ----------------------------- */
export const education = [
  {
    period: "2021 to 2025",
    title: "B.Sc. (Hons) in Information Technology",
    org: "University of Moratuwa, Sri Lanka",
    orgUrl: "https://uom.lk/",
    logo: "assets/logos/moratuwa.png",
    text: "Artificial Intelligence, Machine Learning, Software Security, Computer Science, Distributed Systems, Database Management Systems, Software Quality Assurance, Computer Networks, Software Engineering, Mathematics, Statistics",
    tags: ["CGPA 3.82 / 4.20", "First Class Honors", "Dean's List 4X"],
    links: [
      { label: "Transcript", url: "https://drive.google.com/file/d/1XUErvopNrTV_UJp8NPxOT9ThnvV-paHl/view?usp=drive_link" },
    ],
  },
  {
    period: "2019",
    title: "GCE Advanced Level",
    org: "Richmond College, Galle",
    logo: "assets/logos/richmond.png",
    text: "Combined Mathematics, Chemistry, Physics",
    tags: [" A A B", "Z-score 1.7632"],
    links: [
      { label: "Result", url: "https://drive.google.com/file/d/14wBAJVaGvD6eSf8NX0jBnoZBi9NP6GLM/view?usp=drive_link" }
    ],
  },
  {
    period: "June 2026",
    title: "IELTS Academic",
    org: "IDP IELTS",
    logo: "assets/logos/ielts.png",
    text: "",
    tags: ["Overall band 7.5", "CEFR Level C1"],
    links: [{ label: "Test report", url: "https://drive.google.com/file/d/1qXgpKOSJlFl48STTSujpt2pljRYMnS5C/view?usp=drive_link" }],
  },
];

/* --------------------------- Academic service ------------------------ */
export const service = [
  {
    heading: "Reviewing Conference Papers",
    items: [
      { text: "NeurIPS 2026 — Global South AI Track", org: "NeurIPS" },
      { text: "MERCon 2026 — Data Science, AI & Software Engineering Tracks", org: "University of Moratuwa" },
      { text: "ADsCAI 2026 — Applied AI and Data Science for Industry", org: "University of Moratuwa" },
    ],
  },
  {
    heading: "Judging",
    items: [
      { text: "ADsCAI 2026 Poster Presentations", org: "University of Moratuwa" },
      { text: "Final Year Project Poster Presentations 2026", org: "University of Moratuwa" },
    ],
  },
];

/* ---------------------- Honors and activities ------------------------ */
export const honors = [
  { text: "Dean's List, four times (2021 to 2025)", icon: "🏆" },
  { text: "Top 50 of 1,000+ teams, RealHack 4.0 by HackerRank (2023)", icon: "🥇" },
  { text: "Batch Representative, Faculty of IT (2023)", icon: "🎓" },
  { text: "Vice President, Southern Youth Council (2022)", icon: "🤝" },
];

/* ------------------------------- Skills ------------------------------ */
export const skills = [
  { group: "Languages", items: ["Python", "Java", "C", "C++", "JavaScript", "SQL"] },
  { group: "Machine learning", items: ["PyTorch", "Keras", "NLP", "Pandas", "Spark", "FAISS", "Explainable AI"] },
  { group: "Web and databases", items: ["Node.js", "React", "Redux", "Redis", "MongoDB", "MSSQL", "ChromaDB"] },
  { group: "Cloud and tools", items: ["AWS", "Oracle Cloud", "Docker", "Jenkins", "Git", "Spring Boot", "Flutter"] },
  { group: "Human languages", items: ["Sinhala (native)", "English (fluent)", "Tamil (basic)"] },
];

export const certifications = [
  { title: "Building Transformer-Based Natural Language Processing Applications", by: "NVIDIA, 2026", url: "https://learn.nvidia.com/certificates?id=obU2WdOTS1WwCSP5iA9YpQ" },
  { title: "Fundamentals of Accelerated Data Science", by: "NVIDIA, 2026", url: "https://learn.nvidia.com/certificates?id=JlcTkZneTsiPIjQ9yt7iwA" },
  { title: "Building RAG Agents with LLMs", by: "NVIDIA, 2026", url: "https://learn.nvidia.com/certificates?id=-6-D2TkdTLa2lwh0iCPVGA" },
  { title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate", by: "Oracle, 2025", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=EB6BAE17860313D5433263BF93A0CD5DBC228E0D38EED6067A29E3E9B7CA67A5" },
  { title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate", by: "Oracle, 2025", url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1DF70AC391FF604998E181A3487D8A5B20F9659F0E2D6B00BA05C60355EFBC9E" },
  { title: "Supervised Machine Learning: Regression and Classification", by: "DeepLearning.AI, 2024", url: "https://www.coursera.org/account/accomplishments/verify/62DPSFQG4DGX" },
];
