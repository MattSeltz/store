const container = document.getElementById("container");
const category = document.getElementById("category");

fetch("http://localhost:1234")
  .then((res) => res.json())
  .then((data) => printProducts(data))
  .catch((e) => console.error(e));

const printProducts = (data) => {
  let html = "";

  data.forEach(
    (product) =>
      (html += `<div id="${product.id}">
    <img src="${product.image}" width="100px" height="100px" alt="${product.title}">
    <h3>${product.title}</h3>
    <p>${product.description}</p>
    <div>
      <p>${product.category}</p>
      <p style="color:#090">$${product.price}</p>
    </div>
  </div>`)
  );

  container.innerHTML = html;
};

category.addEventListener("change", (e) => {
  const categorySelect = e.target.value;

  fetch(`http://localhost:1234?category=${categorySelect}`)
    .then((res) => res.json())
    .then((data) => printProducts(data))
    .catch((e) => console.error(e));
});
