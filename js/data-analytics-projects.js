// Data Analytics Projects Data
const dataAnalyticsProjects = {
    "Junior Data Analyst": [{
        title: "Air Quality Prediction Using Sensors Datasets and Machine Learning",
        idea: "Use air quality and weather datasets to train a machine learning model that predicts AQI. Pollutant AQI values are obtained from sensors such as PM2.5, PM10, CO, NO2, O3, and SO2.",
        objective: "To master <b>data loading and preprocessing</b> focusing on cleaning and preparing the data, identifying patterns, and extracting features from sensor and weather datasets. This project involves training a machine learning model (Regression or Classification) to accurately predict AQI values using actual sensor readings. The final analysis compares actual readings to predicted AQI trends and highlights key factors contributing to air quality changes.",
        tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    },
    {
        title: "House Price Prediction using Machine Learning",
        idea: "Build a machine learning model to predict house prices based on features such as bedroom, size, number of bathrooms, and other relevant property attributes.",
        objective: "To explore and preprocess the <b>housing dataset</b>, focusing on handling missing values and engineering relevant property features (bedrooms, size, neighborhood). This project involves training and evaluating various regression models ( Linear Regression, Random Forest, XGBoost) to accurately predict house prices. The final analysis evaluates model performance using metrics like RMSE and R-square, identifying which features most influence house prices.",
        tools: ["Python", "Pandas", "NumPy", "scikit-learn", "XGBoost", "Matplotlib", "Jupyter Notebook"],
    },
    {
        title: "Didi Chuxing Ride Trips Analysis and Dashboard",
        idea: "Analyze a dataset of Didi Chuxing trips to count the number of trips, analyze trip durations and local routes, and categorize trips by purpose and destination.",
        objective: "To count the <b>number of trips</b> and calculate average trip durations per customer over time and distance traveled. This involves generating charts showing trip patterns, popular destinations, and daily/weekly usage trends. The final goal is to build a dashboard with notifications for maintenance based on mileage thresholds.",
        tools: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Plotly", "Jupyter Notebook"],
    },
    {
        title: "Electric Vehicle Population Data",
        idea: "Use the public dataset of registered Battery Electric Vehicles (BEVs) and Plug-in Hybrid Electric Vehicles (PHEVs) to analyze population trends, geographic distribution, vehicle types, and forecast future adoption.",
        objective: "To load and clean the <b>vehicle registration dataset</b>, performing exploratory data analysis to identify usage patterns by region, vehicle type, and time. This project requires training a predictive model for future EV adoption rates, focusing on strategic insights for infrastructure planning and policy making. The final report forecasts EV adoption registrations with recommendations for infrastructure deployment.",
        tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib/Seaborn", "Jupyter Notebook"],
    },
    {
        title: "Crop Production Analytics & Forecasting",
        idea: "Use a dataset of crop production from various years to visualize trends and build predictive models for future production output.",
        objective: "To load and preprocess the <b>crop production dataset</b>, performing deep Exploratory Data Analysis to generate visualizations of production trends by crop and year. This project involves building regression or forecasting models to predict future crop production output based on historical data. The analysis should identify future effects and present actionable agricultural insights.",
        tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
    },
    {
        title: "Predictive Modeling of Silver and Gold Prices with Machine Learning",
        idea: "Build a machine learning model to forecast daily silver and gold prices using historical data and relevant financial indicators.",
        objective: "To gather and clean historical <b>gold and silver price data</b> from online financial sources, conducting exploratory data analysis to uncover trends and patterns. This project involves training time-series models ( Random Forest, XGBoost) to accurately predict daily gold and silver prices. The final goal is to provide visualizations of actual vs. predicted prices, feature importance insights, and a report guiding investment or risk-management decisions.",
        tools: ["Python", "Prophet", "Scikit-learn", "MLflow", "AWS SageMaker", "Power BI", "Docker"],
    },
    {
        title: "Python-Based Employee Records Management System",
        idea: "Develop a Python application connected to a MySQL database to manage employee records (add, remove, promote, display employee).",
        objective: "To connect a MySQL database using <b>Python</b>, implementing functions to add, remove, promote, and display employee records. This involves ensuring data persistence and integrity throughout the system's life cycle, managing sensitive data securely. The final goal is a working application where users can manage employee records via a simple, menu-driven interface.",
        tools: ["Python", "mysql-connector", "MySQL", "Jupyter Notebook or script environment"],
    },
    {
        title: "COVID-19 Case Trend Analysis",
        idea: "Analyze daily COVID-19 cases globally to understand outbreak patterns and project future trends.",
        objective: "To explore <b>COVID-19 case data</b> through robust Exploratory Data Analysis (EDA) to understand and visualize global outbreak patterns. This project requires cleaning and preparing the data, identifying periods of high-incidence, and performing time-series analysis to project future trends. The final report provides visual representations of trends, crucial insights for policy decisions, and recommendations.",
        tools: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    },
    ],
    "Professional Data Analyst": [
        {
            title: "Flu Shot Learning: Predict H1N1 and Seasonal Flu Vaccine Uptake",
            idea: "Use survey data to predict vaccine uptake for seasonal and H1N1 influenza, exploring factors like demographics, health, and opinions.",
            objective: "To master <b>Exploratory Data Analysis (EDA)</b>, focusing on cleaning missing or incorrect values and extracting key features from survey data. This project involves training a classification model to accurately predict vaccine uptake based on various demographic and health factors. The final analysis identifies which factors drive vaccine uptake and reports on results.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter Notebook"],
        },
        {
            title: "DengAI: Predicting Disease Spread",
            idea: "Predict weekly dengue cases (a mosquito-borne disease) using weather and environmental data.",
            objective: "To explore the <b>weather and dengue data</b> through comprehensive Exploratory Data Analysis (EDA). This project involves cleaning and preparing the complex dataset, and building a time-series forecasting model to predict weekly dengue cases. The final goal is to identify which weather and environmental factors significantly affect actual vs. predicted case trends.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter Notebook"],
        },
        {
            title: "Richter's Predictor: Modeling Earthquake Damage",
            idea: "Use building survey data from a post-disaster region to predict building damage severity after an earthquake.",
            objective: "To explore and visualize <b>building and damage data</b> through robust EDA and feature engineering. This involves cleaning and preparing the data, then building a classification model to assign a damage grade to each building. The final report summarizes feature importance and provides actionable insights for disaster preparedness.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "LightGBM", "Jupyter Notebook"],
        },
        {
            title: "Bank Loan Approval Prediction using Machine Learning",
            idea: "Develop a machine learning model that predicts whether a customer loan will be approved or rejected based on applicant information (income, loan amount, credit score, employment history).",
            objective: "To analyze customer data to identify <b>key features influencing loan approval</b> and to handle imbalanced classes and complex missing data. This involves training and evaluating various classification models ( Logistic Regression or Decision Trees) to predict the outcome. The final deliverable provides insights on factors contributing to approval or rejection.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Jupyter Notebook"],
        },
        {
            title: "Product Defect Detection from Manufacturing Data",
            idea: "Use a dataset from Kaggle to analyze manufacturing defects to analyze defect patterns and evaluate machine learning models.",
            objective: "To explore <b>patterns in manufacturing defects</b> through rigorous EDA and feature identification. This project focuses on preparing the data for predictive modeling to classify and identify patterns and features associated with defect production. The final goal is to build a dashboard using classification models (Random Forest or Support Vector Machine) to predict which batches have high defect risk.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        },
        {
            title: "Automated eBay Product Data Scraper using Python",
            idea: "Develop a Python-based web scraper that extracts product information (title, price, ratings) and product images from eBay listings. The collected data is used for price monitoring, competitor analysis, and further analysis of market pricing and consumer behavior.",
            objective: "To master <b>Web Scraping</b> using the Python libraries Requests and Beautiful Soup to collect product data from online e-commerce platforms. This involves transforming and cleaning the extracted unstructured data into a usable tabular format suitable for business intelligence analysis. The final output is a structured dataset ready for visualization or predictive modeling applications.",
            tools: ["Python", "Requests", "BeautifulSoup", "Pandas", "scikit-learn"],
        },
        {
            title: "High-Resolution Agricultural Imagery Analysis with NAIP",
            idea: "Use the NAIP aerial imagery (e.g., Normalized Difference Vegetation Index, land use, vegetation health), and remote sensing data processing and visualizing the imagery.",
            objective: "To access and preprocess <b>NAIP imagery</b> for selected states and years, extracting meaningful spatial and spectral patterns in agriculture. This project involves creating clean and preprocessed imagery datasets suitable for various land-use classification tasks. The final deliverable is a classified dataset derived from NAIP imagery, along with visualizations of land-use/vegetation patterns and actionable insights for agriculture and planning.",
            tools: ["Python", "Rasterio/GDAL", "NumPy", "Pandas", "scikit-learn", "Matplotlib/Seaborn", "Jupyter Notebook"],
        },
        {
            title: "Short-Term Traffic Flow Prediction Using Hourly Junction Data",
            idea: "Use an hourly traffic dataset from four junctions to analyze time-series data and build predictive models to forecast short-term traffic volume at each junction.",
            objective: "To explore and analyze <b>time-series traffic data</b> from multiple junctions, focusing on feature engineering for temporal components (hourly, daily, weekly) in vehicle counts. This project requires training and evaluating various time-series models ( ARIMA or Prophet) to forecast short-term traffic volume. The final analysis identifies key features or periods influencing traffic flow.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib/Seaborn", "Jupyter Notebook"],
        },
        {
            title: "Stock Market Tracker and Trend Prediction using Web Scraping",
            idea: "Build a Python-based system that scrapes real-time stock data (price, volume, fundamental metrics) from a financial news website and stores the data. The system analyzes real-time data to identify short-term trends using ML, and sends automated alerts every 30 minutes summarizing market trends.",
            objective: "To scrape <b>stock data</b> and fundamental metrics from a financial news website in real-time. This involves implementing time-series analysis (like ARIMA or Linear Regression) to predict short-term stock market trends. The automated system alerts every 30 minutes with a summary of current market and historical trends.",
            tools: ["Python", "Pandas", "NumPy", "BeautifulSoup / Requests", "scikit-learn", "Time Series Models (ARIMA, Prophet)", "E-mail/Notification tools"],
        },
        {
            title: "Predictive Analysis of Customer Churn",
            idea: "Use a telecom customer dataset to analyze customer usage, behaviour patterns, and demographic data, and build a machine learning model to predict which customers are likely to churn (and recommend retention tips).",
            objective: "To explore and clean the <b>customer churn dataset</b>, conducting exploratory data analysis to identify behavior patterns and key features influencing churn. This project involves building and evaluating various classification models (Random Forest or Gradient Boosting) to achieve optimal model performance and accuracy. The final deliverable provides insights on customer lifetime value and important predictors.",
            tools: ["Python", "Pandas", "NumPy", "scikit-learn", "Matplotlib", "Seaborn", "Jupyter Notebook"],
        },
    ]
};
