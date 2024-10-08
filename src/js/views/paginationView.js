import view from './view.js';
import icons from 'url:../../img/icons.svg';

class paginationView extends view {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handelr) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      const goToPage = +btn.dataset.goto;

      handelr(goToPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;
    const numPages = Math.ceil(
      this._data.results.length / this._data_resultsPerPage
    );
    // Page 1 and there other pages
    if (curPage === 1 && numPages > 1) {
      return `</button>
          <button data--goto="${
            curPage + 1
          }" class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>`;
    }
    // Last page
    if (curPage === numPages && numPages > 1) {
      return `<button data--goto="${
        curPage - 1
      }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span>`;
    }
    // Other Page
    if (curPage < numPages) {
      return `<button data--goto="${
        curPage - 1
      }"class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-left"></use>
            </svg>
            <span>Page ${curPage - 1}</span
            </button>
          <button data--goto="${
            curPage + 1
          }"class="btn--inline pagination__btn--next">
            <span>Page ${curPage + 1}</span>
            <svg class="search__icon">
              <use href="${icons}#icon-arrow-right"></use>
            </svg>
          </button>
            `;
    }
    // page 1 and there are No other pages
    return '';
  }
}
export default new paginationView();
