import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
    title = 'Hello Angular 2! It app works! well';

    hero = {
        id: 1,
        name: 'Windstorm'
    };

    imageUrl = "http://lorempixel.com/400/200/";
    isActive = true;

    onClick($event) {
        console.log($event);
    }
}
