export class Stuff {
  stuffName: string;
  stuffWeight: number;
  stuffLength: number;
  stuffHeight: number;
  stuffWidth: number;
  stuffPeace: number;

  constructor(obj?: any) {
    this.stuffName = obj ? obj.stuffName : '';
    this.stuffWeight = obj ? obj.stuffWeight : '';
    this.stuffLength = obj ? obj.stuffLength : '';
    this.stuffHeight = obj ? obj.stuffHeight : '';
    this.stuffWidth = obj ? obj.stuffWidth : '';
    this.stuffPeace = obj ? obj.stuffPeace : '';
  }

  public toJSON() {
    return {
      stuffName: this.stuffName,
      stuffWeight: this.stuffWeight,
      stuffLength: this.stuffLength,
      stuffHeight: this.stuffHeight,
      stuffWidth: this.stuffWidth,
      stuffPeace: this.stuffPeace,
    };
  }
}
