const API_URL = "https://fakestoreapi.com/products?limit=5";

let products = [];
let isCouponApplied = false;

const loadProducts = document.getElementById("load_products");
loadProducts.addEventListener("click", getProducts);

async function getProducts() {
    try {
        const res = await axios.get(API_URL);
        products = res.data;

        displayProducts();
    } catch (error) {
        console.log(error);
    }
}


function displayProducts() {
    const list = document.getElementById("list");
    list.innerHTML = "";

    products.forEach(product => {
        const item = document.createElement("div");
        const price = product.price.toFixed(2);

        if (isCouponApplied) {
            const discountedPrice = (price * 0.9).toFixed(2);

            item.innerHTML = `<ul><li>${product.title} - <span style="text-decoration: line-through;">$${price}</span> $${discountedPrice}</li></ul>`;
        } else {
            item.innerHTML = `<ul><li>${product.title} - $${price}</li></ul>`;
        }

        list.appendChild(item);
    });
}


const couponValidation = document.getElementById("coupon_validation");
couponValidation.addEventListener("click", validation);

function validation() {
    const couponInput = document.getElementById("coupon_input").value;
    const validationResult = document.getElementById("validation_result");

    const regex = /^SAVE-[A-Z0-9]{4}$/;

    isCouponApplied = regex.test(couponInput);
    validationResult.textContent = isCouponApplied ? "Coupon applied: 10% off" : "Invalid coupon";

    displayProducts();
}


const checkoutBtn = document.getElementById("checkout_btn");
const checkoutResult = document.getElementById("checkout_result");
const JSONPlaceholder = "https://jsonplaceholder.typicode.com/posts";

checkoutBtn.addEventListener("click", checkout)

async function checkout() {
    if (products.length === 0) {
        checkoutResult.textContent = "No products to checkout";
    } else {
        const total = products.reduce((sum, product) => {
            const price = isCouponApplied ? product.price * 0.9 : product.price;
            return sum + price;
        }, 0).toFixed(2);

        const payload = {
            items: products.map(product => ({
                id: product.id,
                title: product.title,
                price: product.price
            })),
            coupon: isCouponApplied ? document.getElementById("coupon_input").value : null,
            total: Number(total)
        };

        try {
            const res = await axios.post(JSONPlaceholder, payload);
            checkoutResult.textContent = `Order placed (id: ${res.data.id})`;
        } catch (error) {
            checkoutResult.textContent = "Failed to place order";
            console.log(error);
        }
    }
};