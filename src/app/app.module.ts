import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { BasicHighLightDirective } from "./basic-highlight/basic-hightlight.directive";

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, HelloComponent, BasicHighLightDirective],
  bootstrap: [AppComponent]
})
export class AppModule {}
