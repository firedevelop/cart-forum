const listItems = document.querySelector('#list-items')
const cart = document.querySelector('#cart')
const listCart = document.querySelector('#list-cart')
const emptyCart = document.querySelector('#empty-cart')
let itemsOnCart = []


cartEventListeners()


function cartEventListeners(){
    listItems.addEventListener('click', addItem)
    cart.addEventListener('click', deleteItem)
    emptyCart.addEventListener('click', emptyCartItems)
}

function addItem(e){
    e.preventDefault()
    if (e.target.classList.contains('add-to-cart')){
     
        console.log('item')
    }

}

function hello(){
    console.log('hi')
}

