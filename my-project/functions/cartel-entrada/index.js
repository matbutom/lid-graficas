export const handler = ({ inputs, mechanic, sketch }) => {
  const { textLine1, textLine2, textLine3, color1 } = inputs;
  const width = 1080;
  const height = 1350;
  let qrCodeImage;

  sketch.preload = () => {
    qrCodeImage = sketch.loadImage('qr_lid_ig.png'); // Precargamos la imagen
  };

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background("#FFFFFF");
    sketch.noStroke();
    sketch.fill(color1);
    sketch.textAlign(sketch.CENTER, sketch.TOP);

    const margin = width * 0.1;
    const lineHeight = height / 15;

    sketch.textSize(lineHeight * 1.2);
    sketch.textStyle(sketch.BOLD);
    sketch.text(textLine1, margin, height * 0.1, width - 2 * margin);

    sketch.textSize(lineHeight);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(textLine2, margin, height * 0.35, width - 2 * margin);

    sketch.textSize(lineHeight * 0.8);
    sketch.text(textLine3, margin, height * 0.55, width - 2 * margin);

    // Dibujar el código QR arriba a la derecha de 150x150 px
    if (qrCodeImage) {
      const qrCodeSize = 150; // Tamaño del código QR
      const qrCodeX = width - qrCodeSize - 50; // Posición X: Derecha con margen de 50px
      const qrCodeY = 50; // Posición Y: Arriba con margen de 50px
      sketch.image(qrCodeImage, qrCodeX, qrCodeY, qrCodeSize, qrCodeSize);
    }

    mechanic.done();
  };
};

export const inputs = {
  textLine1: {
    type: "text",
    default: "lab interacción digital",
    label: "Título"
  },
  textLine2: {
    type: "text",
    default: "@lid.udp",
    label: "Subtítulo"
  },
  textLine3: {
    type: "text",
    default: "salvador sanfuentes 2221 3er piso",
    label: "Cuerpo de Texto"
  },
  color1: {
    type: "color",
    model: "hex",
    default: "#000000",
    label: "Color del Texto"
  }
};

export const presets = {};

export const settings = {
  engine: require("@mechanic-design/engine-p5")
};