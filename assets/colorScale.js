import chroma from 'chroma-js';

export default function colorScale(e){


  let cbrand1 = getComputedStyle(e).getPropertyValue("--cBrand1");
  cbrand1 = cbrand1.substring(1,8);

  var color_scale = chroma.scale(['white',cbrand1,'black']).colors(13);

  e.style.setProperty('--cBrand1-50', color_scale[1]);
  e.style.setProperty('--cBrand1-100', color_scale[2]);
  e.style.setProperty('--cBrand1-200', color_scale[3]);
  e.style.setProperty('--cBrand1-300', color_scale[4]);
  e.style.setProperty('--cBrand1-400', color_scale[5]);
  e.style.setProperty('--cBrand1-500', color_scale[6]);
  e.style.setProperty('--cBrand1-600', color_scale[7]);
  e.style.setProperty('--cBrand1-700', color_scale[8]);
  e.style.setProperty('--cBrand1-800', color_scale[9]);
  e.style.setProperty('--cBrand1-900', color_scale[10]);
  
  let cbrand2 = getComputedStyle(e).getPropertyValue("--cBrand2");
  cbrand2 = cbrand2.substring(1,8);

  var color_scale = chroma.scale(['white',cbrand2,'black']).colors(13);

  e.style.setProperty('--cBrand2-50', color_scale[1]);
  e.style.setProperty('--cBrand2-100', color_scale[2]);
  e.style.setProperty('--cBrand2-200', color_scale[3]);
  e.style.setProperty('--cBrand2-300', color_scale[4]);
  e.style.setProperty('--cBrand2-400', color_scale[5]);
  e.style.setProperty('--cBrand2-500', color_scale[6]);
  e.style.setProperty('--cBrand2-600', color_scale[7]);
  e.style.setProperty('--cBrand2-700', color_scale[8]);
  e.style.setProperty('--cBrand2-800', color_scale[9]);
  e.style.setProperty('--cBrand2-900', color_scale[10]);

  let cbrand3 = getComputedStyle(e).getPropertyValue("--cBrand3");
  cbrand3 = cbrand3.substring(1,8);

  var color_scale = chroma.scale(['white',cbrand3,'black']).colors(13);

  e.style.setProperty('--cBrand3-50', color_scale[1]);
  e.style.setProperty('--cBrand3-100', color_scale[2]);
  e.style.setProperty('--cBrand3-200', color_scale[3]);
  e.style.setProperty('--cBrand3-300', color_scale[4]);
  e.style.setProperty('--cBrand3-400', color_scale[5]);
  e.style.setProperty('--cBrand3-500', color_scale[6]);
  e.style.setProperty('--cBrand3-600', color_scale[7]);
  e.style.setProperty('--cBrand3-700', color_scale[8]);
  e.style.setProperty('--cBrand3-800', color_scale[9]);
  e.style.setProperty('--cBrand3-900', color_scale[10]);

  let cbrand4 = getComputedStyle(e).getPropertyValue("--cBrand4");
  cbrand4 = cbrand4.substring(1,8);

  var color_scale = chroma.scale(['white',cbrand4,'black']).colors(13);

  e.style.setProperty('--cBrand4-50', color_scale[1]);
  e.style.setProperty('--cBrand4-100', color_scale[2]);
  e.style.setProperty('--cBrand4-200', color_scale[3]);
  e.style.setProperty('--cBrand4-300', color_scale[4]);
  e.style.setProperty('--cBrand4-400', color_scale[5]);
  e.style.setProperty('--cBrand4-500', color_scale[6]);
  e.style.setProperty('--cBrand4-600', color_scale[7]);
  e.style.setProperty('--cBrand4-700', color_scale[8]);
  e.style.setProperty('--cBrand4-800', color_scale[9]);
  e.style.setProperty('--cBrand4-900', color_scale[10]);

}