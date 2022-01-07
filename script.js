console.log("Hello from script.js")


$(document).ready(function () {

    $('.one').click(function () {
        console.log("Inside one - mouse clicked")
        let c = document.querySelector('.one')
        c.innerText = "Hello from div 1"

        $(this).css('background-color', "red")
        $(this).addClass("red").removeClass('blue')

    })

    $('.change-to-yellow').click(function () {

        $('.row').children().each(function () {
            $(this).css('background-color', "yellow")
        })

    })

    let isDown = false
    $(document).mousedown(function () {
        isDown = true
    }).mouseup(function () {
        isDown = false
    })

    $('.box').hover(function () {
        if (isDown) {
            let currentSize = $('.box').css('font-size');
            currentSize = parseFloat(currentSize) * 1.5;
            $(this).css('font-size', currentSize)
        } else {
            let currentSize = $('.box').css('font-size');
            currentSize = 16;
            $(this).css('font-size', currentSize)
        }
    })

    $('.col').click(function () {
        let c = document.querySelector("#colors")
        console.log(c.value)
    })

})