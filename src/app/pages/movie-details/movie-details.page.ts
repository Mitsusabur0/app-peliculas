import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { environment } from 'src/theme/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  movie: any = null;
  imageBaseUrl = environment.images;

  constructor(private route: ActivatedRoute, private movieService: MovieService) {};

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get("id");
    if (id !== null) {
      this.movieService.getMovieDetails(id).subscribe(res => {
        console.log(res);
        this.movie = res;
      })
    } else {
      console.error("No ID found.");
    }
  }

  openImdb() {
    // window.open(this.movie.homepage);
    window.open(`http://imdb.com/title/${this.movie.imdb_id}`);
  }

}
