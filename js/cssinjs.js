
// const section = document.getElementsByTagName('section');
const section = document.querySelectorAll('section');
// console.log(section);
for (const sec of section) {
    // console.log(sec);
    sec.style.backgroundColor = 'lightblue';
    sec.style.border = '3px solid green';
    sec.style.marginBottom = '5px';
    sec.style.borderRadius = '15px';
    sec.style.padding = '10px';
}



//dynamic class
for (const sec of section) {
    // sec.classList.add('section-card');
}