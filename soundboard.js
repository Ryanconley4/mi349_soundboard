var applause = document.getElementById("applause_button")
var baseball = document.getElementById("baseball_button")
var car = document.getElementById("car_button")

var applause_audio = document.getElementById("applause_audio")
var baseball_audio = document.getElementById("baseball_audio")
var car_audio = document.getElementById("car_audio")

applause.addEventListener('click', function () {
    console.log("Applause button clicked")
    applause_audio.play()
})

baseball.addEventListener('click', function () {
    console.log("Baseball button clicked")
    baseball_audio.play()
})

car.addEventListener('click', function () {
    console.log("Car button clicked")
    car_audio.play()
})
