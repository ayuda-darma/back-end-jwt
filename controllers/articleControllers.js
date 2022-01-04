const {
    getArticleById,
    getArticles,
    updateArticle,
    deleteArticle, 
    createArticle} = require ("../models/article");
const { sign } = require("jsonwebtoken");

module.exports = {
    createArticleList: (req, res) => {
        const body = req.body;
        createArticle(body, (err, results) => {
          if (err) {
            console.log(err);
            return res.status(500).json({
              success: 0,
              message: "Database connection errror"
            });
          }
          return res.status(200).json({
            success: 1,
            data: results
          });
        });
      },
      getArticleById: (req, res) => {
        const id = req.params.id;
        getArticleById(id, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record not Found"
            });
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      getArticles: (req, res) => {
        getArticles((err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            data: results
          });
        });
      },
      updateArticle: (req, res) => {
        const body = req.body;
        updateArticle(body, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          return res.json({
            success: 1,
            message: "updated successfully"
          });
        });
      },
      deleteArticle: (req, res) => {
        const data = req.body;
        deleteArticle(data, (err, results) => {
          if (err) {
            console.log(err);
            return;
          }
          if (!results) {
            return res.json({
              success: 0,
              message: "Record Not Found"
            });
          }
          return res.json({
            success: 1,
            message: "article deleted successfully"
          });
        });
      }
}