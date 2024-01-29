export class Myregex {
    constructor() {

        this.nameReg = /^([a-zA-Z0-9_]{2,8})$/
        this.passReg = /^([a-zA-Z0-9_]{6,16})$/
        this.phoneReg = /^([0-9]{11})$/
        this.mailReg = /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/
        this.ageReg = /^([1-9][0-9])$/

        this.thebutton()
    }

    isNameRegex() {
        if (this.nameReg.test($('.name').val())) {
            $('.name').addClass("is-valid").removeClass('is-invalid')
            $('.nameAlert').addClass('d-none')

            return true
        }
        else {
            $('.name').addClass('is-invalid').removeClass("is-valid")
            $('.nameAlert').removeClass('d-none')

        }
    }

    isphoneRegex() {
        if (this.phoneReg.test($('.phone').val())) {
            $('.phone').addClass("is-valid").removeClass('is-invalid')
            $('.phoneAlert').addClass('d-none')

            return true
        }
        else {
            $('.phone').addClass('is-invalid').removeClass("is-valid")
            $('.phoneAlert').removeClass('d-none')

        }
    }

    ispassRegex() {
        if (this.passReg.test($('.pass1').val())) {
            $('.pass1').addClass("is-valid").removeClass('is-invalid')
            $('.passAlert').addClass('d-none')

            return true
        }
        else {
            $('.pass1').addClass('is-invalid').removeClass("is-valid")
            $('.passAlert').removeClass('d-none')
        }
    }

    ismailRegex() {
        if (this.mailReg.test($('.mail').val())) {
            $('.mail').addClass("is-valid").removeClass('is-invalid')
            $('.emailAlert').addClass('d-none')


            return true
        }
        else {
            $('.mail').addClass('is-invalid').removeClass("is-valid")
            $('.emailAlert').removeClass('d-none')

        }
    }

    isgeRegex() {
        if (this.ageReg.test($('.age').val())) {
            $('.age').addClass("is-valid").removeClass('is-invalid')
            $('.ageAlert').addClass('d-none')

            return true
        }
        else {
            $('.age').addClass('is-invalid').removeClass("is-valid")
            $('.ageAlert').removeClass('d-none')

        }
    }

    ispass2Regex() {
        if ($('.pass2').val() == $('.pass1').val()) {
            $('.pass2').addClass("is-valid").removeClass('is-invalid')
            $('.pass2Alert').addClass('d-none')

            return true
        }
        else {
            $('.pass2').addClass('is-invalid').removeClass("is-valid")
            $('.pass2Alert').removeClass('d-none')

        }
    }

    thebutton() {
        if (this.isNameRegex() && this.isphoneRegex() && this.ispassRegex() && this.ismailRegex() && this.isgeRegex() && this.ispass2Regex()) {
            $('.contactBtn').removeClass('disabled')
            $('.contactBtn').addClass('px-4')

        }
        else {
            $('.contactBtn').addClass('disabled')
            $('.contactBtn').removeClass('px-4')
        }
    }

}



