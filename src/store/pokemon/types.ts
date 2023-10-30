export interface Pokemon {
  id: number;
  name: string;
  image: string;
  types: { slot: number; type: { name: string; url: string } }[];
  weight: number;
  height: number;
  url: string;
  sprites: {
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      };
    };
  };
}
