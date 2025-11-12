// Artificial Intelligence Projects Data
const aiProjects = {
    "Data Engineering Specialist": [
        {
            title: "Social Media Data Integration System",
            idea: "Build a system to collect and analyze data from Twitter, Facebook, and Instagram to understand public opinions about a product or event.",
            objective: "To perform **sentiment analysis on posts and tweets** to guide marketing and decision-making. This involves building reliable data connectors to ingest real-time data from various social media APIs. The final deliverable is a dashboard visualizing sentiment trends and top hashtags across social platforms.",
            tools: ["Python, Tweepy, Spark, MongoDB, Tableau"],
        },
        {
            title: "Smart City Data Platform",
            idea: "Develop a platform that gathers data from city sensors (traffic, lighting, air quality) and processes it in real-time.",
            objective: "To analyze **smart city data** to detect traffic congestion, pollution, and improve urban services. This requires designing a scalable, high-throughput real-time streaming architecture using tools like Kafka and Spark. The goal is to provide a live dashboard showing traffic flow and air quality metrics for urban planners.",
            tools: ["Kafka, Spark, AWS, Airflow, Power BI"],
        },
        {
            title: "Healthcare Data Integration Pipeline",
            idea: "Build a unified system that integrates and stores patient data from multiple hospitals for analysis.",
            objective: "To enhance **healthcare quality** through patient data analytics and disease pattern detection. This involves designing a robust ETL pipeline to clean, transform, and harmonize disparate patient records from various sources. The final system should support interactive reporting on the most common diseases by region.",
            tools: ["Python, Apache NiFi, AWS S3, AWS Glue, Power BI"],
        },
        {
            title: "Real-Time Traffic Data Pipeline",
            idea: "Collect and process traffic data from cameras and sensors to calculate congestion levels in real time.",
            objective: "To **optimize traffic management** using **real-time data analytics** and visualization. This requires setting up a fast stream processing system using technologies like Kafka, Spark, and Elasticsearch. The goal is to deliver a real-time dashboard showing live road traffic and accurate congestion rates for rapid response.",
            tools: ["Kafka, Spark, Elasticsearch, Kibana"],
        },
        {
            title: "University Data Warehouse",
            idea: "Design a centralized data warehouse to store and analyze student grades, attendance, and course data.",
            objective: "To support **academic decision-making** through unified data analysis and reporting. This involves defining a dimensional model (e.g., Star Schema) and implementing ETL jobs using SQL and Airflow. The final output is a set of analytical reports showing student success rates, absences, and department performance.",
            tools: ["SQL Server, Power BI, Python, Airflow"],
        },
        {
            title: "Cloud Data Migration Project",
            idea: "Migrate existing on-premise databases to a secure and scalable cloud infrastructure.",
            objective: "To improve data storage efficiency and enable **cloud-based analytics** using modern platforms. This involves assessing on-premise data sources, planning the migration strategy, and using tools like AWS DMS or Snowflake. The goal is to deliver a fully operational cloud data warehouse ready for business intelligence and analytics.",
            tools: ["AWS DMS, Snowflake, Python"],
        },
        {
            title: "Automated Data Quality & Alert System",
            idea: "Create a system that monitors data quality (missing values, duplicates) and sends alerts when issues occur.",
            objective: "To ensure clean and accurate data for analysis and machine learning models, thereby improving data trustworthiness. This involves defining data quality expectations using a framework like Great Expectations and integrating it into an ETL workflow. The system must send live data quality notifications via email or Slack when issues are detected.",
            tools: ["Python, Great Expectations, Airflow"],
        },
    ],
    "Professional Big Data Engineer": [
        {
            title: "Real-Time Traffic Detection using Big Data Streams (with Agentic AI)",
            idea: "Process live traffic data from city/police cameras, GPS, and mobile apps using Big Data streaming (Kafka, Spark) to detect congestion patterns and propose optimal routes. This includes an agentic AI component for autonomous decision-making and task execution.",
            objective: "To design a **scalable real-time analysis system** to identify traffic congestion, reroute vehicles, and reduce urban traffic burden dynamically. This involves building high-throughput streaming pipelines capable of processing diverse, unstructured data sources instantaneously. The project utilizes an agentic AI component to simulate and recommend rerouting actions for traffic optimization.",
            tools: ["Apache Spark Streaming, Hadoop, Python, Grafaana, Airflow, InfluxDB, Kafka, Agentic AI framework (Custom logic or Langchain for agentic behavior)"],
        },
        {
            title: "Credit Card Fraud Detection at Scale (with Agentic AI)",
            idea: "Detect fraudulent credit card transactions in real time using high-throughput ML pipelines. This includes an agentic AI component for autonomous decision-making and task execution.",
            objective: "To build a **robust and scalable pipeline** that identifies credit card fraud in real-time and reduces financial losses. This requires designing and implementing a low-latency machine learning pipeline capable of processing millions of transactions per second. The agentic AI component is used for flagging anomalies and executing autonomous, risk-based decisions on suspicious activity. ",
            tools: ["Apache Flink, Kafka, HDFS, Python, Postgres/SQL, Agentic AI framework (Custom logic or Langchain for agentic behavior)"],
        },
        {
            title: "Customer Churn Prediction in Telecom (with Agentic AI)",
            idea: "Analyze telecom customer data to identify behavioral patterns leading to churn. This includes an agentic AI component for autonomous decision-making and task execution.",
            objective: "To analyze customer **behavior patterns** to predict churn and develop autonomous strategies for user retention. This project focuses on building sophisticated machine learning models to identify at-risk customers with high accuracy and low false positives. The agentic AI component is then employed to execute dynamic, personalized retention suggestions automatically. ",
            tools: ["Apache Flink, Spark, MLlib, Python, Power BI, Agentic AI framework (Custom logic or Langchain for agentic behavior)"],
        },
        {
            title: "Intelligent Inventory Forecasting for E-Commerce (with Agentic AI)",
            idea: "Predict product demand and manage stock dynamically across multiple warehouses. This includes an agentic AI component for autonomous decision-making and task execution.",
            objective: "To forecast product demand accurately across multiple warehouses and autonomously automate stock management decisions. This involves building a robust data platform capable of integrating time-series data from sales, inventory, and supply chain logistics. The agentic AI component uses predictive modeling to determine optimal stock levels and trigger automated purchase and reorder decisions. ",
            tools: ["Apache Spark, Hadoop, Python, Tableau, Agentic AI framework (Custom logic or Langchain for agentic behavior)"],
        },
        {
            title: "Financial Fraud Detection and Explanation System (with Agentic AI)",
            idea: "Build a high-throughput Big Data platform to detect fraudulent financial transactions and explain decisions autonomously.",
            objective: "To create a transparent **fraud detection system** that explains decisions for auditing and real-time protection. This requires building a high-performance fraud scoring engine that processes financial data streams with minimal latency. The system integrates Explainable AI (XAI) techniques like SHAP and LIME to generate clear, compliant explanations for every autonomous fraud decision. ",
            tools: ["Apache Hadoop, Hive, Postgres/SQL, SHAP, Agentic AI explanation for explainable pipeline"],
        },
        {
            title: "Healthcare Imaging Metadata Pipeline & Diagnosis Assistant (with Agentic AI)",
            idea: "Construct a data pipeline to analyze radiology metadata (clinical scan logs) to triage diagnosis queues autonomously.",
            objective: "To automate **prioritization of diagnosis cases** using imaging metadata to reduce wait time to diagnosis in healthcare settings. This involves building an ETL pipeline that extracts, transforms, and loads metadata from various clinical systems into a centralized data lake. The agentic AI component then schedules and triages radiology work queues based on rule-based prioritization and severity scores. ",
            tools: ["Airflow, Pandas, CNNs in TensorFlow, Rule-based prioritizer, Agentic AI framework"],
        },
    ],
    "Machine Learning Developer": [
        {
            title: "Intelligent Medical Conversational Agent using Generative NLP Models",
            idea: "Develop a domain-specific AI assistant capable of understanding complex medical questions and providing reliable responses using fine-tuned transformer-based models.",
            objective: "To develop an **AI assistant** combining transformer architectures with Retrieval-Augmented Generation (RAG) for highly accurate and context-aware medical responses. This integration is essential for achieving trustworthy and ethical healthcare communication through the chatbot. The project emphasizes integrating multilingual understanding and robust ethical AI safeguards.",
            tools: ["Python", "LangChain", "Hugging Face Transformers", "MLflow", "AWS SageMaker", "Streamlit", "Docker", "FastAPI"],
        },
        {
            title: "AI-Driven Resume Intelligence and Talent Ranking Platform",
            idea: "Create an intelligent recruitment tool using LLMs and semantic similarity models to evaluate resumes, detect skill relevance, and ensure unbiased candidate ranking.",
            objective: "To create an **intelligent recruitment tool** using LLMs and semantic similarity models for candidate evaluation. This system leverages advanced NLP and knowledge graphs to deliver explainable and equitable AI in recruitment automation. The primary goal is to ensure unbiased candidate ranking while accurately detecting skill relevance.",
            tools: ["Python", "LangChain", "Sentence Transformers", "MLflow", "Azure ML", "Scikit-learn", "Docker", "FastAPI"],
        },
        {
            title: "Gesture Recognition System for Real-Time Human–Computer Interaction",
            idea: "Develop a robust vision-based gesture recognition model using transfer learning and pose estimation to control applications or devices in real time.",
            objective: "To develop a **robust vision-based gesture recognition model** using transfer learning and advanced pose estimation techniques. This project focuses on training and deploying a CNN-based classifier integrated with Mediapipe and Edge ML tools. The goal is to interpret dynamic hand movements accurately to control applications or devices in real time.",
            tools: ["Python", "OpenCV", "TensorFlow", "Mediapipe", "MLflow", "Edge Impulse", "Docker", "Azure ML"],
        },
        {
            title: "Agentic AI: Personal Coding Tutor Bot",
            idea: "Build an autonomous agent that navigates Stack Overflow or Docs with memory to guide users through coding problems.",
            objective: "To explore multi-agent collaboration, Retrieval-Augmented Generation (RAG), and planning with memory. This involves training an autonomous agent to understand user intent and search external knowledge bases for solutions. The goal is to build a personalized LLM-based tutor that can reason and guide users step-by-step through their coding problems.",
            tools: ["LangChain, OpenAI API, Pinecone, Python"],
        },
        {
            title: "LLM-Based Financial News Sentiment Analyzer",
            idea: "Develop a tool that pulls finance news and classifies them into bullish/bearish using agentic AI models.",
            objective: "To show practical application of **LLMs for time-series decision support systems**. This involves scraping real-time financial news, processing it using transformer models, and classifying its sentiment. The final goal is a news dashboard that shows sentiment score, price impact, and plots over time for user analysis.",
            tools: ["Python, LangChain, Newspaper3k, Hugging Face Transformers, Plotly, Streamlit"],
        },
        {
            title: "Predictive Financial Insights Dashboard with AI Forecasting",
            idea: "Develop an AI-powered dashboard for financial prediction and anomaly detection using hybrid models that combine statistical and deep learning methods.",
            objective: "To develop an **AI-powered dashboard** for financial prediction and anomaly detection using hybrid statistical and deep learning models. The system must integrate adaptive forecasting capabilities to respond effectively to dynamic market changes. The core goal is to support business and investment decision-making with explainability built into the forecasting models.",
            tools: ["Python", "Prophet", "Scikit-learn", "MLflow", "AWS SageMaker", "Power BI", "Docker"],
        },

        {
            title: "Smart Traffic Signal Controller using Agentic AI",
            idea: "Build an adaptive traffic light system using vehicle density detection and agentic scheduling.",
            objective: "To reduce urban congestion with **intelligent ML-based traffic control** and adaptive scheduling. This involves using computer vision (OpenCV) to detect vehicle density in real-time at an intersection. The agentic component then optimizes signal timings based on live traffic flow. The final deliverable is a simulated junction that changes signals based on real-time vehicle count.",
            tools: ["Python, TensorFlow, OpenCV, SUMO Simulator"],
        },
        {
            title: "Vision-Based Attendance System",
            idea: "Build a facial recognition app for classroom attendance using OpenCV and deep learning.",
            objective: "To implement **facial feature extraction** and **real-time image matching for identity**. This involves training a deep learning model (like FaceNet or a CNN) to accurately recognize student faces in different lighting conditions. The goal is a system that records attendance by scanning faces with time stamps for automated tracking.",
            tools: ["Python, OpenCV, FaceNet, Keras, Streamlit"],
        },
        {
            title: "Autonomous Drone Path Optimization using Reinforcement Learning",
            idea: "Simulate autonomous drone delivery using RL to learn optimal flying paths.",
            objective: "To explore **reinforcement learning (RL)** for real-world optimization tasks like delivery and obstacle avoidance. This involves building a simulation environment (e.g., with OpenAI Gym) where the drone learns through trial and error to minimize distance and flight time. The final result is a simulated drone path planner that learns to avoid obstacles and minimize delivery time.",
            tools: ["Python, TensorFlow, OpenAI Gym, PyBullet, Matplotlib"],
        },
        {
            title: "AI-Based Predictive Maintenance for Elevators",
            idea: "Monitor elevator motor vibrations and usage logs to predict mechanical failure or maintenance needs.",
            objective: "To **avoid breakdowns** and **optimize elevator performance** in buildings using predictive analytics. This involves collecting and analyzing time-series data from vibration sensors and usage logs. The system uses machine learning (Scikit-learn) to classify the data and predict mechanical issues before they escalate.",
            tools: ["Vibration Sensors, Python, Scikit-learn, Raspberry Pi"],
        },

    ]
};
