//toggle icon 
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


//scroll section
let sections=document.querySelectorAll('#menu-icon');
let navLinks =  document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');

}

window.onscroll =() =>{
    sections.forEach(sec=> {
        let top=window.scrollY;
        let offset= sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top>=offset && top <offset+height){
            //active navbar links
          navLinks.forEach(links =>{
            links.classList.remove('active');
            document.querySelector('header nav a[href*=' + id +']').classList.add('active');
          })  
        }
    });

    //sticky header 
    let header= document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);
    //remove toggle icon and navbar and when click navbar links(scroll);
    menuIcon.classList.remove('bx-x');
        navbar.classList.remove('active');


}
 const readMoreBtn = document.getElementById('readMoreBtn');
const aboutText = document.getElementById('aboutText');

const shortText = "I am a creative professional with nearly 3 years of experience in graphic design and a fresh, growing skill set in web development. I specialize in crafting visually engaging designs and building user-friendly websites that provide seamless online experiences.";
const fullText = `As a passionate graphic designer with nearly 3 years of hands-on experience, I’ve honed my skills in creating compelling visuals that connect with audiences. My expertise spans across social media designs, branding, print, and more. I also bring a fresh perspective as a new web developer, committed to delivering well-structured, responsive, and interactive websites. My dual experience allows me to bridge the gap between stunning design and functional web development, ensuring a holistic approach to each project. Whether you're looking for a striking visual design or a fully functional website, I'm here to help bring your ideas to life with a creative, professional touch.`;

let isExpanded = false;

readMoreBtn.addEventListener('click', function (e) {
    e.preventDefault(); // পেজ রিফ্রেশ যেন না হয়
    if (!isExpanded) {
        aboutText.innerText = fullText;
        readMoreBtn.innerText = 'Read Less';
        isExpanded = true;
    } else {
        aboutText.innerText = shortText;
        readMoreBtn.innerText = 'Read More';
        isExpanded = false;
    }
});
