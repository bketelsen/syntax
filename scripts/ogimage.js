/* eslint-disable */
const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const { createCanvas, loadImage, registerFont } = require('canvas')

const width = 1200
const height = 630
registerFont('./assets/FiraSans-Light.ttf', { family: 'Fira Sans' })



async function ls(p) {
  const canvas = createCanvas(width, height)
  const context = canvas.getContext('2d')
  const base = './assets/ogbackground.png'
  const dir = await fs.promises.opendir(p)
  for await (const dirent of dir) {
    if (dirent.isFile()) {
      const file = path.join(p, dirent.name)
      const source = fs.readFileSync(file, 'utf8')
      const { data } = matter(source)

      const hashTags = data.tags.map((t) => '#' + t)
      const spaceTags = hashTags.join(' ')

      loadImage(base).then((image) => {
        context.drawImage(image, 0, 0, 1200, 630)
        context.font = 'bold 50pt "Fira Sans"'
        context.textAlign = 'center'
        context.textBaseline = 'top'
        context.fillStyle = '#000'

        const text = data.title

        context.fillStyle = '#fff'
        context.textAlign = 'left'
        context.textBaseline = 'center'
        // draw title
        const fontSizeUsed = drawMultilineText(context, text, {
          rect: {
            x: 100,
            y: 50,
            width: 800,
            height: 300,
          },
          font: 'Fira Sans',
          verbose: true,
          lineHeight: 1,
          minFontSize: 70,
          maxFontSize: 130,
        })

        context.fillStyle = '#fff'
        context.textAlign = 'left'
        context.textBaseline = 'alphabetic'
        const fontSizeUsed2 = drawMultilineText(context, spaceTags, {
          rect: {
            x: 100,
            y: 480,
            width: 800,
            height: 100,
          },
          font: 'Fira Sans',
          verbose: true,
          lineHeight: 1,
          minFontSize: 25,
          maxFontSize: 40,
        })

        context.fillStyle = '#fff'
        context.textAlign = 'right'
        context.textBaseline = 'alphabetic'
        const fontSizeUsed3 = drawMultilineText(context, '@bketelsen https://brian.dev', {
          rect: {
            x: 1150,
            y: 470,
            width: 400,
            height: 200,
          },
          font: 'Fira Sans',
          verbose: true,
          lineHeight: 1.5,
          minFontSize: 25,
          maxFontSize: 40,
        })

        const buffer = canvas.toBuffer('image/png')
        const imagePath = path.join(
          './public',
          'fixed',
          'images',
          'og',
          path.basename(p),
          formatSlug(dirent.name) + '.png'
        )
        fs.writeFileSync(imagePath, buffer)
      })
    } else {
      ls(path.join(p, dirent.name))
    }
  }
}
function drawMultilineText(ctx, text, opts) {
  // Default options
  if (!opts) opts = {}
  if (!opts.font) opts.font = 'sans-serif'
  if (typeof opts.stroke == 'undefined') opts.stroke = false
  if (typeof opts.verbose == 'undefined') opts.verbose = false
  if (!opts.rect)
    opts.rect = {
      x: 0,
      y: 0,
      width: ctx.canvas.width,
      height: ctx.canvas.height,
    }
  if (!opts.lineHeight) opts.lineHeight = 1.1
  if (!opts.minFontSize) opts.minFontSize = 30
  if (!opts.maxFontSize) opts.maxFontSize = 100
  // Default log function is console.log - Note: if verbose il false, nothing will be logged anyway
  if (!opts.logFunction)
    opts.logFunction = function (message) {
      console.log(message)
    }

  const words = require('words-array')(text)
  if (opts.verbose) opts.logFunction('Text contains ' + words.length + ' words')
  var lines = []
  let y //New Line

  // Finds max font size  which can be used to print whole text in opts.rec

  let lastFittingLines // declaring 4 new variables (addressing issue 3)
  let lastFittingFont
  let lastFittingY
  let lastFittingLineHeight
  for (var fontSize = opts.minFontSize; fontSize <= opts.maxFontSize; fontSize++) {
    // Line height
    var lineHeight = fontSize * opts.lineHeight

    // Set font for testing with measureText()
    ctx.font = ' ' + fontSize + 'px ' + opts.font

    // Start
    var x = opts.rect.x
    y = lineHeight //modified line        // setting to lineHeight as opposed to fontSize (addressing issue 1)
    lines = []
    var line = ''

    // Cycles on words

    for (var word of words) {
      // Add next word to line
      var linePlus = line + word + ' '
      // If added word exceeds rect width...
      if (ctx.measureText(linePlus).width > opts.rect.width) {
        // ..."prints" (save) the line without last word
        lines.push({ text: line, x: x, y: y })
        // New line with ctx last word
        line = word + ' '
        y += lineHeight
      } else {
        // ...continues appending words
        line = linePlus
      }
    }

    // "Print" (save) last line
    lines.push({ text: line, x: x, y: y })

    // If bottom of rect is reached then breaks "fontSize" cycle

    if (y > opts.rect.height) break

    lastFittingLines = lines // using 4 new variables for 'step back' (issue 3)
    lastFittingFont = ctx.font
    lastFittingY = y
    lastFittingLineHeight = lineHeight
  }

  lines = lastFittingLines // assigning last fitting values (issue 3)
  ctx.font = lastFittingFont
  ctx.shadowColor = "black";
  ctx.shadowBlur = 10;
  ctx.shadowOffsetX = 3;
  ctx.shadowOffsetY = 3;
  if (opts.verbose) opts.logFunction('Font used: ' + ctx.font)
  const offset = opts.rect.y - lastFittingLineHeight / 2 + (opts.rect.height - lastFittingY) / 2 // modifying calculation (issue 2)
  // Fill or stroke
  for (var l of lines)
    if (opts.stroke) ctx.strokeText(l.text.trim(), l.x, l.y + offset)
    //modified line
    else ctx.fillText(l.text.trim(), l.x, l.y + offset) //modified line

  // Returns font size
  return fontSize
}

function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '')
}

ls('./src/data/blog').catch(console.error)

ls('./src/data/elsewhere').catch(console.error)
ls('./src/data/pages').catch(console.error)
