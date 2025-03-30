//TASK 2
function fetchProductsThen() { // fetches products using .then()
    fetch('https://www.course-api.com/javascript-store-products') // fetches product data
      .then(response => response.json()) // converts the response to JSON
      .then(products => {
        products.forEach(product => { // loops through each product
          console.log(product.name); // logs product name
        });
      })
      .catch(error => { // catches and logs errors
        console.log('An error occurred:', error);
      });
  }
  
  fetchProductsThen(); // triggers the function to fetch products
  
//TASK 3
async function fetchProductsAsync() { // fetches products using async/await
    try {
      const response = await fetch('https://www.course-api.com/javascript-store-products'); // fetches product data
      const products = await response.json(); // parses the response to JSON
      displayProducts(products); // displays the products
    } catch (error) { // catches and logs errors
      handleError(error); // calls handleError to log errors
    }
  }
  
  fetchProductsAsync(); // triggers the function to fetch products
  
//TASK 4
function displayProducts(products) { // displays the fetched products
    const productContainer = document.getElementById('product-container'); // selects the product container
  
    // loops through the first 5 products
    products.slice(0, 5).forEach(product => {
      const productDiv = document.createElement('div'); // creates a div for the product
      productDiv.classList.add('product'); // adds a class for styling
  
      const name = document.createElement('h3'); // creates the name element
      name.textContent = product.name; // sets the product name
  
      const price = document.createElement('p'); // creates the price element
      price.textContent = `$${product.price.toFixed(2)}`; // sets the product price
  
      const img = document.createElement('img'); // creates the image element
      img.src = product.image; // sets the product image source
      img.alt = product.name; // sets the alt attribute for the image
  
      // appends elements to the product div
      productDiv.appendChild(name);
      productDiv.appendChild(price);
      productDiv.appendChild(img);
  
      productContainer.appendChild(productDiv); // appends the product div to the container
    });
  }
  
//TASK 5
function handleError(error) { // logs the error message
    console.log('An error occurred:', error); // logs the error with a message
  }
