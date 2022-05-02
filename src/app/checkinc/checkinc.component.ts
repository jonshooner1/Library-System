import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkinc',
  templateUrl: './checkinc.component.html',
  styleUrls: ['./checkinc.component.css']
})
export class CheckincComponent implements OnInit {

  constructor() { }



  ngOnInit(): void {
    this.listfilter ='';
  }

private _listfilter: string = '';
get listfilter(): string {
  return this._listfilter;
}
set listfilter(value: string) {
  this._listfilter = value;
  console.log('setter:',value)
  this.filteredbooks = this.performfilter(value)
}

performfilter(filterBy: string): any[] {
  filterBy = filterBy.toLowerCase();
  return this.books.filter((book: any) => book.authors.toLowerCase().includes(filterBy));
}

filteredbooks: any[] =[];

books: any[] = [


    {
      "bookID": 5,
      "title": "Harry Potter and the Prisoner of Azkaban (Harry Potter  #3)",
      "authors": "J.K. Rowling/Mary GrandPré",
      "average_rating": "4.56",
      "isbn": "043965548X",
      "isbn13": "9780439655484",
      "language_code": "eng",
      "num_pages": "435",
      "ratings_count": 2339585,
      "text_reviews_count": 36325,
      "publication_date": "5/1/2004",
      "publisher": "Scholastic Inc.",
      "check_out_date": "04/28/2022"

    },

    {
      "bookID": 55,
      "title": "Hatchet Jobs: Writings on Contemporary Fiction",
      "authors": "Dale Peck",
      "average_rating": "3.45",
      "isbn": "1595580271",
      "isbn13": "9781595580276",
      "language_code": "en-US",
      "num_pages": "228",
      "ratings_count": 99,
      "text_reviews_count": 16,
      "publication_date": "11/1/2005",
      "publisher": "The New Press",
      "check_out_date": "04/20/2022"
    },
    {
      "bookID": 57,
      "title": "A Changeling for All Seasons (Changeling Seasons #1)",
      "authors": "Angela Knight/Sahara Kelly/Judy Mays/Marteeka Karland/Kate Douglas/Shelby Morgen/Lacey Savage/Kate Hill/Willa Okati",
      "average_rating": "3.76",
      "isbn": "1595962808",
      "isbn13": "9781595962805",
      "language_code": "eng",
      "num_pages": "304",
      "ratings_count": 167,
      "text_reviews_count": 4,
      "publication_date": "11/1/2005",
      "publisher": "Changeling Press",
      "check_out_date": "04/18/2022"
    }
  ]

}
