
exports.seed = function(knex) {
      // Inserts seed entries
      return knex('roles').select().then(roles => {
        return knex('users').insert([
          {username: 'user1', password: '$2b$12$eCjB/YYU2gGC4Z96FcqTPOMoMq9wgsd/gYn5kdkm39f341S5cyr4u', role_id: roles.find(role => role.role === 'ADMIN').id }
        ]);
      });
};
