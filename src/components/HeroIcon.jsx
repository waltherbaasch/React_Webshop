import React from "react";
import { ShoppingBagIcon } from "@heroicons/react/outline";

const HeroIcon = ({ totalItems }) => {
  return (
    <div className="flex items-center">
      <ShoppingBagIcon className="h-6 w-6 mr-1" />
      <span className="text-sm">{totalItems}</span>
    </div>
  );
};
export default HeroIcon;
