const tods = document.getElementById('button-skills') as HTMLButtonElement
const skillss = document.getElementById('skills') as HTMLElement

tods.addEventListener('click',() => {
    if(skillss.style.display ==='none'){
        skillss.style.display = 'block'
    }
    else{
        skillss.style.display ='none'

    }
});

