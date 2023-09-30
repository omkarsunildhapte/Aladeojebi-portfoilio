import { Component } from '@angular/core';
import { DataService } from '../shared/servies/dataservies/data.service';
@Component({
  selector: 'app-sobre',
  templateUrl: './sobre.component.html',
  styleUrls: ['./sobre.component.css']
})
export class SobreComponent {
  data: any
  skillsArray: any
  reviews: any
  showFullText: boolean = false;
  constructor(private mainDataService: DataService) {
    this.data = this.mainDataService.getData()
    this.skillsArray = this.mainDataService.getSkillsData()
    this.reviews = this.mainDataService.getReviesData()
  }
  toggleFullText() {
    this.showFullText = !this.showFullText;
  }

}
