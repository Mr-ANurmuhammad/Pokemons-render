let slicedArray = pokemons.slice(0, 10);
console.log(slicedArray);

let elList = document.querySelector(".list");


function renderpokemons (array) {

   elList.innerHTML = null;
   elList.classList.add("d-flex");


   for (let item of array) {

      let newLi =  document.createElement("li");
      newLi.classList.add("d-inlinem");
      newLi.classList.add("shadow-lg");
      newLi.classList.add("mb-5");
      newLi.classList.add("p-3");
      newLi.classList.add("bg-body");
      newLi.classList.add("rounded");
      let newimg = document.createElement("img");
      newimg.src = item.img;
      let newH3 = document.createElement("h3");
      newH3.textContent = item.name;
      

      newLi.appendChild(newimg);
      newLi.appendChild(newH3);

      elList.appendChild(newLi)

   }

}


renderpokemons(slicedArray)