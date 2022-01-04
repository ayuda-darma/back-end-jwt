const pool = require("../config/database")


module.exports = {
    create: (data, callBack) => {
        pool.query(
          `insert into registration(username, password, firstName, lastName, telephone, 
            profile_image, address, city, province, country) 
                    values(?,?,?,?,?,?,?,?,?,?)`,
          [
            data.username,
            data.password,
            data.first_name,
            data.last_name,
            data.telephone,
            data.profile_image,
            data.address,
            data.city,
            data.province,
            data.country,
          ],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      getUserByUsername: (getUserByUsername, callBack) => {
        pool.query(
          `select * from registration where username = ?`,
          [getUserByUsername],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUserByUserId: (id, callBack) => {
        pool.query(
          `select id, username, password, firstName, lastName, telephone, 
          profile_image, address, city, province, country from registration where id = ?`,
          [id],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results[0]);
          }
        );
      },
      getUsers: callBack => {
        pool.query(
          `select id, username, password, firstName, lastName, telephone, 
          profile_image, address, city, province, country from registration`,
          [],
          (error, results, fields) => {
            if (error) {
              callBack(error);
            }
            return callBack(null, results);
          }
        );
      },
      updateUser: (data, callBack) => {
        pool.query(
          `update registration set username=?, password=?, firstName=?, lastName=?, telephone=?, 
          profile_image=?, address=?, city=?, province=?, country=? where id = ?`,
          [
            data.username,
            data.password,
            data.first_name,
            data.last_name,
            data.telephone,
            data.profile_image,
            data.address,
            data.city,
            data.province,
            data.country,
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
      deleteUser: (data, callBack) => {
        pool.query(
          `delete from registration where id = ?`,
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