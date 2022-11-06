const client = require("../index");

const getBrewerByUserID = (userID) => {
  return client
    .query("SELECT * FROM brewers_img WHERE user_id = $1", [userID])
    .then((brewer) => {
      console.log('brewer.rows[0]:', brewer.rows[0])
      return brewer.rows[0];
    });
};

const editBrewer = (brewer) => {
  return client
    .query(
      `INSERT INTO brewers_img 
      (user_id, brewery, street_number, street, city, state_prov, post_zip, website, phone, filename, filepath, mimetype, size) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13) RETURNING *`,
      [
        brewer.user_id,
        brewer.brewery,
        brewer.street_number,
        brewer.street,
        brewer.city,
        brewer.state_prov,
        brewer.post_zip,
        brewer.website,
        brewer.phone,
        brewer.filename, 
        brewer.filepath,
        brewer.mimetype, 
        brewer.size
      ]
    )
    .then((brewers) => {
      return brewers.rows;
    });
};


// const editBrewer = (brewer) => {
//   return client
//     .query(
//       `INSERT INTO brewers 
//       (brewery, user_id, street_number, street, city, state_prov, post_zip, website, phone) 
//       values($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
//       [brewer.brewery, brewer.user_id, brewer.street_number, brewer.street, brewer.city, brewer.state_prov, brewer.post_zip, brewer.website, brewer.phone]
//     )
//     .then((brewers) => {
//       return brewers.rows;
//     });
// };

module.exports = {
  editBrewer,
  getBrewerByUserID,
};
