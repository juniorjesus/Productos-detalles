import getData from './getData.js'
import { showData} from './showData.js';



const  endpoint = 'http://localhost:4000/products/';

const element = document.querySelector('.list-group');

document.addEventListener('DOMContentLoaded',  () =>{
   const datos =  getData(endpoint);
   showData(datos, element);

})



element.addEventListener('click', async(e) =>{
    const id = e.target.id;
    const btnDetail = e.target.classList.contains('btn-outline-dark');

    if (btnDetail) {
        const lista = await getData(endpoint);
            const objeto = lista.find(list => list.id === Number(id))  //solo trae el primer valor
           localStorage.setItem("Detail", JSON.stringify(objeto))//almacenamos en localstorage

           window.location.href = "detail.html"
    }



})

