const getModel = require("../database/model");
const MandaraRepository = require("../repositories/mandara-repository");

exports.createMandara = (mandaraUrl) => {
  return new Promise(async (resolve, reject) => {
    try {
      const Model = getModel();
      const result = await MandaraRepository.createMandara(Model, mandaraUrl);
      console.log(result);
      if (result) {
        resolve(result);
      }
    } catch (err) {
      reject(err);
    }
  });
};
