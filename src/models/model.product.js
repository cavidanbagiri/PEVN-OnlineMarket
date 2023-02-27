
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
            defaultValue: 0
        },
        instock:{
            type: DataTypes.INTEGER,
            defaultValue: 0
        }
    },
    {
        sequelize,
        modelName: 'products'
    });

    return ProductModel;

}

