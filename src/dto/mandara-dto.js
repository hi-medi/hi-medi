class MandaraDTO {
  mandaraImageUrl;
  userName;
  comment;

  constructor(mandaraImageUrl, userName, comment) {
    this.mandaraImageUrl = mandaraImageUrl;
    this.userName = userName;
    this.comment = comment;
  }
}
module.exports = MandaraDTO;
