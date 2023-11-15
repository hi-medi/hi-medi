const { modelNames } = require("mongoose");

exports.createMandara = (Model, mandaraUrl) => {
  return new Promise((resolve, reject) => {
    console.log("야야야양");
    const mandara = new Model({
      url: mandaraUrl,
      createDate: new Date().toISOString().split("T")[0],
    });
    console.log("모델 : ", mandara);
    mandara
      .save()
      .then((data) => {
        console.log("mandara-repository createMandara data : ", data);
        resolve(data);
      })
      .catch((err) => {
        console.error("mandara-repository createMandara err : ", err);
        reject(err);
      });
  });
};

exports.countAllMandaras = (Model) => {
  return new Promise((resolve, reject) => {
    Model.countDocuments()
      .then((data) => {
        console.log("mandara-repository countAllMandaras data : ", data);
        resolve(data);
      })
      .catch((err) => {
        console.error("mandara-repository countAllMandaras err : ", err);
        reject(err);
      });
  });
};

exports.getAllMandaras = (Model, paginationDTO) => {
  return new Promise((resolve, reject) => {
    Model.find()
      .sort({ createDate: -1 })
      .skip(paginationDTO.offset)
      .limit(paginationDTO.limit)
      .then((data) => {
        console.log("mandara-repository getAllMandaras data : ", data);
        resolve(data);
      })
      .catch((err) => {
        console.error("mandara-repository getAllMandaras err : ", err);
        reject(err);
      });
  });
};

exports.getMandaraById = (Model, id) => {
  return new Promise((resolve, reject) => {
    console.log(id);
    Model.find({ _id: id })
      .then((data) => {
        console.log("mandara-repository getMandaraById data : ", data);
        resolve(data);
      })
      .catch((err) => {
        console.error("mandara-repository getMandaraById err : ", err);
        reject(err);
      });
  });
};

exports.deleteMandaraAtMidnight = (Model, target) => {
  return new Promise((resolve, reject) => {
    Model.deleteMany({ createDate: { $lt: target } })
      .then((data) => {
        resolve(data);
      })
      .catch((err) => {
        reject(err);
      });
  });
};
