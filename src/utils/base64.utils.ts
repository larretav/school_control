import { Buffer } from "buffer";

export const encodeBase64 = (value: string) => {
  const buff = Buffer.from(value);
  return buff.toString('base64')
}

export const decodeBase64 = (value: string) => {
  const buff = Buffer.from(value, 'base64');

  return buff.toString('utf-8')
}

export const decodeBase64ToPdf = (value: string) => {

  const buff = Buffer.from(value, 'base64');
  
  const binary = buff.toString('binary');
  const len = binary.length;
  const buffer = new ArrayBuffer(len);
  const view = new Uint8Array(buffer);
  for (let i = 0; i < len; i++) {
    view[i] = binary.charCodeAt(i);
  }

  return new Blob([view], { type: "application/pdf" });
}