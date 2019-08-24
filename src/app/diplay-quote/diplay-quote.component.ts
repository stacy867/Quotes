import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { quote } from "../quote";
@Component({
  selector: "app-diplay-quote",
  templateUrl: "./diplay-quote.component.html",
  styleUrls: ["./diplay-quote.component.css"]
})
export class DiplayQuoteComponent implements OnInit {
  // quotes: quote[] = [];
  // details(index) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;

  // }
  @Output() isComplete = new EventEmitter<boolean>();
  // quoteComplete(complete: boolean) {
  //   this.isComplete.emit(complete);
  // }
  quoteDelete(complete: boolean) {
    this.isComplete.emit(complete);
  }
  @Input() qu: quote;

  constructor() {}

  ngOnInit() {}
}
