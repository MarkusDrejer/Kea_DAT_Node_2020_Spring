
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('users').insert([
        {username: 'user1', password: 'newPass', age: "22", role_id: "1", }
      ]);
};
