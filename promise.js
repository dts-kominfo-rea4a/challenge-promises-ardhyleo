const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
const promiseOutput = async (params) => {
  try {
    const promise1 = await promiseTheaterIXX();
    const promise2 = await promiseTheaterVGC();
    let marah = 0;
    let tidak_marah = 0;
    promise1.forEach((value, index) => {
      if (value.hasil === "marah") {
        marah = marah + 1;
      } else {
        tidak_marah = tidak_marah + 1;
      }
    });
    promise2.forEach((value, index) => {
      if (value.hasil === "marah") {
        marah = marah + 1;
      } else {
        tidak_marah = tidak_marah + 1;
      }
    });
    if (params === "marah") {
      return marah;
    } else if (params === "tidak marah") {
      return tidak_marah;
    }
  } catch (err) {
    console.err("ini error");
  }
};
module.exports = {
  promiseOutput,
};
