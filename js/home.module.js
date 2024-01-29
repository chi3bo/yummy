import { details } from "./innerDetils.module.js"

export class home {
    constructor(searchkey , seMethod ,seType , place) {
        this.searchkey = searchkey
        this.seMethod = seMethod
        this.seType = seType
        this.place = place
        this.getdata()
    }

    async getdata() {
        let api = `https://www.themealdb.com/api/json/v1/1/${this.seType}.php?${this.seMethod}=${this.searchkey}`
        let response = await fetch(api)
        let allData = await response.json()
        let customLegnth = 0
        if (allData.meals.length <= 20) {
            customLegnth = allData.meals.length
        }
        else {
            customLegnth = 20
        }

        let cartona = ''
        for (let i = 0; i < customLegnth; i++) {
            cartona += `
        
                <div id="${allData.meals[i].idMeal}" class=" col-md-3 col-sm-4 item ">
                    <div class="position-relative overflow-hidden rounded-3">
                        <img src="${allData.meals[i].strMealThumb}" alt="s" class="w-100   ">
                        <div class="layer ">
                        <h3 class=" text-black ">${allData.meals[i].strMeal}</h3>
                        </div>
                    </div>

                </div>
                `
        }
        document.querySelector(`.${this.place}`).innerHTML = cartona;



        // =====================   privew item details   ==================
        $('.item').click(function () { new details(this.id) })

    }

}



