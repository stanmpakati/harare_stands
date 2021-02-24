import { Community } from './enums/location.enum';
import { StandType } from './enums/stand-type.enum';

export class StandModel {
  id!: string;
  community!: Community;
  standType!: StandType;
  size!: number;
  isSold: boolean = true;
  developmentCompany!: string;
  dateOfRelease!: string;
  geoPoint!: [lat: number, long: number];
  address!: string;
  suburb!: string;
  price!: number;
  city: string = 'Harare';
}
