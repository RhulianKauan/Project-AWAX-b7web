
const btnBannerSlide = document.querySelectorAll('.pointer')

btnBannerSlide.forEach((button, index)=> {
    button.addEventListener('click', ()=> {
        const slider = document.querySelector('.sliders')
        
        btnBannerSlide.forEach((id)=> {
            id.classList.remove('active')
            button.classList.add('active')
        })
        
        switch (index) {
            case 0:
                slider.style.marginLeft = "0vw";
                break;
            case 1: 
                slider.style.marginLeft = "-100vw";
                break;
                
            default:
                slider.style.marginLeft = "-200vw";
                break;
        }
    })
})