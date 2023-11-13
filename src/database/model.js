const mongoose = require("mongoose");

const getModel = () => {
  const mandaraScript = mongoose.Schema(
    {
      url: "string",
      createDate: "string",
    },
    { versionKey: false }
  );

  const mandara = mongoose.model("Mandara", mandaraScript);

  return mandara;
};

module.exports = getModel;
