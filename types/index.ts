import { MouseEventHandler } from "react";

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  isDisabled?: boolean;
}
export interface SearchSet {
  setModel: (value: string) => void;
  setManufacturer: (value: string) => void;
}

export interface SearchManufacturerProps {
  selected: string;
  setSelected: (manufacturer: string) => void;
}

export interface CarProps {
  id: number;
  city_mpg: number;
  class: string;
  combination_mpg: number;
  cylinders: number;
  displacement: number;
  drive: string;
  fuel_type: string;
  highway_mpg: number;
  make: string;
  model: string;
  transmission: string;
  year: number;
}
export interface FilterProps {
  manufacturer: string;
  year: string;
  fuel: string;
  limit: number;
  model: string;
}
export interface OptionProps {
  title: string;
  value: string;
}
export interface CustomFilterProps {
  options: OptionProps[];
  setFilter: (value: string) => void;
  title: string;
}
export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
  setLimit: (value: number) => void;
}
