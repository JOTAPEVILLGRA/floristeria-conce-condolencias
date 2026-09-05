import type { ImageMetadata } from 'astro';

import canastilloClasico from '../assets/catalog/canastillo-clasico.webp';
import canastilloCinta from '../assets/catalog/canastillo-cinta-personalizada.webp';
import canastilloPremium from '../assets/catalog/canastillo-premium.webp';
import canastilloBronce from '../assets/catalog/canastillo-bronce.webp';
import canastilloSilver from '../assets/catalog/canastillo-silver.webp';
import canastilloGold from '../assets/catalog/canastillo-gold.webp';
import conjuntoFloral from '../assets/catalog/conjunto-floral.webp';
import conjuntoFloralM from '../assets/catalog/conjunto-floral-m.webp';
import conjuntoFloralBronce from '../assets/catalog/conjunto-floral-bronce.webp';
import conjuntoFloralSilver from '../assets/catalog/conjunto-floral-silver.webp';
import conjuntoFloralGold from '../assets/catalog/conjunto-floral-gold.webp';
import cubreUrnaBronce from '../assets/catalog/cubre-urna-bronce.webp';
import cubreUrnaSilver from '../assets/catalog/cubre-urna-silver.webp';
import cubreUrnaGold from '../assets/catalog/cubre-urna-gold.webp';
import cubreUrnaPremium from '../assets/catalog/cubre-urna-premium.webp';
import coronaFloral from '../assets/catalog/corona-floral.webp';
import coronaFloralSilver from '../assets/catalog/corona-floral-silver.webp';
import coronaFloralGold from '../assets/catalog/corona-floral-gold.webp';
import coronaPremium from '../assets/catalog/corona-premium.webp';
import pieUrnaS from '../assets/catalog/pie-urna-s.webp';
import pieUrnaClasico from '../assets/catalog/pie-urna-clasico.webp';
import pieUrnaBronce from '../assets/catalog/pie-urna-bronce.webp';
import pieUrnaSilver from '../assets/catalog/pie-urna-silver.webp';
import pieUrnaGold from '../assets/catalog/pie-urna-gold.webp';
import atrilFloralBronce from '../assets/catalog/atril-floral-bronce.webp';
import duoAtrilesPremium from '../assets/catalog/duo-atriles-premium.webp';
import arregloRegaloBase from '../assets/catalog/arreglo-regalo-base.webp';
import ramoSoloRosa from '../assets/catalog/ramo-solo-rosa.webp';
import ramo6Rosas from '../assets/catalog/ramo-6-rosas.webp';
import ramoPrimaveral from '../assets/catalog/ramo-primaveral.webp';
import ramoRosasBicolor from '../assets/catalog/ramo-rosas-bicolor.webp';
import ramoRosasRosadas from '../assets/catalog/ramo-rosas-rosadas.webp';
import ramo8RosasRojas from '../assets/catalog/ramo-8-rosas-rojas.webp';
import ramoClasicoM from '../assets/catalog/ramo-clasico-m.webp';
import ramoRosasGold from '../assets/catalog/ramo-rosas-gold.webp';
import ramo9Rosas from '../assets/catalog/ramo-9-rosas.webp';
import ramoFloralVariedad from '../assets/catalog/ramo-floral-variedad.webp';
import categoryCanastillos from '../assets/catalog/category-canastillos.png';
import categoryConjuntos from '../assets/catalog/category-conjuntos.png';
import categoryCubreUrnas from '../assets/catalog/category-cubre-urnas.png';
import categoryCoronas from '../assets/catalog/category-coronas.png';

export const categoryOrder = [
  'canastillos',
  'conjuntos',
  'cubre-urnas',
  'coronas',
  'atriles-pies-urna',
  'regalos',
] as const;

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
  'atriles-pies-urna': 'Pies de urna',
  regalos: 'Ramos para regalar',
};

export const categoryImages: Record<CatalogCategory, ImageMetadata> = {
  canastillos: categoryCanastillos,
  conjuntos: categoryConjuntos,
  'cubre-urnas': categoryCubreUrnas,
  coronas: categoryCoronas,
  'atriles-pies-urna': pieUrnaGold,
  regalos: ramoFloralVariedad,
};

export const catalog: CatalogProduct[] = [
  {
    id: 'canastillo-bronce',
    name: 'Canastillo Bronce',
    category: 'canastillos',
    priceCLP: 20000,
    image: canastilloBronce,
    alt: 'Canastillo Bronce con flores blancas y follaje verde',
    objectPosition: '50% 49%',
  },
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
    id: 'canastillo-silver',
    name: 'Canastillo Silver',
    category: 'canastillos',
    priceCLP: 30000,
    image: canastilloSilver,
    alt: 'Canastillo Silver de flores blancas con cinta personalizada',
    objectPosition: '50% 48%',
  },
  {
    id: 'canastillo-gold',
    name: 'Canastillo Gold',
    category: 'canastillos',
    priceCLP: 50000,
    image: canastilloGold,
    alt: 'Canastillo Gold de gran volumen con flores blancas y follaje verde',
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
    id: 'conjunto-floral-m',
    name: 'Conjunto floral M',
    category: 'conjuntos',
    priceCLP: 90000,
    image: conjuntoFloralM,
    alt: 'Conjunto floral M de dos arreglos blancos sobre atriles',
    objectPosition: '50% 50%',
  },
  {
    id: 'conjunto-floral-bronce',
    name: 'Conjunto floral Bronce',
    category: 'conjuntos',
    priceCLP: 135000,
    image: conjuntoFloralBronce,
    alt: 'Conjunto floral Bronce de tres arreglos blancos para ceremonia',
    objectPosition: '50% 48%',
  },
  {
    id: 'conjunto-floral-silver',
    name: 'Conjunto floral Silver',
    category: 'conjuntos',
    priceCLP: 165000,
    image: conjuntoFloralSilver,
    alt: 'Conjunto floral Silver de cuatro arreglos blancos coordinados',
    objectPosition: '50% 50%',
  },
  {
    id: 'conjunto-floral-gold',
    name: 'Conjunto floral Gold',
    category: 'conjuntos',
    priceCLP: 510000,
    image: conjuntoFloralGold,
    alt: 'Conjunto floral Gold de gran tamaño con flores blancas',
    objectPosition: '50% 47%',
  },
  {
    id: 'cubre-urna-bronce',
    name: 'Cubre urna Bronce',
    category: 'cubre-urnas',
    priceCLP: 30000,
    image: cubreUrnaBronce,
    alt: 'Cubre urna Bronce con flores blancas y follaje verde',
    objectPosition: '50% 50%',
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
    id: 'corona-floral-silver',
    name: 'Corona floral Silver',
    category: 'coronas',
    priceCLP: 235000,
    image: coronaFloralSilver,
    alt: 'Corona floral Silver de flores blancas sobre atril',
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
    id: 'pie-urna-s',
    name: 'Pie de urna S',
    category: 'atriles-pies-urna',
    priceCLP: 35000,
    image: pieUrnaS,
    alt: 'Pie de urna S con flores blancas y follaje verde',
    objectPosition: '50% 48%',
  },
  {
    id: 'pie-urna-clasico',
    name: 'Pie de urna clásico',
    category: 'atriles-pies-urna',
    priceCLP: 45000,
    image: pieUrnaClasico,
    alt: 'Pie de urna clásico con flores blancas y cinta de condolencias',
    objectPosition: '50% 48%',
  },
  {
    id: 'pie-urna-bronce',
    name: 'Pie de urna Bronce',
    category: 'atriles-pies-urna',
    priceCLP: 60000,
    image: pieUrnaBronce,
    alt: 'Pie de urna Bronce de flores blancas con cinta personalizada',
    objectPosition: '50% 48%',
  },
  {
    id: 'pie-urna-silver',
    name: 'Pie de urna Silver',
    category: 'atriles-pies-urna',
    priceCLP: 75000,
    image: pieUrnaSilver,
    alt: 'Pie de urna Silver con rosas blancas y follaje abundante',
    objectPosition: '50% 48%',
  },
  {
    id: 'pie-urna-gold',
    name: 'Pie de urna Gold',
    category: 'atriles-pies-urna',
    priceCLP: 110000,
    image: pieUrnaGold,
    alt: 'Pie de urna Gold de flores blancas con cinta de condolencias',
    objectPosition: '50% 50%',
  },
  {
    id: 'atril-floral-bronce',
    name: 'Atril floral Bronce',
    category: 'coronas',
    priceCLP: 130000,
    image: atrilFloralBronce,
    alt: 'Atril floral Bronce de flores blancas con cinta personalizada',
    objectPosition: '50% 47%',
  },
  {
    id: 'duo-atriles-premium',
    name: 'Dúo de atriles florales Premium',
    category: 'coronas',
    priceCLP: 460000,
    image: duoAtrilesPremium,
    alt: 'Dúo de atriles florales Premium con flores blancas',
    objectPosition: '50% 47%',
  },
  {
    id: 'arreglo-regalo-base',
    name: 'Arreglo de regalo con base',
    category: 'regalos',
    priceCLP: 70000,
    image: arregloRegaloBase,
    alt: 'Arreglo de regalo con rosas rojas, flores blancas y base floral',
    objectPosition: '50% 48%',
  },
  {
    id: 'ramo-solo-rosa',
    name: 'Ramo solo rosa',
    category: 'regalos',
    priceCLP: 20000,
    image: ramoSoloRosa,
    alt: 'Ramo con una rosa rosada, crisantemos violetas y gypsophila',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-6-rosas',
    name: 'Ramo de 6 rosas',
    category: 'regalos',
    priceCLP: 22000,
    image: ramo6Rosas,
    alt: 'Ramo de seis rosas rojas con gypsophila y follaje verde',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-primaveral',
    name: 'Ramo primaveral',
    category: 'regalos',
    priceCLP: 22000,
    image: ramoPrimaveral,
    alt: 'Ramo primaveral con lirios, gerberas y flores amarillas',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-rosas-bicolor',
    name: 'Ramo de rosas bicolor',
    category: 'regalos',
    priceCLP: 22000,
    image: ramoRosasBicolor,
    alt: 'Ramo de rosas bicolor naranjas y amarillas con gypsophila',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-rosas-rosadas',
    name: 'Ramo de rosas rosadas',
    category: 'regalos',
    priceCLP: 22000,
    image: ramoRosasRosadas,
    alt: 'Ramo de rosas rosadas con gypsophila y envoltorio rosado',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-8-rosas-rojas',
    name: 'Ramo de 8 rosas rojas',
    category: 'regalos',
    priceCLP: 30000,
    image: ramo8RosasRojas,
    alt: 'Ramo de ocho rosas rojas con gypsophila y follaje verde',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-clasico-m',
    name: 'Ramo clásico M',
    category: 'regalos',
    priceCLP: 33000,
    image: ramoClasicoM,
    alt: 'Ramo clásico M de rosas rosadas, lirios y gypsophila',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-rosas-gold',
    name: 'Ramo de rosas Gold',
    category: 'regalos',
    priceCLP: 33000,
    image: ramoRosasGold,
    alt: 'Ramo Gold de rosas rojas con gypsophila y envoltorio rojo',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-9-rosas',
    name: 'Ramo de 9 rosas',
    category: 'regalos',
    priceCLP: 34000,
    image: ramo9Rosas,
    alt: 'Ramo de nueve rosas rosadas con gypsophila y envoltorio rosado',
    objectPosition: '50% 50%',
  },
  {
    id: 'ramo-floral-variedad',
    name: 'Ramo floral variedad',
    category: 'regalos',
    priceCLP: 40000,
    image: ramoFloralVariedad,
    alt: 'Ramo floral variado con rosas, crisantemos y flores violetas',
    objectPosition: '50% 50%',
  },
];

export const formatCLP = (value: number) =>
  new Intl.NumberFormat('es-CL', {
    style: 'currency',
    currency: 'CLP',
    maximumFractionDigits: 0,
  }).format(value);
