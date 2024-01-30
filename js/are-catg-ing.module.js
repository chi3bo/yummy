import { home } from "./home.module.js";

export class Sections {
    constructor(searchBy) {
        this.searchBy = searchBy

    }


    async displaySection() {
        let Api = await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?${this.searchBy}=list`)
        let response = await Api.json()
        console.log(response);


        let cartoona = ''
        if (this.searchBy == 'a') {
            for (let i = 0; i < response.meals.length; i++) {
                cartoona += `
                
                <div id="${response.meals[i].strArea}" class="col-md-3 col-sm-4 areaItem ">
                    <div class="innerArea">
                        <i class="fa-solid fa-earth-americas"></i>
                        <h3>${response.meals[i].strArea}</h3>
                    </div>
                </div>
                `
            }
            document.querySelector('.Areas').innerHTML = cartoona
        }

        if (this.searchBy == 'i') {
            for (let i = 0; i < 20; i++) {
                cartoona += `
                
                <div id="${response.meals[i].strIngredient}" class="col-md-3 col-sm-4  overflow-hidden ">
                    <div class=" ingItem ">
                        <img src="https://www.themealdb.com/images/ingredients/${response.meals[i].strIngredient}.png"  alt="s" class=" ingImg rounded-3">
                        <h3>${response.meals[i].strIngredient}</h3>
                        <p>${response.meals[i].strDescription.split(" ",17).join(" ")} . . .</p>
                    </div>
                </div>
                `
            }
            document.querySelector('.ingr').innerHTML = cartoona

        }


        $('.areaItem').click(function () { new home(this.id, 'a', 'filter', 'Areas') })
        $('.ingItem').click(function () { new home(this.id, 'i', 'filter', 'ingr') })

    }


    async displayCateg() {
        let Api = await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
        let response = await Api.json()
        console.log(response.categories[0]);


        let cartoona = ''
        for (let i = 0; i < response.categories.length; i++) {
            cartoona += `       
            <div id="${response.categories[i].strCategory}" class=" col-md-3 col-sm-4 categItem  ">
            <div class=" innercateg position-relative overflow-hidden rounded-3">
                <img src="${response.categories[i].strCategoryThumb}"  alt="" class="w-100 rounded-3">
        
                <div class="layer flex-column overflow-hidden  ">
                    <h3>${response.categories[i].strCategory}</h3>
                    <p>${response.categories[i].strCategoryDescription.split(" ",20).join(" ")}</p>
                </div>
        
            </div>
        
            </div>
            `
        }
        document.querySelector('.categories').innerHTML = cartoona



        $('.categItem').click(function () { new home(this.id, 'c', 'filter', "categories") })


        console.log(response.categories[2].strCategoryDescription.split(" ",20) );

    }

}




