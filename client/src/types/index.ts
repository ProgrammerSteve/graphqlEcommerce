
import React from 'react';

// GraphQL Types
export interface Item {
  id: string;
  name: string;
  src: string;
  price: number;
  alt: string;
  stock: number;
  description: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  discontinued: boolean;

  category: string;
}

export interface GetItemsData {
  items: Item[];
}

export interface GetItemByIdData {
  itemById: Item;
}

export interface GetItemsByPriceData {
  itemsByPrice: Item[];
}

// Component Props Types
export interface ItemDisplayProps {
  showSideMenu: boolean;
  toggleSideMenu: () => void;
  loading: boolean;
  error: any;
  data: GetItemsData | undefined;
  sortOption: string;
  textSearch: string;
  minPrice: number;
  maxPrice: number;
}

export interface NavbarProps {
  textSearch: string;
  handleTextSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minPrice: number;
  handleMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxPrice: number;
  handleMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  toggleSideMenu: () => void;
  showSideMenu: boolean;
  sortOption: string;
  handleSortOption: (value: string) => void;
}

export interface SideMenuProps {
  toggleSideMenu: () => void;
  textSearch: string;
  handleTextSearch: (e: React.ChangeEvent<HTMLInputElement>) => void;
  minPrice: number;
  handleMinPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  maxPrice: number;
  handleMaxPrice: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleSortOption: (value: string) => void;
  sortOption: string;
  handleNavigationNewItem: () => void;
}

export interface ItemCardProps {
  showSideMenu: boolean;
  toggleSideMenu: () => void;
}

// Additional component props
export interface ItemPreviewProps {
  item: Item;
  handleNavigate: (path: string) => void;
}

// Hook return types
export interface UseGetDataReturn {
  loading: boolean;
  error: any;
  data: GetItemsData | undefined;
}

// Item reducer types
export interface ItemState {
  id?: string;
  name: string;
  src: string;
  price: number;
  alt: string;
  stock: number;
  description: string;
  length: number;
  width: number;
  height: number;
  weight: number;
  discontinued: boolean;
  category: string;
}

export interface ItemAction {
  type: string;
  payload: string | number | boolean | Item;
}

export interface ItemHandlers {
  name: (e: React.ChangeEvent<HTMLInputElement>) => void;
  src: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  price: (e: React.ChangeEvent<HTMLInputElement>) => void;
  alt: (e: React.ChangeEvent<HTMLInputElement>) => void;
  stock: (e: React.ChangeEvent<HTMLInputElement>) => void;
  description: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  length: (e: React.ChangeEvent<HTMLInputElement>) => void;
  width: (e: React.ChangeEvent<HTMLInputElement>) => void;
  height: (e: React.ChangeEvent<HTMLInputElement>) => void;
  weight: (e: React.ChangeEvent<HTMLInputElement>) => void;
  discontinuedTrue: () => void;
  discontinuedFalse: () => void;
  category: (e: React.ChangeEvent<HTMLInputElement>) => void;
}