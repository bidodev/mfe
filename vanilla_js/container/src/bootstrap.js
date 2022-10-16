/**
 * import("products/ProductsIndex")
    .then(module => {
        module.mount(document.querySelector("#container-products"))
    })
    .catch(err => {
        console.error("Error in Loading Products!!", err)
    })

 */
// https://www.udemy.com/course/microfrontend-course/learn/lecture/23206900#questions/13103658

import { mount as mountProducts } from "products/ProductsIndex";
import { mount as mountCart } from "cart/CartShow";

const productsRoot = document.querySelector("#container-products");
mountProducts(productsRoot);

const cartRoot = document.querySelector("#container-cart");
mountCart(cartRoot);
