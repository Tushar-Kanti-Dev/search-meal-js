const searchField = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = '';
    if (searchText == '') {
        const noInput = document.getElementById('all-meal');
        const p = document.createElement('p');
        p.innerText = `What You Want`;
        noInput.appendChild(p);
    } else {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
        fetch(url)
            .then(res => res.json())
            .then(data => displaySerachResult(data.meals));
    }


}
const displaySerachResult = meals => {
    console.log(meals)
    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';
    // if condition not working 
    if (meals.length != 0) {
        // alert('not found')
        console.log(meals.length);
    } else {
        meals.forEach(meal => {

            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card container">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                    </div>
                </div>
        `
            searchResult.appendChild(div)
                // console.log(meal);

        });
    }
    // console.log(meals)
}
const loadMealDetail = mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetails(data.meals[0]))
        // console.log(url);
}
const displayMealDetails = meal => {
    const randomDisplay = document.getElementById('card');
    const div = document.createElement('div');
    div.classList.add('row');
    div.innerHTML = `
    <div class="col-md-5">
                    <img src="${meal.strMealThumb}" class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-7">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                    </div>
                </div>
    `;
    randomDisplay.appendChild(div);

    // console.log(meal);
}