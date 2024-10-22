import { Gear, Engine, Category } from "./";

export interface Aircraft {
  make: string;
  model: string;
  year: number;
  registration: string;
  gear: Gear;
  engine: Engine;
  catagory: Category;
  comblex: boolean;
  technicallyAdvancedAircraft: boolean;
  highPerformance: boolean;
  pressurized: boolean;
}
