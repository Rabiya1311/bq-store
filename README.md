# BQ Store

## Project Summary

BQ Store is a simple admin dashboard web application built using HTML, CSS, and JavaScript with Firebase as the backend service.  
It allows an admin to manage products and categories without using a traditional server.  
All data is stored in Firestore, and authentication is handled by Firebase Authentication.

This project does not include a backend server like Node.js or PHP. Everything runs on the client side and communicates directly with Firebase services.

---

## Pages and Views

The application consists of two main pages:

### 1. index.html
- Public login page
- Users sign in using Firebase Authentication
- After login, users are redirected to the dashboard

### 2. dashboard.html
- Protected admin workspace
- Contains sidebar and topbar layout
- Uses JavaScript to switch between views

Inside dashboard.html, views are switched without loading new pages:
- Products view
- Categories view

This is handled using client-side routing with JavaScript (location.hash).

---

## Data Model (Firestore Structure)

Firestore database contains two main collections:


categories/
└── {categoryId}
├── name: string
├── slug: string
└── createdAt: timestamp

products/
└── {productId}
├── name: string
├── description: string
├── price: number
├── imageUrl: string
├── categoryId: string
├── stock: number
└── createdAt: timestamp


### Key Decisions:
- Products use `categoryId` instead of category name to maintain data consistency.
- Price is stored as an integer (smallest unit like paisa) to avoid decimal errors.
- Data is stored in flat collections for simplicity and easier querying.

---

## Folder Structure


bq-store/
├── index.html
├── dashboard.html
├── 404.html
├── src/
│ ├── js/
│ │ ├── main.js
│ │ ├── dashboard.js
│ │ ├── auth.js
│ │ ├── firestore.js
│ │ ├── products.js
│ │ ├── categories.js
│ │ ├── ui.js
│ │ └── config.js
│ ├── css/
│ └── assets/
│ ├── icons/
│ └── images/
├── firestore.rules
├── .env.example
├── .gitignore
└── README.md


---

## Local Setup Instructions

1. Clone the repository:

git clone https://github.com/your-username/bq-store.git


2. Open the project folder:

cd bq-store


3. Open with Live Server in VS Code:
- Right click `index.html`
- Click "Open with Live Server"

4. Setup environment:

cp .env.example .env


5. Add Firebase configuration inside `.env`

---

## Design Inspiration

TBD after Module 03 (Figma design will be provided later in the course).

---

## Happy Path and Failure Paths

When a user adds a new product, they click the "Add Product" button and fill out a form with product details. The data is validated and then sent to Firestore. If successful, the new product appears immediately in the product list without reloading the page.

Possible failure points:
- If the network request fails, the UI should show an error message like "Network error, please try again."
- If validation fails (missing fields), the UI should highlight the incorrect inputs.
- If permission is denied by Firebase rules, the UI should show "You do not have permission to p

Workflow verified on date