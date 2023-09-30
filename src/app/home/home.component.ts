import { Component } from '@angular/core';
import { DataService } from '../shared/servies/dataservies/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  data: any
  socialMedia: any
  constructor(private mainDataService: DataService) {
    this.data = this.mainDataService.getData()
    this.socialMedia = this.mainDataService.getSocialMedia()
  }


}
