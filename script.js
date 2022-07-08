let introduce = document.querySelector('.tesla')
let tesla = introduce.querySelector('.tesla_photo')
let door = introduce.querySelector('.door')
let salon = document.querySelector('.salonee')
let btn = salon.querySelector('.btns')
let int = btn.querySelector('.right')



let stick = int.querySelector('.stick')

let rnd = stick.querySelector('.round')
let left = btn.querySelector('.left')


let round_black = left.querySelector('.black')
let round_white = left.querySelector('.white')
let round_milk = left.querySelector('.milk')
let salon_color = salon.querySelector('.salon_photo')

door.onclick = () => {
    tesla.classList.remove('tesla_photo')
    tesla.classList.add('tesla_photo_post')

    function something() {
        introduce.classList.toggle('tesla_none')
        salon.classList.remove('salonee')
        salon.classList.add('s')
    }
    setTimeout(something, 1000)

    stick.classList.remove('stick_post')
    stick.classList.add('stick')

    rnd.classList.remove('round_post')
    rnd.classList.add('round')

}

round_black.onclick = () => {
    salon_color.classList.add('salon_photo_black')
    salon_color.classList.remove('salon_photo_white')
    salon_color.classList.remove('salon_photo_milk')
}

round_white.onclick = () => {
    salon_color.classList.add('salon_photo_white')
    salon_color.classList.remove('salon_photo_black')
    salon_color.classList.remove('salon_photo_milk')
}

round_milk.onclick = () => {
    salon_color.classList.add('salon_photo_milk')
    salon_color.classList.remove('salon_photo_black')
    salon_color.classList.remove('salon_photo_white')
}

rnd.onclick = () => {
    stick.classList.remove('stick')
    stick.classList.add('stick_post')
    rnd.classList.remove('round')
    rnd.classList.add('round_post')

    function stick() {
        introduce.classList.toggle('tesla_none')
        tesla.classList.remove('tesla_photo_post')
        tesla.classList.add('tesla_photo')
        salon.classList.remove('s')
        salon.classList.add('salonee')
    }
    setTimeout(stick, 50)

}