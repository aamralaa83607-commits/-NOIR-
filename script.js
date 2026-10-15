/* =========================================
   NOIR PERFUME HOUSE
   Main JavaScript File
   ========================================= */

/* 1. صور العطور */
const perfumeImages = [
  "https://images.unsplash.com/photo-1594035910387-fea47794261f?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1615634260167-c8cdede054de?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1541643600914-78b084683601?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1595425970377-c9703cf48b6d?auto=format&fit=crop&w=700&q=85",
  "https://images.unsplash.com/photo-1590736969955-71cc94901144?auto=format&fit=crop&w=700&q=85"
];

/* 2. بيانات المنتجات: 40 عطرًا */
const names = [
  { id: 1, arabicName: "عود ملكي", name: "Royal Oud", price: 1850, category: "men", rating: 4.9 },
  { id: 2, arabicName: "بلاك إلكسير", name: "Black Elixir", price: 2200, category: "men", rating: 4.8 },
  { id: 3, arabicName: "روز جولد", name: "Rose Gold", price: 1650, category: "women", rating: 4.7 },
  { id: 4, arabicName: "وايت مسك", name: "White Musk", price: 1250, category: "unisex", rating: 4.6 },
  { id: 5, arabicName: "فانيلا دريم", name: "Vanilla Dream", price: 1450, category: "women", rating: 4.8 },
  { id: 6, arabicName: "أمبر نايت", name: "Amber Night", price: 1950, category: "men", rating: 4.9 },
  { id: 7, arabicName: "فلورا بلوم", name: "Flora Bloom", price: 1350, category: "women", rating: 4.5 },
  { id: 8, arabicName: "أوشن بريز", name: "Ocean Breeze", price: 1550, category: "men", rating: 4.7 },
  { id: 9, arabicName: "ساكرد عود", name: "Sacred Oud", price: 2400, category: "unisex", rating: 4.9 },
  { id: 10, arabicName: "جاسمين ديو", name: "Jasmine Dew", price: 1200, category: "women", rating: 4.4 },
  { id: 11, arabicName: "دارك ليذر", name: "Dark Leather", price: 2100, category: "men", rating: 4.8 },
  { id: 12, arabicName: "سوفـت روز", name: "Soft Rose", price: 1300, category: "women", rating: 4.6 },
  { id: 13, arabicName: "سيترس فريش", name: "Citrus Fresh", price: 1150, category: "unisex", rating: 4.3 },
  { id: 14, arabicName: "ميدنايت بلو", name: "Midnight Blue", price: 1750, category: "men", rating: 4.7 },
  { id: 15, arabicName: "بيرل وايت", name: "Pearl White", price: 1600, category: "women", rating: 4.6 },
  { id: 16, arabicName: "إمبريال عود", name: "Imperial Oud", price: 2600, category: "men", rating: 5.0 },
  { id: 17, arabicName: "كاراميل بلِس", name: "Caramel Bliss", price: 1400, category: "women", rating: 4.5 },
  { id: 18, arabicName: "وود أند سبايس", name: "Wood & Spice", price: 1900, category: "unisex", rating: 4.8 },
  { id: 19, arabicName: "فريش سكاي", name: "Fresh Sky", price: 1100, category: "men", rating: 4.3 },
  { id: 20, arabicName: "بلَش بلاش", name: "Blush Blush", price: 1500, category: "women", rating: 4.7 },
  { id: 21, arabicName: "جولدن أمبر", name: "Golden Amber", price: 2050, category: "unisex", rating: 4.8 },
  { id: 22, arabicName: "إيفر جرين", name: "Ever Green", price: 1250, category: "men", rating: 4.4 },
  { id: 23, arabicName: "وايت فلورال", name: "White Floral", price: 1350, category: "women", rating: 4.6 },
  { id: 24, arabicName: "ليذر إنتنس", name: "Leather Intense", price: 2300, category: "men", rating: 4.9 },
  { id: 25, arabicName: "سويت أوركيد", name: "Sweet Orchid", price: 1550, category: "women", rating: 4.7 },
  { id: 26, arabicName: "أرابيان نايتس", name: "Arabian Nights", price: 2250, category: "unisex", rating: 4.9 },
  { id: 27, arabicName: "سيلفر ستورم", name: "Silver Storm", price: 1700, category: "men", rating: 4.5 },
  { id: 28, arabicName: "بيتش بلوسوم", name: "Peach Blossom", price: 1300, category: "women", rating: 4.4 },
  { id: 29, arabicName: "أونكس", name: "Onyx", price: 2000, category: "men", rating: 4.8 },
  { id: 30, arabicName: "كاشمير وود", name: "Cashmere Wood", price: 1850, category: "unisex", rating: 4.7 },
  { id: 31, arabicName: "ليلي بلوم", name: "Lily Bloom", price: 1200, category: "women", rating: 4.5 },
  { id: 32, arabicName: "أزور بلو", name: "Azure Blue", price: 1650, category: "men", rating: 4.6 },
  { id: 33, arabicName: "دارك أمبر", name: "Dark Amber", price: 2150, category: "unisex", rating: 4.8 },
  { id: 34, arabicName: "روز فانيلا", name: "Rose Vanilla", price: 1450, category: "women", rating: 4.7 },
  { id: 35, arabicName: "أكوا مين", name: "Aqua Men", price: 1250, category: "men", rating: 4.4 },
  { id: 36, arabicName: "مسك أبيض فاخر", name: "Luxury White Musk", price: 1750, category: "unisex", rating: 4.8 },
  { id: 37, arabicName: "بلاك أوركيد", name: "Black Orchid", price: 1950, category: "women", rating: 4.9 },
  { id: 38, arabicName: "سيدار وود", name: "Cedar Wood", price: 1600, category: "men", rating: 4.6 },
  { id: 39, arabicName: "أمبر روز", name: "Amber Rose", price: 1800, category: "women", rating: 4.7 },
  { id: 40, arabicName: "سيجنتشر إنتنس", name: "Signature Intense", price: 2500, category: "unisex", rating: 5.0 }
];

/* إضافة الصور للمنتجات */
const products = names.map((product, index) => ({
  ...product,
  image: perfumeImages[index % perfumeImages.length]
}));

/* 3. عناصر الصفحة */
const productGrid = document.getElementById("productGrid");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortFilter = document.getElementById("sortFilter");
const resultsCount = document.getElementById("resultsCount");
const emptyState = document.getElementById("emptyState");

const openCartButton = document.getElementById("openCart");
const closeCartButton = document.getElementById("closeCart");
const continueShoppingButton = document.getElementById("continueShopping");

const cartDrawer = document.getElementById("cartDrawer");
const overlay = document.getElementById("overlay");
const cartItemsElement = document.getElementById("cartItems");
const cartEmpty = document.getElementById("cartEmpty");
const cartBottom = document.getElementById("cartBottom");
const cartCount = document.getElementById("cartCount");
const drawerCount = document.getElementById("drawerCount");
const cartTotal = document.getElementById("cartTotal");
const whatsappCheckout = document.getElementById("whatsappCheckout");
const toast = document.getElementById("toast");

/* 4. بيانات السلة */
let cart = [];

/* رقم واتساب بصيغة دولية، بدون علامة + */
const WHATSAPP_PHONE = "201027555851";


/* 5. تنسيق الأسعار */
function formatPrice(price) {
  return `${Number(price).toLocaleString("en-US")} ج.م`;
}

/* 6. عرض المنتجات */
function renderProducts() {
  if (!productGrid) return;

  const searchTerm = searchInput
    ? searchInput.value.trim().toLowerCase()
    : "";

  const selectedCategory = categoryFilter
    ? categoryFilter.value
    : "all";

  const selectedSort = sortFilter
    ? sortFilter.value
    : "featured";

  let filteredProducts = products.filter(product => {
    const matchesSearch =
      product.arabicName.toLowerCase().includes(searchTerm) ||
      product.name.toLowerCase().includes(searchTerm);

    const matchesCategory =
      selectedCategory === "all" ||
      product.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  if (selectedSort === "low") {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSort === "high") {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (selectedSort === "rating") {
    filteredProducts.sort((a, b) => b.rating - a.rating);
  }

  if (resultsCount) {
    resultsCount.textContent = `${filteredProducts.length} عطرًا`;
  }

  if (emptyState) {
    emptyState.hidden = filteredProducts.length !== 0;
  }

  productGrid.innerHTML = filteredProducts.map(product => `
    <article class="product-card">
      <div class="product-image">
        <img
          src="${product.image}"
          alt="${product.arabicName}"
          loading="lazy"
        />
        <span class="product-rating">★ ${product.rating}</span>
      </div>

      <div class="product-info">
        <p class="product-category">
          ${product.category === "men"
            ? "رجالي"
            : product.category === "women"
              ? "حريمي"
              : "للجنسين"}
        </p>

        <h3>${product.arabicName}</h3>
        <p class="product-name-en">${product.name}</p>

        <div class="product-bottom">
          <strong class="product-price">
            ${formatPrice(product.price)}
          </strong>

          <button
            class="add-to-cart"
            data-add="${product.id}"
            type="button"
          >
            أضف للسلة +
          </button>
        </div>
      </div>
    </article>
  `).join("");
}

/* 7. رسائل التنبيه */
function showToast(message) {
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(showToast.timeout);

  showToast.timeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2500);
}

/* 8. إضافة منتج للسلة */
function addToCart(productId) {
  const product = products.find(
    item => item.id === Number(productId)
  );

  if (!product) return;

  const existingItem = cart.find(
    item => item.id === product.id
  );

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  renderCart();
  showToast(`تمت إضافة ${product.arabicName} للسلة`);
}

/* 9. حذف منتج من السلة */
function removeFromCart(productId) {
  cart = cart.filter(
    item => item.id !== Number(productId)
  );

  renderCart();
}

/* 10. تغيير الكمية */
function changeQuantity(productId, amount) {
  const item = cart.find(
    product => product.id === Number(productId)
  );

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(productId);
    return;
  }

  renderCart();
}

/* 11. عرض السلة */
function renderCart() {
  const totalQuantity = cart.reduce(
    (sum, item) => sum + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  if (cartCount) {
    cartCount.textContent = totalQuantity;
  }

  if (drawerCount) {
    drawerCount.textContent = `(${totalQuantity})`;
  }

  if (cartTotal) {
    cartTotal.textContent = formatPrice(totalPrice);
  }

  if (cartEmpty) {
    cartEmpty.hidden = cart.length > 0;
  }

  if (cartBottom) {
    cartBottom.hidden = cart.length === 0;
  }

  if (!cartItemsElement) return;

  cartItemsElement.innerHTML = cart.map(item => `
    <div class="cart-item">
      <img
        src="${item.image}"
        alt="${item.arabicName}"
        loading="lazy"
      />

      <div class="cart-item-info">
        <h3>${item.arabicName}</h3>
        <p>${formatPrice(item.price)}</p>

        <div class="cart-item-actions">
          <button
            type="button"
            data-quantity-change="-1"
            data-id="${item.id}"
            aria-label="تقليل الكمية"
          >−</button>

          <span>${item.quantity}</span>

          <button
            type="button"
            data-quantity-change="1"
            data-id="${item.id}"
            aria-label="زيادة الكمية"
          >+</button>

          <button
            type="button"
            class="remove-item"
            data-remove="${item.id}"
          >حذف</button>
        </div>
      </div>

      <strong class="cart-item-total">
        ${formatPrice(item.price * item.quantity)}
      </strong>
    </div>
  `).join("");
}

/* 12. فتح السلة */
function openCart() {
  if (!cartDrawer) return;

  cartDrawer.classList.add("open");
  cartDrawer.setAttribute("aria-hidden", "false");

  if (overlay) {
    overlay.classList.add("show");
  }
}

/* 13. إغلاق السلة */
function closeCart() {
  if (!cartDrawer) return;

  cartDrawer.classList.remove("open");
  cartDrawer.setAttribute("aria-hidden", "true");

  if (overlay) {
    overlay.classList.remove("show");
  }
}

/* 14. تجهيز رسالة الطلب للواتساب */


function checkoutWhatsApp() {
  if (cart.length === 0) {
    alert("أضف منتجات للسلة أولًا");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const orderLines = cart.map(item =>
    `• ${item.arabicName} × ${item.quantity} = ${formatPrice(item.price * item.quantity)}`
  );

  const message = [
    "مرحبًا، أريد طلب المنتجات التالية من NOIR:",
    "",
    ...orderLines,
    "",
    `الإجمالي: ${formatPrice(total)}`,
    "",
    "الاسم:",
    "العنوان:",
    "طريقة الدفع:"
  ].join("\n");

  const url = "https://wa.me/201027555851?text=" +
    encodeURIComponent(message);

  window.location.href = url;
}

/* 15. أحداث البحث والتصفية والترتيب */
if (searchInput) {
  searchInput.addEventListener("input", renderProducts);
}

if (categoryFilter) {
  categoryFilter.addEventListener("change", renderProducts);
}

if (sortFilter) {
  sortFilter.addEventListener("change", renderProducts);
}

/* 16. أحداث أزرار المنتجات */
if (productGrid) {
  productGrid.addEventListener("click", event => {
    const button = event.target.closest("[data-add]");

    if (!button) return;

    addToCart(button.dataset.add);
  });
}

/* 17. أحداث أزرار السلة */
if (cartItemsElement) {
  cartItemsElement.addEventListener("click", event => {
    const removeButton = event.target.closest("[data-remove]");

    if (removeButton) {
      removeFromCart(removeButton.dataset.remove);
      return;
    }

    const quantityButton = event.target.closest(
      "[data-quantity-change]"
    );

    if (quantityButton) {
      changeQuantity(
        quantityButton.dataset.id,
        Number(quantityButton.dataset.quantityChange)
      );
    }
  });
}

/* 18. ربط أزرار فتح وإغلاق السلة */
if (openCartButton) {
  openCartButton.addEventListener("click", openCart);
}

if (closeCartButton) {
  closeCartButton.addEventListener("click", closeCart);
}

if (overlay) {
  overlay.addEventListener("click", closeCart);
}

if (continueShoppingButton) {
  continueShoppingButton.addEventListener("click", () => {
    closeCart();

    const productsSection = document.getElementById("products");

    if (productsSection) {
      productsSection.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
}

// /* 19. ربط زر طلب واتساب */
// if (whatsappCheckout) {
//   whatsappCheckout.addEventListener(
//     "click",
//     checkoutWhatsApp
//   );
// }

const whatsappButton = document.getElementById("whatsappCheckout");

if (whatsappButton) {
  whatsappButton.onclick = function () {
    checkoutWhatsApp();
  };
}


/* 20. إغلاق السلة بزر Escape */
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeCart();
  }
});

/* 21. تحديث سنة الفوتر */
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

/* 22. تشغيل المتجر */
renderProducts();
renderCart();

/* =========================================
   END OF SCRIPT
   ========================================= */