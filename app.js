function filterBooks(...books) {
    let booksWithU = [];
    let otherBooks = [];

    for (let i = 0; i < books.length; i++) {
        if (books[i].includes('У') || books[i].includes('у')) {
            booksWithU.push(books[i]);
        } else {
            otherBooks.push(books[i]);
        }
    }
    
    console.log('Книги с буквой "У":', booksWithU);
    console.log('Остальные книги:', otherBooks);
}

filterBooks('Мастер и Маргарита', 'Улисс', '1984', 'Преступление и наказание', 'Урфин Джюс и его деревянные солдаты');

//
function avg(...nums) {
    let numSum = 0
    for (let i = 0; i < nums.length; i++) {
        numSum += nums[i]
    }
    console.log(numSum / nums.length);
}
avg(1, 2, 3, 4, 5)