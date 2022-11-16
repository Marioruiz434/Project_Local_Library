function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id)
}

function findBookById(books, id) {
    return books.find((book) => book.id === id)
}

function partitionBooksByBorrowedStatus(books) {
  const returnedBooks = books.filter((book) =>
    book.borrows.every((borrow) => borrow.returned === true))
  const borrowedBooks = books.filter((book) =>
    book.borrows.some((borrow) => borrow.returned === false))
  const partitionedBooks = [[...borrowedBooks], [...returnedBooks]]
  return partitionedBooks;
}


function getBorrowersForBook(book, accounts) {
  let result = []
    accounts.forEach((account) => {
      let returnedEntry = book.borrows.find((borrow) => borrow.id === account.id)
   if (returnedEntry) {
    result.push({...returnedEntry, ...account})
   }
  })
return result.slice(0, 10)
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
