import Apk from './apk.png';
import Doc from './doc.png';
import Exe from './exe.png';
import Folder from './folder.png';
import Img from './img.png';
import Music from './music.png';
import Other from './other.png';
import Pdf from './pdf.png';
import Ppt from './ppt.png';
import Rar from './rar.png';
import Txt from './txt.png';
import Video from './video.png';
import Xls from './xls.png';

const FileTypes = {
  Apk,
  Doc,
  Exe,
  Folder,
  Img,
  Music,
  Other,
  Pdf,
  Ppt,
  Rar,
  Txt,
  Video,
  Xls
};

const fileTypesMap = [
  [['apk'], Apk],
  [['doc', 'docx'], Doc],
  [['exe'], Exe],
  [['png', 'jpg', 'gif'], Img],
  [['mp3', 'wav'], Music],
  [['pdf'], Pdf],
  [['ppt', 'pptx'], Ppt],
  [['rar', '7z', 'zip'], Rar],
  [['txt'], Txt],
  [['mp4', 'rmvb'], Video],
  [['xls', 'xlsx'], Xls]
];

export default FileTypes;

export function GetFileIcon(filePath) {
  // TODO
  const fragment = filePath.split('.').pop();
  let result = fileTypesMap.find(map => map[0].includes(fragment));

  return result ? result[1] : Other;
}
