
module.exports = (sequelize, DataTypes, Model) => {

    class FavoriteModel extends Model{};

    FavoriteModel.init({
        
    },{
        sequelize,
        modelName:'favorites'
    })

    return FavoriteModel;

}
