export interface ImagesInterface {
    Luxury: DynamicImages[],
    Institutional: DynamicImages[],
    Commercial: DynamicImages[],
    RealEstate: DynamicImages[];
    SmallResidential: DynamicImages[];
    ALL: DynamicImages[];
}
export interface DynamicImages {
  imagePath: string;
  data: CardData;
  id: number;
  SubData?: DynamicImages[];
}
export interface CardData {
  heading: string;
  description: string;
}
