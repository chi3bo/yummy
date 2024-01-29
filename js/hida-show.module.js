export class hidaAndShow {
    constructor(show, notThe) {
        this.show = show
        this.notThe = notThe

        this.hideAndShow()
    }


    hideAndShow() {

        let tohide = $(`${this.show}`).siblings().not(`${this.notThe}`).hide()
        let toShow = $(`${this.show}`).show()



        let leftbarwidth = $('.left').innerWidth()
        $('.sideNav').animate({ "left": `-${leftbarwidth}px` })
        $('.fa-bars').show();
        $('.fa-xmark').hide()
        $('.sideItem5').animate({ top: "200px", opacity: 0 }, 100)
        $('.sideItem4').animate({ top: "200px", opacity: 0 }, 200)
        $('.sideItem3').animate({ top: "200px", opacity: 0 }, 300)
        $('.sideItem2').animate({ top: "200px", opacity: 0 }, 400)
        $('.sideItem1').animate({ top: "200px", opacity: 0 }, 500)
        

            ;
    }



}