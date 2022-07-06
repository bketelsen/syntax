import { createCanvas, loadImage, registerFont } from 'canvas';
import siteMetadata from '../data/siteMetadata'
import { writeFileSync, existsSync, mkdirSync } from 'fs';
import drawMultilineText from 'canvas-multiline-text';
import path from 'path';

registerFont('assets/FiraSans-Light.ttf', { family: 'FiraSans' });


export const generateOgImage = async ({ folder, slug, title }) => {
  const dir = path.resolve('public', 'og', folder);
  const filepath = path.resolve(dir, `${slug}.png`);

  if (!existsSync(dir)) {
    mkdirSync(dir);
  }

  if (!existsSync(filepath)) {
    const imgBuffer = await createImage({ title });

    writeFileSync(filepath, imgBuffer);
  }
};

export const createImage = async ({ title }) => {
  const width = 1200;
  const height = 630;

  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');

  context.fillStyle = '#fff';
  context.fillRect(0, 0, width, height);
  const base = './assets/ogbackground.png'

  const image = await loadImage(base);
  context.drawImage(image, 0, 0, 1200, 630)

  context.textAlign = 'center';
  context.textBaseline = 'top';
  context.fillStyle = '#fff';

  drawMultilineText(context, title, {
    rect: {
      x: 600,
      y: 380,
      width: canvas.width - 20,
      height: canvas.height - 170,
    },
    font: 'FiraSans',
    verbose: false,
    lineHeight: 1.4,
    minFontSize: 15,
    maxFontSize: 56,
  });

  context.fillStyle = '#fff';
  context.font = '22px FiraSans';
  context.fillText(siteMetadata.siteUrl, 600, 580);

  return canvas.toBuffer('image/png');
};
