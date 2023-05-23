'use strict'

module.exports = (sequelizeDatabase, DataTypes) => {
    return sequelizeDatabase.define('users', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    });
};
