export interface Nutrient {
  name: string;
  value: string; // 334kcal or 7 gm or 12 gm
}

export interface Food {
  name: string;
  description?: string;
  price: number;
  imageSrc: string;
  nutrients?: Nutrient[];
}