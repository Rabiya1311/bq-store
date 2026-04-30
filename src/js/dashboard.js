import {
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

import { auth, db } from "./firebase.js";

import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

/* ================= AUTH GUARD ================= */

onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "index.html";
  }
});

/* ================= FIREBASE COLLECTIONS ================= */

const productsRef = collection(db, "products");
const categoriesRef = collection(db, "categories");

/* ================= DATA ================= */

let products = [];
let categories = [];

/* ================= DOM ELEMENTS ================= */

const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const modalSave = document.getElementById("modalSave");

const productGrid = document.getElementById("productGrid");
const categoryTable = document.getElementById("categoryTable");

/* ================= NAVIGATION ================= */

document.querySelectorAll(".nav-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    const section = btn.dataset.section;

    document.getElementById("productsSection").style.display =
      section === "products" ? "block" : "none";

    document.getElementById("categoriesSection").style.display =
      section === "categories" ? "block" : "none";
  });
});

/* ================= PRODUCTS ================= */

async function loadProducts() {
  const snapshot = await getDocs(productsRef);

  products = snapshot.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));

  renderProducts();
}

function renderProducts() {
  productGrid.innerHTML = products.length
    ? products.map(p => `
      <div class="bg-white p-4 rounded-md shadow-sm">
        <img src="${p.image}" class="w-full h-40 object-cover rounded-md mb-2"/>

        <h3 class="font-semibold">${p.name}</h3>
        <p class="text-sm text-gray-500">$${p.price}</p>

        <div class="flex gap-2 mt-3">
          <button onclick='editProduct(${JSON.stringify(p)})' class="text-blue-500 text-sm">
            Edit
          </button>

          <button onclick="deleteProduct('${p.id}')" class="text-red-500 text-sm">
            Delete
          </button>
        </div>
      </div>
    `).join("")
    : "<p>No products found</p>";
}

/* ADD PRODUCT */
document.getElementById("addProductBtn").onclick = () => {
  openModal("Add Product", `
    <input id="pName" placeholder="Name" class="input"/>
    <input id="pPrice" placeholder="Price" class="input mt-2"/>
    <input id="pImage" placeholder="Image URL" class="input mt-2"/>
  `, async () => {

    const name = document.getElementById("pName").value;
    const price = document.getElementById("pPrice").value;
    const image = document.getElementById("pImage").value;

    await addDoc(productsRef, { name, price, image });

    await loadProducts();
    showToast("Product Added");
  });
};

/* EDIT PRODUCT */
window.editProduct = (p) => {
  openModal("Edit Product", `
    <input id="pName" value="${p.name}" class="input"/>
    <input id="pPrice" value="${p.price}" class="input mt-2"/>
    <input id="pImage" value="${p.image}" class="input mt-2"/>
  `, async () => {

    await updateDoc(doc(db, "products", p.id), {
      name: document.getElementById("pName").value,
      price: document.getElementById("pPrice").value,
      image: document.getElementById("pImage").value
    });

    await loadProducts();
    showToast("Product Updated");
  });
};

/* DELETE PRODUCT */
window.deleteProduct = async (id) => {
  await deleteDoc(doc(db, "products", id));
  await loadProducts();
  showToast("Product Deleted");
};

/* ================= CATEGORIES ================= */

async function loadCategories() {
  const snapshot = await getDocs(categoriesRef);

  categories = snapshot.docs.map(d => ({
    id: d.id,
    ...d.data()
  }));

  renderCategories();
}

function renderCategories() {
  categoryTable.innerHTML = categories.length
    ? categories.map(c => `
      <tr class="border-t">
        <td class="p-3">${c.name}</td>
        <td class="p-3">${c.slug}</td>

        <td class="p-3">
          <button onclick='editCategory(${JSON.stringify(c)})' class="text-blue-500 text-sm">
            Edit
          </button>

          <button onclick="deleteCategory('${c.id}')" class="text-red-500 text-sm ml-2">
            Delete
          </button>
        </td>
      </tr>
    `).join("")
    : "<tr><td class='p-3'>No categories found</td></tr>";
}

/* ADD CATEGORY */
document.getElementById("addCategoryBtn").onclick = () => {
  openModal("Add Category", `
    <input id="cName" placeholder="Name" class="input"/>
    <input id="cSlug" placeholder="Slug" class="input mt-2"/>
  `, async () => {

    await addDoc(categoriesRef, {
      name: document.getElementById("cName").value,
      slug: document.getElementById("cSlug").value
    });

    await loadCategories();
    showToast("Category Added");
  });
};

/* EDIT CATEGORY */
window.editCategory = (c) => {
  openModal("Edit Category", `
    <input id="cName" value="${c.name}" class="input"/>
    <input id="cSlug" value="${c.slug}" class="input mt-2"/>
  `, async () => {

    await updateDoc(doc(db, "categories", c.id), {
      name: document.getElementById("cName").value,
      slug: document.getElementById("cSlug").value
    });

    await loadCategories();
    showToast("Category Updated");
  });
};

/* DELETE CATEGORY */
window.deleteCategory = async (id) => {
  await deleteDoc(doc(db, "categories", id));
  await loadCategories();
  showToast("Category Deleted");
};

/* ================= MODAL ================= */

function openModal(title, body, onSave) {
  modal.classList.remove("hidden");
  modal.classList.add("flex");

  modalTitle.innerText = title;
  modalBody.innerHTML = body;

  modalSave.onclick = async () => {
    try {
      modalSave.disabled = true;
      await onSave();
      closeModal();
    } catch (err) {
      alert(err.message);
    } finally {
      modalSave.disabled = false;
    }
  };
}

function closeModal() {
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

/* ================= TOAST ================= */

function showToast(msg) {
  const t = document.createElement("div");
  t.className = "bg-black text-white px-4 py-2 rounded-md text-sm";
  t.innerText = msg;

  document.getElementById("toast").appendChild(t);
  setTimeout(() => t.remove(), 2000);
}

/* ================= LOGOUT ================= */

document.getElementById("logoutBtn").onclick = () => {
  signOut(auth).then(() => {
    window.location.href = "index.html";
  });
};

/* ================= INIT ================= */

window.addEventListener("DOMContentLoaded", async () => {
  await loadProducts();
  await loadCategories();
});