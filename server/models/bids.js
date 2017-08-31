module.exports = function(sequelize, DataTypes) {
    var bids = sequelize.define("bids", {
        currentBid: {
            type: DataTypes.DECIMAL,
            allowNull: true
        }
    });

    bids.associate = function (models) {

    bids.belongsTo(models.projects, {
       foreignKey: {
         allowNull: false
       }
    });
    

    bids.belongsTo(models.users, {
       foreignKey: {
         allowNull: false
       }
    });
    
};

    return bids
};