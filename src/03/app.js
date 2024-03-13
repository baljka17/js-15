const reviews = [
  {
    id: 1,
    img: "https://source.unsplash.com/random/300×300/?portrait,man",
    name: "John Doe",
    job: "Software developer",
    info: "Amet consectetur adipisicing elit. A ducimus velit earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat possimus quidem.",
  },
  {
    id: 2,
    img: "https://source.unsplash.com/random/300×300/?portrait,girl",
    name: "Sarah Jones",
    job: "UX Designer",
    info: "Lorem ipsum dolor sit. A ducimus velit earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat possimus quidem.",
  },
  {
    id: 3,
    img: "https://source.unsplash.com/random/300×300/?portrait,elder",
    name: "Sebastian Doe",
    job: "Director",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat possimus quidem.",
  },
  {
    id: 4,
    img: "https://source.unsplash.com/random/300×300/?portrait,lady",
    name: "Jannifer Doe",
    job: "Manager",
    info: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. A ducimus velit earum. Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores repellat possimus quidem.",
  },
];

const imgContainer = document.getElementById("img-container");
const img = document.getElementById("person-img");
const author = document.getElementById("author");
const info = document.getElementById("info");
const job = document.getElementById("job");

const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const rndBtn = document.querySelector(".random");

let currentItem = 1;

window.addEventListener("DOMContentLoaded", function () {
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  currentItem = (currentItem + 4) % 4;
  console.log(currentItem);
  showPerson(currentItem);
});

nextBtn.addEventListener("click", function () {
  currentItem++;
  currentItem = currentItem % 4;
  console.log(currentItem);
  showPerson(currentItem);
});

let rndGenerator = () => {
  const rnd = Math.floor(Math.random() * reviews.length);
  return rnd !== currentItem ? rnd : rndGenerator();
};

rndBtn.addEventListener("click", function () {
  currentItem = rndGenerator();
  console.log(currentItem);
  showPerson(currentItem);
});

function showPerson(person) {
  const item = reviews[person];
  const width = 300,
    height = 300;
  img.src = item.img;
  imgContainer.innerHTML =
    '<div id="person-img" alt="Person" class="w-[160px] h-[160px] rounded-full bg-sky-300 absolute left-[8px] -top-[4px] z-0"></div><img class="w-[160px] h-[160px] rounded-full bg-sky-700 mx-auto z-10 relative" src="https://source.unsplash.com/random/' +
    width +
    "x" +
    height +
    "?person,portrait" +
    '"/>';
  author.innerHTML = item.name;
  info.innerHTML = item.info;
  job.innerHTML = item.job;
}
