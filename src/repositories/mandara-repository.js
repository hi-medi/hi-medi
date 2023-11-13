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
        console.log(data);
        resolve(data);
      })
      .catch((err) => {
        console.error(err);
        reject(err);
      });
  });
};
