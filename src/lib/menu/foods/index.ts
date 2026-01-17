import type { FoodCategory, MenuCategory } from '../../../types/types';
import { burgersCategory } from './burgers';
import { drinksCategory } from './drinks'; // Assuming you create this
import { sidesCategory } from './sides';
import { dessertsCategory } from './desserts';

export const foodMenu: Record<FoodCategory, MenuCategory> = {
  burgers: burgersCategory,
  drinks: drinksCategory,
  sides: sidesCategory,
  deserts: dessertsCategory
};