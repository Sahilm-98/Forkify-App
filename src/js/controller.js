import * as model from './model.js';
import recipeView from './views/recipeView.js';

import 'core-js/stable';

import 'regenerator-runtime/runtime';
import recipeView from './views/recipeView.js';

const recipeContainer = document.querySelector('.recipe');

// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////

const controlRecipe = async function () {
  try {
    const id = window.location.hash.slice(1);
    console.log(id);

    if (!id) return;

    recipeView.renderSpinner();
    // loading reciep
    await model.loadRecipe(id);

    // Rendeering reciep

    recipeView.render(model.state.recipe);
  } catch (err) {
    alert(err);
  }
};
const init = function () {
  recipeView.addHandlerRender(controlRecipe);
};
init();
