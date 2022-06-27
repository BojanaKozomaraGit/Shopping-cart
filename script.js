let allTotal = 0;

function addToCart (element) {
    let mainElement = element.closest('.single-item')
    let price = mainElement.querySelector('.price').innerText;
    let name = mainElement.querySelector('h3').innerText;
    let qty = mainElement.querySelector('input').value;
    let cartItems = document.querySelector('.cart-items');
    
    if (parseInt(qty) > 0) {
        
        
        price = price.substring(1);
        
        
        let total = parseInt(price) * parseInt(qty);
        console.log(total)
        
        allTotal += total;
        
        cartItems.innerHTML += `<div class='cart-single-item'>
        <h3> ${name}</h3>
        <p> $${price} x ${qty} = $<span>${total}</span></p>
        <button class='delete-btn' onclick='removeFromCart(this)'>Ukloni</button>
        </div>`;
        
        document.querySelector('.total').innerText = `TOTAL: ${allTotal}`;
        
        element.innerText = 'Dodato';
        element.setAttribute('disabled', 'true');
    }
    else {
        alert('Odaberi kolicinu');
    }
    
}

function removeFromCart(btn) {
    let mainElementRemove = btn.closest('.cart-single-item');
    let price = mainElementRemove.querySelector('p span').innerText;
    let name = mainElementRemove.querySelector('h3').innerText;
    let vegetables = document.querySelectorAll('.single-item');
    
    price = parseInt(price);
    
    allTotal -= price;
    
    document.querySelector('.total').innerText = `TOTAL: ${allTotal}`;
    
    mainElementRemove.remove();
    
    vegetables.forEach(function (vege) {
        let itemName = vege.querySelector('.si-content h3').innerText;
        if (itemName === name) {
            vege.querySelector('.actions input').value = 0;
            vege.querySelector('.actions button').removeAttribute('disabled');
            vege.querySelector('.actions button').innerText = 'Dodaj';
        }
    });
}