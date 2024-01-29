import { hidaAndShow } from "./hida-show.module.js";

export class details {
    constructor(iid) {
        this.myId = iid

        this.display()
    }

    async display() {
        let apiD = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${this.myId}`)
        let response = await apiD.json();
        let m = response.meals[0]
        console.log(m.strIngredient20);
        document.querySelector('.myBox').innerHTML = `
        <div class="img py-3 col-md-4 smallscreenDetails">
        <img src="${response.meals[0].strMealThumb}" alt="" class=" rounded-3  w-100">
        <h2 class= "p-3 w-100">${response.meals[0].strMeal}</h2>
    </div>

    <div class="content col-8">
        <h2>Instructions</h2>
        <p>${response.meals[0].strInstructions}</p>
        <h2>Area : ${response.meals[0].strArea}</h2>
        <h2>Category : ${response.meals[0].strCategory}</h2>
        <h2>Recipes :</h2>

        <ul class="recepies list-unstyled d-flex flex-wrap">
            ${m.strIngredient1 != '' ? `<li>${m.strIngredient1}</li>` : ''} 
            ${m.strIngredient2 != '' ? `<li>${m.strIngredient2}</li>` : ''} 
            ${m.strIngredient3 != '' ? `<li>${m.strIngredient3}</li>` : ''} 
            ${m.strIngredient4 != '' ? `<li>${m.strIngredient4}</li>` : ''} 
            ${m.strIngredient5 != '' ? `<li>${m.strIngredient5}</li>` : ''} 
            ${m.strIngredient6 != '' ? `<li>${m.strIngredient6}</li>` : ''} 
            ${m.strIngredient7 != '' ? `<li>${m.strIngredient7}</li>` : ''} 
            ${m.strIngredient8 != '' ? `<li>${m.strIngredient8}</li>` : ''} 
            ${m.strIngredient9 != '' ? `<li>${m.strIngredient9}</li>` : ''} 
            ${m.strIngredient10 != '' ? `<li>${m.strIngredient10}</li>` : ''} 
            ${m.strIngredient11 != '' ? `<li>${m.strIngredient11}</li>` : ''} 
            ${m.strIngredient12 != '' ? `<li>${m.strIngredient12}</li>` : ''} 
            ${m.strIngredient13 != '' ? `<li>${m.strIngredient13}</li>` : ''} 
            ${m.strIngredient14 != '' ? `<li>${m.strIngredient14}</li>` : ''} 
            ${m.strIngredient15 != '' ? `<li>${m.strIngredient15}</li>` : ''} 
            ${m.strIngredient16 != '' ? `<li>${m.strIngredient16}</li>` : ''} 
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

