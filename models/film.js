module.exports = (sequelize, DataTypes) => {
    const Hollywood = sequelize.define("Hollywood", {
        ID:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        nama_film: {
            type: DataTypes.STRING,
            allowNull: false    
        },
        deskripsi:{
            type: DataTypes.STRING,
            allowNull: false
        },
        sutradara:{
            type: DataTypes.STRING,
            allowNull: false
        },
        tahun_terbit:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        genre:{
            type: DataTypes.STRING,
            allowNull: false
        }
    });

    return Hollywood;
}