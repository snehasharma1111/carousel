const slides = document.getElementsByClassName("mySlides");
const slideshowContainer = document.querySelector(".slideshow-container");
const dots = document.querySelectorAll(".dot");

const images = [
	{
		img: "https://images.pexels.com/photos/4101555/pexels-photo-4101555.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		text: "Caption 1",
	},
	{
		img: "https://images.pexels.com/photos/2387873/pexels-photo-2387873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		text: "Caption 2",
	},
	{
		img: "https://images.pexels.com/photos/3293148/pexels-photo-3293148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
		text: "Caption 3",
	},
];

let allImageDivs = "";
let allDots = "";

const insertImages = () => {
	for (const [i, image] of images.entries()) {
		allImageDivs += `
            <div class="mySlides fade">
        			<img
        				src="${image.img}"
        				alt="${image.text}"
        				width="100%"
        			/>
        		<div class="text">${image.text}</div>
        	</div>
        `;
		allDots += `
            <span class="dot" onclick="currentSlide(${i + 1})"></span>
        `;
	}
	allImageDivs += `
        <a class="prev fas fa-arrow-left" onclick="plusSlides(-1)"></a>
		<a class="next fas fa-arrow-right" onclick="plusSlides(1)"></a>
    `;
	slideshowContainer.innerHTML = allImageDivs;
	document.querySelector(".dots").innerHTML = allDots;
};

let counter = 1;
const plusSlides = (n) => slider((counter += n));
const currentSlide = (n) => slider((counter = n));
const slider = (n) => {
	let i;
	if (n > slides.length) counter = 1;
	if (n < 1) counter = slides.length;
	for (i = 0; i < slides.length; ++i) slides[i].style.display = "none";
	for (i = 0; i < dots.length; ++i)
		dots[i].className = dots[i].className.replace("active", "");
	slides[counter - 1].style.display = "flex";
};

document.addEventListener("DOMContentLoaded", () => {
	insertImages();
	slider(counter);
});
