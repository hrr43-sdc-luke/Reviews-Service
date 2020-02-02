import React from 'react';
import PropTypes from 'prop-types';

function PageSelector({
  currPage, totalPages, jumpToPage,
}) {
  // put in conditionals for all possible combinations of current page and total pages.
  if (currPage === 1) {
    if (totalPages <= 1) {
      return null;
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
    if (totalPages > 4) {
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
  }
  // start the 2's here
  if (currPage === 2) {
    if (totalPages === 2) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
          </button>
          <button
            className="currPage"
            type="button"
          >
            {currPage}
          </button>
        </div>
      );
    }
    if (totalPages === 3) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
    if (totalPages === 4) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
    if (totalPages > 4) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
            onClick={() => { jumpToPage(currPage + 1); }}
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
  }
  // start the 3's here
  if (currPage === 3) {
    if (totalPages === 3) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
          </button>
          <button
            className="currPage"
            type="button"
          >
            {currPage}
          </button>
        </div>
      );
    }
    if (totalPages === 4) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
    if (totalPages === 5) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
    if (totalPages > 5) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
            onClick={() => { jumpToPage(currPage + 1); }}
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
  }
  // start the 4's here
  if (currPage === 4) {
    if (totalPages === 4) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 3); }}
          >
            {currPage - 3}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
          </button>
          <button
            className="currPage"
            type="button"
          >
            {currPage}
          </button>
        </div>
      );
    }
    if (totalPages === 5) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 3); }}
          >
            {currPage - 3}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
    if (totalPages === 6) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 3); }}
          >
            {currPage - 3}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            {currPage + 1}
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
    if (totalPages > 6) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 3); }}
          >
            {currPage - 3}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
            onClick={() => { jumpToPage(currPage + 1); }}
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
  }
  // start the 5's here
  if (currPage === 5) {
    if (totalPages === 5) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 4); }}
          >
            {currPage - 4}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 3); }}
          >
            {currPage - 3}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 2); }}
          >
            {currPage - 2}
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
          </button>
          <button
            className="currPage"
            type="button"
          >
            {currPage}
          </button>
        </div>
      );
    }
    if (totalPages === 6) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(1); }}
          >
            1
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
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
    if (totalPages === 7) {
      return (
        <div>
          <button
            className="previous"
            type="button"
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            &lt;
          </button>
          <button
            className="pages"
            type="button"
            onClick={() => { jumpToPage(1); }}
          >
            1
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
            onClick={() => { jumpToPage(currPage - 1); }}
          >
            {currPage - 1}
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
            onClick={() => { jumpToPage(currPage + 1); }}
          >
            {currPage + 1}
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
  }
  if (currPage === totalPages) {
    return (
      <div>
        <button
          className="previous"
          type="button"
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          &lt;
        </button>
        <button
          className="pages"
          type="button"
          onClick={() => { jumpToPage(1); }}
        >
          1
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
          onClick={() => { jumpToPage(currPage - 2); }}
        >
          {currPage - 2}
        </button>
        <button
          className="pages"
          type="button"
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          {currPage - 1}
        </button>
        <button
          className="currPage"
          type="button"
        >
          {currPage}
        </button>
      </div>
    );
  }
  if (currPage === totalPages - 1) {
    return (
      <div>
        <button
          className="previous"
          type="button"
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          &lt;
        </button>
        <button
          className="pages"
          type="button"
          onClick={() => { jumpToPage(1); }}
        >
          1
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
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          {currPage - 1}
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
  if (currPage === totalPages - 2) {
    return (
      <div>
        <button
          className="previous"
          type="button"
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          &lt;
        </button>
        <button
          className="pages"
          type="button"
          onClick={() => { jumpToPage(1); }}
        >
          1
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
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          {currPage - 1}
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
  if (currPage === totalPages - 3) {
    return (
      <div>
        <button
          className="previous"
          type="button"
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          &lt;
        </button>
        <button
          className="pages"
          type="button"
          onClick={() => { jumpToPage(1); }}
        >
          1
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
          onClick={() => { jumpToPage(currPage - 1); }}
        >
          {currPage - 1}
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
  return (
    <div>
      <button
        className="previous"
        type="button"
        onClick={() => { jumpToPage(currPage - 1); }}
      >
        &lt;
      </button>
      <button
        className="pages"
        type="button"
        onClick={() => { jumpToPage(1); }}
      >
        1
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
        onClick={() => { jumpToPage(currPage - 1); }}
      >
        {currPage - 1}
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
        onClick={() => { jumpToPage(currPage + 1); }}
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

PageSelector.propTypes = {
  currPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  jumpToPage: PropTypes.func.isRequired,
};

export default PageSelector;
