

module.exports = (sequelize, DataTypes, Model) => {

    class RaitingModel extends Model{};

    RaitingModel.init({
        raiting: {
            type: DataTypes.INTEGER,
            allowNull: true 
        }
    },{
        sequelize,
        modelName: 'raitings'
    });

    return RaitingModel;

}