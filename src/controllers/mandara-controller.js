const MandaraService = require("../services/mandara-service");
const HttpStatus = require("http-status");

exports.createMandara = async (req, res, next) => {
  try {
    // const mandaraImageUrl = req.file.path;
    console.log("야미");
    const mandaraImageUrl = req.body.url;
    const result = await MandaraService.createMandara(mandaraImageUrl);
    console.log("mandara controller createMandara 결과 : ", result);
    res.status(HttpStatus.CREATED).send({
      status: HttpStatus.CREATED,
      message: "만다라 사진 저장에 성공하였습니다.",
      data: result,
    });
  } catch (err) {
    err.links = [
      {
        rel: "createMandara",
        method: "POST",
        href: `api/v1/mandara`,
      },
    ];
    next(err);
  }
};

exports.getAllMandaras = async (req, res, next) => {
  try {
    const result = await MandaraService.getAllMandaras();
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "만다라 전체 조회에 성공하였습니다.",
      data: result,
    });
  } catch (err) {
    err.links = [
      {
        rel: "getAllMandaras",
        method: "GET",
        href: "api/v1/mandara/",
      },
    ];
    next(err);
  }
};
