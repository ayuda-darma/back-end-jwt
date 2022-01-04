const pool = require("../config/database")


module.exports = {
    createArticle: (data, callBack) => {
        pool.query(
          `insert into article(title, contents, limit, offset) 
                    values(?,?,?,?,?,?,?,?,?,?)`,
          [
            data.title,
            data.contents,
            data.limit,
            data.offset,
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getArticleByTitle: (getArticleByTitle, callBack) => {
        pool.query(
          `select * from article where title = ?`,
          [getArticleByTitle],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getArticleById: (id, callBack) => {
        pool.query(
          `select id, title, contents, limit, offset from article where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getArticles: callBack => {
        pool.query(
          `select id, title, contents, limit, offset from article`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      updateArticle: (data, callBack) => {
        pool.query(
          `update article set title=?, contents=?, limit=?, offset=? where id = ?`,
          [
            data.title,
            data.contents,
            data.limit,
            data.offset,
            data.id,
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      deleteArticle: (data, callBack) => {
        pool.query(
          `delete from article where id = ?`,
          [data.id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      }
}