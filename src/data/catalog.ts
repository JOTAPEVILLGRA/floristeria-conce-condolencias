import type { ImageMetadata } from 'astro';

import canastilloClasico from '../assets/catalog/canastillo-clasico.webp';
import canastilloCinta from '../assets/catalog/canastillo-cinta-personalizada.webp';
import canastilloPremium from '../assets/catalog/canastillo-premium.webp';
import conjuntoFloral from '../assets/catalog/conjunto-floral.webp';
import cubreUrnaSilver from '../assets/catalog/cubre-urna-silver.webp';
import cubreUrnaGold from '../assets/catalog/cubre-urna-gold.webp';
import cubreUrnaPremium from '../assets/catalog/cubre-urna-premium.webp';
import coronaFloral from '../assets/catalog/corona-floral.webp';
import coronaFloralGold from '../assets/catalog/corona-floral-gold.webp';
import coronaPremium from '../assets/catalog/corona-premium.webp';
import regaloCajaFloral from '../assets/catalog/regalo-caja-floral.webp';
import regaloCanastoFloral from '../assets/catalog/regalo-canasto-floral.webp';
import regaloJarronFloral from '../assets/catalog/regalo-jarron-floral.webp';
import categoryCanastillos from '../assets/catalog/category-canastillos.png';
import categoryConjuntos from '../assets/catalog/category-conjuntos.png';
import categoryCubreUrnas from '../assets/catalog/category-cubre-urnas.png';
import categoryCoronas from '../assets/catalog/category-coronas.png';

export const categoryOrder = ['canastillos', 'conjuntos', 'cubre-urnas', 'coronas', 'regalos'] as const;

export type CatalogCategory = (typeof categoryOrder)[number];

export interface CatalogProduct {
  id: string;
  name: string;
  category: CatalogCategory;
  priceCLP: number;
  image: ImageMetadata;
  alt: string;
  objectPosition?: string;
}

export const categoryLabels: Record<CatalogCategory, string> = {
  canastillos: 'Canastillos',
  conjuntos: 'Conjuntos florales',
  'cubre-urnas': 'Cubre urnas',
  coronas: 'Coronas',
  regalos: 'Regalos',
};

export const categoryImages: Record<CatalogCategory, ImageMetadata> = {
  canastillos: categoryCanastillos,
  conjuntos: categoryConjuntos,
  'cubre-urnas': categoryCubreUrnas,
  coronas: categoryCoronas,
  regalos: regaloCajaFloral,
};

export const catalog: CatalogProduct[] = [
  {
    id: 'canastillo-clasico',
    name: 'Canastillo clásico',
    category: 'canastillos',
    priceCLP: 22000,
    image: canastilloClasico,
    alt: 'Canastillo floral clásico de flores blancas y follaje verde',
    objectPosition: '50% 51%',
  },
  {
    id: 'canastillo-cinta-personalizada',
    name: 'Canastillo con cinta personalizada',
    category: 'canastillos',
    priceCLP: 30000,
    image: canastilloCinta,
    alt: 'Canastillo de condolencias con flores blancas y cinta personalizada',
    objectPosition: '50% 47%',
  },
  {
    id: 'canastillo-premium',
    name: 'Canastillo premium',
    category: 'canastillos',
    priceCLP: 55000,
    image: canastilloPremium,
    alt: 'Canastillo floral premium de gran volumen con flores blancas',
    objectPosition: '50% 47%',
  },
  {
    id: 'conjunto-floral',
    name: 'Conjunto floral',
    category: 'conjuntos',
    priceCLP: 90000,
    image: conjuntoFloral,
    alt: 'Conjunto de dos arreglos florales blancos para ceremonia',
    objectPosition: '50% 45%',
  },
  {
    id: 'cubre-urna-silver',
    name: 'Cubre urna Silver',
    category: 'cubre-urnas',
    priceCLP: 45000,
    image: cubreUrnaSilver,
    alt: 'Cubre urna Silver con rosas blancas y follaje verde',
    objectPosition: '50% 52%',
  },
  {
    id: 'cubre-urna-gold',
    name: 'Cubre urna Gold',
    category: 'cubre-urnas',
    priceCLP: 80000,
    image: cubreUrnaGold,
    alt: 'Cubre urna Gold con rosas blancas, crisantemos y abundante follaje',
    objectPosition: '50% 55%',
  },
  {
    id: 'cubre-urna-premium',
    name: 'Cubre urna Premium',
    category: 'cubre-urnas',
    priceCLP: 110000,
    image: cubreUrnaPremium,
    alt: 'Cubre urna Premium de rosas y lirios blancos',
    objectPosition: '50% 51%',
  },
  {
    id: 'corona-floral',
    name: 'Corona floral',
    category: 'coronas',
    priceCLP: 165000,
    image: coronaFloral,
    alt: 'Corona floral blanca sobre atril de madera',
    objectPosition: '50% 46%',
  },
  {
    id: 'corona-floral-gold',
    name: 'Corona floral Gold',
    category: 'coronas',
    priceCLP: 250000,
    image: coronaFloralGold,
    alt: 'Corona floral Gold con flores blancas y detalles amarillos',
    objectPosition: '50% 44%',
  },
  {
    id: 'corona-premium',
    name: 'Corona Premium',
    category: 'coronas',
    priceCLP: 370000,
    image: coronaPremium,
    alt: 'Corona Premium personalizada de flores blancas',
    objectPosition: '50% 50%',
  },
  {
    id: 'regalo-caja-floral',
    name: 'Caja floral',
    category: 'regalos',
    priceCLP: 35000,
    image: regaloCajaFloral,
    alt: 'Caja de regalo marfil con rosas blancas, lisianthus y eucalipto',
    objectPosition: '50% 50%',
  },
  {
    id: 'regalo-canasto-floral',
    name: 'Canasto floral',
    category: 'regalos',
    priceCLP: 45000,
    image: regaloCanastoFloral,
    alt: 'Canasto de fibra natural con hortensias y rosas blancas',
    objectPosition: '50% 50%',
  },
  {
    id: 'regalo-jarron-floral',
    name: 'Jarrón floral',
    category: 'regalos',
    priceCLP: 55000,
    image: regaloJarronFloral,
    alt: 'Jarrón blanco con lirios, alstroemerias y eucalipto',
    objectPosition: '50% 50%',
  },
];

export const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value);
