# Cloud Data Processing & Machine Learning

## Overview

University of Tasmania cloud-computing project using a distributed Nectar Cloud workflow for data preparation and machine-learning evaluation.

## My contribution

- Served as Project Manager for the group work.
- Built and tested the transformation stage used after data integration and cleaning.
- Encoded categorical variables and prepared numerical features for machine learning.
- Supported end-to-end testing of the distributed workflow.

## Workflow

`Raw datasets → Integration → Cleaning → Transformation → Prepared dataset → Machine Learning`

The wider system used one server node and multiple worker nodes in Nectar Cloud. The final workflow produced a prepared dataset for downstream modelling.

## Technologies

`Python` · `pandas` · `scikit-learn` · `Nectar Cloud` · `Distributed Processing`

## Machine-learning evaluation

The prepared dataset contained **1,221 records**. I used Python, pandas and scikit-learn to compare:

- Logistic Regression
- Decision Tree
- Random Forest

Models were evaluated using:

- Accuracy
- Precision
- Recall
- F1 score
- ROC-AUC

Cross-validation and **GridSearchCV** were used for tuning. The best tuned model achieved an F1 score of approximately **0.814**.

## What I learned

- How distributed data-processing stages fit together
- How to prepare mixed categorical and numerical data for ML
- How cloud infrastructure supports a multi-stage workflow
- How to compare classifiers using more than one metric
- How project coordination and technical delivery interact in a group cloud project

> This public case study shares my contribution and results without publishing group assessment material or private infrastructure details.

[Back to projects](README.md)
