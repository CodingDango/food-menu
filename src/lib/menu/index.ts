import type { FoodCategory, MenuCategory } from '../../types/types';
import { burgersCategory } from './burgers';
import { drinksCategory } from './drinks'; // Assuming you create this

export const foodMenu: Record<FoodCategory, MenuCategory> = {
  burgers: burgersCategory,
  drinks: drinksCategory,
};