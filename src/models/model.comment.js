
module.exports = (sequelize, DataTypes, Model) => {

    class CommentModel extends Model{};

    CommentModel.init({

        comment_text: {
            type: DataTypes.TEXT,
            allowNull: false,
        }

    },{
        sequelize,
        modelName: 'comments'
    });

    return CommentModel;

}   
