export const handler = ({ inputs, mechanic, sketch }) => {
  // inputs
  const { cursoSigla, cursoNombre, cursoSemestre, cursoInstagram, cursoProfe0, cursoProfe1, cursoAyudante0, color1 } = inputs;
  const widthCarta = 8.5;
  const heightCarta = 11;
  const escala = 100;
  const width = widthCarta * escala;
  const height = heightCarta * escala;
  let qrCodeImage;

  sketch.preload = () => {
    // qrCodeImage = sketch.loadImage('assets/qr_lid_ig.png'); // Ruta actualizada con el nuevo nombre
  };

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background("#FFFFFF");
    sketch.noStroke();
    sketch.fill(color1);
    sketch.textAlign(sketch.CENTER, sketch.TOP);

    const margin = 10 * width / 100;
    const lineHeight = 5 * height / 100;

    sketch.textSize(100 * lineHeight / 100);
    sketch.textStyle(sketch.BOLD);
    sketch.text(cursoSemestre, margin, 5 * height / 100, width - 2 * margin);

    sketch.textSize(120 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(cursoSigla, margin, 10 * height / 100, width - 2 * margin);

    sketch.textSize(lineHeight);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(cursoNombre, margin, 20 * height / 100, width - 2 * margin);

    sketch.textSize(80 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(cursoInstagram, margin, 40 * height / 100, width - 2 * margin);

    sketch.textSize(80 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(cursoProfe0, margin, 50 * height / 100, width - 2 * margin);

    sketch.textSize(80 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(cursoProfe1, margin, 55 * height / 100, width - 2 * margin);

    sketch.textSize(80 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(cursoAyudante0, margin, 60 * height / 100, width - 2 * margin);


    // dibujar el codigo QR arriba a la derecha de 150x150 px
    if (qrCodeImage) {
      // tamano del codigo QR
      const qrCodeSize = 150; 

      // posX: derecha con margen de 50px
      const qrCodeX = width - qrCodeSize - 50;
      
      // posY: arriba con margen de 50px
      const qrCodeY = 50; 
      // sketch.image(qrCodeImage, qrCodeX, qrCodeY, qrCodeSize, qrCodeSize);
    }

    mechanic.done();
  };
};

export const inputs = {
cursoSigla: {
  type: "text",
  default: "dis8644",
  label: "cursoSigla"
},
cursoNombre: {
  type: "text",
  default: "diseño de máquinas electrónicas",
  label: "cursoNombre"
},
cursoInstagram: { 
  type: "text",
  default: "@teee.udp",
  label: "cursoInstagram"
},
cursoSemestre: { 
  type: "text",
  default: "2025-01",
  label: "cursoSemestre"
},
cursoProfe0: {
  type: "text",
  default: "aarón montoya",
  label: "cursoProfe0"
},
cursoProfe1: {
  type: "text",
  default: "matías serrano",
  label: "cursoProfe1"
},
cursoAyudante0: {
  type: "text",
  default: "andrés martin",
  label: "cursoAyudante0"
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