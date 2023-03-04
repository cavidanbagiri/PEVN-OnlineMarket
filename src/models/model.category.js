
module.exports = (sequelize, DataTypes, Model) => {

    class CategoryModel extends Model{}

    CategoryModel.init({
        name:{
            type: DataTypes.STRING,
            allowNull: false,
        },
    },
    {
        sequelize,
        modelName: 'categories'
    });

    return CategoryModel;

}

