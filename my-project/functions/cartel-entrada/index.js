export const handler = ({ inputs, mechanic, sketch }) => {
  const { textLine0, textLine1, textLine2, textLine3, color1 } = inputs;
  const width = 1080;
  const height = 1350;
  let qrInstagramLab;
  let qrFormularioLab;
  let cirrusCumulus;
  let terminalGrotesque;
  let spaceGrotesk;
  let imgLab;

  sketch.preload = () => {
    cirrusCumulus = sketch.loadFont("static/CirrusCumulus.ttf");
    terminalGrotesque = sketch.loadFont(
      "static/terminal-grotesque-webfont.ttf"
    );
    spaceGrotesk = sketch.loadFont("static/SpaceGrotesk-Regular.ttf");

    qrInstagramLab = sketch.loadImage("static/qr_instagram_lid.jpeg");
    qrFormularioLab = sketch.loadImage("static/qr_formulario.jpeg");
    imgLab = sketch.loadImage("static/lid_logo_01.png");
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

    sketch.textSize(100);
    sketch.textFont(spaceGrotesk);
    sketch.textLeading(110);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(textLine0, margin, 30, width - 2 * margin);

    sketch.textSize(50);
    sketch.textLeading(50);
    sketch.textFont(spaceGrotesk);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(textLine1, margin, height * 0.75, width + 250);

    sketch.textSize(50);
    sketch.textLeading(50);
    sketch.text(textLine2, margin, height * 0.75, width - 725);

    sketch.textSize(40);
    sketch.text(textLine3, margin, height * 0.92, width - 2 * margin);
    sketch.textAlign(sketch.CENTER);

    const qrCodeSize = 400;
    const imgLabSizeX = 1093;
    const imgLabSizeY = 360;

    sketch.image(qrFormularioLab, 580, 600, qrCodeSize, qrCodeSize);
    sketch.image(qrInstagramLab, 90, 600, qrCodeSize, qrCodeSize);
    sketch.image(imgLab, 250, 80, imgLabSizeX / 2, imgLabSizeY / 2)

    mechanic.done();
  };
};

export const inputs = {
  textLine0: {
    type: "text",
    default: "",
    label: "nombreLab",
  },
  textLine1: {
    type: "text",
    default: "formulario\ninscripción",
    label: "formulario",
  },
  textLine2: {
    type: "text",
    default: "instagram @lid.udp",
    label: "instagram",
  },
  textLine3: {
    type: "text",
    default: "contacto: aaron.montoya@mail.udp.cl",
    label: "contacto",
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
