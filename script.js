totalSlides = document.querySelectorAll('.slider__item').length
currentSlide = 0
bdgImg = ''
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


function hideTitle(e) {
    var styles = window.getComputedStyle(e.target)
    bgdImg = styles.backgroundImage
    e.target.style.backgroundImage = 'none'
    e.target.style.backgroundColor = '#171f36'
    setTimeout(()=> {
        e.target.style.backgroundColor = ' #222E50'
    },500)
    e.target.querySelector('.title').style.display = 'none'
    e.target.querySelector('.subtitle').style.display = 'block'
}

function showTitle(e) {
    e.target.style.backgroundImage = bgdImg
    e.target.style.backgroundColor = 'none'
    e.target.querySelector('.title').style.display = 'inline-block'
    e.target.querySelector('.subtitle').style.display = 'none'
}