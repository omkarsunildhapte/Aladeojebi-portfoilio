import { Component, OnInit } from '@angular/core';
import { LoaderServiesService } from '../../servies/loader/loader-servies.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.css']
})
export class LoaderComponent implements OnInit {
  loader: any;

  constructor(private loaderservies: LoaderServiesService) {
  }

  ngOnInit() {
    this.loader = this.loaderservies.getLoaderState();
    this.loader.subscribe((isLoading: any) => {
      debugger
      if (isLoading) {
      } else {
      }
    });
  }
}

