import {Component, Input} from "@angular/core";
import {Reaper_plan} from "../../models/reaper_plan";

@Component({
  selector: 'dashboard-high-blade',
  templateUrl: './high-blade.component.html',
  styleUrls: ['./high-blade.component.css']
})
export class HighBladeComponent{

  @Input()
  reapers_plan: Reaper_plan[] = [];

  @Input()
  country: string = '';

  countLeftReaps(now: number, req: number):number{
    let out = req - now;
    if(out < 0){
      return 0;
    }
    return out;
  }

  getMark(x: number): string{
    if (x == 0){
      return '#8cffb0'
    }else{
      return '#ff6464';
    }
  }
}
