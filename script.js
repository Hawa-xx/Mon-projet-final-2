// script.js
document.addEventListener('DOMContentLoaded', function() {
    const products = [
      {
        "id": 1,
        "name": "Sac en cuir classique",
        "price": "à parir de 25000fcfa",
        "image": "img2.jpeg",
        "description": "Un sac en cuir élégant pour toutes les occasions."
      },
      {
        "id": 2,
        "name": "Sac à dos moderne",
        "price": "à parir de 25000fcfa",
        "image": "sac2.jpg",
        "description": "Un sac à main pratique avec un design moderne."
      }
    ];
  
    const container = document.getElementById('products-container');
    products.forEach(product => {
      const productDiv = document.createElement('div');
      productDiv.classList.add('sac à main');
      productDiv.innerHTML = `
        <h2>${product.name}</h2>
        <img src="${product.image}" alt="${product.name}">
        <p>${product.description}</p>
        <p><strong>$${product.price}</strong></p>
      `;
      container.appendChild(productDiv);
    });
  });
  