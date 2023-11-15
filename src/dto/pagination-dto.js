class PaginationDTO {
  offset;
  limit;

  constructor(offset, limit) {
    this.offset = offset;
    this.limit = limit;
  }
}
module.exports = PaginationDTO;
