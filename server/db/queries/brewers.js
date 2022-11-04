const client = require("../index");

const editBrewer = (brewer) => {
  return client
    .query(
      `INSERT INTO brewers 
      (brewery, user_id, street_number, street, city, state_prov, post_zip, website, phone) 
      values($1,$2,$3,$4,$5,$6,$7,$8,$9) RETURNING *`,
      [brewer.brewery, brewer.user_id, brewer.street_number, brewer.street, brewer.city, brewer.state_prov, brewer.post_zip, brewer.website, brewer.phone]
    )
    .then((brewers) => {
      return brewers.rows;
    });
};

module.exports = {
  editBrewer,
};



