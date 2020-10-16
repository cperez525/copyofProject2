module.exports = function(sequelize, Datatypes) {

var Artist = sequelize.define("artist", {
    artist_name: {
        type: Datatypes.STRING,
        notNull: true,
        unique: true,
        len: [1,40]
    },
    artist_phone: {
        type: Datatypes.INTEGER,
        notNull: true,
        isInt: true
    },
    artist_email: {
        type: Datatypes.STRING,
        notNull: true,
        isEmail: true
    },
    artist_bio: {
        type: Datatypes.TEXT,
        max: 200
    }
}, 

{
    freezeTableName: true
});

return Artist;

};
