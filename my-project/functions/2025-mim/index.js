export const handler = ({ inputs, mechanic, sketch }) => {
  // inputs
  const { labNombre, labInstagram, labImagen, socioNombre, socioInstagram, socioImagen, labTexto, qrTextoAdicional, color1, qrImagen, qrTexto, animarFondo } = inputs;
  const widthCarta = 8.5;
  const heightCarta = 11;
  const escala = 100;
  const width = widthCarta * escala;
  const height = heightCarta * escala;

  let imgQR;
  let imgLab;
  let imgSocio;
  let cirrusCumulus;
  let terminalGrotesque;
  let spaceGrotesk;

  sketch.preload = () => {
    if (qrImagen) {
      imgQR = sketch.loadImage(URL.createObjectURL(qrImagen));
    } else {
      imgQR = sketch.loadImage("static/qr_2025_mim.jpg");
    }

    if (labImagen) {
      imgLab = sketch.loadImage(URL.createObjectURL(labImagen));
    } else {
      imgLab = sketch.loadImage("static/lid_icon_ig_03.jpg");
    }

    if (socioImagen) {
      imgSocio = sketch.loadImage(URL.createObjectURL(socioImagen));
    } else {
      imgSocio = sketch.loadImage("static/mim_logo.svg");
    }

    cirrusCumulus = sketch.loadFont('static/CirrusCumulus.ttf');
    terminalGrotesque = sketch.loadFont('static/terminal-grotesque-webfont.ttf');
    spaceGrotesk = sketch.loadFont('static/SpaceGrotesk-Regular.ttf'); // Cargar la nueva fuente
  };

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background("#FFFFFF");
    sketch.noStroke();
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.textSize(200 * lineHeight / 100);
    sketch.textFont(cirrusCumulus);

    const margen = 10;
    const lineHeight = 5 * height / 100;
    const espacioVertical = 15;
    const numRepetitions = 40;
    const alphaValue = 70;
    const trazoGrosor = 1.5;
    const trazoColor = color1;
    const minSizeFondo = 50 * lineHeight / 100;
    const maxSizeFondo = 250 * lineHeight / 100;

    if (animarFondo) {
      // Dibujar el fondo animado
      for (let i = 0; i < numRepetitions; i++) {
        const randomX = sketch.random(width);
        const randomY = sketch.random(height);
        const randomSize = sketch.random(minSizeFondo, maxSizeFondo);
        const randomColor = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255), alphaValue);

        sketch.textSize(randomSize);
        sketch.fill(randomColor);
        sketch.text(labTexto, randomX, randomY);
      }
    } else {
      // Dibujar el fondo estático
      for (let i = 0; i < numRepetitions; i++) {
        const randomX = sketch.random(width);
        const randomY = sketch.random(height);
        const randomSize = sketch.random(100, 250) * lineHeight / 100; // Tamaños estáticos
        const randomColor = sketch.color(sketch.random(255), sketch.random(255), sketch.random(255), alphaValue);

        sketch.textSize(randomSize);
        sketch.fill(randomColor);
        sketch.text(labTexto, randomX, randomY);
      }
    }

    // Dibujar el texto principal con trazo
    sketch.strokeWeight(trazoGrosor);
    sketch.stroke(trazoColor);
    sketch.fill(color1);
    sketch.textSize(200 * lineHeight / 100);
    sketch.text(labTexto, width / 100, height / 2.1, width - 2 * margen);
    sketch.noStroke();

    // Resto del dibujo (nombres, logos, QR) - SIN CAMBIOS
    sketch.textAlign(sketch.LEFT, sketch.TOP);
    sketch.textSize(50 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.textFont(spaceGrotesk);
    sketch.text(labNombre, margen, margen);
    sketch.textSize(35 * lineHeight / 100);
    sketch.text(labInstagram, margen, margen + (40 * lineHeight / 100) + espacioVertical);

    sketch.textAlign(sketch.RIGHT, sketch.TOP);
    sketch.textSize(50 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.textFont(spaceGrotesk);
    sketch.text(socioNombre, width - margen, margen);
    sketch.textSize(35 * lineHeight / 100);
    sketch.text(socioInstagram, width - margen, margen + (40 * lineHeight / 100) + espacioVertical);

    if (imgQR) {
      const qrCodeSize = 100;
      sketch.imageMode(sketch.CENTER);
      sketch.blendMode(sketch.MULTIPLY);
      sketch.image(imgQR, width / 10, height - qrCodeSize / 1.5 - margen * 2, qrCodeSize, qrCodeSize);
      sketch.textSize(30 * lineHeight / 100);
      sketch.textStyle(sketch.NORMAL);
      sketch.textFont(spaceGrotesk);
      sketch.textAlign(sketch.LEFT, sketch.BOTTOM);
      sketch.text(qrTexto, margen, height - margen);
      sketch.textAlign(sketch.RIGHT, sketch.BOTTOM);
      sketch.text(qrTextoAdicional, width - margen, height - margen - (30 * lineHeight / 100) + 15);
    }

    if (imgLab) {
      const logoSize = 120;
      sketch.imageMode(sketch.CENTER);
      sketch.blendMode(sketch.MULTIPLY);
      sketch.image(imgLab, width / 20, height / 10, logoSize, logoSize);
    }

    if (imgSocio) {
      const logoSize = 70;
      sketch.imageMode(sketch.CENTER);
      sketch.image(imgSocio, width * 0.93, height * 0.11, logoSize, logoSize);
    }

    mechanic.done();
  };
};

export const inputs = {
  labNombre: {
    type: "text",
    default: "lab de interacción digital",
    label: "labNombre"
  },
  labInstagram: {
    type: "text",
    default: "@lid.udp",
    label: "labInstagram"
  },
  labSemestre: {
    type: "text",
    default: "2025-01",
    label: "labSemestre"
  },
  socioNombre: {
    type: "text",
    default: "Museo Interactivo Mirador",
    label: "socioNombre"
  },
  socioInstagram: {
    type: "text",
    default: "@mim.museo",
    label: "socioInstagram"
  },
  labTexto: {
    type: "text",
    default: "convocatoria obras estudiantiles",
    label: "labTexto"
  },
  color1: {
    type: "color",
    model: "hex",
    default: "#000000",
    label: "Color del Texto"
  },
  // qrImagen: {
  //   type: "image",
  //   label: "qrImagen"
  // },
  qrTexto: {
    type: "text",
    default: "formulario inscripción",
    label: "qrTexto"
  },
  qrTextoAdicional: {
    type: "text",
    default: "hasta viernes 02 mayo 2025",
    label: "qrTextoAdicional"
  },
  // labImagen: {
  //   type: "image",
  //   label: "logoLab"
  // },
  // socioImagen: {
  //   type: "image",
  //   label: "socioImagen"
  // },
  animarFondo: {
    type: "boolean",
    default: false,
    label: "Animar Fondo"
  },
};

export const presets = {};

export const settings = {
  engine: require("@mechanic-design/engine-p5"),
  showMultipleExports: true,
  animated: false,
  hideScaleToFit: true,
};