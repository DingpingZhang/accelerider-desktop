import { range } from './helpers';

const FileTypes = ['apk', 'doc', 'exe', 'png', 'mp3', 'ppt', 'xlsx', 'pdf', 'rar', 'zip', 'mp4'];

export const FileListSource = range(0, 10000, createMockFile);

export const FileTreeSource = {
  content: createMockFile(0),
  children: []
};

function createMockFile(i) {
  return {
    fileName: `Mock File Name - ${i}.${FileTypes[Math.floor(Math.random() * FileTypes.length - 1)]}`,
    size: `${Math.round(Math.random() * 1024)} MB`,
    modifiedTime: new Date().toLocaleString()
  };
}
