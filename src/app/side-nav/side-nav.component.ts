import { Component, ViewChild, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { Router } from '@angular/router';
import * as moment from "moment";
@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {
  daysCount: number;
  hourCount: number;
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver, private router: Router, ) {
  }
  ngOnInit() {
    const lockDownStartDate =  moment("2020-03-24", "YYYY-MM-DD");
    this.daysCount = moment(new Date()).diff(lockDownStartDate, 'days') 
    this.hourCount = moment(new Date()).diff(lockDownStartDate, 'hours');
  }
 
  navigateToDashBoard() {
    this.router.navigate(['/dashboard/']);
  }
  navigateToEssential() {
    this.router.navigate(['/essential/']);
  }
  navigateToNearBy() {
    this.router.navigate(['/nearby/'])
  }
  navigateToHelpline() {
    this.router.navigate(['/helplines/']);
  }
  navigateToDailyActivity() {
    this.router.navigate(['/activities/']);
  }
  navigateToFQA() {
    this.router.navigate(['/fqa/']);
  }
}
