import { Component, OnInit } from '@angular/core';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';

@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.scss']
})
export class NavigatorComponent implements OnInit {
  public themeText = "sun";
  constructor() { }

  ngOnInit(): void {
  }
  public changeTheme() {
    document.body.classList.toggle("dark");
    if (this.themeText === "sun") {
      this.themeText = "moon"
    } else {
      this.themeText = "sun"
    }
  }
}
