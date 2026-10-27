import ReactPaginate from "react-paginate";
import type { ComponentType } from "react";
import type { ReactPaginateProps } from "react-paginate";

import css from "./Pagination.module.css";

const Paginate = (
  typeof ReactPaginate === "function"
    ? ReactPaginate
    : (
        ReactPaginate as unknown as {
          default: ComponentType<ReactPaginateProps>;
        }
      ).default
) as ComponentType<ReactPaginateProps>;

interface PaginationProps {
  pageCount: number;
  currentPage: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  pageCount,
  currentPage,
  onPageChange,
}: PaginationProps) {
  return (
    <Paginate
      pageCount={pageCount}
      pageRangeDisplayed={5}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => onPageChange(selected + 1)}
      forcePage={currentPage - 1}
      previousLabel="←"
      nextLabel="→"
      breakLabel="..."
      renderOnZeroPageCount={null}
      containerClassName={css.pagination}
      activeClassName={css.active}
    />
  );
}
