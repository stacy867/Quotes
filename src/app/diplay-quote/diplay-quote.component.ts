import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { quote } from "../quote";
@Component({
  selector: "app-diplay-quote",
  templateUrl: "./diplay-quote.component.html",
  styleUrls: ["./diplay-quote.component.css"]
})
export class DiplayQuoteComponent implements OnInit {
  @Input() qu: quote;
  @Output() isComplete = new EventEmitter<boolean>();
  quotes: quote[] = [];

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  likes = 0;
  dislike = 0;
  counter = 0;

  likeQuote(index) {
    this.quotes[index].upvotes++;
  }
  dislikeQuote(index) {
    this.quotes[index].downvote++;
  }
  highestLike() {
    this.likes = 0;
    this.dislike = 0;
    for (this.counter = 0; this.counter < this.quotes.length; this.counter++) {
      this.dislike = this.quotes[this.counter].upvotes;
      if (this.dislike > this.likes) {
        this.likes = this.dislike;
      }
    }
    return this.likes;
  }
  constructor() {}

  ngOnInit() {}
}
