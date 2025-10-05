interface Props {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export const Pagination = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}: Props) => {
  const countPages = Math.ceil(total / perPage);
  const arrayPages = Array.from({ length: countPages }, (_, i) => i + 1);
  const isFirstPage = currentPage === 1;
  const isLastPage = countPages === currentPage;

  if (total === 0) {
    return null;
  }

  if (countPages <= 1) {
    return null;
  }

  return (
    <ul className="pagination">
      <li className={`page-item ${isFirstPage ? 'disabled' : ''}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={isFirstPage ? 'true' : 'false'}
          onClick={() => !isFirstPage && onPageChange(currentPage - 1)}
        >
          «
        </a>
      </li>
      {arrayPages.map(item => (
        <li
          className={`page-item ${currentPage === item ? 'active' : ''}`}
          key={item}
          onClick={e => {
            e.preventDefault();
            onPageChange(item);
          }}
        >
          <a data-cy="pageLink" className="page-link" href={`#${item}`}>
            {item}
          </a>
        </li>
      ))}
      <li className={`page-item ${isLastPage ? 'disabled' : ''}`}>
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={isLastPage ? 'true' : 'false'}
          onClick={() => !isLastPage && onPageChange(currentPage + 1)}
        >
          »
        </a>
      </li>
    </ul>
  );
};
