module.exports = (app) => {
  const { router, controller } = app;
  router.get("/default/index", controller.default.home.index);
  router.get(
    "/default/getAriticleList",
    controller.default.home.getAriticleList
  );

  router.get(
    "/default/getArticleById/:id",
    controller.default.home.getArticleById
  );

  router.get("/default/getTypeInfo", controller.default.home.getTypeInfo);

  router.get("/default/getListById/:id", controller.default.home.getListById);
};
