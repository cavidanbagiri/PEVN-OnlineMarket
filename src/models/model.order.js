
module.exports = (sequelize, DataTypes, Model) => {

    class OrderModel extends Model{};

    OrderModel.init({

    },{
        sequelize,
        modelName:'orders'
    })

    return OrderModel;

}
