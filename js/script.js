const images = [
    {
        url: 'http://www.viaggiareonline.it/wp-content/uploads/2014/11/sweden_148857365.jpg',
        title: 'Svezia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1513757_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Perù',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://img.itinari.com/pages/images/original/0d3ed180-d22d-48e8-84df-19c4d888b41f-62-crop.jpg?ch=DPR&dpr=2.625&w=1600&s=7ebd4b5a9e045f41b4e0c7c75d298d6c',
        title: 'Chile',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://static1.evcdn.net/images/reduction/1583177_w-1920_h-1080_q-70_m-crop.jpg',
        title: 'Argentina',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.sanity.io/images/24oxpx4s/prod/ed09eff0362396772ad50ec3bfb728d332eb1c30-3200x2125.jpg?w=1600&h=1063&fit=crop',
        title: 'Colombia',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    },
    {
        url: 'https://cdn.theatlantic.com/thumbor/47zvirkGdVhgHefPrzCT4esAyBQ=/900x568/media/img/photo/2012/05/scenes-from-brazil/b01_05118020/original.jpg',
        title: 'Brazil',
        description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam.'
    }
];

const slidesWrapperEl =document.querySelector('div.my-carousel-images');

let activeIndex = 0;

images.forEach((element, index) => {
    const classesForActiveSlide = (index === activeIndex) ? 'active' : '';
    slidesWrapperEl.innerHTML += generateNewSlide(element.url, element.title, element.description, index, classesForActiveSlide);
});

document.querySelector('#btn-prev').addEventListener('click', function(){
    if (--activeIndex < 0){
        activeIndex = images.length - 1;
    }

    changeToSlide(activeIndex);
})


document.querySelector('#btn-next').addEventListener('click', function(){
    if (++activeIndex >= images.length){
        activeIndex = 0;
    }

    changeToSlide(activeIndex);
})










// Functions

function generateNewSlide(imgSrc, title, description, index, classesToAdd ){
    return `<div class="my-carousel-item ${classesToAdd}" carousel-item="${index}">
        <img class="img-fluid" src="${imgSrc}" alt="${title}'s picture">
        <div class="item-description px-3">
            <h2>
                ${title}
            </h2>
            <p>
                ${description}
            </p>
        </div>
    </div>`;
}



function changeToSlide(newIndex){
    document.querySelector('div.my-carousel-item.active').classList.remove('active');

    document.querySelector('div.my-carousel-item[carousel-item="' + newIndex +'"]').classList.add('active');
}


