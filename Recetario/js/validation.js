const Validation = {
    isValidForm(name, nutrition, recommendation) {
        return name.trim() !== '' && nutrition.trim() !== '' && recommendation.trim() !== '';
    }
};
