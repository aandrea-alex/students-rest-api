export const calculatePaginationData = (totalItems, perPage, currentPage) => {
  const totalPages = Math.ceil(totalItems / perPage);

  return {
    totalItems,
    perPage,
    currentPage,
    totalPages,
    hasNextPage: currentPage < totalPages,
    hasPrevPage: currentPage > 1,
  };
};
