
fetch('fetch_products.php')
    .then(response => response.json())
    .then(data => {
        let productsDiv = document.getElementById('products');
        productsDiv.innerHTML = ''; 
        data.forEach(product => {
            let productDiv = document.createElement('div');
            productDiv.className = "d-flex align-items-center mb-5";
            productDiv.innerHTML = `
                <div class="flex-shrink-0">
                    <img src="data:image/jpeg;base64,${product.img}" class="img-fluid" style="width: 150px;" alt="${product.name}">
                </div>
                <div class="flex-grow-1 ms-3">
                    <a href="#!" class="float-end"><i class="bi bi-x-lg"></i></a>
                    <h5 class="text-primary">${product.name}</h5>
                    <div class="d-flex align-items-center">
                        <p class="fw-bold mb-0 me-5 pe-3">${product.price}$</p>
                        <div class="def-number-input number-input safari_only">
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepDown()" class="minus"></button>
                            <input class="quantity fw-bold bg-body-tertiary text-body" min="0" name="quantity" value="1" type="number">
                            <button onclick="this.parentNode.querySelector('input[type=number]').stepUp()" class="plus"></button>
                        </div>
                    </div>
                    <button class="btn btn-primary mt-3" onclick="addToCart(${product.id}, '${product.name}', ${product.price})">Add to Cart</button>
                </div>
            `;
            productsDiv.appendChild(productDiv);
        });
    })
    .catch(error => console.error('Error fetching products:', error));

function addToCart(productId, productName, productPrice) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ id: productId, name: productName, price: productPrice });
    localStorage.setItem('cart', JSON.stringify(cart));

    
    var alertBox = document.createElement('div');
    alertBox.innerText = 'Item added to cart';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '20px';
    alertBox.style.right = '20px';
    alertBox.style.padding = '10px 20px';
    alertBox.style.backgroundColor = '#72AEC8';
    alertBox.style.color = '#fff';
    alertBox.style.borderRadius = '5px';
    alertBox.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    document.body.appendChild(alertBox);

    
    setTimeout(function() {
        document.body.removeChild(alertBox);
    }, 3000);
}
function addToFav(){
    var alertBox = document.createElement('div');
    alertBox.innerText = 'Item added to favorite';
    alertBox.style.position = 'fixed';
    alertBox.style.top = '20px';
    alertBox.style.right = '20px';
    alertBox.style.padding = '10px 20px';
    alertBox.style.backgroundColor = '#72AEC8';
    alertBox.style.color = '#fff';
    alertBox.style.borderRadius = '5px';
    alertBox.style.boxShadow = '0 2px 5px rgba(0,0,0,0.3)';
    document.body.appendChild(alertBox);

    
    setTimeout(function() {
        document.body.removeChild(alertBox);
    }, 3000);
}


