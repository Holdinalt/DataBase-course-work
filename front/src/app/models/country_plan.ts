import {Reaper_plan} from "./reaper_plan";

export class Country_plan{
  constructor(
    public ID: number,
    public Name: string,
    public Reapings_plan: number,
    public Reapers_Plan: Reaper_plan[]
  ) {
  }
}
