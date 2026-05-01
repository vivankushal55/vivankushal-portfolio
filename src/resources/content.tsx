import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Line, Row, Text } from "@once-ui-system/core";

const person: Person = {
  firstName: "Vivan",
  lastName: "Kushal",
  name: `Vivan Kushal Heneger`,
  role: "MSc Data Science & AI | Data Scientist",
  avatar: "/images/avatar.jpg",
  email: "vivankushal55@gmail.com",
  location: "Europe/London",
  languages: ["English"],
};

const newsletter: Newsletter = {
  display: false,
  title: <>Subscribe to {person.firstName}'s Newsletter</>,
  description: <>Updates on my ML projects and research</>,
};

const social: Social = [
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/vivankushal55",
    essential: true,
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/vivankushal55/",
    essential: true,
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
    essential: true,
  },
];

const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | ML & AI Portfolio`,
  description: `Portfolio of Vivan Kushal Heneger — MSc Data Science & AI student building ML systems for real-world impact`,
  headline: <>Building ML systems that solve real-world problems</>,
  featured: {
    display: true,
    title: (
      <Row gap="12" vertical="center">
        <strong className="ml-4">Believe Housing</strong>{" "}
        <Line background="brand-alpha-strong" vert height="20" />
        <Text marginRight="4" onBackground="brand-medium">
          Live Industry Project — Awaab's Law ML
        </Text>
      </Row>
    ),
    href: "/work/predictive-damp-mould-risk-model",
  },
  subline: (
    <>
    I'm Vivan, an MSc Data Science & AI student at <Text as="span" size="xl" weight="strong">Newcastle University</Text>, building production ML for UK housing compliance, computer vision, and generative AI. <br /> Graduating Sept 2026 — open to graduate roles in the UK.
</>
  ),
};

const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `MSc Data Science & AI student at Newcastle University, building ML systems for real-world impact`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        Vivan is an MSc Data Science & AI student at Newcastle University with a focus on production-ready machine learning, computer vision, and generative AI. His current dissertation with Believe Housing builds an ML pipeline for UK Awaab's Law compliance — predicting damp and mould risk in social housing properties. Before his MSc, he worked as a Data Analyst building BI solutions and ETL pipelines, and is a published researcher (ICGCP-2024).
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "Believe Housing (via Newcastle University)",
        timeframe: "Apr 2026 - Present",
        role: "Data Science Intern — Industry Dissertation",
        achievements: [
          <>
            Building an end-to-end ML pipeline to identify social housing properties at risk of damp and mould — directly supporting compliance with UK Awaab's Law (2023).
          </>,
          <>
            Combining IoT sensor data, asset records, and customer data across thousands of County Durham properties; comparing Logistic Regression, Random Forest, and Gradient Boosting.
          </>,
          <>
            Designing risk tier outputs (Low / Medium / High) for non-technical housing officers, enabling proactive inspections before tenant health is affected.
          </>,
        ],
        images: [],
      },
      {
        company: "Spear Insights Technologies",
        timeframe: "Jan 2025 - Aug 2025",
        role: "Data Analyst",
        achievements: [
          <>
            Designed and built end-to-end Business Intelligence solutions using SQL and Power BI, enabling data-driven decision-making across business units.
          </>,
          <>
            Automated ETL pipelines and built interactive dashboards, reducing manual reporting effort and improving stakeholder access to data.
          </>,
          <>
            Translated business requirements into actionable insights for non-technical stakeholders.
          </>,
        ],
        images: [],
      },
      {
        company: "Alnitek Solutions",
        timeframe: "Aug 2023 - Sep 2023",
        role: "NLP Intern",
        achievements: [
          <>
            Built a complete Twitter Sentiment Analysis pipeline — API-based data collection, text preprocessing, TF-IDF feature engineering, and supervised classification — delivering automated sentiment labelling at scale.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true,
    title: "Education",
    institutions: [
      {
        name: "Newcastle University, UK",
        description: <>MSc Data Science & AI — Sep 2025 to Sep 2026 (Expected 2:1 or above). Modules: Machine Learning, Deep Learning, Advanced AI, Generative AI for Business, Data Visualisation, Image Processing, Statistics, Data Science in the Wild.</>,
      },
      {
        name: "Sapthagiri College of Engineering, Bengaluru",
        description: <>BE Computer Science Engineering — 2020 to 2024. CGPA: 7.9 (First Class). Published at ICGCP-2024: Cardiovascular Disease Risk Prediction Using Machine Learning.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Machine Learning & Deep Learning",
        description: (
          <>End-to-end ML pipelines using PyTorch, Scikit-learn, and TensorFlow. Hands-on with Random Forest, Gradient Boosting, SVM, XGBoost, CNNs, LSTMs, and Transformers.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
          { name: "PyTorch", icon: "pytorch" },
        ],
        images: [],
      },
      {
        title: "Computer Vision",
        description: (
          <>Built progressive segmentation pipelines (U-Net → DeepLabV3+ → SegFormer ViT) on FoodSeg103, surpassing published benchmarks. Experience with EfficientNet, ResNet, CLIP, and OpenCV.</>
        ),
        tags: [
          { name: "PyTorch", icon: "pytorch" },
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Generative AI & NLP",
        description: (
          <>Production-grade Gemini-powered storytelling app with safety guardrails. Fine-tuned Sentence-Transformers achieving 85.2% test accuracy on multimodal idiomaticity (2.5x baseline).</>
        ),
        tags: [
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
      {
        title: "Data Engineering & BI",
        description: (
          <>SQL pipelines, ETL automation, and Power BI (DAX) dashboards for cross-functional stakeholders. 8 months of production experience as a Data Analyst.</>
        ),
        tags: [
          { name: "Python", icon: "python" },
        ],
        images: [],
      },
    ],
  },
};

const blog: Blog = {
  display: false,
  path: "/blog",
  label: "Blog",
  title: "Notes on ML, AI, and applied data science",
  description: `Technical writing by ${person.name} on machine learning, computer vision, and applied AI`,
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `ML, computer vision, and generative AI projects by ${person.name}`,
};

const gallery: Gallery = {
  display: false,
  path: "/gallery",
  label: "Gallery",
  title: `Gallery – ${person.name}`,
  description: `Project visualisations and outputs by ${person.name}`,
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
