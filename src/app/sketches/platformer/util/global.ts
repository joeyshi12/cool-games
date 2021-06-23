import {Camera} from './camera';
import {MapData} from './map-data';

const cameraWidth = 700;
const cameraHeight = 450;
const solids = new Set([18, 19, 20, 66, 68, 210, 211, 114, 115, 116, 16, 768, 769, 770, 816, 818, 864, 865, 866]);
const platforms = new Set([309, 310, 311, 581, 582, 583, 730, 731, 732]);
// tslint:disable-next-line:max-line-length
const tileArray0 = [0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 581, 583, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 581, 582, 582, 583, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 727, 727, 727, 727, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 535, 535, 535, 535, 0, 70, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 829, 875, 875, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 875, 875, 875, 0, 70, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 535, 535, 535, 535, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 875, 829, 875, 0, 70, 0, 0, 0, 0, 581, 582, 582, 582, 582, 582, 582, 582, 582, 582, 583, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 875, 875, 875, 875, 0, 70, 0, 0, 0, 0, 629, 875, 875, 875, 875, 875, 875, 875, 875, 875, 629, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 730, 731, 732, 0, 70, 0, 535, 535, 535, 535, 0, 70, 0, 0, 0, 0, 629, 875, 875, 875, 727, 727, 727, 875, 875, 875, 629, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 778, 779, 780, 0, 70, 0, 727, 727, 727, 727, 0, 70, 0, 259, 0, 0, 629, 875, 875, 727, 727, 727, 727, 727, 875, 875, 629, 0, 0, 0, 0, 0, 0, 0, 309, 310, 0, 0, 0, 0, 781, 435, 781, 0, 70, 0, 727, 727, 432, 727, 0, 70, 0, 307, 0, 0, 629, 727, 727, 727, 727, 485, 727, 727, 727, 727, 629, 0, 336, 0, 673, 96, 673, 673, 0, 0, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// tslint:disable-next-line:max-line-length
const tileArray1 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 581, 582, 583, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 629, 432, 631, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 260, 0, 0, 154, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 308, 0, 0, 154, 0, 0, 0, 0, 0, 66, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 18, 19, 19, 19, 20, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 67, 68, 0, 0, 0, 0, 66, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 0, 68, 0, 0, 0, 0, 66, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 154, 309, 310, 311, 0, 0, 0, 0, 154, 309, 310, 311, 0, 66, 67, 0, 0, 68, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 0, 68, 22, 22, 22, 22, 66, 0, 0, 0, 0, 0, 0, 0, 0, 311, 0, 0, 0, 0, 0, 309, 310, 311, 154, 0, 0, 0, 0, 309, 310, 311, 154, 0, 0, 0, 0, 66, 0, 0, 0, 210, 19, 19, 19, 19, 211, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 449, 0, 0, 0, 0, 0, 154, 0, 0, 50, 50, 49, 0, 0, 154, 0, 0, 0, 0, 66, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 211, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// tslint:disable-next-line:max-line-length
const tileArray2 = [0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0, 0, 0, 0, 154, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 67, 0, 0, 0, 0, 0, 67, 0, 0, 162, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 0, 0, 0, 0, 154, 0, 0, 0, 0, 99, 96, 96, 0, 0, 0, 0, 0, 66, 0, 0, 67, 0, 0, 0, 0, 0, 162, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 154, 0, 18, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 66, 0, 67, 0, 0, 0, 67, 0, 162, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 66, 0, 0, 0, 0, 0, 19, 20, 309, 310, 311, 114, 115, 115, 115, 115, 115, 115, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 154, 0, 66, 0, 0, 67, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 19, 19, 19, 19, 19, 211, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 66, 67, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 67, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 18, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 22, 66, 0, 0, 210, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 210, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 211, 0, 0, 0, 0, 0, 210, 19, 19, 20, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 210, 19, 19, 19, 19, 67, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 67, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
// tslint:disable-next-line:max-line-length
const tileArray3 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 118, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 768, 769, 769, 769, 769, 770, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 816, 770, 0, 0, 0, 818, 0, 0, 96, 49, 0, 49, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 864, 866, 0, 0, 0, 818, 0, 0, 19, 19, 19, 20, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 818, 0, 0, 0, 1, 1, 68, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 0, 0, 0, 449, 0, 818, 0, 0, 0, 0, 0, 68, 0, 53, 0, 0, 0, 118, 117, 49, 0, 0, 0, 0, 0, 0, 70, 0, 0, 0, 768, 769, 865, 865, 865, 866, 0, 0, 0, 0, 0, 210, 19, 19, 19, 19, 19, 19, 19, 19, 20, 0, 0, 0, 0, 0, 70, 0, 18, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 70, 0, 66, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 68, 49, 0, 96, 0, 0, 118, 117, 66, 0, 0, 0, 0, 0, 0, 0, 1, 0, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 163, 0, 210, 19, 19, 19, 19, 19, 19, 19, 211, 0, 162, 115, 115, 115, 115, 115, 115, 115, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 66, 0, 0, 1, 0, 0, 0, 0, 1, 1, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 114, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 115, 116, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 19, 19, 19, 20, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 309, 310, 311, 0, 0, 0, 0, 0, 0, 0, 0, 0, 68, 673, 0, 673, 673, 673, 0, 0, 0, 0, 0, 0, 0, 673, 0, 0, 0, 673, 0, 0, 0, 0, 0, 0, 0, 673, 673, 0, 0, 0, 210, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 19, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const startingMapData = new MapData(tileArray1, 20, 40, [[475, 390]]);
startingMapData.setLeftMap(new MapData(tileArray0, 20, 40, []));
startingMapData.setRightMap(new MapData(tileArray2, 20, 40, []));
const rightMap = startingMapData.getRightMap();
if (rightMap === null) {
  throw Error('RightMap does not exist');
} else {
  rightMap.setRightMap(new MapData(tileArray3, 30, 30, [[300, 700], [600, 700], [900, 700]]));
}

export const Global = {
  width: cameraWidth,
  height: cameraHeight,
  solidSet: solids,
  platformSet: platforms,
  unitLength: 32,
  mapData: startingMapData,
  camera: new Camera(cameraWidth / 2, cameraHeight / 2, 0, 40 * 32, 0, 20 * 32)
};