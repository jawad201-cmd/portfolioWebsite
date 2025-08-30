// src/data/libraryData.js
// Single source of truth for the Library page.
// Each project can include `images: [...]` (2–4 URLs). Library.js will render them.

// title: "0",
// subtitle: "0",
// tech: ["Python", "Pandas", "Seaborn"],
// metrics: "0",
// description:
//   "0",
// highlights: [
//   "0",
//   "0",
// ],
// github: "https://github.com/yourusername/sales-eda",
// images: [
//   "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
//   "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
//   "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
// ],

const ANALYSIS = {
  ACCIDENT_ANALYSIS: {
    title: "Big Data Analysis of US Vehicle Accident Dataset",
    subtitle: "Analyzed multi-decade accident records to uncover trends and road safety insights",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Comprehensive analysis of 1975–2021 FARS dataset from authentic US agency",
    description:
      "The project utilized Excel, Python, and Pandas to analyze a US vehicle accident dataset from 1975 to 2021, revealing key trends and insights related to road safety. Data was sourced directly from the official Fatality Analysis Reporting System (FARS). The dataset included accident details such as damage location, number of injured passengers, car model, state of accident, and time of incident. The investigation aimed to provide a comprehensive understanding of the factors influencing the frequency and severity of accidents in the US.",
    highlights: [
      "Downloaded, validated, and processed official FARS dataset",
      "Identified key accident trends and factors affecting severity",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  AIRLINE_ANALYSIS: {
    title: "Excel Data Analysis of Airline Dataset",
    subtitle: "Visualized airline data with pivot tables, graphs, and scenario-driven insights",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Applied pivot tables, charts, and what-if analysis for predictive insights",
    description:
      "In this Excel project, various graphs, pivot tables, and analyses of the airline dataset were created. Entities such as cabins, review scores, and cabin services were used to design pivot tables and conduct what-if analyses. Two types of what-if analysis — scenario analysis and sensitivity analysis — were carried out to draw conclusions from the data. These studies provided predictive insights into airline service and performance patterns.",
    highlights: [
      "Built pivot tables and charts from key airline service entities",
      "Conducted scenario and sensitivity analysis for what-if insights",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  GROCERY_ANALYSIS: {
    title: "Excel Data Analysis of Grocery Bills",
    subtitle: "Modeled store–product relationships and customer decision patterns with ERD and Decision Tree",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Built ERD and decision tree with supporting graphs for data-driven insights",
    description:
      "This Excel project illustrates the decision tree, diagram, and graphs from the grocery bills dataset. The graphs and entity relationship diagram (ERD) were created using entities such as store descriptions, product prices, and product details. The project involved designing an ERD to visualize data relationships, including one-to-many relationships between stores and products, and building a Decision Tree to predict customer purchase decisions.",
    highlights: [
      "Designed ERD to map store–product relationships",
      "Built Decision Tree to analyze and predict customer decisions",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  WEB_AGENCY_ANALYSIS: {
    title: "Web Agency Financial Sheet Analysis (Excel Analysis)",
    subtitle: "Automated financial KPI tracking and reporting with Excel VBA and pivot tables",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Developed responsive financial sheets for profitability insights",
    description:
      "In this Excel project, VBA, Excel formulas, and pivot tables were used to analyze a web agency’s financial dataset. Entities such as net revenue, gross profit, and COGs were structured into pivot tables for deeper insights. Excel VBA and formulas were applied to build a responsive sheet capable of automatically calculating KPIs including Total COGs, Net Revenue, and Total Investment. These KPIs provided a clear view of agency performance and profitability.",
    highlights: [
      "Built pivot tables for financial metrics (Net Revenue, Gross Profit, COGs)",
      "Automated KPI calculations with VBA and formulas for decision-making",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  MYANMAR_SALES_ANALYSIS: {
    title: "EDA Analysis of Myanmar Store Sales",
    subtitle: "Explored multi-city retail sales data to uncover patterns in customer behavior and product demand",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Comprehensive EDA on Super Store sales data (Jan–Mar 2019)",
    description:
      "A comprehensive Exploratory Data Analysis (EDA) was conducted on Super Store sales data across various cities in Myanmar for January, February, and March 2019. The analysis explored total sales, customer gender distribution, payment preferences, customer ratings, and city-wise performance. Visualizations were employed throughout to highlight patterns and insights. A key finding showed that the Food and Beverages category consistently outperformed other product categories, emphasizing strong customer preference and market demand.",
    highlights: [
      "Analyzed sales by city, gender, and payment method",
      "Identified Food & Beverages as top-performing product category",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  DIWALI_SALES_ANALYSIS: {
    title: "EDA of Diwali Sales Dataset",
    subtitle: "Cleaned and visualized customer shopping behavior to reveal demographic insights",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Uncovered purchasing patterns across age, gender, and occupation groups",
    description:
      "This project involved cleaning and analyzing a Diwali sales dataset using Python and its libraries. Data preparation and visualization highlighted trends across entities such as age group, marital status, and occupation. Insights were drawn from exploratory visualizations, uncovering behavioral patterns in shopping activity. One major finding revealed that women shop approximately 2.3 times more than men, providing clear signals for targeted marketing strategies.",
    highlights: [
      "Performed data cleaning and preparation for sales analysis",
      "Identified demographic and gender-based shopping behavior patterns",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  PRODUCT_REVIEW_ANALYSIS: {
    title: "Amazon Product Reviews Data Cleaning & Analysis",
    subtitle: "Transformed raw Amazon review data into structured insights for sentiment and product analysis",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Processed 660 customer reviews to improve data quality and analytical value",
    description:
      "This project involved analyzing an Amazon product reviews dataset consisting of 660 entries. The raw dataset (Pre-Pred) contained fields such as date, author, rating, variation, review title, and location. Significant preprocessing steps were performed in Python to clean and standardize the dataset. Examples include converting boolean values (Verified, Helpful) into consistent categorical forms, mapping encoded values (e.g., flavor names as 0/1) into descriptive labels (e.g., Cheese, Bacon), and ensuring uniformity across attributes like size and variation. After preprocessing, the structured dataset (Post-Processed) enabled exploratory data analysis (EDA). The Jupyter notebooks demonstrated insights into product variations, customer sentiment distribution, and review authenticity, highlighting how data transformation can enhance downstream analysis and interpretation.",
    highlights: [
      "Converted and standardized raw categorical/boolean attributes for consistency",
      "Mapped encoded product attributes (e.g., flavor names) into meaningful labels",
      "Produced a clean dataset suitable for sentiment and product trend analysis",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  SUPERSTORE_SALES_ANALYSIS: {
    title: "EDA Analysis of Super Store Sales Data",
    subtitle: "Uncovered sales, profit, and category-level trends across U.S. states",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Analyzed subcategories, shipping modes, sales, and profit margins",
    description:
      "A thorough Exploratory Data Analysis (EDA) was conducted on Super Store sales data across various U.S. states, following a data-cleaning phase to ensure accuracy and consistency. Entities such as subcategories, categories, shipping modes, sales figures, and profit margins were analyzed to highlight performance trends. Visualizations were used extensively to reveal anomalies, relationships, and market insights. A key finding showed that Washington, D.C. recorded the highest sales and profits, signifying a strong market presence in that region.",
    highlights: [
      "Cleaned and prepared dataset for state-level sales analysis",
      "Identified Washington, D.C. as the top-performing state in sales & profits",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
}

// const VISUALIZATION = {
//   ACCIDENT_VIS: {},
//   AIRLINE_VIS: {},
//   DIWALI_SALES_AGENCY_VIS: {},
//   EMPLOYEE_VIS: {},
//   GROCERY_VIS: {},
//   MYANMAR_SALES_VIS: {},
//   SHOPPING_TREND_VIS: {},
//   SUPERSTORE_SALES_VIS: {},
//   WEB_AGENCY_VIS: {},
// }

// const MINING ={
//   CLUSTERING_PROJECT: {},
//   SVM_PROJECT: {},
//   IRIS_CLASSIFICATION_PROJECT: {},
//   WEATHER_HMM_PROJECT: {},
// }

// const MACHINE_LEARNING = {
//   AMAZON_REVIEW_MODEL: {},
//   PRODUCT_REVIEW_MODEL: {},
//   MOVIE_RATING_MODEL: {},
//   TITANIC_SURVIVAL_MODEL: {},
// }

// const NUERAL_NETWORK = {
//   CLOTHING_NN: {},
//   DOGS_CATS_CNN: {},
// }

// const REINFORCEMENT_LEARNING = {

// }

const BASE = {
  SALES_EDA: {
    title: "Sales Dashboard — Exploratory Data Analysis",
    subtitle: "EDA on retail dataset with actionable insights",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Reduced reporting time by 60% with reusable notebooks",
    description:
      "Performed end-to-end EDA on multi-year retail transactions. Cleaned data, engineered seasonality features, and built an insights deck highlighting growth drivers and dead inventory.",
    highlights: [
      "Automated cleaning & outlier detection",
      "Cohort & RFM segmentation for customer value",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },

  AB_TEST: {
    title: "A/B Test Analyzer",
    subtitle: "Stats toolkit to evaluate online experiments",
    tech: ["Python", "SciPy", "Matplotlib"],
    metrics: "Includes power analysis and sequential testing helpers",
    description:
      "CLI + notebook utilities for designing and evaluating A/B tests (t-test, U-test, Bayesian). Visualization helpers and effect-size reporting included.",
    highlights: ["Power & sample size calculator", "Multiple-testing corrections"],
    github: "https://github.com/yourusername/ab-test-analyzer",
    images: [
      "https://images.unsplash.com/photo-1556157381-9713d66a5b83?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1400&q=60",
    ],
  },

  CHURN_MODEL: {
    title: "Churn Prediction",
    subtitle: "Supervised learning on telecom churn",
    tech: ["Python", "scikit-learn", "XGBoost"],
    metrics: "ROC-AUC 0.89; SHAP-based explainability",
    description:
      "Built a churn model with feature pipelines, class-imbalance handling, and calibrated probabilities. Delivered SHAP insights to guide retention campaigns.",
    highlights: ["Pipeline + GridSearchCV", "Model cards & drift checks"],
    github: "https://github.com/yourusername/churn-model",
    images: [
      "https://images.unsplash.com/photo-1551281044-8b89a2b51e97?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?auto=format&fit=crop&w=1400&q=60",
    ],
  },

  RECSYS_CONTENT: {
    title: "Recommendation System (Content-Based)",
    subtitle: "TF-IDF + cosine similarity for news",
    tech: ["Python", "scikit-learn", "FastAPI"],
    metrics: "p95 latency < 60ms on CPU",
    description:
      "Content-based recommender with TF-IDF vectors and cosine similarity served via FastAPI. Includes caching and evaluation notebooks.",
    highlights: ["Deployable API with docs", "Offline metrics & sampling"],
    github: "https://github.com/yourusername/news-recs",
    images: [
      "https://images.unsplash.com/photo-1518779578993-ec3579fee39f?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=60",
    ],
  },

  CNN_BRAIN_TUMOR: {
    title: "Brain Tumor Detection (CNN)",
    subtitle: "Medical imaging classification",
    tech: ["TensorFlow", "Keras", "OpenCV"],
    metrics: "Test accuracy 92% on curated dataset",
    description:
      "U-Net-style pre-processing, data augmentation, and a compact CNN tuned with early stopping. Includes Grad-CAM for interpretability.",
    highlights: ["Augmentations & class balancing", "Grad-CAM visualizations"],
    github: "https://github.com/yourusername/brain-tumor-detection",
    images: [
      "https://images.unsplash.com/photo-1581091870622-7e0cdfbb6792?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1581093588401-16b1d2e8d9b3?auto=format&fit=crop&w=1400&q=60",
    ],
  },

  LSTM_STOCK: {
    title: "Stock Price Prediction (LSTM)",
    subtitle: "Sequence modeling for closing prices",
    tech: ["PyTorch", "LSTM", "NumPy"],
    metrics: "MAPE 3.8% on rolling window",
    description:
      "Built an LSTM with sliding windows, scaling, and walk-forward validation. Baselines with ARIMA and Prophet for comparison.",
    highlights: ["Walk-forward CV", "Baseline parity & error bands"],
    github: "https://github.com/yourusername/stock-lstm",
    images: [
      "https://images.unsplash.com/photo-1549421263-865f9c07db4a?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?auto=format&fit=crop&w=1400&q=60",
    ],
  },

  // (Optional) A simple RL placeholder if you add RL-specific work later
  RL_CARTPOLE: {
    title: "CartPole Agent (DQN)",
    subtitle: "Value-based RL on classic control",
    tech: ["Python", "PyTorch", "Gymnasium"],
    metrics: "Solves CartPole in < 200 episodes",
    description:
      "Implemented a DQN agent with replay buffer and target network. Includes epsilon-greedy scheduling and learning-rate warmup.",
    highlights: ["Priority replay (optional)", "TensorBoard logging"],
    github: "https://github.com/yourusername/rl-cartpole",
    images: [
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=60",
    ],
  },
};

// Category buckets. If a project appears in multiple categories but needs
// different screenshots, override `images` where you spread it.
const data = {
  analysis: [
    { id: "ana-1", ...ANALYSIS.ACCIDENT_ANALYSIS },
    { id: "ana-2", ...ANALYSIS.AIRLINE_ANALYSIS },
    { id: "ana-3", ...ANALYSIS.GROCERY_ANALYSIS },
    { id: "ana-4", ...ANALYSIS.WEB_AGENCY_ANALYSIS },
    { id: "ana-5", ...ANALYSIS.MYANMAR_SALES_ANALYSIS },
    { id: "ana-6", ...ANALYSIS.DIWALI_SALES_ANALYSIS },
    { id: "ana-7", ...ANALYSIS.PRODUCT_REVIEW_ANALYSIS },
    { id: "ana-8", ...ANALYSIS.SUPERSTORE_SALES_ANALYSIS },
  ],

  visualization: [
    { id: "vs-1", ...BASE.CHURN_MODEL },
    { id: "vs-2", ...BASE.RECSYS_CONTENT },
  ],

  mining: [
    { id: "dm-1", ...BASE.CHURN_MODEL },
    { id: "dm-2", ...BASE.RECSYS_CONTENT },
  ],

  ml: [
    { id: "ml-1", ...BASE.CNN_BRAIN_TUMOR },
    { id: "ml-2", ...BASE.LSTM_STOCK },
  ],

  nn: [
    // Example override: different screenshots for the same base project
    {
      id: "nn-1",
      ...BASE.CNN_BRAIN_TUMOR,
      images: [
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=1400&q=60",
        "https://images.unsplash.com/photo-1581092795360-cd5c6a8aeb56?auto=format&fit=crop&w=1400&q=60",
      ],
    },
    { id: "nn-2", ...BASE.LSTM_STOCK },
  ],

  rl: [
    { id: "rl-1", ...BASE.RL_CARTPOLE },
    { id: "rl-2", ...BASE.LSTM_STOCK },
  ],
};

export default data;
