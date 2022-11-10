const searchField = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    inputField.value = '';

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`
    fetch(url)
        .then(res => res.json())
        .then(data => displaySerachResult(data.meals));
}
const displaySerachResult = meals => {
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div class="card container">
                    <img src="${meal.strMealThumb}" class="card-img-top img-fluid" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0,150)}</p>
                    </div>
                </div>
        `
        searchResult.appendChild(div)
        console.log(meal);

    });
    // console.log(meals)
}