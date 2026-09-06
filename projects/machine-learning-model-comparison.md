# Machine Learning Model Comparison

## Overview

A supervised classification project completed as part of my University of Tasmania AI studies. The task compared two machine-learning models for predicting heat-safety alerts and used evaluation metrics to support a final recommendation.

## Models

- Logistic Regression
- Decision Tree

## Tools

`Python` · `pandas` · `scikit-learn` · `Jupyter Notebook`

## Evaluation

The models were compared using accuracy, precision, recall, F1 score, confusion matrices and classification reports.

### Logistic Regression
- Accuracy: **0.75**
- Precision: **0.78**
- Recall: **0.58**
- F1: **0.67**

### Decision Tree
The final Decision Tree used:

- `max_depth=3`
- `min_samples_leaf=8`
- `random_state=42`

Its final results were approximately:

- Accuracy: **0.60**
- Recall: **0.65**
- F1: **0.58**

## Model tuning

I tested different combinations of tree depth and minimum samples per leaf. The depth-3 model with `min_samples_leaf=8` produced the strongest recall and F1 among the tested Decision Tree settings.

## Recommendation

Logistic Regression performed better overall on accuracy and F1. The Decision Tree achieved higher recall for positive heat-safety alerts. Because false negatives can matter in a safety-related setting, the Decision Tree can be useful when reducing missed alerts is the main priority.

## What I learned

- How to compare classification models fairly
- Why accuracy alone is not enough
- How recall and false negatives affect recommendations
- Basic hyperparameter tuning for Decision Trees
- How to communicate model trade-offs in practical terms

> Source code from current university assessment work is kept private. This public page presents the approach and results only.

[Back to projects](README.md)
