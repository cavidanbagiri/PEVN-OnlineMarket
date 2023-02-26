

module.exports = (sequelize, DataTypes, Model) => {

    class UserModel extends Model{}

    UserModel.init({
        username:{
            type: DataTypes.STRING,
            allowNull: true,
            defaultValue: "Unknown"
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'users'
    })

    return UserModel;

}

