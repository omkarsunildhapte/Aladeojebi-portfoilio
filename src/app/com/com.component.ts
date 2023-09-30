import { Component } from '@angular/core';
import { DataService } from '../shared/servies/dataservies/data.service';

@Component({
  selector: 'app-com',
  templateUrl: './com.component.html',
  styleUrls: ['./com.component.css']
})
export class ComComponent {
  data: any
  education: any
  experiance: any
  constructor(private mainDataService: DataService) {
    this.data = this.mainDataService.getData()
    this.education = this.mainDataService.getEdcationsData()
    this.experiance = this.mainDataService.getExperiencesData()
  }
}
