import { Creatures } from './Creatures/Creatures';
import { BambooRat } from './Creatures/BambooRat/BambooRat';
import { BambooRatCook } from './Creatures/BambooRatCook/BambooRatCook';
import { AlienApostles } from './Creatures/AlienApostles/AlienApostles';
import { Swordman } from './Creatures/Swordman/Swordman';

export const allCreatures: Creatures[] = [
    new BambooRat(1),
    new BambooRatCook(1),
    new AlienApostles(1),
    new Swordman(1)
];