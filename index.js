const button = document.querySelector('.generate')
const resultEnd = document.querySelector('.resultEnd')

const changeResult = () =>{
    resultEnd.innerHTML = '2'
}


button.addEventListener('click', changeResult)