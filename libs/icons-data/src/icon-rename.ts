import * as fs from 'fs';
import * as path from 'path';

const REGIONAL_INDICATOR_OFFSET = 0x1f1e6;
const ASCII_OFFSET = 0x41;
/**
 * Convert filename string from hex into codepoint in order to convert back to
 * string representing the ISO-3166 alpha2 code of the country
 */
function fromCodepointToISO(fileName: string) {
  const [fragmentOne, fragmentTwo] = path.parse(fileName).name.split('-');
  const codeOne = parseInt(fragmentOne, 16) - REGIONAL_INDICATOR_OFFSET + ASCII_OFFSET;
  const codeTwo = parseInt(fragmentTwo, 16) - REGIONAL_INDICATOR_OFFSET + ASCII_OFFSET;
  return String.fromCodePoint(codeOne, codeTwo);
}

/**
 * Read a directory and decode each filename from unicode points into ASCII
 * characters. This is used for renaming the Twemoji icons as example.
 */
function readTwemojiFlagIcons() {
  const directoryPath = path.join(__dirname, '..', '..', 'src-twemoji');
  const outputPath = path.join(__dirname, '..', '..', 'out-twemoji');
  const fileList = fs.readdirSync(directoryPath);
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  // Convert from Regional Indicator Symbol Unicode to ASCII
  for (let i = fileList.length - 1; i >= 0; i--) {
    const inputFile = fileList[i];
    const outputFilename = fromCodepointToISO(inputFile) + '.svg';
    fs.rename(
      path.join(directoryPath, inputFile),
      path.join(outputPath, outputFilename),
      (err) => {
        if (err) throw err;
        console.log(`Renaming of ${inputFile} to ${outputFilename} completed.`);
      }
    );
  }
}

/**
 * Read the `src-flag-icon-css` directory in order to rename each icon name to
 * uppercase. This is used for the Lipis icons to keep same name generation on `svg-to-ts` script.
 */
function readLipisFlagIcons() {
  const directoryPath = path.join(__dirname, '..', '..', 'src-flag-icon-css');
  const outputPath = path.join(__dirname, '..', '..', 'out-flag-icon-css');
  const fileList = fs.readdirSync(directoryPath);
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath);
  }
  for (let i = fileList.length - 1; i >= 0; i--) {
    const inputFile = fileList[i];
    const outputFilename = path.parse(inputFile).name.toUpperCase() + '.svg';
    fs.rename(
      path.join(directoryPath, inputFile),
      path.join(outputPath, outputFilename),
      (err) => {
        if (err) throw err;
        console.log(`Renaming of ${inputFile} to ${outputFilename} completed.`);
      }
    );
  }
}

// For Twemoji Icons conversion.
// readTwemojiFlagIcons();

// For flag-icon-css conversion.
// readLipisFlagIcons();
