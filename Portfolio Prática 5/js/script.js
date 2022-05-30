const toggleTheme = document.getElementById('toggle-theme');
const toggleIcon = document.getElementById('toggle-icon');
const toggleText = document.getElementById('toggle-text');
const colors = document.getElementById('colors');

const property=document.documentElement.style;

toggleTheme.addEventListener('click',()=>{

    document.body.classList.toggle('dark');

    if(toggleIcon.src.includes('dark_mode.svg')){
        toggleIcon.src = 'assets/icons/light_mode.svg';
        toggleText.textContent = 'Light Mode';
    }else{
        toggleIcon.src = 'assets/icons/dark_mode.svg';
        toggleText.textContent = 'Dark Mode';
    }

})

colors.addEventListener('click',(e)=>{
    // console.log(e.target.dataset.color);
    property.setProperty('--primary-color',e.target.dataset.color);
})