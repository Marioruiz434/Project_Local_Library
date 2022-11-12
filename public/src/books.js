function findAuthorById(authors, id) {
  let author = null
  for (let i = 0; i < authors.length; i++) {
    if (authors[i].id === id) {
      author = authors[i];
    }
  }
  return author
}

function findBookById(books, id) {
    let correctBook = null
    for (let i = 0; i < books.length; i++) {
      let book = books[i]
      if (book.id === id) {
        correctBook = book;
      }
    }
    return correctBook
}

function partitionBooksByBorrowedStatus(books) {
  let result = []
  let checkedOut = []
  let returned = []
  for (let i = 0; i < books.length; i++) {
    if(books[i].borrows[0].returned === false) {
      checkedOut.push(books[i])
    } else {returned.push(books[i])
    }
  }
  result.push(checkedOut)
  result.push(returned)
  return result
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
