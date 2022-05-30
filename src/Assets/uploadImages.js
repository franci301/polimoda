 import { collection, addDoc } from 'firebase/firestore';
 import { db } from '../firebase/firebase-config.js';

 const imgArr = [
     // array containing img variables from img35 to img128 as above
     //  img1,
     //  img2,
     //  img3,
     //  img4,
     //  img5,
     //  img6,
     //  img7,
     //  img8,
     //  img9,
     //  img10,
     //  img11,
     //  img12,
     //  img13,
     //  img14,
     //  img15,
     //  img16,
     //  img17,
     //  img18,
     //  img19,
     //  img20,
     //  img21,
     //  img22,
     //  img23,
     //  img24,
     //  img25,
     //  img26,
     //  img27,
     //  img28,
     //  img29,
     //  img30,
     //  img31,
     //  img32,
     //  img33,
     //  img34,
     //  img35,
     //  img36,
     //  img37,
     //  img38,
     //  img39,
     //  img40,
     //  img41,
     //  img42,
     //  img43,
     //  img44,
     //  img45,
     //  img46,
     //  img47,
     //  img48,
     //  img49,
     //  img50,
     //  img51,
     //  img52,
     //  img53,
     //  img54,
     //  img55,
     //  img56,
     //  img57,
     //  img58,
     //  img59,
     //  img60,
     //  img61,
     //  img62,
     //  img63,
     //  img64,
     //  img65,
     //  img66,
     //  img67,
     //  img68,
     //  img69,
     //  img70,
     //  img71,
     //  img72,
     //  img73,
     //  img74,
     //  img75,
     //  img76,
     //  img77,
     //  img78,
     //  img79,
     //  img80,
     //  img81,
     //  img82,
     //  img83,
     //  img84,
     //  img85,
     //  img86,
     //  img87,
     //  img88,
     //  img89,
     //  img90,
     //  img91,
     //  img92,
     //  img93,
     //  img94,
     //  img95,
     //  img96,
     //  img97,
     //  img98,
     //  img99,
     //  img100,
     //  img101,
     //  img102,
     //  img103,
     //  img104,
     //  img105,
     //  img106,
     //  img107,
     //  img108,
     //  img109,
     //  img110,
     //  img111,
     //  img112,
     //  img113,
     //  img114,
     //  img115,
     //  img116,
     //  img117,
     //  img118,
     //  img119,
     //  img120,
     //  img121,
     //  img122,
     //  img123,
     //  img124,
     //  img125,
     //  img126,
     //  img127,
     //  img128,
 ]
 const arr = [{
         key: '11',
         groupName: 'Everyman',
         value: ['Zankov ', 'Rudy Oversized Jacquard-knit Sweater', ' 690€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 11 - Everyman/Gender-neutral/Zankov (Rudy Oversized Jacquard-knit Sweater) 690€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Zankov ', 'Zeke Oversized Striped Knitted Sweater', ' 620€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 11 - Everyman/Gender-neutral/Zankov (Zeke Oversized Striped Knitted Sweater) 620€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'A-Dice Lo Sneaker', ' 210€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Axel Arigato (A-Dice Lo Sneaker) 210€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Bomber Mayday with Logo', ' 300€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Axel Arigato (Bomber Mayday with Logo) 300€.webp'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Escape Axel T-Shirt', ' 85€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Axel Arigato (Escape Axel T-Shirt) 85€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Mens Collar Point Shirt', ' 100€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Blossom H Company (Mens Collar Point Shirt) 100€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Mens French Pants', ' 160€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Blossom H Company (Mens French Pants) 160€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Mens Oversize MTM', ' 80€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Blossom H Company (Mens Oversize MTM) 80€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Daniel W. Fletcher ', 'Cord Jean Jacket', ' 390€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Daniel W. Fletcher (Cord Jean Jacket) 390€.jpg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Daniel W. Fletcher ', 'Cord Jeans', ' 280€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Daniel W. Fletcher (Cord Jeans) 280€.jpg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Daniel W. Fletcher ', 'Fisherman Beanie', ' 65€'],
         gender: 'Menswear',
         completePath: './productImages/Group 11 - Everyman/Menswear/Daniel W. Fletcher (Fisherman Beanie) 65€.jpg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'London T-shirt', ' 60€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Axel Arigato (London T-shirt) 60€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Memory Relaxed Cardigan', ' 260€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Axel Arigato (Memory Relaxed Cardigan) 260€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Axel Arigato ', 'Selva Rib Dress', ' 350€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Axel Arigato (Selva Rib Dress) 350€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Dai Two-button Jacket', ' 190€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Blossom H Company (Dai Two-button Jacket) 190€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Dai Two-tuck Pants', ' 130€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Blossom H Company (Dai Two-tuck Pants) 130€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Edyn Trench Coat', ' 340€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Blossom H Company (Edyn Trench Coat) 340€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Sen Masch Mul', ' 150€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Blossom H Company (Sen Masch Mul) 150€.png'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Blossom H Company ', 'Trepez Shoulder Bag', ' 250€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Blossom H Company (Trepez Shoulder Bag) 250€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Kijun ', 'Crop Zip-up Hoodie Melange Grey', ' 116€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Kijun (Crop Zip-up Hoodie Melange Grey) 116€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Kijun ', 'Gelateria T-shirt White', ' 80€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Kijun (Gelateria T-shirt White) 80€.jpeg'
     },
     {
         key: '11',
         groupName: 'Everyman',
         value: ['Kijun ', 'Logo Cargo Pants Beige', ' 160€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 11 - Everyman/Womenswear/Kijun (Logo Cargo Pants Beige) 160€.jpeg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Rier ', 'Boots Calf Black', ' 820€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 12 - Everyman /Gender-neutral/Rier (Boots Calf Black) 820€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Rier ', 'Shorts Corduroy Hazelnut', ' 680€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 12 - Everyman /Gender-neutral/Rier (Shorts Corduroy Hazelnut) 680€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Rier ', 'Walker Gilet Grey', ' 620€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 12 - Everyman /Gender-neutral/Rier (Walker Gilet Grey) 620€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Jacket In Cotton Linen', ' 175€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Artknit Studios (Jacket In Cotton Linen) 175€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Ribbed Turtleneck In Cashmere', ' 299€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Artknit Studios (Ribbed Turtleneck In Cashmere) 299€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'T-shirt In Cotton Linen', ' 90€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Artknit Studios (T-shirt In Cotton Linen) 90€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'Luvi Vest Ecru', ' 170€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Holzweiler (Luvi Vest Ecru) 170€.jpeg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'M.Oslo Hoodie Teal', ' 200€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Holzweiler (M.Oslo Hoodie Teal) 200€.jpeg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'M.Oslo Sweatpants Teal', ' 195€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Holzweiler (M.Oslo Sweatpants Teal) 195€.jpeg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Seneca ', 'Lumen Stripe Button-Up Shirt', ' 170€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Seneca (Lumen Stripe Button-Up Shirt) 170€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Seneca ', 'The Forma Jacket', ' 378€'],
         gender: 'Menswear',
         completePath: './productImages/Group 12 - Everyman /Menswear/Seneca (The Forma Jacket) 378€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Overshirt Jacket', ' 190€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Artknit Studios (Overshirt Jacket) 190€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Skirt in Wool', ' 150€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Artknit Studios (Skirt in Wool) 150€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Artknit Studios ', 'Top High Neck In Wool', ' 145€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Artknit Studios (Top High Neck In Wool) 145€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'Flow Jacket Black', ' 415€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Holzweiler (Flow Jacket Black) 415€.jpeg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Holzweiler ', 'Svinten Dress Black', ' 490€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Holzweiler (Svinten Dress Black) 490€.jpeg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Fabric London Shoulder Bag In Black', ' 195€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Matin Kim (Fabric London Shoulder Bag In Black) 195€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Raw Cutting Short Line Jacket In Beige', ' 170€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Matin Kim (Raw Cutting Short Line Jacket In Beige) 170€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Slingback Stiletto Heel In Black', ' 228€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Matin Kim (Slingback Stiletto Heel In Black) 228€.jpg'
     },
     {
         key: '12',
         groupName: 'Everyman',
         value: ['Matin Kim ', 'Two Tone Knit Slip In Khaki', ' 65€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 12 - Everyman /Womenswear/Matin Kim (Two Tone Knit Slip In Khaki) 65€.jpg'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['GmbH ', 'Ankle-high Buffed Faux-leather Black Boots', ' 520€'],
         gender: 'Menswear',
         completePath: './productImages/Group 13 - Hero /Menswear/GmbH (Ankle-high Buffed Faux-leather Black Boots) 520€.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['GmbH ', 'Bekir SS22 Pleather Tan Pants', ' 490€'],
         gender: 'Menswear',
         completePath: './productImages/Group 13 - Hero /Menswear/GmbH (Bekir SS22 Pleather Tan Pants) 490€.jpg'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['GmbH ', 'Black _ Grey Isoli Jacket', ' 935€'],
         gender: 'Menswear',
         completePath: './productImages/Group 13 - Hero /Menswear/GmbH (Black _ Grey Isoli Jacket) 935€.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Juun.J ', 'Black Vest Blazer', ' 1470€'],
         gender: 'Menswear',
         completePath: './productImages/Group 13 - Hero /Menswear/Juun.J (Black Vest Blazer) 1470€.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['WooYoungMi ', 'Red MA-1 Bomber Jacket', ' 920€'],
         gender: 'Menswear',
         completePath: './productImages/Group 13 - Hero /Menswear/WooYoungMi (Red MA-1 Bomber Jacket) 920€.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Juun.J ', 'Black Crossbody Pouch', ' 235€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 13 - Hero /Womenswear/Juun.J (Black Crossbody Pouch) 235€.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Juun.J ', 'Black Pleated V-Neck Dress', ' 715 €'],
         gender: 'Womenswear',
         completePath: './productImages/Group 13 - Hero /Womenswear/Juun.J (Black Pleated V-Neck Dress) 715 €.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['MARINA EERIE ', 'Linen Military Dress', ' 650€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 13 - Hero /Womenswear/MARINA EERIE (Linen Military Dress) 650€.png'
     },
     {
         key: '13',
         groupName: 'Hero',
         value: ['Robert Wun ', 'Rosary Boots In Chrome', ' 585€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 13 - Hero /Womenswear/Robert Wun (Rosary Boots In Chrome) 585€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Maximilain ', 'Cut-out Top', ' 525€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 14 - Hero/Gender-neutral/Maximilain (Cut-out Top) 525€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Quira ', 'Satin _ Wool Wrap Midi Skirt', ' 835€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 14 - Hero/Gender-neutral/Quira (Satin _ Wool Wrap Midi Skirt) 835€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Alpha 2.0 _Agent Black_ Boots', ' 525€'],
         gender: 'Menswear',
         completePath: './productImages/Group 14 - Hero/Menswear/C2H4 (Alpha 2.0 _Agent Black_ Boots) 525€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Arc Sculpture Puffer Jacket', ' 675€'],
         gender: 'Menswear',
         completePath: './productImages/Group 14 - Hero/Menswear/C2H4 (Arc Sculpture Puffer Jacket) 675€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Peter Do ', 'Square-toe Ankle Boots', ' 1564€'],
         gender: 'Menswear',
         completePath: './productImages/Group 14 - Hero/Menswear/Peter Do (Square-toe Ankle Boots) 1564€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Sean Suen ', 'Black Belted Skirt', ' 570€'],
         gender: 'Menswear',
         completePath: './productImages/Group 14 - Hero/Menswear/Sean Suen (Black Belted Skirt) 570€.webp'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Sean Suen ', 'Black Bondage Shirt', ' 615€'],
         gender: 'Menswear',
         completePath: './productImages/Group 14 - Hero/Menswear/Sean Suen (Black Bondage Shirt) 615€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Layered Hollowed-Out Tailored Shirt', ' 455€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 14 - Hero/Womenswear/C2H4 (Layered Hollowed-Out Tailored Shirt) 455€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', 'Staff Uniform Tech Nylon Padded Tote Bag', ' 595€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 14 - Hero/Womenswear/C2H4 (Staff Uniform Tech Nylon Padded Tote Bag) 595€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['C2H4 ', '“Future Yacht Club” Emblem Button Jeans', ' 550€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 14 - Hero/Womenswear/C2H4 (“Future Yacht Club” Emblem Button Jeans) 550€.webp'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Peter Do ', 'Faux Leather Midi Dress', ' 2115€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 14 - Hero/Womenswear/Peter Do (Faux Leather Midi Dress) 2115€.png'
     },
     {
         key: '14',
         groupName: 'Hero',
         value: ['Peter Do ', 'Strappy 110mm Transparent Heel Sandals', ' 1151€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 14 - Hero/Womenswear/Peter Do (Strappy 110mm Transparent Heel Sandals) 1151€.png'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Auralee ', 'Pink Denim Jacket', ' 910€'],
         gender: 'Menswear',
         completePath: './productImages/Group 15 - Innocent/Menswear/Auralee (Pink Denim Jacket) 910€.png_'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Auralee ', 'Tie-Dyed Ribbed Cotton-Blend Socks', ' 40€'],
         gender: 'Menswear',
         completePath: './productImages/Group 15 - Innocent/Menswear/Auralee (Tie-Dyed Ribbed Cotton-Blend Socks) 40€.png'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Carbone ', 'Crochet Lama Pants', ' 350€'],
         gender: 'Menswear',
         completePath: './productImages/Group 15 - Innocent/Menswear/Carbone (Crochet Lama Pants) 350€.webp'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Carbone ', 'Crochet Lama Waistcoat', ' 179€'],
         gender: 'Menswear',
         completePath: './productImages/Group 15 - Innocent/Menswear/Carbone (Crochet Lama Waistcoat) 179€.jpg'
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
         completePath: './productImages/Group 15 - Innocent/Menswear/SSDailey (Weather Officer Floral-print Cotton Trench Coat) 1930€.png'
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
         completePath: './productImages/Group 15 - Innocent/Womenswear/Auralee (Camouflage-Print Cotton-Gabardine Blouson Jacket) 700€.webp'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Maison Kimhekim ', 'Heart-print Straight-leg Jeans', ' 668€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 15 - Innocent/Womenswear/Maison Kimhekim (Heart-print Straight-leg Jeans) 668€.png'
     },
     {
         key: '15',
         groupName: 'Innocent',
         value: ['Minjukim ', 'White Bojagi Puff Midi Dress', ' 925€ '],
         gender: 'Womenswear',
         completePath: './productImages/Group 15 - Innocent/Womenswear/Minjukim (White Bojagi Puff Midi Dress) 925€ .png'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Bianca Saunders ', 'Tan Leather Barlon Jacket', ' 2000€'],
         gender: 'Menswear',
         completePath: './productImages/Group 19 - Sage /Menswear/Bianca Saunders (Tan Leather Barlon Jacket) 2000€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Bianca Saunders ', 'White Striped Poplin Shirt', ' 450€'],
         gender: 'Menswear',
         completePath: './productImages/Group 19 - Sage /Menswear/Bianca Saunders (White Striped Poplin Shirt) 450€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Bianca Saunders ', 'White Striped Shorts', ' 335€'],
         gender: 'Menswear',
         completePath: './productImages/Group 19 - Sage /Menswear/Bianca Saunders (White Striped Shorts) 335€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Jan Jan Van Esche ', 'Beige #73 T-shirt', ' 395€'],
         gender: 'Menswear',
         completePath: './productImages/Group 19 - Sage /Menswear/Jan Jan Van Esche (Beige #73 T-shirt) 395€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Jan Jan Van Esche ', 'Grey Sumi Pants', ' 845€'],
         gender: 'Menswear',
         completePath: './productImages/Group 19 - Sage /Menswear/Jan Jan Van Esche (Grey Sumi Pants) 845€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Jan Jan Van Esche ', 'Taupe Yak Crochet 7 Beanie', ' 320€'],
         gender: 'Menswear',
         completePath: './productImages/Group 19 - Sage /Menswear/Jan Jan Van Esche (Taupe Yak Crochet 7 Beanie) 320€.jpg'
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
         completePath: './productImages/Group 19 - Sage /Menswear/Lukhanyo Mdingi (The Vanguard Fringed Woven Scarf) 3155€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['J.Kim ', 'Brown Polyester Midi Dress', ' 895€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 19 - Sage /Womenswear/J.Kim (Brown Polyester Midi Dress) 895€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['J.Kim ', 'Red Cotton Crewneck', ' 390€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 19 - Sage /Womenswear/J.Kim (Red Cotton Crewneck) 390€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['KEH FORME ', 'Midi Dress', ' 680€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 19 - Sage /Womenswear/KEH FORME (Midi Dress) 680€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Lukhanyo Mdingi ', 'One-shoulder Maxi Dress', ' 870€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 19 - Sage /Womenswear/Lukhanyo Mdingi (One-shoulder Maxi Dress) 870€.jpg'
     },
     {
         key: '19',
         groupName: 'Sage',
         value: ['Lukhanyo Mdingi ', 'The Vanguard Pleated Pants', ' 865€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 19 - Sage /Womenswear/Lukhanyo Mdingi (The Vanguard Pleated Pants) 865€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Lùchen ', 'Band Collar Asymmetrical Shirt', ' 620€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 20 - Sage /Gender-neutral/Lùchen (Band Collar Asymmetrical Shirt) 620€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Lùchen ', 'Creator_s Finders Finger Ring', ' 980€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 20 - Sage /Gender-neutral/Lùchen (Creator_s Finders Finger Ring) 980€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Lùchen ', 'High Waist Trousers', ' 740€'],
         gender: 'Gender-neutral',
         completePath: './productImages/Group 20 - Sage /Gender-neutral/Lùchen (High Waist Trousers) 740€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Bed j.w. Ford ', 'Black Skirt', ' 770€'],
         gender: 'Menswear',
         completePath: './productImages/Group 20 - Sage /Menswear/Bed j.w. Ford (Black Skirt) 770€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Bed j.w. Ford ', 'Brown Cotton Vest', ' 591€'],
         gender: 'Menswear',
         completePath: './productImages/Group 20 - Sage /Menswear/Bed j.w. Ford (Brown Cotton Vest) 591€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Hed Mayner ', 'Jute Loafers Brown', ' 770€'],
         gender: 'Menswear',
         completePath: './productImages/Group 20 - Sage /Menswear/Hed Mayner (Jute Loafers Brown) 770€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Shinyakozuka ', 'Harrington With Yabiku Jacket', ' 285€'],
         gender: 'Menswear',
         completePath: './productImages/Group 20 - Sage /Menswear/Shinyakozuka (Harrington With Yabiku Jacket) 285€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Shinyakozuka ', 'Leaked Jumper', ' 355€'],
         gender: 'Menswear',
         completePath: './productImages/Group 20 - Sage /Menswear/Shinyakozuka (Leaked Jumper) 355€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Shinyakozuka ', 'Side Tuck Tapered With Yabiku Pants', ' 246€'],
         gender: 'Menswear',
         completePath: './productImages/Group 20 - Sage /Menswear/Shinyakozuka (Side Tuck Tapered With Yabiku Pants) 246€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Uma Wang ', 'Checked Print Dress', ' 670€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 20 - Sage /Womenswear/Uma Wang (Checked Print Dress) 670€.jpg'
     },
     {
         key: '20',
         groupName: 'Sage',
         value: ['Uma Wang ', 'Long Sleeve Top', ' 795€'],
         gender: 'Womenswear',
         completePath: './productImages/Group 20 - Sage /Womenswear/Uma Wang (Long Sleeve Top) 795€.jpg'
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
     const imgCollectionRef = collection(db, 'images');
     console.log(imgArr.length, arr.length)
         //  for (let i = 0; i < imgArr.length; i++) {
         //      await addDoc(imgCollectionRef, {
         //          type: 'specific',
         //          gender: arr[i].gender,
         //          groupID: Number(arr[i].key),
         //          groupName: arr[i].groupName,
         //          designerName: arr[i].value[0],
         //          productType: makeLower(arr[i].value[1]),
         //          price: arr[i].value[2],
         //          stringLoc: imgArr[i],
         //          productFilter: getFilter(makeLower(arr[i].value[1]))
         //      })
         //      console.log('ran')
         //  }
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