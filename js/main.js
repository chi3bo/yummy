import { Sections } from "./are-catg-ing.module.js";
import { hidaAndShow } from "./hida-show.module.js";
import { home } from "./home.module.js";
import { Myregex } from "./regex.module.js";






// ------    display main meals     -------
let homeData = new home('', 's', 'search', 'myContent')
new hidaAndShow('.home', '');
$('.showItem').hide()





// --------     normal searching .. method = 's'    ---------
$('#Search').click(function () { new hidaAndShow('.searchPage', ''); $('.showItem').hide() })
$('.input1').keyup(function () { new home(this.value, 's', 'search', 'searchContent') })

// ------searching by first letter .. method = 'f' ( explain in the end  )---------
$('.input2').keyup(function () { new home(this.value, this.value == '' ? 's' : 'f', 'search', 'searchContent') })






// -------display all areas .. method = 'a'  -----------
$('#Area').click(function () {
    new Sections('a').displaySection()
    new hidaAndShow('.AreasPage', '');
    $('.showItem').hide()
})



// -------display all ingrediants .. method = 'i' -----------
$('#Ingredients').click(function () {
    new Sections('i').displaySection()
    new hidaAndShow('.ingrPage', '');
    $('.showItem').hide()
})




// -------display all categories -----------
$('#Categories').click(function () {
    new hidaAndShow('.categoriesPage', '');
    new Sections().displayCateg()
    $('.showItem').hide()
})




// ============ contact ================
$('#Contact').click(function () {
    new hidaAndShow('.contact', '');
    $('.showItem').hide()
})

$(".name").keyup(function () { new Myregex().isNameRegex() })
$(".phone").keyup(function () { new Myregex().isphoneRegex() })
$(".mail").keyup(function () { new Myregex().ismailRegex() })
$(".pass1").keyup(function () { new Myregex().ispassRegex() })
$(".pass2").keyup(function () { new Myregex().ispass2Regex() })
$(".age").keyup(function () { new Myregex().isgeRegex() })
// =====================================



// =============  side bar  =================
let leftbarwidth = $('.left').innerWidth()
$('.sideNav').animate({ "left": `-${leftbarwidth}px` })

$('.fa-xmark').click(function () {
    $('.sideNav').animate({ "left": `-${leftbarwidth}px` });
    $('.fa-bars').show();
    $('.fa-xmark').hide()
    $('.sideItem5').animate({ top: "200px", opacity: 0 }, 100)
    $('.sideItem4').animate({ top: "200px", opacity: 0 }, 200)
    $('.sideItem3').animate({ top: "200px", opacity: 0 }, 300)
    $('.sideItem2').animate({ top: "200px", opacity: 0 }, 400)
    $('.sideItem1').animate({ top: "200px", opacity: 0 }, 500)

})

$('.fa-bars').click(function () {
    $('.sideNav').animate({ "left": `0px` }, 'slow');
    $('.fa-xmark').show();
    $('.fa-bars').hide()
    $('.sideItem1').animate({ top: "0", opacity: 1 }, 700)
    $('.sideItem2').animate({ top: "0", opacity: 1 }, 800)
    $('.sideItem3').animate({ top: "0", opacity: 1 }, 900)
    $('.sideItem4').animate({ top: "0", opacity: 1 }, 1000)
    $('.sideItem5').animate({ top: "0", opacity: 1 }, 1100)
})
// ===========================================






























/*
line 12 & 13
==================   explain method 'f' and more details   ===========================
when user delete f-letter if value is empty >>> make method 's' to preview all data
لو الفاليو فاضية ؟ اه هيحط الميثود اس : لا هيحط اف و ده عشان الاس بتعرض لو فاضية الاف لا تعرض
*/
