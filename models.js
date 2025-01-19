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
}, {
  tableName: 'user',
  freezeTableName: true,
  timestamps: true
});

const Image = sequelize.define('Image', {
  image_url: DataTypes.STRING(500),
  orientation: DataTypes.STRING(1),
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW,
  }
}, {
  tableName: 'image',
  freezeTableName: true
});

const MenuCategory = sequelize.define('MenuCategory', {
  name: DataTypes.STRING(100),
  slug: {
    type: DataTypes.STRING(100),
    unique: true
  },
  description: DataTypes.TEXT
}, {
  tableName: 'menu_category',
  freezeTableName: true
});

const MenuItem = sequelize.define('MenuItem', {
  title: DataTypes.STRING(200),
  price: DataTypes.FLOAT,
  currency: DataTypes.STRING(10),
  rating: DataTypes.INTEGER,
  text: DataTypes.TEXT,
  image_url: DataTypes.STRING(500),
  badge: DataTypes.STRING(200)
}, {
  tableName: 'menu_item',
  freezeTableName: true
});

const CategoryFaq = sequelize.define('CategoryFaq', {
  name: DataTypes.STRING(100),
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'category_faq',
  freezeTableName: true
});

const FAQ = sequelize.define('FAQ', {
  title: DataTypes.STRING(255),
  text: DataTypes.TEXT,
  created_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updated_at: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}, {
  tableName: 'faq',
  freezeTableName: true
});

const Review = sequelize.define('Review', {
  title: DataTypes.STRING(100),
  name: DataTypes.STRING(50),
  rating: DataTypes.INTEGER,
  image: DataTypes.STRING(100),
  text: DataTypes.TEXT
}, {
  tableName: 'review',
  freezeTableName: true
});

// Relationships
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
  sequelize
};