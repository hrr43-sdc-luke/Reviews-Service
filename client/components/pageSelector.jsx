import React from 'react';

function PageSelector({
  currPage, totalPages, jumpToPage,
}) {
  // put in conditionals for all possible combinations of current page and total pages.
  if (currPage === 1) {
    if (totalPages === 1) {
      return (
        <div />
      );
    }
    if (totalPages === 2) {
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
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            {currPage + 1}
          </button>
          <button
            className="next"
            type="button"
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            &gt;
          </button>
        </div>
      );
    }
    if (totalPages === 3) {
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
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            {currPage + 1}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage + 2); }}
          >
            {currPage + 2}
          </button>
          <button
            className="next"
            type="button"
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            &gt;
          </button>
        </div>
      );
    }
    if (totalPages === 4) {
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
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            {currPage + 1}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage + 2); }}
          >
            {currPage + 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage + 3); }}
          >
            {currPage + 3}
          </button>
          <button
            className="next"
            type="button"
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            &gt;
          </button>
        </div>
      );
    }
    if (totalPages >= 5) {
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
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            {currPage + 1}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage + 2); }}
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
            onClick={() => { jumpToPage(totalPages); }}
          >
            {totalPages}
          </button>
          <button
            className="next"
            type="button"
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            &gt;
          </button>
        </div>
      );
    }
    if (totalPages < 6) {
      return (
        <div>
          <button
            className="previous"
            type="button"
          >
            &lt;
          </button>
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
            className="dots"
            type="button"
          >
              ...
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
  }

  // start the 2's here
if (currPage === 2) {
  if (totalPages === 2) {
    return (
      <div>
        <button
          className="currPage"
          type="button"
        >
          {currPage}
        </button>
      </div>
    );
  }
  if (totalPages > 2) {
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
}
}

export default PageSelector;
