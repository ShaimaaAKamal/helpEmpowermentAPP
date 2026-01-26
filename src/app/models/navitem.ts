export interface Navitem {
  name:string,
  nameAr:string,
  icon:string,
  subItems?: Navitem[];
  route:string
}
