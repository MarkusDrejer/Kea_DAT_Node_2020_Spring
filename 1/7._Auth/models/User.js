const { Model } = require('objection');
const role = require('./Role.js');

class User extends Model {
    static get tableName() {
        return 'users';
    }

    static relationMappings = {
        owner: {
            relation: Model.BelongsToOneRelation,
            modelClass: role,
            join: {
                from: 'users.roleId',
                to: 'role.id'
            }
        }
    };
}

module.exports = User;