// thumbnail
import thumbnail_1 from './images/image-waffle-thumbnail.jpg';
import thumbnail_2 from './images/image-creme-brulee-thumbnail.jpg';
import thumbnail_3 from './images/image-macaron-thumbnail.jpg';
import thumbnail_4 from './images/image-tiramisu-thumbnail.jpg';
import thumbnail_5 from './images/image-baklava-thumbnail.jpg';
import thumbnail_6 from './images/image-meringue-thumbnail.jpg';
import thumbnail_7 from './images/image-cake-thumbnail.jpg';
import thumbnail_8 from './images/image-brownie-thumbnail.jpg';
import thumbnail_9 from './images/image-panna-cotta-thumbnail.jpg';

// mobile
import mobile_1 from './images/image-waffle-mobile.jpg';
import mobile_2 from './images/image-creme-brulee-mobile.jpg';
import mobile_3 from './images/image-macaron-mobile.jpg';
import mobile_4 from './images/image-tiramisu-mobile.jpg';
import mobile_5 from './images/image-baklava-mobile.jpg';
import mobile_6 from './images/image-meringue-mobile.jpg';
import mobile_7 from './images/image-cake-mobile.jpg';
import mobile_8 from './images/image-brownie-mobile.jpg';
import mobile_9 from './images/image-panna-cotta-mobile.jpg';

// tablet
import tablet_1 from './images/image-waffle-tablet.jpg';
import tablet_2 from './images/image-creme-brulee-tablet.jpg';
import tablet_3 from './images/image-macaron-tablet.jpg';
import tablet_4 from './images/image-tiramisu-tablet.jpg';
import tablet_5 from './images/image-baklava-tablet.jpg';
import tablet_6 from './images/image-meringue-tablet.jpg';
import tablet_7 from './images/image-cake-tablet.jpg';
import tablet_8 from './images/image-brownie-tablet.jpg';
import tablet_9 from './images/image-panna-cotta-tablet.jpg';

// desktop
import desktop_1 from "./images/image-waffle-desktop.jpg";
import desktop_2 from "./images/image-creme-brulee-desktop.jpg";
import desktop_3 from "./images/image-macaron-desktop.jpg";
import desktop_4 from "./images/image-tiramisu-desktop.jpg";
import desktop_5 from "./images/image-baklava-desktop.jpg";
import desktop_6 from "./images/image-meringue-desktop.jpg";
import desktop_7 from "./images/image-cake-desktop.jpg";
import desktop_8 from "./images/image-brownie-desktop.jpg";
import desktop_9 from "./images/image-panna-cotta-desktop.jpg";

// svg icons
import remove from "./images/icon-remove-item.svg";
import add from "./images/icon-add-to-cart.svg";
import carbon from "./images/icon-carbon-neutral.svg";
import decrement from "./images/icon-decrement-quantity.svg";
import increment from "./images/icon-increment-quantity.svg";
import order from "./images/icon-order-confirmed.svg";
import empty from "./images/illustration-empty-cart.svg";

export const icons = {remove, add, carbon, decrement, increment, order, empty};

const assets = [
    {
       "id": 1,
        "image": {
            "thumbnail": thumbnail_1,
            "mobile": mobile_1,
            "tablet": tablet_1,
            "desktop": desktop_1
       },
       "name": "Waffle with Berries",
       "category": "Waffle",
       "price": 6.50
    },
    {
        "id": 2,
         "image": {
            "thumbnail": thumbnail_2,
            "mobile": mobile_2,
            "tablet": tablet_2,
            "desktop": desktop_2
        },
        "name": "Vanilla Bean Crème Brûlée",
        "category": "Crème Brûlée",
        "price": 7.00
     },
     {
        "id": 3,
         "image": {
            "thumbnail":thumbnail_3,
            "mobile": mobile_3,
            "tablet": tablet_3,
            "desktop": desktop_3
        },
        "name": "Macaron Mix of Five",
        "category": "Macaron",
        "price": 8.00
     },
     {
        "id": 4,
         "image": {
            "thumbnail": thumbnail_4,
            "mobile": mobile_4,
            "tablet": tablet_4,
            "desktop": desktop_4
        },
        "name": "Classic Tiramisu",
        "category": "Tiramisu",
        "price": 5.50
     },
     {
        "id": 5,
         "image": {
            "thumbnail": thumbnail_5,
            "mobile": mobile_5,
            "tablet": tablet_5,
            "desktop": desktop_5
        },
        "name": "Pistachio Baklava",
        "category": "Baklava",
        "price": 4.00
     },
     {
        "id": 6,
         "image": {
            "thumbnail": thumbnail_6,
            "mobile": mobile_6,
            "tablet": tablet_6,
            "desktop": desktop_6
        },
        "name": "Lemon Meringue Pie",
        "category": "Pie",
        "price": 5.00
     },
     {
        "id": 7,
         "image": {
            "thumbnail": thumbnail_7,
            "mobile": mobile_7,
            "tablet": tablet_7,
            "desktop": desktop_7
        },
        "name": "Red Velvet Cake",
        "category": "Cake",
        "price": 4.50
     },
     {
        "id": 8,
         "image": {
            "thumbnail": thumbnail_8,
            "mobile": mobile_8,
            "tablet": tablet_8,
            "desktop": desktop_8
        },
        "name": "Salted Caramel Brownie",
        "category": "Brownie",
        "price": 4.50
     },
     {
        "id": 9,
         "image": {
            "thumbnail": thumbnail_9,
            "mobile": mobile_9,
            "tablet": tablet_9,
            "desktop": desktop_9
        },
        "name": "Vanilla Panna Cotta",
        "category": "Panna Cotta",
        "price": 6.50
     }
]
export default assets;
