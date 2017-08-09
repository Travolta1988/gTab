import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from "../../services/api.service";

@Component({
  selector: 'app-artists',
  templateUrl: './artists.component.html',
  styleUrls: ['./artists.component.css']
})
export class ArtistsComponent implements OnInit {
    letter: string;
    artists;

  constructor(
      private route: ActivatedRoute,
      private api: ApiService
  ) {}

  ngOnInit() {
    this.route.params.subscribe(params => {
        this.letter = params['letter'];
        this.api.getArtistsByLetter(this.letter)
            .then((data) => {
                console.log(data);
                this.artists = data;
            });
    });
  }

}
