// src/data/projects.js
// Home page "category cards" data.
// IMPORTANT: The `title` values MUST match the mapping in src/components/Projects.js
// (TITLE_TO_CATEGORY_KEY) unless you also update that mapping.

const projects = [
  {
    id: 1,
    title: "Data Analysis",
    description:
      "Exploratory data analysis, cleaning, and insight dashboards for business questions.",
    tech: ["Python", "Pandas", "Seaborn", "Excel"],
    link: "https://github.com/yourusername/sales-eda",
    // libraryId field removed (no longer used by UI routing)
  },
  {
    id: 2,
    title: "Data visualization",
    description:
      "Visual storytelling and explainable analytics with charts, dashboards, and reports.",
    tech: ["Matplotlib", "Seaborn", "Power BI", "Tableau"],
    link: "https://github.com/yourusername/news-recs",
  },
  {
    id: 3,
    title: "Data Mining",
    description:
      "Feature engineering, sampling, and classic ML workflows for structured data.",
    tech: ["scikit-learn", "XGBoost", "Pandas"],
    link: "https://github.com/yourusername/churn-model",
  },
  {
    id: 4,
    title: "Basic Machine Learning Models",
    description:
      "Regression, classification, and time series baselines with solid evaluation.",
    tech: ["scikit-learn", "NumPy", "Pandas"],
    link: "https://github.com/yourusername/stock-lstm",
  },
  {
    id: 5,
    title: "Neural Network Models",
    description:
      "CNN/LSTM architectures for images and sequences, with interpretability tooling.",
    tech: ["TensorFlow", "Keras", "PyTorch"],
    link: "https://github.com/yourusername/brain-tumor-detection",
  },
  {
    id: 6,
    title: "Reinforcement Learning Models",
    description:
      "Policy/value learning experiments and environment tooling (in progress).",
    tech: ["Python"],
    link: "https://github.com/yourusername/rl-playground",
  },
];

export default projects;
