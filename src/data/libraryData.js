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

//===================================================================================================================================
const VISUALIZATION = {
  ACCIDENT_VIS: {
    title: "Data Visualization of US Vehicle Accident Dataset",
    subtitle: "Visualized multi-decade accident records to uncover trends and road safety insights",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    metrics: "Comprehensive visualization of 1975–2021 FARS dataset from authentic US agency",
    description:
      "The project focused on visualizing a US vehicle accident dataset spanning from 1975 to 2021 to uncover trends and provide actionable road safety insights. Using Python, Pandas, and powerful visualization libraries like Matplotlib and Seaborn, the data was transformed into interactive visualizations that made complex accident data more accessible. The dataset, sourced directly from the official Fatality Analysis Reporting System (FARS), included accident details such as damage location, number of injured passengers, car model, state of accident, and time of incident. The goal was to visually present patterns and correlations to enhance the understanding of accident frequency, severity, and road safety factors.",
    highlights: [
      "Visualized accident trends using line charts, bar graphs, and heatmaps",
      "Created interactive dashboards to explore the relationship between factors like location, time, and accident severity",
      "Utilized color-coding and overlays to highlight high-risk areas and peak accident times",
      "Employed time-series visualizations to track accident trends over multiple decades",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  AIRLINE_VIS: {
    title: "Data Visualization of Airline Dataset",
    subtitle: "Visualized airline data with interactive dashboards, charts, and scenario-driven insights",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    metrics: "Applied interactive visualizations, charts, and predictive insights to explore airline data",
    description:
      "This project focused on visualizing the airline dataset using Python and data visualization libraries like Matplotlib and Seaborn. Through various interactive charts, graphs, and dashboards, the data was presented in a visually compelling way, highlighting key metrics such as cabin classes, review scores, and service quality. Scenario-driven insights were drawn from visual trends, providing a deeper understanding of airline service patterns and performance. The goal was to use data visualization to facilitate quick insights into airline operations and performance, with an emphasis on accessibility and predictive patterns.",
    highlights: [
      "Created interactive dashboards to explore cabin services and review scores",
      "Visualized key airline service metrics using bar charts, line graphs, and heatmaps",
      "Developed scenario-based visualizations to highlight performance trends and predictive insights",
      "Used Seaborn to generate insightful visual correlations between service variables",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  DIWALI_SALES_AGENCY_VIS: {
    title: "Data Visualization of Diwali Sales Dataset",
    subtitle: "Visualized customer shopping behavior to uncover demographic insights",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Unveiled purchasing patterns across age, gender, and occupation groups through interactive visualizations",
    description:
      "This project focused on visualizing a Diwali sales dataset to reveal insights into customer shopping behavior. Using Python and popular visualization libraries like Matplotlib and Seaborn, various charts and graphs were created to highlight trends in demographics such as age group, marital status, and occupation. The data visualization emphasized behavioral patterns in shopping activity, and one key finding showed that women shop approximately 2.3 times more than men, offering valuable insights for targeted marketing strategies. Interactive dashboards were designed to explore these insights in an easily digestible format.",
    highlights: [
      "Cleaned and visualized Diwali sales data using Python and visualization tools",
      "Created interactive charts to analyze shopping trends by age, gender, and occupation",
      "Highlighted purchasing patterns, with a focus on gender-based shopping behavior",
      "Designed visual reports to support targeted marketing strategies",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  EMPLOYEE_VIS: {
    title: "Tableau Dashboard for Employee Training Performance",
    subtitle: "Visualized department-wise training activity, costs, and performance metrics using interactive Tableau dashboards",
    tech: ["Python", "Pandas", "Seaborn", "Tableau"],
    metrics: "Created multi-chart visual dashboards analyzing training types, departmental participation, and cost distribution",
    description:
      "This project focuses on designing an interactive Tableau dashboard to analyze employee training performance across different departments. Multiple data entities—including training types, departments, training duration, employee participation, and training cost—were used to build meaningful visual insights. A variety of chart types were incorporated, such as bar charts, pie charts, heatmaps, and trend lines, enabling a comprehensive understanding of training behavior across the organization. The visual layout was designed to emphasize patterns in training frequency, cost allocation, and departmental engagement. One key insight revealed that the IT department participates in training programs more than any other department, highlighting its strong focus on skill development.",
    highlights: [
      "Built an interactive Tableau dashboard for employee training analytics",
      "Visualized metrics such as training type, department involvement, and training cost",
      "Used multiple chart types to maximize interpretability and insight extraction",
      "Identified IT as the department with the highest training participation",
      "Designed a clean, insight-driven layout for HR and management decision-making",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  GROCERY_VIS: {
    title: "Data Visualization of Grocery Bills Dataset",
    subtitle: "Visualized store-product relationships and customer decision patterns using ERD and Decision Tree",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Created visualizations with ERD and decision tree for actionable data insights",
    description:
      "This project involved visualizing a grocery bills dataset to explore store–product relationships and customer decision patterns. Using Python and visualization tools like Matplotlib and Seaborn, an Entity Relationship Diagram (ERD) was created to map one-to-many relationships between stores and products. A Decision Tree was visualized to analyze and predict customer purchasing behavior. The project also utilized graphs to support these visualizations, offering insights into how store descriptions, product prices, and product details influence customer decisions. The goal was to use data visualizations to derive actionable insights and facilitate data-driven decision-making.",
    highlights: [
      "Designed an ERD to visually represent store-product relationships",
      "Created a Decision Tree visualization to predict customer purchase decisions",
      "Developed graphs and charts to support decision-making processes",
      "Applied Seaborn and Matplotlib for clear, intuitive visual insights into the data",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  MYANMAR_SALES_VIS: {
    title: "Data Visualization of Myanmar Store Sales",
    subtitle: "Visualized multi-city retail sales data to uncover patterns in customer behavior and product demand",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Comprehensive visual analysis of Super Store sales data (Jan to Mar 2019)",
    description:
      "This project focused on visualizing retail sales data from Super Store across multiple cities in Myanmar for January to March 2019. Using Python and visualization tools like Matplotlib and Seaborn, various charts and graphs were created to explore total sales, gender distribution, payment preferences, customer ratings, and city-wise performance. Visualizations were key in uncovering customer behavior patterns and product demand insights. A major finding highlighted the Food & Beverages category as the top-performing product segment, reflecting strong market demand and customer preference. The project utilized interactive dashboards and visual reports to provide a clear and actionable understanding of the sales data.",
    highlights: [
      "Created visualizations to analyze sales performance by city, gender, and payment method",
      "Identified Food & Beverages as the top-performing product category through interactive charts",
      "Developed time-series visualizations to track sales trends over the three months",
      "Utilized Seaborn and Matplotlib to create insightful heatmaps and bar graphs for data exploration",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  SHOPPING_TREND_VIS: {
    title: "Data Visualization of US Clothing Store Shopping Trends",
    subtitle: "Visualized shopping trends to uncover customer preferences and purchasing patterns",
    tech: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    metrics: "Created a comprehensive dashboard showcasing customer demographics and purchase behavior",
    description:
      "This project focused on visualizing shopping trends at a US clothing store, with a particular emphasis on customer ratings, product sizes, categories, and payment preferences. Using Python and data visualization libraries like Matplotlib and Seaborn, an interactive dashboard was created to provide insights into customer demographics such as age and gender. The dashboard also showcased payment preferences, helping to understand the broader shopping behavior. Various types of graphs, including bar charts, pie charts, and heatmaps, were used to highlight key data points. One notable insight revealed that Olive was the most frequently purchased color, illustrating customer preferences for certain styles and colors.",
    highlights: [
      "Created an interactive dashboard to visualize shopping trends by age, gender, and payment method",
      "Analyzed ratings, product size, and category preferences using various types of graphs",
      "Unveiled key insights such as the popularity of the color Olive in clothing purchases",
      "Utilized dynamic visualizations to help uncover broader customer behavior patterns and preferences",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  SUPERSTORE_SALES_VIS: {
    title: "Data Visualization of Super Store Sales Data",
    subtitle: "Visualized sales, profit, and category-level trends across U.S. states",
    tech: ["Python", "Pandas", "Seaborn"],
    metrics: "Created dynamic visualizations for sales, profit margins, and category performance across states",
    description:
      "This project involved visualizing Super Store sales data from various U.S. states to uncover key trends in sales, profit margins, and product categories. After a thorough data-cleaning phase to ensure data accuracy and consistency, the project utilized Python and visualization libraries like Matplotlib and Seaborn to create interactive charts and graphs. These visualizations highlighted relationships between product subcategories, shipping modes, and sales figures. Notably, Washington, D.C. emerged as the top-performing region, with the highest sales and profits, indicating a strong market presence. Through dynamic charts, the project provided actionable insights into regional market behavior and sales performance.",
    highlights: [
      "Cleaned and prepared the dataset for detailed state-level sales analysis",
      "Created visualizations to highlight trends in subcategories, shipping modes, and sales figures",
      "Identified Washington, D.C. as the top-performing state in sales and profits using interactive bar charts and heatmaps",
      "Developed visual insights to uncover anomalies and relationships between various sales factors",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  WEB_AGENCY_VIS: {
    title: "Data Visualization of Web Agency Financials",
    subtitle: "Visualized financial KPIs and profitability insights using Excel and interactive charts",
    tech: ["Python", "Excel", "VBA", "Matplotlib", "Seaborn"],
    metrics: "Created dynamic financial dashboards for real-time profitability insights",
    description:
      "This project focused on visualizing a web agency's financial dataset using Excel and interactive data visualization tools. With the help of VBA, pivot tables, and Excel formulas, the financial data (including net revenue, gross profit, and COGs) was transformed into insightful charts and dashboards. The goal was to create a responsive financial sheet capable of visualizing key performance indicators (KPIs) such as Total COGs, Net Revenue, and Total Investment in real-time. Dynamic charts and graphs were used to track agency performance and profitability trends, making financial decision-making more accessible and data-driven.",
    highlights: [
      "Created dynamic visual dashboards to display financial metrics (Net Revenue, Gross Profit, COGs)",
      "Automated KPI calculations with Excel VBA and visualized data using charts and graphs",
      "Built interactive visualizations for decision-making, highlighting trends in profitability",
      "Integrated pivot tables with visual elements for detailed, real-time financial reporting",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
}

//===================================================================================================================================
 const MINING ={
  CUSTOMER_SEGMENTATION_CLUSTERING: {
    title: "Customer Segmentation Using Clustering Algorithms",
    subtitle: "Performed RFM-based customer segmentation using K-Means, DBSCAN, PCA, and cluster evaluation techniques",
    tech: ["Python", "Pandas", "Scikit-Learn", "Seaborn", "Matplotlib"],
    metrics: "Applied K-Means, DBSCAN, PCA, Elbow Method, Silhouette Score to segment customers and detect outliers",
    description:
      "This project focuses on customer segmentation using clustering techniques on the Online Retail dataset. RFM features (Recency, Frequency, Monetary) were engineered and used to group customers into meaningful segments. Multiple clustering approaches were applied, including K-Means and DBSCAN, and their outputs were compared based on performance, interpretability, and ability to detect outliers. To identify the optimal value of K, the Elbow Method and Silhouette Score were used, both suggesting K=2. The K-Means results were visualized using PCA to reduce the dimensionality to 2D, enabling clear visualization of customer segments. A K-distance graph was used to determine the appropriate parameters for DBSCAN, revealing density-based structures and highlighting noise points. DBSCAN successfully identified high-density customer groups while isolating outliers, offering deeper insight into customer behavior differences.The final comparison between K-Means and DBSCAN revealed valuable distinctions: K-Means formed clean spherical clusters, while DBSCAN captured density variations, outliers, and non-linear cluster shapes.",
    highlights: [
      "Applied Elbow Method and Silhouette Score to determine optimal cluster number (K=2)",
      "Performed K-Means Clustering and visualized results through PCA 2D projection",
      "Generated K-Distance graph to tune DBSCAN parameters (eps, min_samples)",
      "Implemented DBSCAN to detect arbitrary-shaped clusters and outliers (54 noise points, ~1.2%)",
      "Compared algorithm behavior: number of clusters, noise handling, and cluster geometry",
      "Analyzed cluster characteristics using RFM feature means to identify customer spending behavior",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  SVM_PROJECT: {
    title: "Classification of Customer Value Using SVM and PCA",
    subtitle: "Built Linear and RBF SVM models with PCA-based visualization and ROC evaluation",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
    metrics: "Achieved up to 99.8% test accuracy using optimized SVM models with PCA-based decision boundaries and ROC curve analysis",
    description:
      "This project focuses on classifying customers into High-Value and Low-Value groups using Support Vector Machines (SVM). PCA was applied to reduce high-dimensional features into 2D space, enabling clear visualization of the decision boundaries for both Linear and RBF SVM models. Grid search with cross-validation was used to determine the best hyperparameters for both models. The Linear SVM demonstrated strong performance on linearly separable components, while the RBF SVM captured more complex, non-linear relationships within the customer dataset. The project also included a comprehensive comparison of all classification models using ROC curves, where the RBF SVM achieved the highest AUC, followed closely by Gaussian Naive Bayes and the Linear SVM model.",
    highlights: [
      "Applied PCA to visualize SVM decision boundaries in 2D",
      "Trained Linear SVM and RBF SVM, achieving up to 99.8% test accuracy",
      "Used GridSearchCV to tune hyperparameters such as C and Gamma",
      "Visualized decision boundaries showing linear vs. non-linear separability",
      "Plotted ROC curves for all models, with RBF SVM achieving AUC = 1.000",
      "Generated complete classification reports with precision, recall, and F1-scores",
      "Created performance comparison table for Linear SVM vs. RBF SVM",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  IRIS_CLASSIFICATION_PROJECT: {
    title: "Deep Learning Classification on Iris Dataset",
    subtitle: "Built a neural network to classify flower species using TensorFlow and feature-scaled inputs",
    tech: ["Python", "TensorFlow", "Pandas", "NumPy", "Scikit-Learn"],
    metrics: "Achieved 60% test accuracy using a 3-layer dense neural network trained on Iris flower measurements",
    description:
      "This project implements a deep learning classification model using the Iris dataset, one of the most well-known datasets in machine learning. The dataset was loaded and processed using Pandas, with features including Sepal Length, Sepal Width, Petal Length, and Petal Width. The target variable represented three species of Iris flowers. A 3-layer Deep Neural Network (DNN) was built using TensorFlow’s Keras API. The model architecture consisted of ReLU-activated dense layers and a final softmax layer for multi-class prediction. The training process involved 50 epochs, with validation splitting used to monitor overfitting. After training, the model achieved 60% accuracy on the test dataset. A custom prediction pipeline was also created. New samples were scaled using StandardScaler before being passed into the model, ensuring consistent input distribution. The predicted species label was extracted using np.argmax(). This demonstrated how the model could infer species from previously unseen measurements.",
    highlights: [
      "Loaded and processed Iris dataset using Pandas and TensorFlow dataset utilities",
      "Built a 3-layer Keras Sequential DNN for multi-class flower classification",
      "Trained the model for 50 epochs with validation monitoring",
      "Evaluated model performance, achieving 60% test accuracy",
      "Implemented a complete prediction workflow including feature scaling and inference",
      "Predicted species label for new flower measurements using softmax classification",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
  WEATHER_HMM_PROJECT: {
    title: "Hidden Markov Model (HMM) Sequence Modeling Using TensorFlow Probability",
    subtitle: "Implemented a probabilistic Hidden Markov Model to generate state-dependent observations over time",
    tech: ["Python", "TensorFlow", "TensorFlow Probability (TFP)", "NumPy"],
    metrics: "Built and evaluated a 2-state HMM with categorical transitions and Gaussian observation distributions",
    description: `
    This project demonstrates the implementation of a Hidden Markov Model (HMM) using TensorFlow Probability.
    The model simulates a sequence of hidden states and their corresponding observable outputs over multiple time steps. The HMM consists of:
    • Initial State Distribution : Defines the probability of starting in each hidden state  
    • Transition Distribution : Specifies the likelihood of switching from one hidden state to another  
    • Observation Distribution : Models the observed data using Gaussian distributions dependent on the hidden state
    Two hidden states were defined with distinct Gaussian observation patterns, allowing the model to produce sequences that reflect characteristic means and variances for each state.
    TensorFlow Probability of HiddenMarkovModel class was used to compute the expected mean of the observation sequence over 7 time steps, and the final predicted mean was computed in a TF session.
    This project highlights probabilistic programming, state-space modeling, and sequence estimation using modern deep-learning libraries.
    `,
    highlights: [
      "Built a 2-state Hidden Markov Model using TensorFlow Probability",
      "Defined categorical initial and transition distributions for hidden states",
      "Used Gaussian (Normal) distributions for modeling observable outputs",
      "Generated a 7-step predicted mean sequence using the HMM",
      "Demonstrated the use of TensorFlow v1 compatibility mode to run probability computations",
      "Showcased foundational concepts of time-series modeling and latent variable structures",
    ],
    github: "https://github.com/yourusername/sales-eda",
    images: [
      "https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=60",
    ],
  },
 }

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
    { id: "vs-1", ...VISUALIZATION.ACCIDENT_VIS },
    { id: "vs-2", ...VISUALIZATION.AIRLINE_VIS },
    { id: "vs-3", ...VISUALIZATION.DIWALI_SALES_AGENCY_VIS },
    { id: "vs-4", ...VISUALIZATION.EMPLOYEE_VIS },
    { id: "vs-5", ...VISUALIZATION.GROCERY_VIS },
    { id: "vs-6", ...VISUALIZATION.MYANMAR_SALES_VIS },
    { id: "vs-7", ...VISUALIZATION.SHOPPING_TREND_VIS },
    { id: "vs-8", ...VISUALIZATION.SUPERSTORE_SALES_VIS },
    { id: "vs-9", ...VISUALIZATION.WEB_AGENCY_VIS },
  ],

  mining: [
    { id: "dm-1", ...MINING.CUSTOMER_SEGMENTATION_CLUSTERING },
    { id: "dm-2", ...MINING.SVM_PROJECT },
    { id: "dm-3", ...MINING.IRIS_CLASSIFICATION_PROJECT },
    { id: "dm-4", ...MINING.WEATHER_HMM_PROJECT },
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
