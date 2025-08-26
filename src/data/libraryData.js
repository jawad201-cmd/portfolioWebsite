// src/data/libraryData.js
// Single source of truth for the Library page.
// Each project can include `images: [...]` (2–4 URLs). Library.js will render them.

// const ANALYSIS = {
//   ACCIDENT_ANALYSIS: {},
//   AIRLINE_ANALYSIS: {},
//   GROCERY_ANALYSIS: {},
//   WEB_AGENCY_ANALYSIS: {},
//   MYANMAR_SALES_ANALYSIS: {},
//   DIWALI_SALES_AGENCY_ANALYSIS: {},
//   PRODUCT_REVIEW_ANALYSIS: {},
//   SUPERSTORE_SALES_ANALYSIS: {},
// }

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
    { id: "ana-1", ...BASE.SALES_EDA },
    { id: "ana-2", ...BASE.AB_TEST },
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
