import type { FoodBadge } from "../types/types";
import { Badge } from "./ui/badge";

export default function FoodBadgeList({
  foodBadges,
}: {
  foodBadges: FoodBadge[];
}) {
  return (
    <div className="flex gap-3 flex-wrap">
      {foodBadges.map((badge, idx) => (
        <Badge key={`${badge.label}-${idx}`} className={badge.className}>
          {badge.label}
        </Badge>
      ))}
    </div>
  );
}
