export class Box {
  boxNumber: string;
  boxWeight: number;
  boxLength: number;
  boxHeight: number;
  boxWidth: number;
  completlyPeaces: number;

  constructor(obj?: any) {
    this.boxNumber = obj ? obj.boxNumber : '';
    this.boxWeight = obj ? obj.boxWeight : '';
    this.boxLength = obj ? obj.boxLength : '';
    this.boxHeight = obj ? obj.boxHeight : '';
    this.boxWidth = obj ? obj.boxWidth : '';
    this.completlyPeaces = obj ? obj.completlyPeaces : '';
  }

  public toJSON() {
    return {
      boxNumber: this.boxNumber,
      boxWeight: this.boxWeight,
      boxLength: this.boxLength,
      boxHeight: this.boxHeight,
      boxWidth: this.boxWidth,
      completlyPeaces: this.completlyPeaces,
    };
  }
}
