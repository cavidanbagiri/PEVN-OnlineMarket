
module.exports = (sequelize, DataTypes, Model) => {

    class BasketModel extends Model{};

    BasketModel.init({
        
    },{
        sequelize,
        modelName:'baskets'
    })

    return BasketModel;

}
