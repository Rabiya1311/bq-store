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

This is handled using client-side routing with JavaScript (`location.hash`).

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
- Products use `categoryId` instead of category name to maintain data consistency  
- Price is stored as an integer (smallest unit like paisa) to avoid decimal errors  
- Data is stored in flat collections for simplicity and easier querying  

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
├── design/
│ └── tokens.md
├── firestore.rules
├── .env.example
├── .gitignore
└── README.md


---

## Local Setup Instructions

1. Clone the repository:


git clone https://github.com/Rabiya1311/bq-store.git


2. Open the project folder:


cd bq-store


3. Open with Live Server in VS Code:
- Right click `index.html`  
- Click "Open with Live Server"

4. Setup environment:


cp .env.example .env


5. Add Firebase configuration inside `.env`

---

## Design

Figma Design File:  
 [https://www.figma.com/design/bFHDpWULrVwNEfmSTbAb0C/Untitled?node-id=0-1&t=6gOUFbshs3B3QRTY-1]

This file includes:
- Cover page  
- Login page  
- Dashboard (Products & Categories)  
- Components page  
- Design tokens used for development  

---

## Design Tokens

Design tokens are defined in:


design/tokens.md


They include:
- Colors  
- Typography  
- Spacing  
- Border radius  
- Component specifications  

These tokens ensure consistency between design and development.

---

## Happy Path and Failure Paths

### Happy Path
When a user adds a new product:
1. Click "Add Product"  
2. Fill in product details  
3. Submit form  
4. Data is validated and sent to Firestore  
5. Product appears instantly in the list without page reload  

---

### Failure Paths

- **Validation Error**  
  - Missing or invalid fields  
  - UI highlights incorrect inputs  

- **Network Error**  
  - Request fails  
  - UI shows: "Network error, please try again."  

- **Permission Error**  
  - Firestore rules block access  
  - UI shows: "You do not have permission to perform this action."  

---

## Workflow Verification

- Authentication flow tested  
- Firestore CRUD operations verified  
- UI updates dynamically without reload  

Workflow verified on date: **[ADD DATE]**

---

## Tech Stack

- HTML  
- CSS  
- JavaScript  
- Firebase Authentication  
- Firestore Database  

---