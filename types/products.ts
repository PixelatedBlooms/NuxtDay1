export interface Product {
    id?: number;
    name?: string;
    category?: string;
    price?: number;
    image?: string;
    isCart?: boolean;
    description?: string;
    color?: string; // Added color as optional
    quantity?: number; // Added quantity as optional
  }
  