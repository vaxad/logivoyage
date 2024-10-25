# Branch Overview

This branch consists of several analytical modules and projects that focus on different aspects of supply chain, inventory, and logistics management. Each folder contains specific data files and Jupyter notebooks (.ipynb) dedicated to a particular type of analysis. Below is an overview of each folder:

---

### 1. ABC Analysis

- **Description**: This folder contains the data and `ABC_analysis.ipynb` file used to conduct an ABC analysis, a method to categorize inventory based on its impact on overall sales revenue and frequency.
- **Methodology**: A combination of sales and revenue metrics is used to improve the accuracy of the analysis. The `inventorize3` library is utilized for this purpose.

---

### 2. Bottleneck Analysis

- **Description**: Contains data and the `BottleNeck_Analysis.ipynb` notebook. This analysis uses Amazon delivery data to identify bottlenecks within the delivery process.
- **Objective**: The target variable is delivery time. Machine learning and feature importance are used to determine which variables negatively affect delivery time, with recommendations provided to improve system efficiency.

---

### 3. Carbon Emission Prediction

- **Description**: This folder contains the dataset and `carbon_emission_prediction.ipynb` notebook.
- **Objective**: Various machine learning models are trained and compared to most accurately predict carbon emissions based on the dataset.

---

### 4. Demand Forecasting

- **Description**: Contains data and the `demand_forecasting.ipynb` notebook.
- **Objective**: Time series analysis and machine learning techniques are applied to retail data to predict product demand. Model performances are compared to identify the best fit for demand forecasting.

---

### 5. Invoice Processing

- **Description**: This module uses `gemini-1.5-flash` to process invoices.
- **Output**: Returns a JSON structure and summary of the processed invoice data for further analysis and reporting.

---

### 6. Route Planning

- **Description**: This folder contains two subfolders focused on optimizing transportation routes using multi-modal routing techniques.

**Subfolders**:

1.  **Single Optimal Route**: Combines multiple transportation modes (e.g., air, road, and sea) to identify the most efficient route balancing time and cost between a single source and destination.
2.  **Multi-Stop Optimal Route**: Simulates a novel approach for planning routes with multiple stops between the start and end points. This is particularly useful for delivery scenarios where multiple deliveries in a single area can be pooled for efficiency.

---

### 7. Supply Chain Analysis

- **Description**: This folder contains `supply-chain-data.csv` and the `simple-analysis.ipynb` notebook.
- **Objective**: Provides an exploratory data analysis (EDA) of key features in the supply chain data, yielding insights into overall trends, outliers, and other essential metrics.

---

Each module is designed to deliver actionable insights and improvements to inventory management, logistics, and supply chain processes.
