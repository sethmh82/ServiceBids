module.exports = function(sequelize, DataTypes) {
  var users = sequelize.define("users", {
    userID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
    }, 
    username: {
        type: DataTypes.STRING(15),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    email: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    location: {
        type: DataTypes.STRING,
        allowNull: false
    },
    servicesList: {
        type: DataTypes.STRING,
        allowNull: false
    },
    about: {
        type: DataTypes.STRING,
        allowNull: false
    },
    myRating: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    myReviews: {
        type: DataTypes.STRING,
        allowNull: false
    },
  }); 
// Class Method
users.associate = function (models) {

   users.hasMany(models.Post, {
    onDelete: "cascade"
});
    
};
  return Users
}
