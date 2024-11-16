
fetch ('https://www.themealdb.com/api/json/v1/1/search.php?s')
.then(response => response.json())
.then(data => {
  // console.log(data)
  displaydata(data);
})
.catch(error => {
  console.log(error)
});

// function to display meals on the page
function displaydata(data){
 const contain = document.getElementById('secondmainsection');
data.meals.map((item) => {
  contain.innerHTML += `
        <div class="meal">
            <h3>${item.strMeal}</h1>
            <img src="${item.strMealThumb}" alt="${item.strMeal}">
            <p>${item.strInstructions}</p>
        </div>`;
});
};
//*************************************************** */ fetch meals when user clicks on the search icon*****************************************************
document.querySelector('.fa-magnifying-glass').addEventListener('click',function(){
  const searchTerm = document.getElementById('search').value;
  searchMeals(searchTerm);
})

// function to search meals using the Api
function searchMeals(searchTerm){
  fetch (`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchTerm}`)
  .then(response => response.json())
  .then(data =>{
    document.getElementById('secondmainsection').innerHTML ='';
    if(data.meals){
      displaydata(data);
    }else{
      document.getElementById('secondmainsection').innerHTML = '<p style ="color:white;">No Meals found</p>';
    }
  })
  .catche(error => console.error('Error fetching data', error));
}

// 3. ************************Function to display meals on the page********************************************
function displaydata(data) {
  const contain = document.getElementById('secondmainsection');
  data.meals.forEach(item => {
      contain.innerHTML += `
          <div class="meal">
              <h3>${item.strMeal}</h3>
              <img src="${item.strMealThumb}" alt="${item.strMeal}">
              <p>${item.strInstructions.substring(0, 100)}...</p>
          </div>`;
  });
}


// *****************************************************HOME BUTTON***************************************************************
function navigatetohome(){
  window.location.href="index.html"
}

// ********************************  Rating   ****************************************************************************************
function displaydata(data) {
  const contain = document.getElementById('secondmainsection');
  contain.innerHTML = ''; // Clear existing content

  data.meals.forEach(item => {
      contain.innerHTML += `
          <div class="meal">
              <h3>${item.strMeal}</h3> <!-- Dish name -->
              <img src="${item.strMealThumb}" alt="${item.strMeal}">
              <div class="rating" data-item="${item.idMeal}">
                  <span class="star" data-value="1">&#9733;</span>
                  <span class="star" data-value="2">&#9733;</span>
                  <span class="star" data-value="3">&#9733;</span>
                  <span class="star" data-value="4">&#9733;</span>
                  <span class="star" data-value="5">&#9733;</span>
                  <p class="rating-value">Rating: Not Rated</p>
              </div>
          </div>`;
  });
}



document.addEventListener('click', function(e) {
  if (e.target.classList.contains('rate-button')) {
      const ratingValue = e.target.getAttribute('data-value');
      const ratingDisplay = e.target.parentElement.querySelector('.rating-value');
      ratingDisplay.textContent = `Rating: ${ratingValue} out of 5`;
  }
});


document.addEventListener('click', function(e) {
  if (e.target.classList.contains('star')) {
      const stars = e.target.parentElement.querySelectorAll('.star');
      const ratingDisplay = e.target.parentElement.querySelector('.rating-value');
      const ratingValue = e.target.getAttribute('data-value');

      // Remove 'selected' class from all stars
      stars.forEach(star => {
          star.classList.remove('selected');
      });

      // Add 'selected' class to the clicked star and all previous stars
      for (let i = 0; i < ratingValue; i++) {
          stars[i].classList.add('selected');
      }
      // Update the displayed rating value***************
      ratingDisplay.textContent = `Rating: ${ratingValue} out of 5`;
    
      
  }
});

// Price range adjust *******************************************

function priceFilter(itemprice) {
  return itemprice.sort((a, b) => {
    let priceA = parseFloat(a.price.replace('$', '').trim());
    let priceB = parseFloat(b.price.replace('$', '').trim());
    return priceA - priceB; // Ascending order
  });
}
