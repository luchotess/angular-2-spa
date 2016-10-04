import { NgModule }         from '@angular/core';
import { BrowserModule }    from '@angular/platform-browser';
import { AppComponent }     from './app.component';
import { HomeComponent }    from './modules/home/home.component';
import { WorkComponent }    from './modules/work/work.component'
import { routing }          from './app.routing';

@NgModule({
    imports: [
        BrowserModule,
        routing
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        WorkComponent
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }


