import { Component, OnInit } from "@angular/core";
import { quote } from "../quote";
@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: quote[] = [];
  addNewQuote(quote) {
    // let quoteLength = this.quotes.length;
    // quote.id = quoteLength + 1;
    this.quotes.push(quote);
    console.log(this.quotes);

   
  }
  details(index) {
    this.quotes[index].showDescription = !this.quotes[index].showDescription;
  }
  // like(index) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }

  constructor() {}

  ngOnInit() {}
}
