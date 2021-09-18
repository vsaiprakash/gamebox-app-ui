import { Component, OnInit } from '@angular/core';
import { NavigationService } from 'src/app/core/services/navigation.service';

@Component({
  selector: 'app-admin-root',
  templateUrl: './admin-root.component.html',
  styleUrls: ['./admin-root.component.scss']
})
export class AdminRootComponent implements OnInit {

  constructor(private navigation: NavigationService) { }

  ngOnInit(): void {
  }

  back(){
    this.navigation.back();
  }

}
