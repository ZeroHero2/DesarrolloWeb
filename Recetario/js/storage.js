const Storage = {
    getRecipes() {
        return JSON.parse(localStorage.getItem('recipes')) || [];
    },
    saveRecipes(recipes) {
        localStorage.setItem('recipes', JSON.stringify(recipes));
    }
};
