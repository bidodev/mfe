import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

const productsRoot = document.querySelector("#container-products");
mountProducts(productsRoot);


const cartRoot = document.querySelector("#container-cart");
mountCart(cartRoot);