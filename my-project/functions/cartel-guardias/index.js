export const handler = ({ inputs, mechanic, sketch }) => {
  const { labImagen, textLine0, textLine1, textLine2, textLine3, color1 } =
    inputs;
  const width = 1080;
  const height = 600;
  let qrCodeGuardias;
  let imgLab;
  let cirrusCumulus;
  let terminalGrotesque;
  let spaceGrotesk;

  sketch.preload = () => {
    qrCodeGuardias = sketch.loadImage("static/qr_2025_mim.jpg");
    imgLab = sketch.loadImage("static/lid_icon_ig_03.jpg");

    cirrusCumulus = sketch.loadFont("static/CirrusCumulus.ttf");
    terminalGrotesque = sketch.loadFont(
      "static/terminal-grotesque-webfont.ttf"
    );
    spaceGrotesk = sketch.loadFont("static/SpaceGrotesk-Regular.ttf");
  };

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background("#FFFFFF");
    sketch.noStroke();
    sketch.fill(color1);
    sketch.textAlign(sketch.CENTER, sketch.TOP);

    const margin = width * 0.2;
    const lineHeight = height / 15;

    sketch.textSize(lineHeight);
    sketch.textStyle(sketch.NORMAL);
    sketch.textFont(spaceGrotesk);
    sketch.text(textLine0, margin, height - 70, width - 2 * margin);

    sketch.textSize(lineHeight);
    sketch.textStyle(sketch.NORMAL);
    sketch.textFont(spaceGrotesk);
    sketch.text(textLine1, margin, height - 580, width - 2 * margin);

    if (qrCodeGuardias) {
      const qrCodeSize = 400; // Tamaño del código QR
      const qrCodeX = width - qrCodeSize - 50; // Posición X: Derecha con margen de 50px
      const qrCodeY = 80; // Posición Y: Arriba con margen de 50px
      sketch.blendMode(sketch.MULTIPLY);
      sketch.image(qrCodeGuardias, qrCodeX, qrCodeY, qrCodeSize, qrCodeSize);
      
    }
    if (imgLab) {
      const logoSize = 800;
      sketch.imageMode(sketch.CENTER);
      sketch.blendMode(sketch.MULTIPLY);
      sketch.image(imgLab, width / 4, height / 2, logoSize, logoSize);
    }

    mechanic.done();
  };
};

export const inputs = {
  textLine0: {
    type: "text",
    default: "lab interaccion digital @lid.udp",
    label: "nombreLab",
  },
  textLine1: { 
    type: "text",
    default: "lista de gente autorizada",
    label: "instagram",
  },
  color1: {
    type: "color",
    model: "hex",
    default: "#000000",
    label: "Color del Texto",
  },
};

export const presets = {};

export const settings = {
  engine: require("@mechanic-design/engine-p5"),
};
