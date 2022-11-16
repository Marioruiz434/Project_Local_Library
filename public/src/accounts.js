function findAccountById(accounts, id) {
  return accounts.find((account) => account.id === id)
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
}

function getTotalNumberOfBorrows(account, books) {
  let bookBorrows = 0
  books.forEach((book) => {
    book.borrows.forEach((borrow) => {
      if (account.id === borrow.id) {
        bookBorrows++
      }
    })
  })
  return bookBorrows
}

function getBooksPossessedByAccount(account, books, authors) {
  const result = []
  books.forEach((book) => {
   let author = authors.find((author) => author.id === book.authorId)
   let borrowersId = book.borrows[0].id
   let returnedStatus = book.borrows[0].returned
   if (account.id === borrowersId && !returnedStatus) {
    let fullBook = {...book, author: author}
    result.push(fullBook)
  }
})
return result
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
