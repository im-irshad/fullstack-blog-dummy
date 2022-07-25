module.exports = (sequelize, DataTypes) => {
  const Blogs = sequelize.define("Blogs", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    createdAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: DataTypes.DATE,
      allowNull: false,
    },
  });
  Blogs.associate = (models) => {
    Blogs.hasMany(models.Comments, {
      onDelete: "CASCADE",
    });
  };

  return Blogs;
};
