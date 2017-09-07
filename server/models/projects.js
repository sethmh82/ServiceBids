module.exports = function(sequelize, DataTypes) {
  var Projects = sequelize.define("projects", {

    authorID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    projectName: {
        type: DataTypes.STRING,
        allowNull: false
    },        
    category: {
        type: DataTypes.STRING,
        allowNull: false
    },        
    description: {
        type: DataTypes.STRING,
        allowNull: true
    },        
    location: {
        type: DataTypes.STRING,
        allowNull: true
    },        
    comments: {
        type: DataTypes.STRING,
        allowNull: true
    },        
    bids: {
        type: DataTypes.DECIMAL,
        allowNull: true
    },        
    lowestBidder: {
        type: DataTypes.STRING,
        allowNull: true
    },        
    timeEnding: {
        type: DataTypes.TIME,
        allowNull: true
    },
    paymentReceived: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    completed: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false
    },
    completedBy: {
        type: DataTypes.STRING,
        defaultValue: ""
    },        
    rating: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
    }); 

    Projects.associate = function (models) {

        projects.belongsTo(models.users, {
            foreignKey: {
                allowNull: false
            }
        });
    
    };
    return Projects
};
