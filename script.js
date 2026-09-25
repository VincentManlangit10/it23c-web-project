//Select HTML elements
const themeButton = document.getElementById('theme-btn');
const body = document.body;

//List for click event
themeButton.addEventListener('click' ,() => {
    //Toggle the dark-mode class on the body tag
    body.classList.toggle('dark-=mode');

    //Update button label dynamically
    if (body.classList.contains('dark-mode')){
        themeButton.textContent = 'Swtich to light Mode';
    }else{
        themeButton.textContent = 'Switch to dark-mode';
    }

});