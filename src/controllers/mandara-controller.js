const MandaraService = require("../services/mandara-service");
const PaginationDTO = require("../dto/pagination-dto");
const MandaraDTO = require("../dto/mandara-dto");
const HttpStatus = require("http-status");

exports.createMandara = async (req, res, next) => {
  try {
    console.log("res.file", res.file);
    console.log("mandara createMandara 진입!", req.body);
    const mandaraImageUrl = req.file.location;
    const userName = req.body.userName;
    const comment = req.body.comment;
    const mandaraDTO = new MandaraDTO(mandaraImageUrl, userName, comment);
    const result = await MandaraService.createMandara(mandaraDTO);
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
    // Pagination
    const currentPage = req.query.currentPage; // 1 2 3
    const limit = parseInt(req.query.limit) || 10; // 페이지 내 게시물 수
    const offset = (currentPage - 1) * limit; // 0 10 20
    const startIndex = offset + 1; // 1 11 21
    const endIndex = offset + limit; // 10 20 30
    const totalPosts = await MandaraService.countAllMandaras();
    const totalPages = Math.ceil(totalPosts / limit);

    const paginationDTO = new PaginationDTO(offset, limit);

    // 응답
    const result = await MandaraService.getAllMandaras(paginationDTO);
    console.log("mandara-controller getAllMandaras result : ", result);
    let response = {};
    response.startIndex = startIndex;
    response.endIndex = endIndex;
    response.totalPages = totalPages;
    response.result = result;

    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "만다라 전체 조회에 성공하였습니다.",
      data: response,
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

exports.getMandaraById = async (req, res, next) => {
  try {
    const id = req.params.id;
    const result = await MandaraService.getMandaraById(id);
    res.status(HttpStatus.OK).send({
      status: HttpStatus.OK,
      message: "만다라 조회에 성공하였습니다.",
      data: result[0],
    });
  } catch (err) {
    err.links = [
      {
        rel: "getMandaraById",
        method: "GET",
        href: `api/v1/mandara/${id}`,
      },
    ];
    next(err);
  }
};

exports.deleteMandaraAtMidnight = async () => {
  try {
    const result = await MandaraService.deleteMandaraAtMidnight();
    console.log(result);
  } catch (err) {
    console.error(err);
  }
};
