const getModel = require("../database/model");
const MandaraRepository = require("../repositories/mandara-repository");
const HttpStatus = require("http-status");
const Model = getModel();
const minusMonth = 1;

exports.createMandara = (mandaraUrl) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await MandaraRepository.createMandara(Model, mandaraUrl);
      console.log(result);
      if (result) {
        resolve(result);
      }
      if (!result) {
        const error = new Error("게시글 생성에 실패하였습니다.");
        error.status = HttpStatus.BAD_REQUEST;
        reject(error);
      }
    } catch (err) {
      reject(err);
    }
  });
};

exports.countAllMandaras = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await MandaraRepository.countAllMandaras(Model);
      console.log("mandara-service countAllMandaras 결과 : ", result);
      if (result) {
        resolve(result);
      }
      if (!result) {
        const error = new Error("총 게시글 수 조회에 실패하였습니다.");
        error.status = HttpStatus.INTERNAL_SERVER_ERROR;
        reject(error);
      }
    } catch (err) {
      reject(err);
    }
  });
};

exports.getAllMandaras = (paginationDTO) => {
  return new Promise(async (resolve, reject) => {
    try {
      console.log("Afdafsdfasd");
      const result = await MandaraRepository.getAllMandaras(
        Model,
        paginationDTO
      );
      if (result) {
        resolve(result);
      }
      if (!result) {
        const error = new Error("만다라 전체 조회에 실패하였습니다.");
        error.status = HttpStatus.BAD_REQUEST;
        reject(error);
      }
    } catch (err) {
      reject(err);
    }
  });
};

exports.getMandaraById = (id) => {
  return new Promise(async (resolve, reject) => {
    try {
      const result = await MandaraRepository.getMandaraById(Model, id);
      if (result) {
        resolve(result);
      }
      if (!result) {
        const error = new Error("만다라 조회에 실패하였습니다.");
        error.status = HttpStatus.BAD_REQUEST;
        reject(err);
      }
    } catch (err) {
      reject(err);
    }
  });
};

exports.deleteMandaraAtMidnight = () => {
  return new Promise(async (resolve, reject) => {
    try {
      const date = new Date();
      date.setDate(data.getMonth() - minusMonth);
      const target = date.toISOString().split("T")[0];

      const result = await MandaraRepository.deleteMandaraAtMidnight(
        Model,
        target
      );
      if (result) {
        resolve(result);
      }
      if (!result) {
        const error = new Error("오래된 만다라가 존재하지 않습니다.");
        reject(error);
      }
    } catch (err) {
      reject(err);
    }
  });
};
