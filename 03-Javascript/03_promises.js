const fs = require('fs')

function readFileWithPromise(filepath, encoding) {
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, encoding, (err, content) => {
            if (err) {
                reject(err)
            }
            else {
                resolve(content)
            }
        })
    })
}

function writeFileWithPromise(filepath, content) {
    return new Promise((resolve, reject) => {
        fs.writeFile(filepath, content, function (err) {
            if (err) {
                reject(err)
            }
            else {
                resolve(content)
            }
        })
    })
}


function unlinkWithPromise(filepath) {
    return new Promise((resolve, reject) => {
        fs.unlink('./hello.txt', function (e) {
            if (e) {
                reject(e)
            }
            else {
                resolve()
            }
        })
    })
}

// Multiple async code is running in sync fashion
readFileWithPromise('./hello.txt', 'utf-8')
    .then((content) => writeFileWithPromise("./backup.txt", content))
    .then(() => unlinkWithPromise("./hello.txt"))
    .catch((e) => console.log("Error", e))
    .finally(() => console.log("Everything is done"))


async function doTasks() {
    try {
        const fileContent = await readFileWithPromise('./hello.txt', 'utf-8')
        await writeFileWithPromise("./backup.txt", fileContent)
        await unlinkWithPromise("./hello.txt")
        console.log("All done");
    }
    catch (err) {
        console.log('Error', e);
    } finally {
        console.log("All Done");
    }
}
doTasks()
