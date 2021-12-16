module.exports = (sequelize, DataTypes) => {
  return sequelize.define('Topic', {
    title: DataTypes.STRING,
    score: DataTypes.INTEGER,
  });
}
