var db = require("../models");

module.exports = (sequelize, DataTypes) => {
    var Text =  sequelize.define('Text', {
        image: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: { notEmpty: true }
        },caption: {
            type: DataTypes.STRING,
            allowNull: true,
            validate: { notEmpty: true }
        },ew: {
            type: DataTypes.BOOLEAN,
            default: 0
        },bff: {
            type: DataTypes.BOOLEAN,
            default: 0
        },lol: {
            type: DataTypes.BOOLEAN,
            default: 0
        },nsfw: {
            type: DataTypes.BOOLEAN,
            default: 0
        },fail: {
            type: DataTypes.BOOLEAN,
            default: 0
        },wtfam: {
            type: DataTypes.BOOLEAN,
            default: 0
        },userId: {
            type: DataTypes.INTEGER,
            references: { model: db.User, key: 'id' },
            allowNull: false
        },
    },
    {
        // timestamps: false,
        freezeTableName: true,
        tableName: 'text_tbl',
    });

    Text.associate = (models) => {
        Text.hasMany(models.Comment, { foreignKey: 'textId', sourceKey: 'id' })
        // hasMany association: foreign key (textId) stored on target model (Comment)
    };
    return Text
}
