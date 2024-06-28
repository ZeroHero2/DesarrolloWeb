const App = {
    recipes: Storage.getRecipes(),

    init() {
        document.getElementById('recipe-form').addEventListener('submit', this.handleSubmit.bind(this));
        document.getElementById('search').addEventListener('input', this.handleSearch.bind(this));
        UI.renderRecipes(this.recipes);
    },

    handleSubmit(e) {
        e.preventDefault();

        const id = document.getElementById('recipe-id').value;
        const name = document.getElementById('name').value;
        const nutrition = document.getElementById('nutrition').value;
        const recommendation = document.getElementById('recommendation').value;

        if (Validation.isValidForm(name, nutrition, recommendation)) {
            if (id) {
                this.updateRecipe(id, name, nutrition, recommendation);
            } else {
                this.addRecipe(name, nutrition, recommendation);
            }

            document.getElementById('recipe-form').reset();
        } else {
            alert('Por favor, completa todos los campos.');
        }
    },

    addRecipe(name, nutrition, recommendation) {
        const id = Date.now().toString();
        const recipe = { id, name, nutrition, recommendation };
        this.recipes.push(recipe);
        Storage.saveRecipes(this.recipes);
        UI.renderRecipes(this.recipes);
    },

    updateRecipe(id, name, nutrition, recommendation) {
        this.recipes = this.recipes.map(recipe => recipe.id === id ? { id, name, nutrition, recommendation } : recipe);
        Storage.saveRecipes(this.recipes);
        UI.renderRecipes(this.recipes);
    },

    deleteRecipe(id) {
        this.recipes = this.recipes.filter(recipe => recipe.id !== id);
        Storage.saveRecipes(this.recipes);
        UI.renderRecipes(this.recipes);
    },

    editRecipe(id) {
        const recipe = this.recipes.find(recipe => recipe.id === id);
        document.getElementById('recipe-id').value = recipe.id;
        document.getElementById('name').value = recipe.name;
        document.getElementById('nutrition').value = recipe.nutrition;
        document.getElementById('recommendation').value = recipe.recommendation;
    },

    handleSearch(e) {
        const query = e.target.value.toLowerCase();
        const filteredRecipes = this.recipes.filter(recipe => recipe.name.toLowerCase().includes(query));
        UI.renderRecipes(filteredRecipes);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
