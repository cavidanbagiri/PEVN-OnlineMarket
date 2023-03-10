
module.exports = (sequelize, DataTypes, Model) => {

    class CommentModel extends Model{};

    CommentModel.init({

        id:{
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    },{
        sequelize,
        modelName: 'user_comments'
    });

    return CommentModel;

}   
