const listItems = document.querySelector('#list-items')
const cart = document.querySelector('#cart')
const listCart = document.querySelector('#list-cart')
const emptyCart = document.querySelector('#empty-cart')
let itemsOnCart = []


cartEventListeners()

function cartEventListeners() {
    listItems.addEventListener('click', addItem)
    cart.addEventListener('click', deleteItem)
    emptyCart.addEventListener('click', emptyCartItems)
}

function addItem(e) {
    //e.preventDefault()
    if (e.target.classList.contains('add-to-cart')) {
        const itemElement = e.target.parentElement.parentElement.parentElement.parentElement
        console.log(itemElement)
        itemGetDetail(itemElement)
    }
}

function itemGetDetail(itemElement) {
    const itemDetail = {
        id: itemElement.querySelector('.add-to-cart').getAttribute('id-item'),
        image: itemElement.querySelector('img').src,
        title: itemElement.querySelector('b').textContent,
        price: itemElement.querySelector('.add-to-cart').textContent.slice(2),
        quantity: 1
    }

    for (var [key, value] of Object.entries(itemDetail)){
        console.log(`${key}: ${value}`) 
    }

    if( itemsOnCart.some( itemElement => itemElement.id === itemDetail.id ) ) {  
        const items = itemsOnCart.map( itemElement => {
             if( itemElement.id === itemDetail.id ) {
                itemElement.quantity++;
                   return itemElement;
              } else {
                   return itemElement;
           }
        })
        itemsOnCart = [...items];
   }  
   else {

        itemsOnCart = [...itemsOnCart, itemDetail];
   }
   cartHTML();
}

/* function itemDelete(e){
    if(e.target.classList.contains('.item-delete')){
        const itemID = e.target.getAttribute('id-item')
        itemsOnCart = itemsOnCart.filter( item => item.id !== itemID)
        cartHTML()
    }
} */

function cartHTML(){
    //emptyCart()
    itemsOnCart.forEach(item => {
        const row = document.createElement('ul')
        console.log(item.title)

        row.innerHTML = `
            <li>${item.title}</li>
            <li>${item.quantity}</li>
            <li>${item.price}</li>
        `
        listCart.appendChild(row)
    })
}

/*  function emptyCart(){
    while(listCart.firstChild){
        listCart.removeChild(listCart.firstChild)
    }
} 
 */
 