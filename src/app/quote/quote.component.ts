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

  deleteQuote(isComplete, index){
    if (isComplete){
      let toDelete = confirm(
        `Are you sure you want to delete this ${this.quotes[index].quote}?`
      );
      if(toDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  likes = 0;
  dislike = 0;

  likeQuote() {
    this.likes++;
  }
  dislikeQuote() {
    this.dislike++;
  }
  // details(index) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }
  // like(index) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;
  // }

  constructor() {}

  ngOnInit() {}
}
