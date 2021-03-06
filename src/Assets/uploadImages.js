 import { collection, addDoc } from 'firebase/firestore';
 import { db } from '../firebase/firebase-config.js';
 import img0 from "./productImages/1st half/Group 1 - Caregiver/Menswear/Deveaux New York (White Duncan Shirt) 560€.jpeg"
 import img1 from "./productImages/1st half/Group 1 - Caregiver/Menswear/Joseph (Light Twill Blouson Jacket) 730€.jpeg"
 import img2 from "./productImages/1st half/Group 1 - Caregiver/Menswear/Mfpen (Typo Knit Vest Taupe) 228€.jpg"
 import img3 from "./productImages/1st half/Group 1 - Caregiver/Womenswear/Deveaux New York (Leah Dress) 1030€.jpeg"
 import img4 from "./productImages/1st half/Group 1 - Caregiver/Womenswear/Joseph (Leather Slouch Bag) 725€.jpeg"
 import img5 from "./productImages/1st half/Group 1 - Caregiver/Womenswear/Joseph (Nappa Leather Tarah Shorts) 1245€.jpeg"
 import img6 from "./productImages/1st half/Group 1 - Caregiver/Womenswear/Lauren Manoogian (Ruche Dress) 990€.jpg"
 import img7 from "./productImages/1st half/Group 1 - Caregiver/Womenswear/Lauren Manoogian (Weave Bag) 320€.jpeg"
 import img8 from "./productImages/1st half/Group 1 - Caregiver/Womenswear/Ms Min (Floral Jacket) 980€.jpeg"
 import img9 from "./productImages/1st half/Group 2 - Caregiver/Menswear/3MAN (Engineered Stripe Blanket Jacket) 730€.jpeg"
 import img10 from "./productImages/1st half/Group 2 - Caregiver/Menswear/Harris Wharf London (Casual Coolmax Trousers) 195€.jpeg"
 import img11 from "./productImages/1st half/Group 2 - Caregiver/Menswear/Le17Septembre (917 Hard Weave Open Collar Shirt) 140€.jpg"
 import img12 from "./productImages/1st half/Group 2 - Caregiver/Womenswear/Harris Wharf London (Dress With Bow In Light Technic) 300€.jpeg"
 import img13 from "./productImages/1st half/Group 2 - Caregiver/Womenswear/Kika Vargas (Floral Midi Dress Metrodora) 730€.jpg"
 import img14 from "./productImages/1st half/Group 2 - Caregiver/Womenswear/Le17Septembre (Classic Leather Belted Pants) 150€.jpeg"
 import img15 from "./productImages/1st half/Group 2 - Caregiver/Womenswear/Low Classic (Beads Bag Ivory) 860€.jpeg"
 import img16 from "./productImages/1st half/Group 2 - Caregiver/Womenswear/Low Classic (Beads Sandals Yellow) 430€.jpeg"
 import img17 from "./productImages/1st half/Group 2 - Caregiver/Womenswear/Low Classic (Unbalance Dress Light Beige) 320€.jpeg"
 import img18 from "./productImages/1st half/Group 3 - Ruler/Menswear/HG _ LF (GS21 Skirt) 760€.png"
 import img19 from "./productImages/1st half/Group 3 - Ruler/Menswear/Julius (780CUM3 White _ Zip Sleeve Sweatshirt) 380€.jpg"
 import img20 from "./productImages/1st half/Group 3 - Ruler/Menswear/Julius (780FWM1-C Gray _ Attached Part Sneakers) 750€.jpg"
 import img21 from "./productImages/1st half/Group 3 - Ruler/Womenswear/Francesco Murano (Structured Jacket) 1300€.jpg"
 import img22 from "./productImages/1st half/Group 3 - Ruler/Womenswear/Lado Bokuchava (Isabelle Blouse) 560€.jpeg"
 import img23 from "./productImages/1st half/Group 3 - Ruler/Womenswear/Situationist (Burgundy Leather Coat) 1740€.jpeg"
 import img24 from "./productImages/1st half/Group 4 - Ruler/Menswear/Abasi Rosborough (ARC Phantom Parka _ Cobalt Twill) 1100€.jpeg"
 import img25 from "./productImages/1st half/Group 4 - Ruler/Menswear/Heliot Emil (Leather Jacket) 1600€.jpg"
 import img26 from "./productImages/1st half/Group 4 - Ruler/Menswear/Heliot Emil (Scarf With Metal Brooch) 250€.jpg"
 import img27 from "./productImages/1st half/Group 4 - Ruler/Menswear/Heliot Emil (Tailored Trousers) 650€.jpg"
 import img28 from "./productImages/1st half/Group 4 - Ruler/Menswear/Ichiro Suzuki (Deconstructed Jacket) 850€.jpeg"
 import img29 from "./productImages/1st half/Group 4 - Ruler/Womenswear/Heliot Emil (Sandals) 490€.jpg"
 import img30 from "./productImages/1st half/Group 4 - Ruler/Womenswear/Heliot Emil (S_S Shirt W Strap) 295€.jpg"
 import img31 from "./productImages/1st half/Group 4 - Ruler/Womenswear/Materiel Tbilisi (Organza Sheer Coat) 1050€.jpg"
 import img32 from "./productImages/1st half/Group 4 - Ruler/Womenswear/Standing Ground (Long Green Dress) 1345€.jpg"
 import img33 from "./productImages/2nd half/Group 11 - Everyman/Gender-neutral/Zankov (Rudy Oversized Jacquard-knit Sweater) 690€.jpeg"
 import img34 from "./productImages/2nd half/Group 11 - Everyman/Gender-neutral/Zankov (Zeke Oversized Striped Knitted Sweater) 620€.jpeg"
 import img35 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Axel Arigato (A-Dice Lo Sneaker) 210€.jpeg"
 import img36 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Axel Arigato (Bomber Mayday with Logo) 300€.webp"
 import img37 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Axel Arigato (Escape Axel T-Shirt) 85€.jpeg"
 import img38 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Blossom H Company (Mens Collar Point Shirt) 100€.jpeg"
 import img39 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Blossom H Company (Mens French Pants) 160€.jpeg"
 import img40 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Blossom H Company (Mens Oversize MTM) 80€.jpeg"
 import img41 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Daniel W. Fletcher (Cord Jean Jacket) 390€.jpg"
 import img42 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Daniel W. Fletcher (Cord Jeans) 280€.jpg"
 import img43 from "./productImages/2nd half/Group 11 - Everyman/Menswear/Daniel W. Fletcher (Fisherman Beanie) 65€.jpg"
 import img44 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Axel Arigato (London T-shirt) 60€.jpeg"
 import img45 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Axel Arigato (Memory Relaxed Cardigan) 260€.jpeg"
 import img46 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Axel Arigato (Selva Rib Dress) 350€.jpeg"
 import img47 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Blossom H Company (Dai Two-button Jacket) 190€.jpeg"
 import img48 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Blossom H Company (Dai Two-tuck Pants) 130€.jpeg"
 import img49 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Blossom H Company (Edyn Trench Coat) 340€.jpeg"
 import img50 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Blossom H Company (Sen Masch Mul) 150€.png"
 import img51 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Blossom H Company (Trepez Shoulder Bag) 250€.jpeg"
 import img52 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Kijun (Crop Zip-up Hoodie Melange Grey) 116€.jpeg"
 import img53 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Kijun (Gelateria T-shirt White) 80€.jpeg"
 import img54 from "./productImages/2nd half/Group 11 - Everyman/Womenswear/Kijun (Logo Cargo Pants Beige) 160€.jpeg"
 import img55 from "./productImages/2nd half/Group 12 - Everyman/Gender-neutral/Rier (Boots Calf Black) 820€.jpg"
 import img56 from "./productImages/2nd half/Group 12 - Everyman/Gender-neutral/Rier (Shorts Corduroy Hazelnut) 680€.jpg"
 import img57 from "./productImages/2nd half/Group 12 - Everyman/Gender-neutral/Rier (Walker Gilet Grey) 620€.jpg"
 import img58 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Artknit Studios (Jacket In Cotton Linen) 175€.jpg"
 import img59 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Artknit Studios (Ribbed Turtleneck In Cashmere) 299€.jpg"
 import img60 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Artknit Studios (T-shirt In Cotton Linen) 90€.jpg"
 import img61 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Holzweiler (Luvi Vest Ecru) 170€.jpeg"
 import img62 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Holzweiler (M.Oslo Hoodie Teal) 200€.jpeg"
 import img63 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Holzweiler (M.Oslo Sweatpants Teal) 195€.jpeg"
 import img64 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Seneca (Lumen Stripe Button-Up Shirt) 170€.jpg"
 import img65 from "./productImages/2nd half/Group 12 - Everyman/Menswear/Seneca (The Forma Jacket) 378€.jpg"
 import img66 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Artknit Studios (Overshirt Jacket) 190€.jpg"
 import img67 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Artknit Studios (Skirt in Wool) 150€.jpg"
 import img68 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Artknit Studios (Top High Neck In Wool) 145€.jpg"
 import img69 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Holzweiler (Flow Jacket Black) 415€.jpeg"
 import img70 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Holzweiler (Svinten Dress Black) 490€.jpeg"
 import img71 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Matin Kim (Fabric London Shoulder Bag In Black) 195€.jpg"
 import img72 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Matin Kim (Raw Cutting Short Line Jacket In Beige) 170€.jpg"
 import img73 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Matin Kim (Slingback Stiletto Heel In Black) 228€.jpg"
 import img74 from "./productImages/2nd half/Group 12 - Everyman/Womenswear/Matin Kim (Two Tone Knit Slip In Khaki) 65€.jpg"
 import img75 from "./productImages/2nd half/Group 13 - Hero/Menswear/GmbH (Ankle-high Buffed Faux-leather Black Boots) 520€.png"
 import img76 from "./productImages/2nd half/Group 13 - Hero/Menswear/GmbH (Bekir SS22 Pleather Tan Pants) 490€.jpg"
 import img77 from "./productImages/2nd half/Group 13 - Hero/Menswear/GmbH (Black _ Grey Isoli Jacket) 935€.png"
 import img78 from "./productImages/2nd half/Group 13 - Hero/Menswear/Juun.J (Black Vest Blazer) 1470€.png"
 import img79 from "./productImages/2nd half/Group 13 - Hero/Menswear/WooYoungMi (Red MA-1 Bomber Jacket) 920€.png"
 import img80 from "./productImages/2nd half/Group 13 - Hero/Womenswear/Juun.J (Black Crossbody Pouch) 235€.png"
 import img81 from "./productImages/2nd half/Group 13 - Hero/Womenswear/Juun.J (Black Pleated V-Neck Dress) 715 €.png"
 import img82 from "./productImages/2nd half/Group 13 - Hero/Womenswear/MARINA EERIE (Linen Military Dress) 650€.png"
 import img83 from "./productImages/2nd half/Group 13 - Hero/Womenswear/Robert Wun (Rosary Boots In Chrome) 585€.png"
 import img84 from "./productImages/2nd half/Group 14 - Hero/Gender-neutral/Maximilain (Cut-out Top) 525€.png"
 import img85 from "./productImages/2nd half/Group 14 - Hero/Gender-neutral/Quira (Satin _ Wool Wrap Midi Skirt) 835€.png"
 import img86 from "./productImages/2nd half/Group 14 - Hero/Menswear/C2H4 (Alpha 2.0 _Agent Black_ Boots) 525€.png"
 import img87 from "./productImages/2nd half/Group 14 - Hero/Menswear/C2H4 (Arc Sculpture Puffer Jacket) 675€.png"
 import img88 from "./productImages/2nd half/Group 14 - Hero/Menswear/Peter Do (Square-toe Ankle Boots) 1564€.png"
 import img89 from "./productImages/2nd half/Group 14 - Hero/Menswear/Sean Suen (Black Belted Skirt) 570€.webp"
 import img90 from "./productImages/2nd half/Group 14 - Hero/Menswear/Sean Suen (Black Bondage Shirt) 615€.png"
 import img91 from "./productImages/2nd half/Group 14 - Hero/Womenswear/C2H4 (Layered Hollowed-Out Tailored Shirt) 455€.png"
 import img92 from "./productImages/2nd half/Group 14 - Hero/Womenswear/C2H4 (Staff Uniform Tech Nylon Padded Tote Bag) 595€.png"
 import img93 from "./productImages/2nd half/Group 14 - Hero/Womenswear/C2H4 (“Future Yacht Club” Emblem Button Jeans) 550€.webp"
 import img94 from "./productImages/2nd half/Group 14 - Hero/Womenswear/Peter Do (Faux Leather Midi Dress) 2115€.png"
 import img95 from "./productImages/2nd half/Group 14 - Hero/Womenswear/Peter Do (Strappy 110mm Transparent Heel Sandals) 1151€.png"
 import img96 from "./productImages/2nd half/Group 15 - Innocent/Menswear/Auralee (Pink Denim Jacket) 910€.png_"
 import img97 from "./productImages/2nd half/Group 15 - Innocent/Menswear/Auralee (Tie-Dyed Ribbed Cotton-Blend Socks) 40€.png"
 import img98 from "./productImages/2nd half/Group 15 - Innocent/Menswear/Carbone (Crochet Lama Pants) 350€.webp"
 import img99 from "./productImages/2nd half/Group 15 - Innocent/Menswear/Carbone (Crochet Lama Waistcoat) 179€.jpg"
 import img100 from "./productImages/2nd half/Group 15 - Innocent/Menswear/SSDailey (Weather Officer Floral-print Cotton Trench Coat) 1930€.png"
 import img101 from "./productImages/2nd half/Group 15 - Innocent/Womenswear/Auralee (Camouflage-Print Cotton-Gabardine Blouson Jacket) 700€.webp"
 import img102 from "./productImages/2nd half/Group 15 - Innocent/Womenswear/Maison Kimhekim (Heart-print Straight-leg Jeans) 668€.png"
 import img103 from "./productImages/2nd half/Group 15 - Innocent/Womenswear/Minjukim (White Bojagi Puff Midi Dress) 925€ .png"
 import img104 from "./productImages/2nd half/Group 19 - Sage/Menswear/Bianca Saunders (Tan Leather Barlon Jacket) 2000€.jpg"
 import img105 from "./productImages/2nd half/Group 19 - Sage/Menswear/Bianca Saunders (White Striped Poplin Shirt) 450€.jpg"
 import img106 from "./productImages/2nd half/Group 19 - Sage/Menswear/Bianca Saunders (White Striped Shorts) 335€.jpg"
 import img107 from "./productImages/2nd half/Group 19 - Sage/Menswear/Jan Jan Van Esche (Beige #73 T-shirt) 395€.jpg"
 import img108 from "./productImages/2nd half/Group 19 - Sage/Menswear/Jan Jan Van Esche (Grey Sumi Pants) 845€.jpg"
 import img109 from "./productImages/2nd half/Group 19 - Sage/Menswear/Jan Jan Van Esche (Taupe Yak Crochet 7 Beanie) 320€.jpg"
 import img110 from "./productImages/2nd half/Group 19 - Sage/Menswear/Lukhanyo Mdingi (The Vanguard Fringed Woven Scarf) 3155€.jpg"
 import img111 from "./productImages/2nd half/Group 19 - Sage/Womenswear/J.Kim (Brown Polyester Midi Dress) 895€.jpg"
 import img112 from "./productImages/2nd half/Group 19 - Sage/Womenswear/J.Kim (Red Cotton Crewneck) 390€.jpg"
 import img113 from "./productImages/2nd half/Group 19 - Sage/Womenswear/KEH FORME (Midi Dress) 680€.jpg"
 import img114 from "./productImages/2nd half/Group 19 - Sage/Womenswear/Lukhanyo Mdingi (One-shoulder Maxi Dress) 870€.jpg"
 import img115 from "./productImages/2nd half/Group 19 - Sage/Womenswear/Lukhanyo Mdingi (The Vanguard Pleated Pants) 865€.jpg"
 import img116 from "./productImages/2nd half/Group 20 - Sage/Gender-neutral/Lùchen (Band Collar Asymmetrical Shirt) 620€.jpg"
 import img117 from "./productImages/2nd half/Group 20 - Sage/Gender-neutral/Lùchen (Creator_s Finders Finger Ring) 980€.jpg"
 import img118 from "./productImages/2nd half/Group 20 - Sage/Gender-neutral/Lùchen (High Waist Trousers) 740€.jpg"
 import img119 from "./productImages/2nd half/Group 20 - Sage/Menswear/Bed j.w. Ford (Black Skirt) 770€.jpg"
 import img120 from "./productImages/2nd half/Group 20 - Sage/Menswear/Bed j.w. Ford (Brown Cotton Vest) 591€.jpg"
 import img121 from "./productImages/2nd half/Group 20 - Sage/Menswear/Hed Mayner (Jute Loafers Brown) 770€.jpg"
 import img122 from "./productImages/2nd half/Group 20 - Sage/Menswear/Shinyakozuka (Harrington With Yabiku Jacket) 285€.jpg"
 import img123 from "./productImages/2nd half/Group 20 - Sage/Menswear/Shinyakozuka (Leaked Jumper) 355€.jpg"
 import img124 from "./productImages/2nd half/Group 20 - Sage/Menswear/Shinyakozuka (Side Tuck Tapered With Yabiku Pants) 246€.jpg"
 import img125 from "./productImages/2nd half/Group 20 - Sage/Womenswear/Uma Wang (Checked Print Dress) 670€.jpg"
 import img126 from "./productImages/2nd half/Group 20 - Sage/Womenswear/Uma Wang (Long Sleeve Top) 795€.jpg"

 const imgArr = [
     // array containing img variables from img35 to img128 as above
     img0,
     img1,
     img2,
     img3,
     img4,
     img5,
     img6,
     img7,
     img8,
     img9,
     img10,
     img11,
     img12,
     img13,
     img14,
     img15,
     img16,
     img17,
     img18,
     img19,
     img20,
     img21,
     img22,
     img23,
     img24,
     img25,
     img26,
     img27,
     img28,
     img29,
     img30,
     img31,
     img32,
     img33,
     img34,
     img35,
     img36,
     img37,
     img38,
     img39,
     img40,
     img41,
     img42,
     img43,
     img44,
     img45,
     img46,
     img47,
     img48,
     img49,
     img50,
     img51,
     img52,
     img53,
     img54,
     img55,
     img56,
     img57,
     img58,
     img59,
     img60,
     img61,
     img62,
     img63,
     img64,
     img65,
     img66,
     img67,
     img68,
     img69,
     img70,
     img71,
     img72,
     img73,
     img74,
     img75,
     img76,
     img77,
     img78,
     img79,
     img80,
     img81,
     img82,
     img83,
     img84,
     img85,
     img86,
     img87,
     img88,
     img89,
     img90,
     img91,
     img92,
     img93,
     img94,
     img95,
     img96,
     img97,
     img98,
     img99,
     img100,
     img101,
     img102,
     img103,
     img104,
     img105,
     img106,
     img107,
     img108,
     img109,
     img110,
     img111,
     img112,
     img113,
     img114,
     img115,
     img116,
     img117,
     img118,
     img119,
     img120,
     img121,
     img122,
     img123,
     img124,
     img125,
     img126
 ]
 const arr = [{
         key: '1',
         groupName: 'Caregiver',
         value: ['Deveaux New York ', 'White Duncan Shirt', ' 560€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Menswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Joseph ', 'Light Twill Blouson Jacket', ' 730€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Menswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Mfpen ', 'Typo Knit Vest Taupe', ' 228€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Menswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Deveaux New York ', 'Leah Dress', ' 1030€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Womenswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Joseph ', 'Leather Slouch Bag', ' 725€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Womenswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Joseph ', 'Nappa Leather Tarah Shorts', ' 1245€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Womenswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Lauren Manoogian ', 'Ruche Dress', ' 990€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Womenswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Lauren Manoogian ', 'Weave Bag', ' 320€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Womenswear'
     },
     {
         key: '1',
         groupName: 'Caregiver',
         value: ['Ms Min ', 'Floral Jacket', ' 980€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 1 - Caregiver/Womenswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['3MAN ', 'Engineered Stripe Blanket Jacket', ' 730€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Menswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Harris Wharf London ', 'Casual Coolmax Trousers', ' 195€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Menswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Le17Septembre ', '917 Hard Weave Open Collar Shirt', ' 140€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Menswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: [
             'Harris Wharf London ',
             'Dress With Bow In Light Technic',
             ' 300€'
         ],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Womenswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Kika Vargas ', 'Floral Midi Dress Metrodora', ' 730€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Womenswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Le17Septembre ', 'Classic Leather Belted Pants', ' 150€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Womenswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Low Classic ', 'Beads Bag Ivory', ' 860€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Womenswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Low Classic ', 'Beads Sandals Yellow', ' 430€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Womenswear'
     },
     {
         key: '2',
         groupName: 'Caregiver',
         value: ['Low Classic ', 'Unbalance Dress Light Beige', ' 320€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 2 - Caregiver/Womenswear'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['HG _ LF ', 'GS21 Skirt', ' 760€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 3 - Ruler/Menswear'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Julius ', '780CUM3 White _ Zip Sleeve Sweatshirt', ' 380€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 3 - Ruler/Menswear'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Julius ', '780FWM1-C Gray _ Attached Part Sneakers', ' 750€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 3 - Ruler/Menswear'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Francesco Murano ', 'Structured Jacket', ' 1300€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 3 - Ruler/Womenswear'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Lado Bokuchava ', 'Isabelle Blouse', ' 560€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 3 - Ruler/Womenswear'
     },
     {
         key: '3',
         groupName: 'Ruler',
         value: ['Situationist ', 'Burgundy Leather Coat', ' 1740€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 3 - Ruler/Womenswear'
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
         completePath: './productImages/1st half/Group 4 - Ruler/Menswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'Leather Jacket', ' 1600€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Menswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'Scarf With Metal Brooch', ' 250€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Menswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'Tailored Trousers', ' 650€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Menswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Ichiro Suzuki ', 'Deconstructed Jacket', ' 850€'],
         gender: 'Menswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Menswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'Sandals', ' 490€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Womenswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Heliot Emil ', 'S_S Shirt W Strap', ' 295€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Womenswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Materiel Tbilisi ', 'Organza Sheer Coat', ' 1050€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Womenswear'
     },
     {
         key: '4',
         groupName: 'Ruler',
         value: ['Standing Ground ', 'Long Green Dress', ' 1345€'],
         gender: 'Womenswear',
         completePath: './productImages/1st half/Group 4 - Ruler/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Zankov ', 'Rudy Oversized Jacquard-knit Sweater', ' 690€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 11 - Everyman/Gender-neutral'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Zankov ', 'Zeke Oversized Striped Knitted Sweater', ' 620€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 11 - Everyman/Gender-neutral'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'A-Dice Lo Sneaker', ' 210€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Bomber Mayday with Logo', ' 300€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Escape Axel T-Shirt', ' 85€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Mens Collar Point Shirt', ' 100€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Mens French Pants', ' 160€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Mens Oversize MTM', ' 80€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Daniel W. Fletcher ', 'Cord Jean Jacket', ' 390€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Daniel W. Fletcher ', 'Cord Jeans', ' 280€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Daniel W. Fletcher ', 'Fisherman Beanie', ' 65€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Menswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'London T-shirt', ' 60€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Memory Relaxed Cardigan', ' 260€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Selva Rib Dress', ' 350€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Dai Two-button Jacket', ' 190€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Dai Two-tuck Pants', ' 130€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Edyn Trench Coat', ' 340€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Sen Masch Mul', ' 150€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Trepez Shoulder Bag', ' 250€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Kijun ', 'Crop Zip-up Hoodie Melange Grey', ' 116€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Kijun ', 'Gelateria T-shirt White', ' 80€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Kijun ', 'Logo Cargo Pants Beige', ' 160€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 11 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Rier ', 'Boots Calf Black', ' 820€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 12 - Everyman/Gender-neutral'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Rier ', 'Shorts Corduroy Hazelnut', ' 680€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 12 - Everyman/Gender-neutral'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Rier ', 'Walker Gilet Grey', ' 620€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 12 - Everyman/Gender-neutral'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Jacket In Cotton Linen', ' 175€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Ribbed Turtleneck In Cashmere', ' 299€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'T-shirt In Cotton Linen', ' 90€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'Luvi Vest Ecru', ' 170€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'M.Oslo Hoodie Teal', ' 200€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'M.Oslo Sweatpants Teal', ' 195€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Seneca ', 'Lumen Stripe Button-Up Shirt', ' 170€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Seneca ', 'The Forma Jacket', ' 378€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Menswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Overshirt Jacket', ' 190€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Skirt in Wool', ' 150€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Top High Neck In Wool', ' 145€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'Flow Jacket Black', ' 415€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'Svinten Dress Black', ' 490€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Fabric London Shoulder Bag In Black', ' 195€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Raw Cutting Short Line Jacket In Beige', ' 170€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Slingback Stiletto Heel In Black', ' 228€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Two Tone Knit Slip In Khaki', ' 65€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 12 - Everyman/Womenswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['GmbH ', 'Ankle-high Buffed Faux-leather Black Boots', ' 520€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Menswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['GmbH ', 'Bekir SS22 Pleather Tan Pants', ' 490€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Menswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['GmbH ', 'Black _ Grey Isoli Jacket', ' 935€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Menswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Juun.J ', 'Black Vest Blazer', ' 1470€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Menswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['WooYoungMi ', 'Red MA-1 Bomber Jacket', ' 920€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Menswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Juun.J ', 'Black Crossbody Pouch', ' 235€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Womenswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Juun.J ', 'Black Pleated V-Neck Dress', ' 715 €'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Womenswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['MARINA EERIE ', 'Linen Military Dress', ' 650€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Womenswear'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Robert Wun ', 'Rosary Boots In Chrome', ' 585€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 13 - Hero/Womenswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Maximilain ', 'Cut-out Top', ' 525€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 14 - Hero/Gender-neutral'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Quira ', 'Satin _ Wool Wrap Midi Skirt', ' 835€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 14 - Hero/Gender-neutral'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Alpha 2.0 _Agent Black_ Boots', ' 525€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Menswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Arc Sculpture Puffer Jacket', ' 675€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Menswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Peter Do ', 'Square-toe Ankle Boots', ' 1564€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Menswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Sean Suen ', 'Black Belted Skirt', ' 570€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Menswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Sean Suen ', 'Black Bondage Shirt', ' 615€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Menswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Layered Hollowed-Out Tailored Shirt', ' 455€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Womenswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Staff Uniform Tech Nylon Padded Tote Bag', ' 595€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Womenswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', '“Future Yacht Club” Emblem Button Jeans', ' 550€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Womenswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Peter Do ', 'Faux Leather Midi Dress', ' 2115€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Womenswear'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Peter Do ', 'Strappy 110mm Transparent Heel Sandals', ' 1151€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 14 - Hero/Womenswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Auralee ', 'Pink Denim Jacket', ' 910€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Menswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Auralee ', 'Tie-Dyed Ribbed Cotton-Blend Socks', ' 40€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Menswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Carbone ', 'Crochet Lama Pants', ' 350€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Menswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Carbone ', 'Crochet Lama Waistcoat', ' 179€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Menswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: [
             'SSDailey ',
             'Weather Officer Floral-print Cotton Trench Coat',
             ' 1930€'
         ],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Menswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: [
             'Auralee ',
             'Camouflage-Print Cotton-Gabardine Blouson Jacket',
             ' 700€'
         ],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Womenswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Maison Kimhekim ', 'Heart-print Straight-leg Jeans', ' 668€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Womenswear'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Minjukim ', 'White Bojagi Puff Midi Dress', ' 925€ '],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 15 - Innocent/Womenswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Bianca Saunders ', 'Tan Leather Barlon Jacket', ' 2000€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Bianca Saunders ', 'White Striped Poplin Shirt', ' 450€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Bianca Saunders ', 'White Striped Shorts', ' 335€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Jan Jan Van Esche ', 'Beige #73 T-shirt', ' 395€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Jan Jan Van Esche ', 'Grey Sumi Pants', ' 845€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Jan Jan Van Esche ', 'Taupe Yak Crochet 7 Beanie', ' 320€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: [
             'Lukhanyo Mdingi ',
             'The Vanguard Fringed Woven Scarf',
             ' 3155€'
         ],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Menswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['J.Kim ', 'Brown Polyester Midi Dress', ' 895€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Womenswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['J.Kim ', 'Red Cotton Crewneck', ' 390€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Womenswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['KEH FORME ', 'Midi Dress', ' 680€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Womenswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Lukhanyo Mdingi ', 'One-shoulder Maxi Dress', ' 870€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Womenswear'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Lukhanyo Mdingi ', 'The Vanguard Pleated Pants', ' 865€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 19 - Sage/Womenswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Lùchen ', 'Band Collar Asymmetrical Shirt', ' 620€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 20 - Sage/Gender-neutral'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Lùchen ', 'Creator_s Finders Finger Ring', ' 980€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 20 - Sage/Gender-neutral'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Lùchen ', 'High Waist Trousers', ' 740€'],
         gender: 'Gender-neutral',
         completePath: './productImages/2nd half/Group 20 - Sage/Gender-neutral'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Bed j.w. Ford ', 'Black Skirt', ' 770€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Menswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Bed j.w. Ford ', 'Brown Cotton Vest', ' 591€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Menswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Hed Mayner ', 'Jute Loafers Brown', ' 770€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Menswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Shinyakozuka ', 'Harrington With Yabiku Jacket', ' 285€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Menswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Shinyakozuka ', 'Leaked Jumper', ' 355€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Menswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Shinyakozuka ', 'Side Tuck Tapered With Yabiku Pants', ' 246€'],
         gender: 'Menswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Menswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Uma Wang ', 'Checked Print Dress', ' 670€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Womenswear'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Uma Wang ', 'Long Sleeve Top', ' 795€'],
         gender: 'Womenswear',
         completePath: './productImages/2nd half/Group 20 - Sage/Womenswear'
     }
 ]

 const filterArr = [
     'Shoes',
     'Coat',
     'Jacket',
     'Sweater',
     'Shirt',
     'Blouse',
     'Skirt',
     'Dress',
     'T-Shirt',
     'Pants',
     'Bag',
     'Jewelry'
 ]

 // need a better way to decide which filters are which groups
 // thinking of looping through arr.value[1] and filtering them 
 async function UploadImages() {
     const imgCollectionRef = collection(db, 'images-temp');
     console.log(imgArr.length, arr.length)
     for (let i = 0; i < imgArr.length; i++) {
         await addDoc(imgCollectionRef, {
             gender: arr[i].gender,
             groupID: Number(arr[i].key),
             groupName: arr[i].groupName,
             designerName: arr[i].value[0],
             productType: makeLower(arr[i].value[1]),
             price: arr[i].value[2],
             stringLoc: imgArr[i],
             productFilter: getFilter(makeLower(arr[i].value[1]))
         })
     }
 }

 function getFilter(productType) {
     for (let i = 0; i < filterArr.length; i++) {
         if (productType.includes(filterArr[i])) {
             if (productType.includes('Shirt') || productType.includes('Blouse')) {
                 return 'Shirt & Blouse';
             }
             return filterArr[i];
         } else {
             if (productType.includes('Shorts') || productType.includes('trousers') || productType.includes('shorts') || productType.includes('Trousers')) {
                 return 'Pants'
             } else if (productType.includes('sandals') || productType.includes('Sandals') || productType.includes('Sneakers') || productType.includes('sneakers')) {
                 return 'Shoes'
             } else if (productType.includes('Sweatshirt') || productType.includes('sweatshirt')) {
                 return 'Sweater';
             }
         }
     }
     return 'MUST BE ADDED';
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