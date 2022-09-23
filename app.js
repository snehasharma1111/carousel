const slides=document.getElementsByClassName("mySlides");
const dots=document.getElementsByClassName("dot");
let counter=1;
slider(counter);
function plusSlides(n)
{
    slider(counter+=n);
}
function currentSlide(n)
{
    slider(counter=n);
}
function slider(n)
{
    let i;
    if(n>slides.length)
    {
        counter=1;
    }
    if(n<1)
    {
        counter=slides.length;
    }
    for(i=0;i<slides.length;++i)
    {
        slides[i].style.display="none";
    }
    for(i=0;i<dots.length;++i)
    {
        dots[i].className=dots[i].className.replace("active","");
    }
    slides[counter-1].style.display="flex";
    dots[counter-1].className+=" active";
}