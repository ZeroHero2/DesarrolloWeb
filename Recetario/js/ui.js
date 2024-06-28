const UI = {
    renderRecipes(recipes) {
        const recipeList = document.getElementById('recipe-list');
        recipeList.innerHTML = '';

        recipes.forEach(recipe => {
            const recipeDiv = document.createElement('div');
            recipeDiv.classList.add('recipe');
            recipeDiv.innerHTML = `
                <h2>${recipe.name}</h2>
                <p><strong>Información nutrimental:</strong> ${recipe.nutrition}</p>
                <p><strong>Recomendaciones:</strong> ${recipe.recommendation}</p>
                <button onclick="App.editRecipe('${recipe.id}')">Editar</button>
                <button onclick="App.deleteRecipe('${recipe.id}')">Eliminar</button>
            `;
            recipeList.appendChild(recipeDiv);
        });
    }
};
