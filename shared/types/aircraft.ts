import { Gear, Engine, Category } from "./";

export interface Aircraft {
  make: string;
  model: string;
  year: number;
  registration: string;
  gear: Gear;
  engine: Engine;
  category: Category;
  complex: boolean;
  technicallyAdvancedAircraft: boolean;
  highPerformance: boolean;
  pressurized: boolean;
}
