import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Output() SideBarStatus = new EventEmitter<boolean>();
  constructor() { }

  ngOnInit(): void {
    this.checkScren()
  }

  isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
    this.SideBarStatus.emit(this.isOpen);

    
    this.checkScren()
  }



  checkScren(){
    if(window.innerWidth <= 500){
      let brand = document.querySelector('#navbar-brand');
      let toggler = document.querySelector('#navbar-toggler');
      if(this.isOpen){
        brand.classList.add('hide');
        toggler.classList.add('hide');
      } else {
        brand.classList.remove('hide');
        toggler.classList.remove('hide');
      }
    }
  }

}
