module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('user', {
      name: DataTypes.STRING,
      home_number: DataTypes.INTEGER,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
    });
  
    return User;
  }