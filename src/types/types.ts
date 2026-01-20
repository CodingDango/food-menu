export type FoodCategory = 'burgers' | 'drinks' | 'sides' | 'deserts';

export interface MenuItem {
  name: string;
  imageSrc: string;
  price: number;
  description: string;
  foodBadges: FoodBadge[];
}

export interface MenuCategory {
  featured?: MenuItem;
  list: MenuItem[];
}

export interface FoodBadge {
  label: string;
  className: string;
}