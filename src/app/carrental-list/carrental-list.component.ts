import { Component,OnInit } from '@angular/core';
import { Carrental } from '../carrental';
import { CarrentalService } from '../carrental.service';

@Component({
  selector: 'app-carrental-list',
  templateUrl: './carrental-list.component.html',
  styleUrls: ['./carrental-list.component.css']
})
export class CarrentalListComponent implements OnInit {
carrental!:Carrental[];
ngOnInit(): void {
  this.getCarrentals();
}
constructor(private carrentalService:CarrentalService){}
private getCarrentals(){
  this.carrentalService.getCarrentalList().subscribe((data=>{this.carrental=data;}));
}
}
