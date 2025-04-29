export const handler = ({ inputs, mechanic, sketch }) => {
  // inputs
  const { labNombre, labSemestre, labInstagram, socioNombre, socioInstagram,labTexto, labProfeMasInfo, labProfeNombre, labProfeMail, color1, imagen } = inputs;
  const widthCarta = 8.5;
  const heightCarta = 11;
  const escala = 100;
  const width = widthCarta * escala;
  const height = heightCarta * escala;

  let img;

  sketch.preload = () => {
    if (imagen) {
      img = sketch.loadImage(URL.createObjectURL(imagen));
    }
    // else {
    //   img = sketch.loadImage("static/qr_lab.jpg");
    // }
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

    sketch.textSize(70 * lineHeight / 100);
    sketch.textStyle(sketch.BOLD);
    sketch.text(labSemestre, margin, 5 * height / 100, width - 2 * margin);

    sketch.textSize(70 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(labNombre, margin, 15 * height / 100, width - 2 * margin);

    sketch.textSize(70 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(labInstagram, margin, 20 * height / 100, width - 2 * margin);

    sketch.textSize(70 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(socioNombre, margin, 30 * height / 100, width - 2 * margin);

    sketch.textSize(70 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(socioInstagram, margin, 35 * height / 100, width - 2 * margin);


    sketch.textSize(120 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(labTexto, margin, 40 * height / 100, width - 2 * margin);

    sketch.textSize(80 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(labProfeMasInfo, margin, 75 * height / 100, width - 2 * margin);

    sketch.textSize(80 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(labProfeNombre, margin, 80 * height / 100, width - 2 * margin);

    // dibujar el codigo QR arriba a la derecha de 150x150 px
    if (img) {
      // tamano del codigo QR
      const qrCodeSize = 200; 
      
      // posY: arriba con margen de 50px
      const qrCodeY = 50; 
      sketch.imageMode(sketch.CENTER);
      sketch.image(img, 50 * width / 100, 60 * height / 100, qrCodeSize, qrCodeSize);
    }

    mechanic.done();
  };
};

export const inputs = {
  labNombre: {
  type: "text",
  default: "laboratorio de interacción digital",
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
      default: "@mim",
      label: "socioInstagram"
      },
  labTexto: { 
    type: "text",
    default: "convocatoria obras estudiantiles",
    label: "labTexto"
    },
  labProfeNombre: {
  type: "text",
  default: "aarón montoya",
  label: "labProfeNombre"
  },
  labProfeMasInfo: {
    type: "text",
    default: "más info:",
    label: "labProfeMasInfo"
  },
  color1: {
  type: "color",
  model: "hex",
  default: "#000000",
  label: "Color del Texto"
  },
  imagen: {
  type: "image",
  label: "codigoQR"
  },
};

export const presets = {};

export const settings = {
engine: require("@mechanic-design/engine-p5")
};