const chaiClasses = {
  // BACKGROUND COLORS
  "chai-bg-red": { type: "backgroundColor", value: "red" },
  "chai-bg-blue": { type: "backgroundColor", value: "blue" },
  "chai-bg-green": { type: "backgroundColor", value: "green" },
  "chai-bg-yellow": { type: "backgroundColor", value: "yellow" },
  "chai-bg-purple": { type: "backgroundColor", value: "purple" },
  "chai-bg-pink": { type: "backgroundColor", value: "pink" },
  "chai-bg-orange": { type: "backgroundColor", value: "orange" },
  "chai-bg-black": { type: "backgroundColor", value: "black" },
  "chai-bg-white": { type: "backgroundColor", value: "white" },
  "chai-bg-gray": { type: "backgroundColor", value: "gray" },
  "chai-bg-teal": { type: "backgroundColor", value: "teal" },
  "chai-bg-indigo": { type: "backgroundColor", value: "indigo" },

  // TEXT COLORS
  "chai-text-red": { type: "color", value: "red" },
  "chai-text-blue": { type: "color", value: "blue" },
  "chai-text-green": { type: "color", value: "green" },
  "chai-text-yellow": { type: "color", value: "yellow" },
  "chai-text-purple": { type: "color", value: "purple" },
  "chai-text-pink": { type: "color", value: "pink" },
  "chai-text-orange": { type: "color", value: "orange" },
  "chai-text-black": { type: "color", value: "black" },
  "chai-text-white": { type: "color", value: "white" },
  "chai-text-gray": { type: "color", value: "gray" },
  "chai-text-indigo": { type: "color", value: "indigo" },

  // FONT SIZE
  "chai-text-xs": { type: "fontSize", value: "12px" },
  "chai-text-sm": { type: "fontSize", value: "14px" },
  "chai-text-md": { type: "fontSize", value: "16px" },
  "chai-text-lg": { type: "fontSize", value: "20px" },
  "chai-text-xl": { type: "fontSize", value: "24px" },
  "chai-text-2xl": { type: "fontSize", value: "30px" },
  "chai-text-3xl": { type: "fontSize", value: "36px" },

  // TEXT ALIGN
  "chai-text-left": { type: "textAlign", value: "left" },
  "chai-text-center": { type: "textAlign", value: "center" },
  "chai-text-right": { type: "textAlign", value: "right" },

  // FONT WEIGHT
  "chai-font-light": { type: "fontWeight", value: "300" },
  "chai-font-normal": { type: "fontWeight", value: "400" },
  "chai-font-medium": { type: "fontWeight", value: "500" },
  "chai-font-semibold": { type: "fontWeight", value: "600" },
  "chai-font-bold": { type: "fontWeight", value: "700" },

  // DISPLAY
  "chai-block": { type: "display", value: "block" },
  "chai-inline": { type: "display", value: "inline" },
  "chai-inline-block": { type: "display", value: "inline-block" },
  "chai-flex": { type: "display", value: "flex" },
  "chai-grid": { type: "display", value: "grid" },
  "chai-hidden": { type: "display", value: "none" },

  // FLEX JUSTIFY
  "chai-justify-start": { type: "justifyContent", value: "flex-start" },
  "chai-justify-center": { type: "justifyContent", value: "center" },
  "chai-justify-end": { type: "justifyContent", value: "flex-end" },
  "chai-justify-between": { type: "justifyContent", value: "space-between" },
  "chai-justify-around": { type: "justifyContent", value: "space-around" },

  // FLEX ALIGN
  "chai-items-start": { type: "alignItems", value: "flex-start" },
  "chai-items-center": { type: "alignItems", value: "center" },
  "chai-items-end": { type: "alignItems", value: "flex-end" },

  // BORDER
  "chai-border": { type: "border", value: "1px solid black" },
  "chai-border-2": { type: "border", value: "2px solid black" },
  "chai-border-4": { type: "border", value: "4px solid black" },
  "chai-border-none": { type: "border", value: "none" },

  // BORDER RADIUS
  "chai-rounded-sm": { type: "borderRadius", value: "4px" },
  "chai-rounded-md": { type: "borderRadius", value: "8px" },
  "chai-rounded-lg": { type: "borderRadius", value: "16px" },
  "chai-rounded-xl": { type: "borderRadius", value: "24px" },
  "chai-rounded-full": { type: "borderRadius", value: "9999px" },

  // BORDER COLORS
  "chai-border-red": { type: "borderColor", value: "red" },
  "chai-border-blue": { type: "borderColor", value: "blue" },
  "chai-border-green": { type: "borderColor", value: "green" },
  "chai-border-yellow": { type: "borderColor", value: "yellow" },
  "chai-border-purple": { type: "borderColor", value: "purple" },
  "chai-border-pink": { type: "borderColor", value: "pink" },
  "chai-border-orange": { type: "borderColor", value: "orange" },
  "chai-border-black": { type: "borderColor", value: "black" },
  "chai-border-white": { type: "borderColor", value: "white" },
  "chai-border-gray": { type: "borderColor", value: "gray" },
  "chai-border-teal": { type: "borderColor", value: "teal" },
  "chai-border-indigo": { type: "borderColor", value: "indigo" },
  "chai-border-lime": { type: "borderColor", value: "lime" },
  "chai-border-cyan": { type: "borderColor", value: "cyan" },
  "chai-border-brown": { type: "borderColor", value: "brown" },

  // WIDTH
  "chai-w-25": { type: "width", value: "25%" },
  "chai-w-50": { type: "width", value: "50%" },
  "chai-w-75": { type: "width", value: "75%" },
  "chai-w-100": { type: "width", value: "100%" },

  // HEIGHT
  "chai-h-25": { type: "height", value: "25%" },
  "chai-h-50": { type: "height", value: "50%" },
  "chai-h-75": { type: "height", value: "75%" },
  "chai-h-100": { type: "height", value: "100%" },

  // CURSOR
  "chai-cursor-pointer": { type: "cursor", value: "pointer" },
  "chai-cursor-default": { type: "cursor", value: "default" },

  // OVERFLOW
  "chai-overflow-hidden": { type: "overflow", value: "hidden" },
  "chai-overflow-scroll": { type: "overflow", value: "scroll" },
  "chai-overflow-auto": { type: "overflow", value: "auto" },

  // POSITION
  "chai-relative": { type: "position", value: "relative" },
  "chai-absolute": { type: "position", value: "absolute" },
  "chai-fixed": { type: "position", value: "fixed" },

  // PADDING
  "chai-p-0": { type: "padding", value: "0px" },
  "chai-p-2": { type: "padding", value: "2px" },
  "chai-p-4": { type: "padding", value: "4px" },
  "chai-p-6": { type: "padding", value: "6px" },
  "chai-p-8": { type: "padding", value: "8px" },
  "chai-p-10": { type: "padding", value: "10px" },
  "chai-p-12": { type: "padding", value: "12px" },
  "chai-p-14": { type: "padding", value: "14px" },
  "chai-p-16": { type: "padding", value: "16px" },
  "chai-p-20": { type: "padding", value: "20px" },
  "chai-p-24": { type: "padding", value: "24px" },
  "chai-p-32": { type: "padding", value: "32px" },

  // MARGIN
  "chai-m-0": { type: "margin", value: "0px" },
  "chai-m-2": { type: "margin", value: "2px" },
  "chai-m-4": { type: "margin", value: "4px" },
  "chai-m-6": { type: "margin", value: "6px" },
  "chai-m-8": { type: "margin", value: "8px" },
  "chai-m-10": { type: "margin", value: "10px" },
  "chai-m-12": { type: "margin", value: "12px" },
  "chai-m-16": { type: "margin", value: "16px" },
  "chai-m-20": { type: "margin", value: "20px" },
  "chai-m-24": { type: "margin", value: "24px" },
  "chai-m-32": { type: "margin", value: "32px" },
  "chai-ml-auto": { type: "marginLeft", value: "auto" },
  "chai-mr-auto": { type: "marginRight", value: "auto" },


  // GAP
  "chai-gap-2": { type: "gap", value: "2px" },
  "chai-gap-4": { type: "gap", value: "4px" },
  "chai-gap-6": { type: "gap", value: "6px" },
  "chai-gap-8": { type: "gap", value: "8px" },
  "chai-gap-10": { type: "gap", value: "10px" },

  // OPACITY
  "chai-opacity-25": { type: "opacity", value: "0.25" },
  "chai-opacity-50": { type: "opacity", value: "0.5" },
  "chai-opacity-75": { type: "opacity", value: "0.75" },
  "chai-opacity-100": { type: "opacity", value: "1" },

  // SHADOW
  "chai-shadow-sm": { type: "boxShadow", value: "0 1px 2px rgba(0,0,0,0.1)" },
  "chai-shadow-md": { type: "boxShadow", value: "0 4px 6px rgba(0,0,0,0.1)" },
  "chai-shadow-lg": { type: "boxShadow", value: "0 10px 15px rgba(0,0,0,0.2)" },

  // TEXT TRANSFORM
  "chai-uppercase": { type: "textTransform", value: "uppercase" },
  "chai-lowercase": { type: "textTransform", value: "lowercase" },
  "chai-capitalize": { type: "textTransform", value: "capitalize" },
};

export default chaiClasses