console.log("JavaScript connected!");

const products = [
    {
        name: "Adidas Runfalcon",
        brand: "adidas",
        color: "black",
        size: 8,
        price: 4500,
        image: "https://d16aymak0y9zsb.cloudfront.net/Sportsplus/product/1080x1080/21022024/GW9251_1_1703767807-1531270509233.jpg"
    },
    {
        name: "Adidas Street White",
        brand: "adidas",
        color: "white",
        size: 9,
        price: 5500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoTEXiSE06lAketQ75btgZtdeZELWdoLt9hjknKbsoow&s=10"
    },
    {
        name: "Adidas Red Runner",
        brand: "adidas",
        color: "red",
        size: 10,
        price: 6500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKiVNt_SkhanIYfblx7cvZBUZZXj6s3hWWgR3tid9Gdg&s=10"
    },
    {
        name: "Adidas Blue Sport",
        brand: "adidas",
        color: "blue",
        size: 7,
        price: 2800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaBCBFiPu53ErA_kBcSCD_iWlKVk5vIqzJAcJ36kMzCA&s=10"
    },

    {
        name: "Nike Air Red",
        brand: "nike",
        color: "red",
        size: 9,
        price: 7500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQa7jgy_JZCUZDgYNm07DvGJXQHIcJPmEQWMXKOUZXYOw&s=10"
    },
    {
        name: "Nike White Classic",
        brand: "nike",
        color: "white",
        size: 8,
        price: 4800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8wLDjVAfCplGri4QKfGZCSeR4FLqdIOajgbRAYIndkw&s=10"
    },
    {
        name: "Nike Black Runner",
        brand: "nike",
        color: "black",
        size: 10,
        price: 6000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyvEwjhqPpBF1OwhlPUyjxzyECVSrjLLDuFTISHro-CQ&s=10"
    },
    {
        name: "Nike Blue Sport",
        brand: "nike",
        color: "blue",
        size: 11,
        price: 3200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcdeO3xrvBc0byPKaFqIzT-F7OgVKWVtPWmusECopX7w&s=10"
    },

    {
        name: "Puma Black Flex",
        brand: "puma",
        color: "black",
        size: 9,
        price: 3500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9tCT1ASCuTBhPc3f0wkzAHuZK13QkBTVvBeJkjs3uFg&s=10"
    },
    {
        name: "Puma White Street",
        brand: "puma",
        color: "white",
        size: 7,
        price: 5000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQrufcZyvWnn3dp_5ExefV-GaB4BMVGS2ehOasWVi_nAQ&s=10"
    },
    {
        name: "Puma Red Sprint",
        brand: "puma",
        color: "red",
        size: 11,
        price: 8000,
        image: "https://images.unsplash.com/photo-1675625500632-2d276bd51920?auto=format&fit=crop&w=600&q=80"
    },

    {
        name: "Reebok White Classic",
        brand: "reebok",
        color: "white",
        size: 10,
        price: 4200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrO7UlqlSk4_chQ0dYIrb1O8ZklNgMOSEWmL3k9R5n3Q&s=10"
    },
    {
        name: "Reebok Black Sport",
        brand: "reebok",
        color: "black",
        size: 7,
        price: 2500,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpg7PzVKTxFvkg9d-CF0XFvVpz9QmMXzQbHN1U4KORng&s=10"
    },
    {
        name: "Reebok Blue Runner",
        brand: "reebok",
        color: "blue",
        size: 8,
        price: 6000,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHm0TcqkTvN66gMQPI_wZbKa1d490Mw-TQFlyuYwOhjg&s=10"
    }
];

const productContainer = document.getElementById("productContainer");
const resultCount = document.getElementById("resultCount");
const noResults = document.getElementById("noResults");

const brandFilter = document.getElementById("brandFilter");
const colorFilter = document.getElementById("colorFilter");
const sizeFilter = document.getElementById("sizeFilter");
const priceFilter = document.getElementById("priceFilter");
const searchInput = document.getElementById("searchInput");

function displayProducts(productList) {
    productContainer.innerHTML = "";

    productList.forEach(function (product) {
        const card = document.createElement("div");
        card.className = "col";

        card.innerHTML = `
            <div class="card product-card">
                <img
                    src="${product.image}"
                    alt="${product.color} ${product.brand} ${product.name}"
                    class="product-image"
                    loading="lazy"
                >

                <div class="card-body d-flex flex-column">
                    <p class="product-brand">${product.brand}</p>

                    <h5 class="product-name">${product.name}</h5>

                    <div class="product-details">
                        <span class="product-tag">
                            Size: ${product.size}
                        </span>

                        <span class="product-tag">
                            ${product.color}
                        </span>
                    </div>

                    <p class="product-price">
                        Rs. ${product.price.toLocaleString("en-PK")}
                    </p>
                </div>
            </div>
        `;

        productContainer.appendChild(card);
    });

    resultCount.textContent =
        `${productList.length} product${productList.length !== 1 ? "s" : ""}`;

    noResults.classList.toggle("d-none", productList.length !== 0);
}

function filterProducts() {
    const brand = brandFilter.value.toLowerCase();
    const color = colorFilter.value.toLowerCase();
    const size = sizeFilter.value;
    const price = priceFilter.value;
    const search = searchInput.value.trim().toLowerCase();

    const filteredProducts = products.filter(function (product) {
        const matchBrand =
            brand === "" || product.brand === brand;

        const matchColor =
            color === "" || product.color === color;

        const matchSize =
            size === "" || product.size === Number(size);

        let matchPrice = true;

        if (price === "0-3000") {
            matchPrice = product.price < 3000;
        } else if (price === "3000-5000") {
            matchPrice = product.price >= 3000 && product.price < 5000;
        } else if (price === "5000-7000") {
            matchPrice = product.price >= 5000 && product.price < 7000;
        } else if (price === "7000+") {
            matchPrice = product.price >= 7000;
        }

        const matchSearch =
            product.name.toLowerCase().includes(search) ||
            product.brand.toLowerCase().includes(search);

        return matchBrand &&
            matchColor &&
            matchSize &&
            matchPrice &&
            matchSearch;
    });

    displayProducts(filteredProducts);
}

brandFilter.addEventListener("change", filterProducts);
colorFilter.addEventListener("change", filterProducts);
sizeFilter.addEventListener("change", filterProducts);
priceFilter.addEventListener("change", filterProducts);
searchInput.addEventListener("input", filterProducts);

displayProducts(products);

const filterForm = document.getElementById("filterForm");

if (filterForm) {
    filterForm.addEventListener("submit", function (event) {
        event.preventDefault();
        filterProducts();
    });
}