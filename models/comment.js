var db = require("../models");

module.exports = (sequelize, DataTypes) => {
    var Comment =  sequelize.define('Comment', {
        // id: {
        //     type: DataTypes.INTEGER,
        //     primaryKey: true,
        //     allowNull: false,
        // },
        comment: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },
        userId: {
            type: DataTypes.INTEGER,
            references: { model: db.User, key: 'id' },
            allowNull: true
        },
        textId: {
            type: DataTypes.INTEGER,
            references: { model: db.Text, key: 'id' },
            allowNull: true
        }
    },
    {
        freezeTableName: true,
        tableName: 'comment_tbl',
    }
);

    return Comment
}