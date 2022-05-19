 import { collection, addDoc } from 'firebase/firestore';
 import { db } from '../firebase/firebase-config.js';
 import img1 from './tempImages/Group 1 - Caregiver/Menswear/Deveaux New York (WHITE DUNCAN SHIRT) 560€.jpeg'
 import img2 from './tempImages/Group 1 - Caregiver/Menswear/Joseph (Light Twill Blouson Jacket) 730€.jpeg'
 import img3 from './tempImages/Group 1 - Caregiver/Menswear/MfPen (Typo Knit Vest Taupe) 228€.jpg'
 import img4 from './tempImages/Group 1 - Caregiver/Womenswear/Deveaux New York (LEAH DRESS) 1030€.jpeg'
 import img5 from './tempImages/Group 1 - Caregiver/Womenswear/Joseph (Leather Slouch Bag) 725€.jpeg'
 import img6 from './tempImages/Group 1 - Caregiver/Womenswear/Joseph (Nappa Leather Tarah Shorts) 1245€.jpeg'
 import img7 from './tempImages/Group 1 - Caregiver/Womenswear/Lauren Manoogian (Ruche Dress) 990€.jpg'
 import img8 from './tempImages/Group 1 - Caregiver/Womenswear/Lauren Manoogian (Weave Bag) 320€.jpeg'
 import img9 from './tempImages/Group 1 - Caregiver/Womenswear/Ms Min (Floral Jacket) 980€.jpeg'
 import img10 from './tempImages/Group 2 - Caregiver/Menswear/3MAN (Engineered Stripe Blanket Jacket) 730€.jpeg'
 import img11 from './tempImages/Group 2 - Caregiver/Menswear/Harris Wharf London (Casual coolmax trousers) 195€.jpeg'
 import img12 from './tempImages/Group 2 - Caregiver/Menswear/Le17Septembre (917 HARD WEAVE OPEN COLLAR SHIRT) - 140€.jpg'
 import img13 from './tempImages/Group 2 - Caregiver/Womenswear/Harris Wharf London (Dress with bow in light technic) 300€.jpeg'
 import img14 from './tempImages/Group 2 - Caregiver/Womenswear/Kika Vargas (Midi Dress Metrodora a fiori) 730€.jpg'
 import img15 from './tempImages/Group 2 - Caregiver/Womenswear/Le17Septembre (CLASSIC LEATHER BELTED PANTS) - 150€.jpeg'
 import img16 from './tempImages/Group 2 - Caregiver/Womenswear/Low Classic (BEADS BAG - IVORY) 860€.jpeg'
 import img17 from './tempImages/Group 2 - Caregiver/Womenswear/Low Classic (BEADS SANDALS - YELLOW) 430€.jpeg'
 import img18 from './tempImages/Group 2 - Caregiver/Womenswear/Low Classic (UNBALANCE DRESS - LIGHT BEIGE) 320€.jpeg'
 import img19 from './tempImages/Group 3 - Ruler/Menswear/HG _ LF (GS21 Skirt) 760€.png'
 import img20 from './tempImages/Group 3 - Ruler/Menswear/Julius (780CUM3 White _ Zip Sleeve Sweatshirt) 380€.jpg'
 import img21 from './tempImages/Group 3 - Ruler/Menswear/Julius (780FWM1-C Gray _ Attached Part Sneakers) 750€.jpg'
 import img22 from './tempImages/Group 3 - Ruler/Womenswear/Francesco Murano (Structured Jacket) 1300€.jpg'
 import img23 from './tempImages/Group 3 - Ruler/Womenswear/Lado Bokuchava (ISABELLE BLOUSE) 560€.jpeg'
 import img24 from './tempImages/Group 3 - Ruler/Womenswear/Situationist (BURGUNDY LEATHER COAT) 1740€.jpeg'
 import img25 from './tempImages/Group 4 - Ruler/Menswear/Abasi Rosborough (ARC Phantom Parka _ Cobalt Twill) 1100€.jpeg'
 import img26 from './tempImages/Group 4 - Ruler/Menswear/Heliot Emil (Leather Jacket) 1600€.jpg'
 import img27 from './tempImages/Group 4 - Ruler/Menswear/Heliot Emil (SCARF WITH METAL HE BROOCH) 250€.jpg'
 import img28 from './tempImages/Group 4 - Ruler/Menswear/Helito Emil (TAILORED TROUSERS) 650€.jpg'
 import img29 from './tempImages/Group 4 - Ruler/Menswear/Ichiro Suzuki (Deconstructed Jacket) - 850€.jpeg'
 import img30 from './tempImages/Group 4 - Ruler/Womenswear/Heliot Emil (Sandals) 490€.jpg'
 import img31 from './tempImages/Group 4 - Ruler/Womenswear/Heliot Emil (S_S SHIRT W STRAP) 295€(1).jpg'
 import img32 from './tempImages/Group 4 - Ruler/Womenswear/Heliot Emil (S_S SHIRT W STRAP) 295€.jpg'
 import img33 from './tempImages/Group 4 - Ruler/Womenswear/Materiel Tblisi (ORGANZA SHEER COAT) 1050€.jpg'
 import img34 from './tempImages/Group 4 - Ruler/Womenswear/Standing Ground (Long Green Dress) 1345€.jpg'
 const imgArr = [
     img1, img2, img3, img4,
     img5, img6, img7, img8,
     img9, img10, img11, img12,
     img13, img14, img15, img16,
     img17, img18, img19, img20,
     img21, img22, img23, img24,
     img25, img26, img27, img28,
     img29, img30, img31, img32,
     img33, img34
 ]
 const arr = [{
         key: '1',
         groupName: 'Caregiver',
         value: ['Deveaux New York ', 'WHITE DUNCAN SHIRT', ' 560€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 1 - Caregiver/Menswear/Deveaux New York (WHITE DUNCAN SHIRT) 560€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Joseph ', 'Light Twill Blouson Jacket', ' 730€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 1 - Caregiver/Menswear/Joseph (Light Twill Blouson Jacket) 730€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['MfPen ', 'Typo Knit Vest Taupe', ' 228€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 1 - Caregiver/Menswear/MfPen (Typo Knit Vest Taupe) 228€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Deveaux New York ', 'LEAH DRESS', ' 1030€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 1 - Caregiver/Womenswear/Deveaux New York (LEAH DRESS) 1030€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Joseph ', 'Leather Slouch Bag', ' 725€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 1 - Caregiver/Womenswear/Joseph (Leather Slouch Bag) 725€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Joseph ', 'Nappa Leather Tarah Shorts', ' 1245€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 1 - Caregiver/Womenswear/Joseph (Nappa Leather Tarah Shorts) 1245€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Lauren Manoogian ', 'Ruche Dress', ' 990€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 1 - Caregiver/Womenswear/Lauren Manoogian (Ruche Dress) 990€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Lauren Manoogian ', 'Weave Bag', ' 320€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 1 - Caregiver/Womenswear/Lauren Manoogian (Weave Bag) 320€'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Ms Min ', 'Floral Jacket', ' 980€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 1 - Caregiver/Womenswear/Ms Min (Floral Jacket) 980€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['3MAN ', 'Engineered Stripe Blanket Jacket', ' 730€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 2 - Caregiver/Menswear/3MAN (Engineered Stripe Blanket Jacket) 730€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Harris Wharf London ', 'Casual coolmax trousers', ' 195€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 2 - Caregiver/Menswear/Harris Wharf London (Casual coolmax trousers) 195€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Le17Septembre ', '917 HARD WEAVE OPEN COLLAR SHIRT', ' - 140€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 2 - Caregiver/Menswear/Le17Septembre (917 HARD WEAVE OPEN COLLAR SHIRT) - 140€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: [
             'Harris Wharf London ',
             'Dress with bow in light technic',
             ' 300€'
         ],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 2 - Caregiver/Womenswear/Harris Wharf London (Dress with bow in light technic) 300€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Kika Vargas ', 'Midi Dress Metrodora a fiori', ' 730€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 2 - Caregiver/Womenswear/Kika Vargas (Midi Dress Metrodora a fiori) 730€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Le17Septembre ', 'CLASSIC LEATHER BELTED PANTS', ' - 150€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 2 - Caregiver/Womenswear/Le17Septembre (CLASSIC LEATHER BELTED PANTS) - 150€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Low Classic ', 'BEADS BAG - IVORY', ' 860€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 2 - Caregiver/Womenswear/Low Classic (BEADS BAG - IVORY) 860€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Low Classic ', 'BEADS SANDALS - YELLOW', ' 430€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 2 - Caregiver/Womenswear/Low Classic (BEADS SANDALS - YELLOW) 430€'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Low Classic ', 'UNBALANCE DRESS - LIGHT BEIGE', ' 320€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 2 - Caregiver/Womenswear/Low Classic (UNBALANCE DRESS - LIGHT BEIGE) 320€'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['HG _ LF ', 'GS21 Skirt', ' 760€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 3 - Ruler/Menswear/HG _ LF (GS21 Skirt) 760€'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Julius ', '780CUM3 White _ Zip Sleeve Sweatshirt', ' 380€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 3 - Ruler/Menswear/Julius (780CUM3 White _ Zip Sleeve Sweatshirt) 380€'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Julius ', '780FWM1-C Gray _ Attached Part Sneakers', ' 750€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 3 - Ruler/Menswear/Julius (780FWM1-C Gray _ Attached Part Sneakers) 750€'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Francesco Murano ', 'Structured Jacket', ' 1300€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 3 - Ruler/Womenswear/Francesco Murano (Structured Jacket) 1300€'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Lado Bokuchava ', 'ISABELLE BLOUSE', ' 560€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 3 - Ruler/Womenswear/Lado Bokuchava (ISABELLE BLOUSE) 560€'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Situationist ', 'BURGUNDY LEATHER COAT', ' 1740€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 3 - Ruler/Womenswear/Situationist (BURGUNDY LEATHER COAT) 1740€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: [
             'Abasi Rosborough ',
             'ARC Phantom Parka _ Cobalt Twill',
             ' 1100€'
         ],
         gender: 'Menswear',
         completePath: '/tempImages/Group 4 - Ruler/Menswear/Abasi Rosborough (ARC Phantom Parka _ Cobalt Twill) 1100€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'Leather Jacket', ' 1600€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 4 - Ruler/Menswear/Heliot Emil (Leather Jacket) 1600€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'SCARF WITH METAL HE BROOCH', ' 250€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 4 - Ruler/Menswear/Heliot Emil (SCARF WITH METAL HE BROOCH) 250€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Helito Emil ', 'TAILORED TROUSERS', ' 650€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 4 - Ruler/Menswear/Helito Emil (TAILORED TROUSERS) 650€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Ichiro Suzuki ', 'Deconstructed Jacket', ' - 850€'],
         gender: 'Menswear',
         completePath: '/tempImages/Group 4 - Ruler/Menswear/Ichiro Suzuki (Deconstructed Jacket) - 850€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'Sandals', ' 490€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 4 - Ruler/Womenswear/Heliot Emil (Sandals) 490€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'S_S SHIRT W STRAP', ' 295€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 4 - Ruler/Womenswear/Heliot Emil (S_S SHIRT W STRAP) 295€(1)'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'S_S SHIRT W STRAP', ' 295€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 4 - Ruler/Womenswear/Heliot Emil (S_S SHIRT W STRAP) 295€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Materiel Tblisi ', 'ORGANZA SHEER COAT', ' 1050€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 4 - Ruler/Womenswear/Materiel Tblisi (ORGANZA SHEER COAT) 1050€'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Standing Ground ', 'Long Green Dress', ' 1345€'],
         gender: 'Womenswear',
         completePath: '/tempImages/Group 4 - Ruler/Womenswear/Standing Ground (Long Green Dress) 1345€'
     }
 ]

 async function UploadImages() {
     const imgCollectionRef = collection(db, 'images');
     for (let i = 0; i < imgArr.length; i++) {
         await addDoc(imgCollectionRef, {
             gender: arr[i].gender,
             groupID: Number(arr[i].key),
             groupName: arr[i].groupName,
             designerName: arr[i].value[0],
             productType: makeLower(arr[i].value[1]),
             price: arr[i].value[2],
             stringLoc: imgArr[i]
         })

     }
 }

 function makeLower(text) {
     // make each word in the string start with a capital letter
     let lower = text.toLowerCase()
     let arr = lower.split(' ');
     let newArr = [];
     for (let i = 0; i < arr.length; i++) {
         newArr.push(arr[i].charAt(0).toUpperCase() + arr[i].slice(1));

     }
     return newArr.join(' ');
 }
 export default UploadImages;