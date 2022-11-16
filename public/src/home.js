function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  return books.reduce((acc, book) => {
    return acc + book.borrows.filter((book) => !book.returned).length}, 0)
}

function getMostCommonGenres(books) {

  const bookGenres = books.reduce((acc, book) => {
    const genreObj = acc.find((genre) => genre.name === book.genre)
    genreObj ? genreObj.count++ : acc.push({name: book.genre, count: 1})
    return acc
  } , [])
  return bookGenres.sort((genreA, genreB) => (genreB.count - genreA.count)).slice(0,5);
  }

  function getMostPopularBooks(books) {
    return books.map((book) => {
      return { name: book.title, count: book.borrows.length }
    }).sort((bookA, bookB) => bookB.count - bookA.count).slice(0, 5)
  }

function getMostPopularAuthors(books, authors) {
  let mostPopularBooks = []
  authors.forEach((author) => {
    let myAuthor = {
      name: `${author.name.first} ${author.name.last}`, count: 0
    }
    books.forEach((book) => {
      if (book.authorId === author.id) {
        myAuthor.count += book.borrows.length
      }
    })
    mostPopularBooks.push(myAuthor)
  })
  let orderedPopularBooks =  mostPopularBooks.sort((authorA, authorB) => authorB.count - authorA.count)
return orderedPopularBooks.slice(0, 5)
}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
