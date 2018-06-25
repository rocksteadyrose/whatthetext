var db = require("../models")

module.exports = (sequelize, DataTypes) => {
    const userReactText = sequelize.define('userReactText', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            allowNull: false
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: db.User, key: 'id' },
            allowNull: false
        },textId: {
            type: DataTypes.INTEGER,
            references: { model: db.Text, key: 'id' },
            allowNull: false
        }
    })
}