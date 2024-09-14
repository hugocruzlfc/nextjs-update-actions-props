export interface Country {
  name: Name;
  flags: Flags;
  region: string;
  capital: string;
  population: number;
}

interface Flags {
  png: string;
  svg: string;
  alt: string;
}

interface Name {
  common: string;
  official: string;
}
