import fs from "fs"
import path from "path"

export async function GetSongBlob(artistName: string, songName: string): Promise<Blob> {
  const artistSuffix = artistName.replaceAll('+', '');
  const songSuffix = songName.replaceAll('+', '').toLowerCase();

  const songsFolderPath = path.join(GetPath(), 'songs', artistSuffix);
  // console.log(`SONG FOLDER PATH = ${songsFolderPath}`)
  return new Promise((resolve, reject) => {
    const filePath = path.join(songsFolderPath, `${songSuffix}.mp3`);

    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log(`ERROR READING FILE from ${songsFolderPath}`)
        reject(err);
        return;
      }

      const blob = new Blob([data], { type: 'audio/mpeg' });
      resolve(blob);
    });
  });
}

function GetPath(): string {
  let path = import.meta.url;
  path = path.substring(5);
  let newPath = path.split('/');
  newPath.pop();
  return newPath.join('/');
}
