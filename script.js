totalSlides = document.querySelectorAll('.slider__item').length
currentSlide = 0

document.querySelector('.slider__width').style.width = `calc(100vw * ${totalSlides})`
document.querySelector('.slider__controls').style.height = `${document.querySelector('.slider').clientHeight}px`

function goPrev() {
    currentSlide--
    if (currentSlide < 0) {
        currentSlide = totalSlides - 1
    }
    updateMargin()
}

function goNext() {
    currentSlide++
    if (currentSlide > (totalSlides - 1)) {
        currentSlide = 0
    }
    updateMargin()
}

function updateMargin() {
    let sliderItemWidth = document.querySelector('.slider__item').clientWidth
    let newMargin = currentSlide * sliderItemWidth
    document.querySelector('.slider__width').style.marginLeft = `-${newMargin}px`
}