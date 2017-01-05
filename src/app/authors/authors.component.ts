import { Component } from '@angular/core';
import { AuthorsService } from './authors.service';

@Component({
    selector: "authors",
    templateUrl: './authors.component.html',
    styleUrls: ['./authors.component.css'],
    providers: [AuthorsService]
})

export class AuthorsComponent {
    title = "The Authors List";
    authors;

    constructor( authorsService: AuthorsService) {
        this.authors = authorsService.getAuthors();
    }
}
