import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  toogle: boolean = false;
  @Input() show !: boolean
  data = {
    name: "Aladeojebi opeyemi",
    jobtitle: "Product Designer",
    describe: "I've helped business owners create exceptional experiences for users of Android, iOS and the Web."
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent): void {
    if (!this.toogle) {
      return;
    }
    const target = event.target as HTMLElement;
    if (!target.closest('button') && !target.closest('.sidemenu')) {
      this.toogle = false;
    }
  }
  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    this.toogle = false;
  }
}
