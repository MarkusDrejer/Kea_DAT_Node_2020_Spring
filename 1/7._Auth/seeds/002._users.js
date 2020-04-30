
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('roles').select().then(roles => {
        return knex('users').insert([
          {username: 'user1', password: 'newPass', role_id: roles.find(role => role.role === 'ADMIN').id }
        ]);
      });
};
