import { readFile, writeFile } from 'fs/promises';

async function extractFile() {
    try {
        const file = await readFile('data.txt', 'utf8');
        console.info(file);
    } catch (err) {
        console.info.file;
    }

}

async function writeToFile() {
    try {
        await writeFile('output.txt', 'Hello NodeJS Filesystem');
        console.info('write File Berhasil');
    } catch (err) {
        console.error(err);
    }
}

extractFile();
writeToFile();
