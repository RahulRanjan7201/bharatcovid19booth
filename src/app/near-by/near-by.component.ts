import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
@Component({
  selector: 'app-near-by',
  templateUrl: './near-by.component.html',
  styleUrls: ['./near-by.component.scss']
})
export class NearByComponent implements OnInit {
  latitude: number;
  longitude: number;
  zoom: number;
  address: string;
  private geoCoder;
  @ViewChild('search')
  public searchElementRef: ElementRef;
  constructor(
    private ngZone: NgZone) { }

    ngOnInit() {
      //load Places Autocomplete
    }
  }