import { Injectable } from '@nestjs/common';
import { Book } from './book.interface';

@Injectable()
export class BooksService {
  private books: Book[] = [
    {
      id: '1',
      title: 'Book 1',
      description: 'Book 1 description',
      authors: 'Author 1',
      favorite: false,
      fileCover: 'book1.png',
      fileName: 'book1.pdf',
      fileBook: '../../public/books/book1.pdf'
    }
  ];

  findAll(): Book[] {
    return this.books;
  }

  create(book: Book) {
    this.books.push(book);
  }
}