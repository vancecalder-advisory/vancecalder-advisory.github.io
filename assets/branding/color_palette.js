/**
 * Vance & Calder Advisory Group — Official Color Palette & Brand Tokens
 * Source: Master Branding Specs (Deep Navy #0A192F, Champagne Gold #D4AF37)
 */
export const brandPalette = {
  "name": "Vance & Calder Advisory Group Brand Palette",
  "version": "2.0.0",
  "created": "2026-10-05",
  "colors": {
    "primary": {
      "name": "Deep Navy",
      "hex": "#0A192F",
      "rgb": "rgb(10, 25, 47)",
      "hsl": "hsl(216, 65%, 11%)",
      "cmyk": "cmyk(79, 47, 0, 82)",
      "description": "Commanding, institutional deep navy representing strategic depth, rigor, and executive authority.",
      "shades": {
        "50": "#E6ECF5",
        "100": "#C3D1E6",
        "200": "#9DB4D6",
        "300": "#7697C5",
        "400": "#416FA7",
        "500": "#0A192F",
        "600": "#081426",
        "700": "#060F1D",
        "800": "#040A14",
        "900": "#02050A"
      }
    },
    "secondary": {
      "name": "Champagne Gold",
      "hex": "#D4AF37",
      "rgb": "rgb(212, 175, 55)",
      "hsl": "hsl(46, 65%, 52%)",
      "cmyk": "cmyk(0, 17, 74, 17)",
      "description": "Refined, prestigious champagne gold representing advisory excellence, high-ticket value, and execution precision.",
      "shades": {
        "50": "#FAF7EE",
        "100": "#F4ECD4",
        "200": "#EBDDB0",
        "300": "#E3CE8C",
        "400": "#D4AF37",
        "500": "#BF992B",
        "600": "#A3801F",
        "700": "#826514",
        "800": "#5E480A",
        "900": "#3B2D04"
      }
    },
    "monochrome": {
      "black": {
        "hex": "#000000",
        "rgb": "rgb(0, 0, 0)",
        "label": "Pure Black (Overlays & Print)"
      },
      "charcoal": {
        "hex": "#0F172A",
        "rgb": "rgb(15, 23, 42)",
        "label": "Dark Slate / Surface"
      },
      "white": {
        "hex": "#FFFFFF",
        "rgb": "rgb(255, 255, 255)",
        "label": "Pure White (Dark Mode & Inversion)"
      }
    }
  },
  "typography": {
    "primarySerif": "Cinzel, 'Times New Roman', 'Trajan Pro', Georgia, serif",
    "secondarySans": "Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
  },
  "cssVariables": {
    "--color-vc-navy": "#0A192F",
    "--color-vc-navy-dark": "#060F1D",
    "--color-vc-gold": "#D4AF37",
    "--color-vc-gold-dark": "#BF992B",
    "--color-vc-gold-light": "#F4ECD4"
  }
};
export default brandPalette;
