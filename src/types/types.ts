export interface Nutrient {
  name: string;
  value: string; // 334kcal or 7 gm or 12 gm
}

export type FoodCategory = 'burgers' | 'drinks' | 'sides' | 'deserts';

export interface SimpleMenuItem {
  name: string;
  imageSrc: string;
  price: number;
}

export interface FeaturedMenuItem extends SimpleMenuItem {
  description: string;
  nutrients: Nutrient[];
}

export interface MenuCategory {
  featured?: FeaturedMenuItem;
  list: SimpleMenuItem[];
}