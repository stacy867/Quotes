import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { QuoteFormComponent } from "./quote-form/quote-form.component";
import { DiplayQuoteComponent } from "./diplay-quote/diplay-quote.component";
import { QuoteComponent } from "./quote/quote.component";

@NgModule({
  declarations: [
    AppComponent,
    QuoteFormComponent,
    DiplayQuoteComponent,
    QuoteComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
