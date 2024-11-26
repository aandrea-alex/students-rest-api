import { parseNumber } from './parseNumber.js';

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;
  console.log('page', page, 'perPage', perPage);
  const parsedPage = parseNumber(page, 1);
  const parsedPerPage = parseNumber(perPage, 10);

  return {
    page: parsedPage,
    perPage: parsedPerPage,
  };
};
