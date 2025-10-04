import React from 'react';
import _ from 'lodash';
import { Pagination, PaginationItem, PaginationLink } from '../@material/Pagination';

const PaginationAll = ({current_page,pages_count,onPageChange}) => {
  const pages = _.range(1, pages_count + 1);
  const first = 1;
  const end = pages_count;
  const next = current_page + 1;
  const prev = current_page - 1;
  return (
    <Pagination size="sm"  className="pagination">
      <PaginationItem className={`page-item first ${current_page === 1 ? 'disabled' : ''}`}>
        <PaginationLink className="page-link" first onClick={() => onPageChange(first)} />
      </PaginationItem>
      <PaginationItem className={`page-item previous ${current_page === 1 ? 'disabled' : ''}`}>
        <PaginationLink className="page-link" previous href="#" onClick={() =>  onPageChange(prev)} />
      </PaginationItem>

      {
        pages.map(page => (

          <PaginationItem className={page === current_page ? 'page-item active' : 'page-item'} key={page}>
            <PaginationLink href="#" className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </PaginationLink>
          </PaginationItem>
        ))
      }
      <PaginationItem className={`page-item next ${current_page === pages_count ? 'disabled' : ''}`}>
        <PaginationLink className="page-link" next href="#" onClick={() =>  onPageChange(next)} />
      </PaginationItem>
      <PaginationItem className={`page-item last ${current_page === pages_count ? 'disabled' : ''}`}>
        <PaginationLink className="page-link" last href="#" onClick={() =>  onPageChange(end)} />
      </PaginationItem>
    </Pagination>

  )
}

export default PaginationAll;
