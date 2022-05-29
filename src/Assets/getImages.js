// const fileImport = require('./Group 1 - Caregiver/Menswear/Deveaux New York (WHITE DUNCAN SHIRT) 560€.jpeg');
let arr = [];
// console.log(fileImport)
let imgArr = []
let fileCounter = 0;
async function UploadImg() {
    const fs = require('fs');
    const dir = './Images/product-featured/';
    const subDirs = fs.readdirSync(dir);
    for (const sub of subDirs) {
        if (sub.localeCompare('.DS_Store') !== 0) {
            console.log(sub)
                // const innerDir = './Images/' + sub + '/';
                // const gender = fs.readdirSync(innerDir);
                //     for (const genders of gender) {
                //         if (genders.localeCompare('.DS_Store') !== 0) {
                //             const filePath = innerDir + genders + '/'
                //             const files = fs.readdirSync(filePath);
                //             // console.log('START OF FILE PATH' + filePath);
                //             for (const file of files) {
                //                 console.log(filePath + file)
                //                     // fileCounter += 1;
                //                     // console.log(fileImport.constructor.name)
                //                     // addToArr(file, sub, genders, filePath + file, fileCounter)
                //             }
                //         }
                //         // console.log('END OF FILE PATH' + filePath);
                //         // console.log('');
                //     }
        }
    }
    console.log(arr);
}

UploadImg();

function addToArr(file, group, gender, filepath, fileCounter) {
    // this function will split the name of the file before and after the brackets
    // it will then add each file to an array as long as they are in the same group
    const fileName = file.split('(');
    const fileName2 = fileName[1].split(')');
    const brandName = fileName[0];
    const productType = fileName2[0];
    const price = fileName2[1].split('.')[0];
    const groupID = group.split(' ')[1].split(' ')[0];
    const groupName = group.split('-')[1].split(' ')[1]
    const path = filepath;
    // console.log('import img' + fileCounter + ' from "' + path + '"');
    // console.log(brandName, productType, price, ' split file name');
    const item = [brandName, productType, price];
    const obj = { key: groupID, groupName: groupName, value: item, gender: gender, completePath: path }
        // console.log(obj)
    arr.push(obj);
    // console.log(group, gender)
}

// export default UploadImg;
for (let index = 1; index < fileCounter + 1; index++) {
    imgArr.push('img' + index)
}
// console.log(imgArr)