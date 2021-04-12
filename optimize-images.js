// const imagemin = require('imagemin');
// const imageminMozjpeg = require('imagemin-mozjpeg');
// const imageminPngquant = require('imagemin-pngquant');
//
// (async() => {
//     const files = await imagemin(
//         ['source_dir/*.jpg', 'another_dir/*.jpg'],
//         {
//             destination: 'destination_dir',
//             plugins: [imageminMozjpeg({quality: 80})]
//         }
//     );
//     const filesPng = await imagemin(['assets/img/*.png'], {
//         destination: 'assets/img/resized',
//         plugins: [
//             imageminPngquant()
//         ]
//     });
//     console.log(files);
//     console.log(filesPng);
// })();


// const sharp = require('sharp');
// const fs = require('fs');
// const directory = './assets/img';
//
// fs.readdirSync(directory).forEach(file => {
//     sharp(`${directory}/${file}`)
//         .resize(200, 100) // width, height
//         .toFile(`${directory}/resized/${file}-small.png`);
// });

// Create a pipeline that will download an image, resize it and format it to different files
// Using Promises to know when the pipeline is complete
const fs = require("fs");
const sharp = require('sharp');
// const sharpStream = sharp({
//     failOnError: false
// });
// const directory = './assets/img';
// fs.readdirSync(directory).forEach(file => {
//
//     console.log(file)
// })

const glob = require("glob")


// options is optional
glob("./assets/img/*.png", {}, function (er, files) {
    // files is an array of filenames.
    // If the `nonull` option is set, and nothing
    // was found, then files is ["**/*.js"]
    // er is an error object or null.

    console.log(files)
    files.forEach(file => {
        let fileExtName = file.split("/")
        fileExtName = fileExtName[fileExtName.length - 1]

        console.log(fileExtName)

        let fileExt = fileExtName.split(".")
        fileExt = fileExt[fileExt.length - 1]
        console.log(fileExt)

        let fileBase = fileExtName.split(".")
        fileBase = fileBase[0]
        console.log(fileBase)

        const scaleByHalf = sharp(`${file}`)

        const promises = [];

        promises.push(
            scaleByHalf
                .clone()
                .resize({width: 500})
                .webp({quality: 80})
                .toFile(`./assets/img/resized/${fileBase}-500.webp`)
        );

        promises.push(
            scaleByHalf
                .metadata()
                .then(({width}) => sharp(`${file}`)
                    .resize(Math.round(width * 0.5))
                    .webp({quality: 80})
                    .toFile(`./assets/img/resized/${fileBase}-${width*0.5}.webp`, function (err) {
                    })));

        promises.push(
            scaleByHalf
                .metadata()
                .then(({width}) => sharp(`${file}`)
                    .resize(Math.round(width * 0.5))
                    .toFile(`./assets/img/resized/${fileBase}-${width*0.5}.png`, function (err) {
                    })));

        promises.push(
            scaleByHalf
                .metadata()
                .then(({width}) => sharp(`${file}`)
                    .resize(Math.round(width))
                    .toFile(`./assets/img/resized/${fileBase}-${width}.png`, function (err) {
                    })));

        promises.push(
            scaleByHalf
                .metadata()
                .then(({width}) => sharp(`${file}`)
                    .resize(Math.round(width * .75))
                    .toFile(`./assets/img/resized/${fileBase}-${width *.75}.png`, function (err) {
                    })));

        promises.push(
            scaleByHalf
                .metadata()
                .then(({width}) => sharp(`${file}`)
                    .resize(Math.round(width * .25))
                    .toFile(`./assets/img/resized/${fileBase}-${width * .25}.png`, function (err) {
                    })));


        Promise.all(promises)
            .then(res => {
                console.log("Done!", res);
            })
            .catch(err => {
                console.error("Error processing files, let's clean it up", err);
                try {
                    fs.unlinkSync(`./assets/img/resized/${fileBase}.jpg`);
                    fs.unlinkSync(`./assets/img/resized/${fileBase}-500.jpg`);
                    fs.unlinkSync(`./assets/img/resized/${fileBase}-500.webp`);
                } catch (e) {
                }
            });

    })
})
