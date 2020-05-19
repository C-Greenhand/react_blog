module.exports = (app) => {
  const { router, controller } = app;
  var adminauth = app.middleware.adminauth();
  router.get("/admin/index", controller.admin.main.index);
  router.post("/admin/checkLogin", controller.admin.main.checkLogin);
  router.get(
    "/admin/getTypeInfo",
    adminauth,
    controller.admin.main.getTypeInfo
  );
  router.post("/admin/addArticle", adminauth, controller.admin.main.addArticle);
  //updateSuccess
  router.post(
    "/admin/updateArticle",
    adminauth,
    controller.admin.main.updateArticle
  );

  //getArticleList
  router.get(
    "/admin/getArticleList",
    adminauth,
    controller.admin.main.getArticleList
  );

  router.get(
    "/admin/delArticle/:id",
    adminauth,
    controller.admin.main.delArticle
  );
};
