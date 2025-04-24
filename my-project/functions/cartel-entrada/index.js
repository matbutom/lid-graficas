export const handler = ({ inputs, mechanic, sketch }) => {
  const { textLine1, textLine2, textLine3, color1 } = inputs;
  const width = 1080;
  const height = 1350;

  sketch.setup = () => {
    sketch.createCanvas(width, height);
  };

  sketch.draw = () => {
    sketch.background("#FFFFFF"); // Fondo blanco para el poster
    sketch.noStroke();
    sketch.fill(color1);
    sketch.textAlign(sketch.CENTER, sketch.TOP); // Alinear texto al centro horizontalmente y arriba verticalmente

    const margin = width * 0.1; // 10% de margen horizontal
    const lineHeight = height / 15; // Espacio vertical aproximado por línea

    sketch.textSize(lineHeight * 1.2); // Tamaño de fuente un poco mayor que el espacio entre líneas
    sketch.textStyle(sketch.BOLD);
    sketch.text(textLine1, margin, height * 0.1, width - 2 * margin); // Título cerca de la parte superior

    sketch.textSize(lineHeight);
    sketch.textStyle(sketch.NORMAL);
    sketch.text(textLine2, margin, height * 0.35, width - 2 * margin); // Subtítulo debajo del título

    sketch.textSize(lineHeight * 0.8);
    sketch.text(textLine3, margin, height * 0.55, width - 2 * margin); // Cuerpo de texto más abajo

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

export const presets = {}; // Eliminamos los presets por ahora

export const settings = {
  engine: require("@mechanic-design/engine-p5")
};