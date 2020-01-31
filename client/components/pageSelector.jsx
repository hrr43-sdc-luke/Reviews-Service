import React from 'react';

function PageSelector({ currPage, totalPages }) {
  // put in conditionals for all possible combinations of current page and total pages.
  return (
    <div>
      <button
        className="currPage"
        type="button"
      >
        {currPage}
      </button>
      <button
        className="pages"
        type="button"
      >
        {currPage + 1}
      </button>
      <button
        className="pages"
        type="button"
      >
        {currPage + 2}
      </button>
      <button
        className="dots"
        type="button"
      >
          ...
      </button>
      <button
        className="pages"
        type="button"
      >
        {totalPages}
      </button>
      <button
        className="next"
        type="button"
      >
        &gt;
      </button>
    </div>
  );
}

export default PageSelector;
