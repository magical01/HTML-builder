const fsPromises = require('fs/promises');
const path = require('path');

async function fileNames() {
  const files = await fsPromises.readdir(path.join(__dirname, 'secret-folder'), {withFileTypes: true});
  for (let file of files) {
    if (file.isFile()) {
      const fileName = file.name.split('.')[0];
      const fileType = path.extname(file.name);
      const stat = await fsPromises.stat(path.join(__dirname, 'secret-folder', file.name));
      console.log(`${fileName} - ${fileType} - ${stat.size / 1024}kb`);
    }
  }
}
fileNames();
