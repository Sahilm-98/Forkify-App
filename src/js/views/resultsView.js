import view from './view.js';
import icons from 'url:../../img/icons.svg';

class resultsView extends view {
  _parentElement = document.querySelector('.results');
  _errorMessage = 'No recipe found for your query!!. Please try again';
  _message = '';

  _generateMarkup() {
    return this._data.map(result => resultsView.render(result, false)).join('');
  }
}
export default new resultsView();
