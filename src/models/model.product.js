
module.exports = (sequelize, DataTypes, Model) => {

    class ProductModel extends Model{}

    ProductModel.init({
        brand:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        model:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        price:{
            type: DataTypes.FLOAT,
            allowNull: false,
        },
        discount:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        raiting:{
            type: DataTypes.FLOAT,
            allowNull: true,
            defaultValue: 4
        },
        instock:{
            type: DataTypes.INTEGER,
            defaultValue: 11
        },
        image:{
            type: DataTypes.STRING,
            allowNull: true
        }
    },
    {
        sequelize,
        modelName: 'products'
    });

    return ProductModel;

}

