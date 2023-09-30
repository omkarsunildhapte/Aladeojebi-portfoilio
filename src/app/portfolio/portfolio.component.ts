import { Component } from '@angular/core';
import { DataService } from '../shared/servies/dataservies/data.service';
interface CardItem {
  imageUrl: string;
  text: string;
}

interface CardData {
  [category: string]: CardItem[];
}
@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent {
  cardData: CardData = {}
  data: any
  constructor(private mainDataService: DataService) {
  }
  displayedData: CardItem[] = [];
  ngOnInit() {
    this.cardData = this.mainDataService.getProjectData()
    this.data = this.mainDataService.getData()
    this.displayedData = this.getAllData()
  }
  showAllData() {
    this.displayedData = this.getAllData()
  }
  getAllCategories(): string[] {
    return Object.keys(this.cardData);
  }
  showCategoryData(value: string) {
    this.displayedData = this.cardData[value];
  }
  getAllData(): CardItem[] {
    return Object.values(this.cardData).reduce((acc, val) => acc.concat(val), []);
  }
}
