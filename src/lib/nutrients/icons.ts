import { LuBicepsFlexed as ProteinIcon } from "react-icons/lu";
import { FlameIcon as EnergyIcon } from "lucide-react";
import { LiaTintSolid as FatsIcon } from "react-icons/lia";
import { LiaCubesSolid as SugarsIcon } from "react-icons/lia";

import type { ElementType } from "react";
import type { NutrientName } from "../../types/types";

export const nutrientIcons: Record<NutrientName, ElementType> = {
  energy: EnergyIcon,
  protein: ProteinIcon,
  fats: FatsIcon,
  sugars: SugarsIcon
};

