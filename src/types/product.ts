// This defines the structure for a single product.
export interface Product {
  id: string; // A unique identifier, e.g., 'namkeen-aloo-bhujia'
  name: string; // The product's display name, e.g., "Aloo Bhujia"
  category: 'Namkeen' | 'Chips' | 'Sattu'; // Pre-defined categories for consistency
  tagline: string; // A short, catchy description, e.g., "Crispy potato noodles"
  description: string; // A longer, more detailed paragraph about the product.
  imageUrls: string[]; // An array of image paths, the first being the primary image.
  packagingInfo: PackagingOption[]; // An array of bulk ordering options.
}

// This defines the structure for the nested packaging information.
export interface PackagingOption {
  weight: string; // e.g., "200g", "5kg"
  unitsPerCase: number; // e.g., 50, 10
  caseType: string; // e.g., "Retail Pouch", "Bulk Bag"
}