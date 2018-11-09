import { Creatures } from './Creatures';
import { BambooRat } from './Creatures/BambooRat/BambooRat';
import { BambooRatCook } from './Creatures/BambooRatCook/BambooRatCook';

export const allCreatures: Creatures[] = [
    new BambooRat(1),
    new BambooRatCook(1)
];