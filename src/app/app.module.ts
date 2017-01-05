import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// directives
import {AutoGrowDirective} from './directives/auto-grow.directive';

// components
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses/courses.component';
import { AuthorsComponent } from './authors/authors.component';

@NgModule({
    declarations: [
        // directives
        AutoGrowDirective,

        // components
        AppComponent,
        CoursesComponent,
        AuthorsComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})

export class AppModule { }
