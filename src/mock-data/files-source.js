const FileTypes = ['apk', 'doc', 'exe', 'png', 'mp3', 'ppt', 'xlsx', 'pdf', 'rar', 'zip', 'mp4'];

export const FileListSource = Range(0, 10000, createMockFile);

export const FileTreeSource = {
  content: createMockFile(0),
  children: []
};

function createMockFile(i) {
  return {
    fileName: `Mock File Name - ${i}.${FileTypes[Math.round(Math.random() * FileTypes.length - 1)]}`,
    size: `${Math.round(Math.random() * 1024)} MB`,
    modifiedTime: new Date().toLocaleString()
  };
}

function Range(start, count, map) {
  let result = [];
  for (let index = start; index < count; index++) {
    result.push(map(index));
  }

  return result;
}
