export default {
  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  },
  hexToByteArray(hex) {
    const bytes = [];

    for (let c = 0; c < hex.length; c += 2) {
      bytes.push(parseInt(hex.substr(c, 2), 16));
    }

    return bytes;
  },
  hexToUint8Array(hex) {
    return new Uint8Array(hex.match(/[\da-f]{2}/gi).map(h => (parseInt(h, 16))));
  },
  padZero(value, length) {
    return value.toString().padStart(length, 0);
  },
};
