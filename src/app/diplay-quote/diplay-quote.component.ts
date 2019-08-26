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

  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  likes = 0;
  dislike = 0;

  likeQuote() {
    this.likes++;
  }
  dislikeQuote() {
    this.dislike++;
  }
  constructor() {}

  ngOnInit() {}
}
