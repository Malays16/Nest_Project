import { Controller, Get, Post, Body } from '@nestjs/common';
import { BooksService } from './books.service';
import { Book } from './book.interface';

@Controller('books')
export class BooksController {
  constructor(private readonly booksService: BooksService) {}

  @Get()
  findAll() {
    return this.booksService.findAll();
  }

  @Post()
  create(@Body() book: Book) {
    this.booksService.create(book);
  }
}