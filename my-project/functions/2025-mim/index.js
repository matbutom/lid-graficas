export const handler = ({ inputs, mechanic, sketch }) => {
  // inputs
  const { labNombre, labInstagram, labImagen, socioNombre, socioInstagram, socioImagen, labTexto, qrTextoAdicional, color1, qrImagen, qrTexto } = inputs;
  const widthCarta = 8.5;
  const heightCarta = 11;
  const escala = 100;
  const width = widthCarta * escala;
  const height = heightCarta * escala;

  let imgQR;
  let imgLab;
  let imgSocio;

  sketch.preload = () => {
    if (qrImagen) {
      imgQR = sketch.loadImage(URL.createObjectURL(imagen));
    }
    else {
      imgQR = sketch.loadImage("static/qr_2025_mim.jpg");
    }

    if (labImagen) {
      imgLab = sketch.loadImage(URL.createObjectURL(logoLab));
    }
    else {
      imgLab = sketch.loadImage("static/lid_icon_ig_03.jpg");
    }

    if (socioImagen) {
      imgSocio = sketch.loadImage(URL.createObjectURL(logoSocio));
    }
    else {
      imgSocio = sketch.loadImage("static/mim-color.png");
    }
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

    sketch.textSize(50 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.text(labNombre + " " + labInstagram, margin, 5 * height / 100, width - 2 * margin);

    sketch.textSize(50 * lineHeight / 100);
    sketch.textStyle(sketch.NORMAL);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.text(socioNombre + " " + socioInstagram, margin, 25 * height / 100, width - 2 * margin);

    sketch.textSize(100 * lineHeight / 100);
    sketch.textAlign(sketch.CENTER, sketch.CENTER);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(labTexto, margin, 50 * height / 100, width - 2 * margin);

  
    // dibujar el codigo QR arriba a la derecha de 150x150 px
    if (imgQR) {
      // tamano del codigo QR
      const qrCodeSize = 120; 

      sketch.textSize(80 * lineHeight / 100);
      sketch.textStyle(sketch.NORMAL);
      sketch.text(qrTexto, margin, 70 * height / 100, width - 2 * margin);
      sketch.text(qrTextoAdicional, margin, 90 * height / 100, width - 2 * margin);
      // posY: arriba con margen de 50px
      sketch.imageMode(sketch.CENTER);
      sketch.image(imgQR, 50 * width / 100, 80 * height / 100, qrCodeSize, qrCodeSize);

    }

    if (imgLab) {
      // tamano del logo
      const logoSize = 150; 
      sketch.imageMode(sketch.CENTER);
      sketch.image(imgLab, 50 * width / 100, 15 * height / 100, logoSize, logoSize);
    }

    if (imgSocio) {
      // tamano del logo
      const logoSize = 150; 
      sketch.imageMode(sketch.CENTER);
      sketch.image(imgSocio, 50 * width / 100, 35 * height / 100, logoSize, logoSize);
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
  qrImagen: {
  type: "image",
  label: "qrImagen"
  },
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
  labImagen: {
    type: "image",
    label: "logoLab"
  },
  socioImagen: {
    type: "image",
    label: "socioImagen"
  },
};

export const presets = {};

export const settings = {
engine: require("@mechanic-design/engine-p5")
};