import faker from "faker";

const mount = (el) => {
  let products = "";
  for (let index = 0; index < 5; index++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  el.innerHTML = products;
};

// Context / Situation 1
// We are running this file in development in isolation
// We are using our local index.html
if (process.env.NODE_ENV === "development") {
  const element = document.querySelector("#dev-products");

  if (element) {
    mount(element);
  }
}
export { mount };
