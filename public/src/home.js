function getTotalBooksCount(books) {
  return books.length
}

function getTotalAccountsCount(accounts) {
  return accounts.length
}

function getBooksBorrowedCount(books) {
  let borrowedBooksAmount = 0
  for (let i = 0; i < books.length; i++) {
    let book = books[i];
    if (!book.borrows[0].returned) {
      borrowedBooksAmount += 1
    }
  }
  return borrowedBooksAmount
}

function getMostCommonGenres(books) {
  let result = [
    {name: null, count: 0},
    {name: null, count: 0},
    {name: null, count: 0},
    {name: null, count: 0},
    {name: null, count: 0}
  ]
  let listOfGenres = []
  for (let i = 0; i < books.length; i++) {
    listOfGenres.push(books[i].genre)
  }
  for (let i = 0; i <= 4; i++) {
    let genreObject = result[i]
  for (let j = 0; j < listOfGenres.length; j++) {
    let currentGenre = listOfGenres[j]
    if(i === 0 && genreObject.name === null) {
      genreObject.name = currentGenre
      genreObject.count++
    } else if (i === 1 && !result[0].name.includes(currentGenre) && genreObject.name === null) {
      genreObject.name = currentGenre
      genreObject.count++
    } else if (i === 2 && !result[0].name.includes(currentGenre) && !result[1].name.includes(currentGenre) && genreObject.name === null) {
      genreObject.name = currentGenre
      genreObject.count++
    } else if (i === 3 && !result[0].name.includes(currentGenre) && !result[1].name.includes(currentGenre) && !result[2].name.includes(currentGenre) && genreObject.name === null) {
      genreObject.name = currentGenre
      genreObject.count++
    } else if (i === 4 && !result[0].name.includes(currentGenre) && !result[1].name.includes(currentGenre) && !result[2].name.includes(currentGenre) && !result[3].name.includes(currentGenre) && genreObject.name === null) {
      genreObject.name = currentGenre
      genreObject.count++
    } else if (genreObject.name === currentGenre) {
      genreObject.count++
    }
  }
  }
  return result.sort((countA, countB) => countB.count - countA.count)
}

function getMostPopularBooks(books) {
  let result = [{},{},{},{},{}]
  let orderedBooks = books.sort((bookA, bookB) => bookB.borrows.length - bookA.borrows.length)
  for (let i = 0; i < 5; i++) {
    result[i].name = orderedBooks[i].title;
    result[i].count = orderedBooks[i].borrows.length
  }
  return result
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
