import { Component, OnInit, Input } from '@angular/core';
import { quote } from "../quote";
@Component({
  selector: 'app-diplay-quote',
  templateUrl: './diplay-quote.component.html',
  styleUrls: ['./diplay-quote.component.css']
})
export class DiplayQuoteComponent implements OnInit {
  // quotes: quote[] = [];
  // details(index) {
  //   this.quotes[index].showDescription = !this.quotes[index].showDescription;

  // }
  @Input() qu:quote

  constructor() { }

  ngOnInit() {}
}
  


