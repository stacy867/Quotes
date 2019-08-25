import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";
import { DiplayQuoteComponent } from "./diplay-quote/diplay-quote.component";
import { QuoteComponent } from "./quote/quote.component";
import { HighlightDirective } from './highlight.directive';
import { TimeCountPipe } from './time-count.pipe';

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    DiplayQuoteComponent,
    QuoteComponent,
    HighlightDirective,
    TimeCountPipe
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
