import { Bar } from "../bar";

export interface BarClient {
  bar: typeof Bar;
}

export const barSvc: BarClient = {
  bar: Bar,
};
