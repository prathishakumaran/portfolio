export const portfolioData = {
  personal: {
    name: "K. Prathisha",
    headline: "Data Analyst | Business Intelligence | Power BI | SQL | Python",
    location: "Krishnagiri, Tamil Nadu",
    email: "prathishakumaran15@gmail.com",
    phone: "7010718874",
    linkedin: "https://www.linkedin.com/in/prathisha-kumaran-k-b529562a0",
    github: "https://github.com/prathishakumaran",
  },
  hero: {
    valueStatement: "I turn data into clear insights and practical business solutions using analytics, visualization, and business intelligence tools.",
    supportingText: "I enjoy analyzing data, building interactive dashboards, solving analytical problems, and finding meaningful patterns that support better decisions.",
  },
  about: `I'm K. Prathisha, a BCA graduate passionate about Data Analytics and Business Intelligence. I enjoy working with data, building interactive dashboards, solving analytical problems, and turning data into meaningful insights.

I have hands-on experience with SQL, Python, Pandas, Power BI, DAX, and Domo, along with exposure to Generative AI and AI-driven applications.

I'm looking to grow as a Data Analyst / BI professional and contribute to data-driven solutions that create real business value.`,
  skills: [
    {
      category: "Programming & Data Analysis",
      items: ["Python", "Pandas"],
    },
    {
      category: "Database",
      items: ["SQL"],
    },
    {
      category: "BI & Visualization",
      items: ["Power BI", "DAX", "Domo", "Plotly"],
    },
    {
      category: "Domo",
      items: ["Domo Connectors", "Magic ETL", "Cards"],
    },
    {
      category: "AI & Data Applications",
      items: ["Generative AI", "Large Language Models (LLMs)", "AI Agents", "RAG / Vector Store"],
    },
  ],
  experience: [
    {
      role: "Data Analyst Intern",
      company: "GWC.Data.AI",
      duration: "July 2026 – October 2026",
      details: [
        "Worked on data analysis, automation, and visualization using Python, Pandas, SQL, Power BI, DAX, and Domo.",
        "Performed data cleaning, transformation, and analysis to prepare datasets for practical business use cases.",
        "Developed dashboards and analytical solutions to present meaningful insights.",
        "Used Domo Connectors, Magic ETL, and Cards for data integration, transformation, and visualization.",
        "Completed hands-on Domo certification/exploration activities.",
      ],
    },
  ],
  projects: [
    {
      id: "hr-analysis",
      title: "HR Analysis Automation & Visualization",
      tech: ["Python", "Pandas", "Streamlit", "Data Analysis", "Visualization"],
      description: "Developed an HR analytics application using Python and Pandas for employee data analysis, with automated HR report generation, attrition-risk alerts, interactive visualizations, and CSV export.",
      features: [
        "Employee data analysis",
        "Automated HR report generation",
        "Attrition-risk alerts",
        "Interactive visualizations",
        "CSV export",
        "Role-based access control",
        "User management",
        "Department-based access",
        "Audit logging",
        "HR AI assistant for HR-related queries and visualizations"
      ],
      contribution: "Developed an HR analytics application using Python and Pandas for employee data analysis, with automated HR report generation, attrition-risk alerts, interactive visualizations, and CSV export.",
      github: "https://github.com/prathishakumaran/hr-analysis-agent",
      image: "/hr_dashboard.jpg"
    },
    {
      id: "medical-ai",
      title: "Medical Agent AI",
      tech: ["Python", "Pandas", "Streamlit", "AI/LLM", "Plotly", "RAG / Vector Store"],
      description: "Developed an AI-powered application for patient data analysis, loading and validating CSV/Excel datasets with Pandas and building an interactive dashboard with KPIs.",
      features: [
        "Patient data analysis",
        "CSV/Excel dataset validation",
        "Interactive KPIs",
        "Age, gender, blood group and medical condition filters",
        "Plotly visualizations",
        "Patient-level analysis",
        "AI-generated non-diagnostic health summaries",
        "Conversational AI assistant",
        "PDF medical document upload",
        "Knowledge chunking",
        "Vector-store based retrieval"
      ],
      contribution: "Developed an AI-powered application for patient data analysis, loading and validating CSV/Excel datasets with Pandas and building an interactive dashboard with KPIs.",
      disclaimer: "AI health summaries are non-diagnostic. This application does not provide medical diagnosis.",
      image: "/medical_dashboard.jpg"
    },
    {
      id: "aerovista",
      title: "AeroVista Dashboard",
      tech: ["Power BI", "DAX", "Data Modeling", "Data Visualization"],
      description: "Developed an interactive Power BI dashboard with KPI cards and business-focused visualizations, applying data modeling concepts.",
      features: [
        "KPI cards",
        "DAX calculated measures",
        "Data modeling",
        "Slicers",
        "Filters",
        "Drill-down",
        "Interactive business analysis"
      ],
      contribution: "Developed an interactive Power BI dashboard with KPI cards and business-focused visualizations, applying data modeling concepts.",
      image: "/aerovista_dashboard.png"
    },
    {
      id: "digital-marketing",
      title: "Digital Marketing Dashboard",
      tech: ["Domo", "Domo Connectors", "Magic ETL", "Cards", "Data Visualization"],
      description: "Built a Digital Marketing Dashboard in Domo following the workflow: Data Integration → Data Transformation → Visualization → Dashboard",
      features: [
        "Domo Connectors",
        "Data integration",
        "Magic ETL transformations",
        "Domo Cards",
        "KPI analysis",
        "Marketing performance analysis",
        "Campaign analysis",
        "Platform analysis",
        "Conversion analysis",
        "Revenue analysis",
        "Device analysis",
        "Campaign drill path / drill-through"
      ],
      dashboardIncludes: [
        "KPI Cards",
        "Marketing trends",
        "Revenue by platform",
        "Campaign performance",
        "Top campaign analysis",
        "Spend vs revenue analysis",
        "Device performance",
        "Drill-through from campaign performance to detailed records"
      ],
      contribution: "Built a Digital Marketing Dashboard in Domo following the workflow: Data Integration → Data Transformation → Visualization → Dashboard",
      showWorkflow: true,
      image: "/marketing_dashboard.png"
    },
  ],
  certifications: [
    {
      title: "Generative AI: Introduction and Applications",
      issuer: "IBM via Coursera",
      date: "April 2026",
    },
    {
      title: "22 Google Cloud Generative AI Skill Badges",
      issuer: "Naan Mudhalvan",
      details: "Areas: Generative AI, LLMs, Responsible AI, MLOps, Vertex AI Studio, Transformer Models, Attention Mechanism, Image Generation, Vector Search, Prompt Design",
    },
    {
      title: "Domo Hands-on Certification / Exploration",
      issuer: "Domo",
      details: "Domo Connectors, Magic ETL, Cards",
    },
  ],
  education: [
    {
      degree: "Bachelor of Computer Applications (BCA)",
      year: "2026",
      institution: "Adhiyaman Arts & Science College for Women, Salem",
      affiliation: "Periyar University, Salem",
      aggregate: "79%",
    },
    {
      degree: "HSC",
      year: "2023",
      institution: "National Matriculation Higher Secondary School",
    },
    {
      degree: "SSLC",
      year: "2021",
      institution: "National Matriculation School",
    },
  ],
};
