import React from "react";

export const Pagination = ({ totalPage = 10, currentPage = 1 }) => {
  function handlePrevPage(e) {
    e.preventDefault();
  }
  function handleNextPage(e) {
    e.preventDefault();
  }
  function handlePickPage(e) {
    e.preventDefault();
  }
  return (
    <nav ariaLabel="Page navigation">
      <ul className="pagination justify-content-center flex-wrap">
        <li className={currentPage <= 1 ? "page-item disabled" : "page-item"}>
          <a className="page-link" href="/" tabindex="-1">
            Previous
          </a>
        </li>
        {Array.from({ length: totalPage }, (_, idx) => idx + 1).map((page) => (
          <li className="page-item">
            <a
              href="/"
              className={
                page === currentPage
                  ? "page-link active-pagination"
                  : "page-link"
              }
              onClick={handlePickPage}
            >
              {page}
            </a>
          </li>
        ))}
        <li
          className={
            currentPage >= totalPage ? "page-item disabled" : "page-item"
          }
        >
          <a className="page-link" href="/" onClick={handleNextPage}>
            Next
          </a>
        </li>
      </ul>
    </nav>
  );
};
