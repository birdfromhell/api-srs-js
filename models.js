const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING(100),
    unique: true,
  },
  password: {
    type: DataTypes.STRING(100),
  },
  username: {
    type: DataTypes.STRING(100),
    unique: true,
  },
});

const Image = sequelize.define('Image', {
  image_url: {
    type: DataTypes.STRING(500),
    allowNull: false,
  },
  orientation: {
    type: DataTypes.STRING(1),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

const MenuCategory = sequelize.define('MenuCategory', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
  },
  description: {
    type: DataTypes.TEXT,
  },
});

const MenuItem = sequelize.define('MenuItem', {
  title: {
    type: DataTypes.STRING(200),
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  currency: {
    type: DataTypes.STRING(10),
  },
  rating: {
    type: DataTypes.INTEGER,
  },
  text: {
    type: DataTypes.TEXT,
  },
  image_url: {
    type: DataTypes.STRING(500),
  },
  badge: {
    type: DataTypes.STRING(200),
  },
});

const CategoryFaq = sequelize.define('CategoryFaq', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

const FAQ = sequelize.define('FAQ', {
  title: {
    type: DataTypes.STRING(255),
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  },
});

const Review = sequelize.define('Review', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  image: {
    type: DataTypes.STRING(100),
    allowNull: false,
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

// Define relationships
User.hasMany(Image);
Image.belongsTo(User);

MenuCategory.hasMany(MenuItem);
MenuItem.belongsTo(MenuCategory);

CategoryFaq.hasMany(FAQ);
FAQ.belongsTo(CategoryFaq);

module.exports = {
  User,
  Image,
  MenuCategory,
  MenuItem,
  CategoryFaq,
  FAQ,
  Review,
};

