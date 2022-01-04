const { createUser,
    login,
    getUserByUserId,
    getUsers,
    updateUsers,
    deleteUser } = require("../controllers/userControllers");

const { createArticleList,
        getArticles,
        getArticleById,
        updateArticle,
        deleteArticle } = require("../controllers/articleControllers");

const router = require("express").Router();
const { checkToken } = require("../auth/tokenValidation");

router.get("/users", checkToken, getUsers);
router.post("/users", createUser);
router.get("/users/:id", checkToken, getUserByUserId);
router.patch("/users", checkToken, updateUsers);
router.delete("/users", checkToken, deleteUser);
router.post("/users/login", login);

router.get("/articles", checkToken, getArticles);
router.post("/articles", checkToken, createArticleList);
router.get("/articles/:id", checkToken, getArticleById);
router.patch("/articles", checkToken, updateArticle);
router.delete("/articles", checkToken, deleteArticle);

module.exports = router;