const addLight = (color: string, amount: number): string => {
  let cc = parseInt(color, 16) + amount;
  let c = (cc > 255) ? 255 : (cc);

  return (c.toString(16).length > 1) ? c.toString(16) : `0${c.toString(16)}`;
}

export const lightenColor = (color: string, amount: number): string => {
  color = (color.indexOf("#") >= 0) ? color.substring(1, color.length) : color;
  amount = (255 * amount) / 100;
  return color = `#${addLight(color.substring(0, 2), amount)}${addLight(color.substring(2, 4), amount)}${addLight(color.substring(4, 6), amount)}`;
}


const subtractLight = (color: string, amount: number): string => {
  let cc = parseInt(color, 16) - amount;
  let c = (cc < 0) ? 0 : (cc);
  return (c.toString(16).length > 1) ? c.toString(16) : `0${c.toString(16)}`;

}

export const darkenColor = (color: string, amount: number): string => {
  color = (color.indexOf("#") >= 0) ? color.substring(1, color.length) : color;
  amount = (255 * amount) / 100;
  return color = `#${subtractLight(color.substring(0, 2), amount)}${subtractLight(color.substring(2, 4), amount)}${subtractLight(color.substring(4, 6), amount)}`;
}





