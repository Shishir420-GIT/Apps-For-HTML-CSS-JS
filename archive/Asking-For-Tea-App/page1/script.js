const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('click', () => {
    alert('Nice try')
    window.close()
})

yesBtn.addEventListener('click', () => {
    window.location.href = 'nextPage.html';
})

noBtn.addEventListener('mouseover', () => {

    const x = Math.floor(Math.random()*750);
    const y = Math.floor(Math.random()*500);

    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";

})
