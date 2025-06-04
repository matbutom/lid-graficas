export const handler = ({ inputs, mechanic, sketch }) => {
  const {
    startDate,
    endDate,
    nombrePersona,
    correo,
    color1
  } = inputs;

  // Resolución carta apaisada: 11 x 8.5 pulgadas a 150ppi = 1650 x 1100 px
  const width = 1650;
  const height = 1100;
  const underscore = "________________";
  const underscoreDate = "__/__/____";
  let logoImg;

  // Función para mostrar underscores si el input está vacío
  const displayInput = (value, type = "text") => {
    if (value && value.trim() !== "") {
      if (type === "correo") {
        return value.endsWith("@mail.udp.cl") ? value : `${value}@mail.udp.cl`;
      }
      return value;
    } else {
      if (type === "date") return underscoreDate;
      if (type === "correo") return underscore + "@mail.udp.cl";
      return underscore;
    }
  };

  sketch.preload = () => {
    logoImg = sketch.loadImage("static/lid_icon_ig_03.jpg");
  };

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background("#FFFFFF");

    // Logo arriba a la izquierda
    if (logoImg) {
      const logoHeight = height * 0.2;
      const aspect = logoImg.width / logoImg.height;
      const logoWidth = logoHeight * aspect;
      sketch.image(logoImg, 0, 0, logoWidth, logoHeight);
    }

    // Texto "tarjeta de custodia de objeto" arriba a la derecha
    sketch.textAlign(sketch.RIGHT, sketch.TOP);
    const formText = "tarjeta de custodia de objeto";
    const formTextSize = height * 0.04;
    sketch.fill(color1);
    sketch.textSize(formTextSize);
    sketch.text(formText, width - 30, 24);

    // Elementos centrales alineados al centro del canvas (vertical y horizontal)
    sketch.noStroke();
    sketch.textAlign(sketch.CENTER, sketch.TOP);

    // TAMAÑO INTERMEDIO: ligeramente más grande que el original, pero no tan grande como antes
    const totalSections = 4; // desde, hasta, nombre, correo
    const lineHeight = height * 0.075; // original era 0.06, anterior 0.10
    const sectionHeight = lineHeight * 2.3; // original era 2.2, anterior 2.5
    const centralBlockHeight = totalSections * sectionHeight;
    let posY = (height - centralBlockHeight) / 2;

    // 1. Texto "desde *fecha*" y (dd/mm/aaaa) pequeño debajo
    sketch.textSize(lineHeight * 1.18);
    sketch.text(
      `desde ${displayInput(startDate, "date")}`,
      width / 2,
      posY
    );
    sketch.textSize(lineHeight * 0.54);
    sketch.fill("#555");
    sketch.text("(dd/mm/aaaa)", width / 2, posY + lineHeight * 1.22);
    sketch.fill(color1);
    posY += sectionHeight;

    // 2. Texto "hasta *fecha*" y (dd/mm/aaaa) pequeño debajo
    sketch.textSize(lineHeight * 1.18);
    sketch.text(
      `hasta ${displayInput(endDate, "date")}`,
      width / 2,
      posY
    );
    sketch.textSize(lineHeight * 0.54);
    sketch.fill("#555");
    sketch.text("(dd/mm/aaaa)", width / 2, posY + lineHeight * 1.22);
    sketch.fill(color1);
    posY += sectionHeight;

    // 3. Underscore centrado y texto "nombre" pequeño debajo
    if (nombrePersona && nombrePersona.trim() !== "") {
      sketch.textSize(lineHeight * 1.25);
      sketch.text(nombrePersona, width / 2, posY);
    } else {
      sketch.textSize(lineHeight * 1.25);
      sketch.text(underscore, width / 2, posY);
      sketch.textSize(lineHeight * 0.62);
      sketch.fill("#555");
      sketch.text("nombre", width / 2, posY + lineHeight * 1.25);
      sketch.fill(color1);
    }
    posY += sectionHeight;

    // 4. Email
    sketch.textSize(lineHeight * 1.12);
    sketch.text(displayInput(correo, "correo"), width / 2, posY);

    // 5. Texto de advertencia, parte inferior centrada (más pequeño, 2 líneas)
    sketch.textAlign(sketch.CENTER, sketch.BOTTOM);
    sketch.fill("#B80000");
    sketch.textSize(lineHeight * 0.5);
    const warningLine1 = "si el formulario está mal rellenado, el objeto se desechará";
    const warningLine2 = "el laboratorio no se hace responsable por pérdidas o accidentes";
    const warningY = height - height * 0.08;
    sketch.text(warningLine1, width / 2, warningY);
    sketch.text(warningLine2, width / 2, warningY + lineHeight * 0.5);

    mechanic.done();
  };
};

export const inputs = {
  startDate: {
    type: "text",
    default: "",
    label: "Fecha de inicio (dd/mm/aaaa)"
  },
  endDate: {
    type: "text",
    default: "",
    label: "Fecha de término (dd/mm/aaaa)"
  },
  nombrePersona: {
    type: "text",
    default: "",
    label: "Nombre de la persona"
  },
  correo: {
    type: "text",
    default: "",
    label: "Correo UDP (sin @mail.udp.cl)"
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