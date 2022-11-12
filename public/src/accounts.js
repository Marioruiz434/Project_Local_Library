function findAccountById(accounts, id) {
  let result = null
  for(let i = 0; i < accounts.length; i++) {
    if (accounts[i].id === id) {
      result = accounts[i]
    }
  }
  return result
}

function sortAccountsByLastName(accounts) {
 return accounts.sort((accountA, accountB) => (accountA.name.last > accountB.name.last ? 1 : -1))
}

function getTotalNumberOfBorrows(account, books) {
  let total = 0;
for (let i = 0; i < books.length; i++) {
  for(let j = 0; j < books[i].borrows.length; j++) {
    if (account.id === books[i].borrows[j].id) {
      total += 1
    }
  }
  }
  return total
}


function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = []
 
  for (let i = 0; i < books.length; i++) {
    let book = {}
    for(let q = 0; q < authors.length; q++){
      let currentBook = books[i];
      let currentAuthor = authors[q];
      if(currentAuthor.id === currentBook.authorId) {
        book = {...currentBook, author:currentAuthor};
        let myBorrow = currentBook.borrows;
        myBorrow.forEach((borrowing) => {if (borrowing.id === account.id && !borrowing.returned){
          borrowedBooks.push(book)
        }})
      }
      }
    }
  return borrowedBooks
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
