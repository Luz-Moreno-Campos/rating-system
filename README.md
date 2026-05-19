# ⭐ Customer Feedback Rating Widget

This lightweight, **customer rating** widget allows users to rate a service using a 1–5 star scale and displays a confirmation dialog after submission.  
Designed for seamless integration into modern web applications that require quick, intuitive customer feedback.

## ✨ Features

- **Interactive 1–5 star rating system**
- **Dynamic feedback label** (e.g., “Good”, “Excellent”)
- **Auto‑reset behavior** (using a key‑based remount) 
- **Confirmation dialog**
- **Reusable component structure**


## 🧩 Technologies Used

- **React 18**
- **JavaScript (ES6+)**
- **CSS3**
- **React Icons**


### ⭐ Star Rating Logic
The rating component manages its own internal state using `useState`.  
When the user selects a star:

1. The rating updates.
2. A delayed dialog opens.
3. When the dialog closes, the component resets.

### 🔄 Reset Mechanism (Key‑Based Remount)
To ensure the rating resets cleanly, the widget uses a **dynamic `key`**:

- When the dialog closes, the parent component increments a counter.
- React detects the key change.
- React **remounts** the `StarRating` component.
- All internal state returns to its initial value.

## 🚀 Demo

You can view a live demo of our Customer Rating Widget here: https://luz-moreno-campos.github.io/rating-system/


