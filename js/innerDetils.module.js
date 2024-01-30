import { hidaAndShow } from "./hida-show.module.js";

export class details {
    constructor(iid) {
        this.myId = iid

        this.display()
    }

    async display() {
        let apiD = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.myId}`)
        let response = await apiD.json();

console.log(response.meals[0]);
        
        let mi = response.meals[0]
        document.querySelector('.myBox').innerHTML = `
        <div class="img py-3 col-md-4 smallscreenDetails">
        <img src="${response.meals[0].strMealThumb}" alt="" class=" rounded-3  w-100">
        <h1 class= "p-3 w-100">${response.meals[0].strMeal}</h1>
    </div>

    <div class="content col-md-8">
        <h2>Instructions</h2>
        <p class="itemInstruction" >${response.meals[0].strInstructions}</p>
        <h2>Area : ${response.meals[0].strArea}</h2>
        <h2 class="pb-3">Category : ${response.meals[0].strCategory}</h2>
        <h2>Recipes :</h2>

        <ul class="recepies list-unstyled d-flex flex-wrap">
            ${mi.strIngredient1 != '' ? `<li>${mi.strMeasure1} ${mi.strIngredient1}</li>` : ''} 
            ${mi.strIngredient2 != '' ? `<li>${mi.strMeasure2} ${mi.strIngredient2}</li>` : ''} 
            ${mi.strIngredient3 != '' ? `<li>${mi.strMeasure3} ${mi.strIngredient3}</li>` : ''} 
            ${mi.strIngredient4 != '' ? `<li>${mi.strMeasure4} ${mi.strIngredient4}</li>` : ''} 
            ${mi.strIngredient5 != '' ? `<li>${mi.strMeasure5} ${mi.strIngredient5}</li>` : ''} 
            ${mi.strIngredient6 != '' ? `<li>${mi.strMeasure6} ${mi.strIngredient6}</li>` : ''} 
            ${mi.strIngredient7 != '' ? `<li>${mi.strMeasure7} ${mi.strIngredient7}</li>` : ''} 
            ${mi.strIngredient8 != '' ? `<li>${mi.strMeasure8} ${mi.strIngredient8}</li>` : ''} 
            ${mi.strIngredient9 != '' ? `<li>${mi.strMeasure9} ${mi.strIngredient9}</li>` : ''} 
            ${mi.strIngredient10 != '' ? `<li>${mi.strMeasure10} ${mi.strIngredient10}</li>` : ''} 
            ${mi.strIngredient11 != '' ? `<li>${mi.strMeasure11} ${mi.strIngredient11}</li>` : ''} 
            ${mi.strIngredient12 != '' ? `<li>${mi.strMeasure12} ${mi.strIngredient12}</li>` : ''} 
            ${mi.strIngredient13 != '' ? `<li>${mi.strMeasure13} ${mi.strIngredient13}</li>` : ''} 
            ${mi.strIngredient14 != '' ? `<li>${mi.strMeasure14} ${mi.strIngredient14}</li>` : ''} 
            ${mi.strIngredient15 != '' ? `<li>${mi.strMeasure15} ${mi.strIngredient15}</li>` : ''} 
            ${mi.strIngredient16 != '' ? `<li>${mi.strMeasure16} ${mi.strIngredient16}</li>` : ''} 
        </ul>

        <h2>Tags :</h2>
        <div class="tagsBox list-unstyled d-flex flex-wrap pb-3"></div>

        <a target='_blank' href="${response.meals[0].strSource}"><button class="btn btn-success">source</button></a>
        <a target='_blank' href="${response.meals[0].strYoutube}"><button class="btn btn-danger">youtupe</button></a>
    </div>
        ` ;

        let tags = response.meals[0].strTags
        let carto = ''
        if (tags != null) {
            tags = tags.split(',')
            for (const tag of tags) {
                carto += ` <li>${tag}</li>`
            }
            document.querySelector('.tagsBox').innerHTML = carto
        }

        $('.showItem').show()
        new hidaAndShow('.fake', '')




    }
}

