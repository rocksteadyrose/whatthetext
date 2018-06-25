var db = require("../models")

module.exports = (sequelize, DataTypes) => {
    var Reaction =  sequelize.define('Reaction', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false,
        },like: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        },textId: {
            type: DataTypes.INTEGER,
            references: { model: db.Text, key: 'id' },
            allowNull: false
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: db.User, key: 'id' },
            allowNull: false
        },
    },
    {
        freezeTableName: true,
        tableName: 'reaction_tbl',
    }
);

    return Reaction
}