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
    this.quotes.push(quote);
    console.log(this.quotes);
  }

  deleteQuote(isComplete, index) {
    if (isComplete) {
      let toDelete = confirm(
        `Are you sure you want to delete this ${this.quotes[index].citation}?`
      );

      if (toDelete) {
        this.quotes.splice(index, 1);
      }
    }
  }

  constructor() {}

  ngOnInit() {}
}
