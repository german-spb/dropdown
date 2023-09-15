function openMenu (){
    document.querySelector('.dropdown__list').classList.add('dropdown__list_active')  
}
function closeMenu (){
    document.querySelector('.dropdown__list').classList.remove('dropdown__list_active')  
}
const value = document.querySelector('.dropdown__value')
value.addEventListener('click',openMenu )

var machineCode = document.querySelectorAll('.dropdown__item'), index 

let changeItem = (event) =>{
    index = 1 // ?
    value.textContent = machineCode[index].textContent
    event.preventDefault()
    closeMenu()
    
}
machineCode.forEach((button) => {button.addEventListener('click', changeItem)})


// let changeItem = (event) => {
    for (let i = 0; i < machineCode.length; i++) {
        console.log(machineCode[i].id)
        
    }
// }



