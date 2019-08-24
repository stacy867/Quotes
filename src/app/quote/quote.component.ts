import { Component, OnInit } from "@angular/core";
import { quote } from "../quote";
@Component({
  selector: "app-quote",
  templateUrl: "./quote.component.html",
  styleUrls: ["./quote.component.css"]
})
export class QuoteComponent implements OnInit {
  quotes: quote[]=[
    // {
    //   author: "rhth",
    //   quote: " ehtsd",
    //   person: "hrhtyht"
    // },
    // {
    //   author: "rhth",
    //   quote: " ehtsd",
    //   person: "hrhtyht"
    // }
  ];
  addNewQuote(quote) {
    let quoteLength = this.quotes.length;
     quote.id = quoteLength + 1;
    this.quotes.push(quote);
    console.log(this.quotes);
  }

  constructor() {}

  ngOnInit() {}
}
