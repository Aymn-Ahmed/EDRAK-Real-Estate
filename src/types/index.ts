export interface Property {
  id: string;
  title: string;
  type: 'sale' | 'rent' | 'investment';
  category: 'residential' | 'commercial' | 'land';
  price: number;
  location: string;
  area: number;
  bedrooms?: number;
  bathrooms?: number;
  imageUrl: string;
  featured?: boolean;
}

export interface PlatformModule {
  id: string;
  title: string;
  titleEn: string;
  description: string;
  iconName: string;
  imageFileName: string;
  badge?: string;
}
