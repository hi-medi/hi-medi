class PaginationDTO {
  startIndex;
  limit;

  constructor(startIndex, limit) {
    this.startIndex = startIndex;
    this.limit = limit;
  }
}
module.exports = PaginationDTO;
