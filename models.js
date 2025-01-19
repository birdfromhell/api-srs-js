const { DataTypes } = require('sequelize');
const sequelize = require('./database');

const User = sequelize.define('User', {
  email: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  username: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  }
}, {
  tableName: 'user',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const Image = sequelize.define('Image', {
  image_url: {
    type: DataTypes.STRING(500),
    allowNull: false
  },
  orientation: {
    type: DataTypes.STRING(1),
    allowNull: true
  }
}, {
  tableName: 'image',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const MenuCategory = sequelize.define('MenuCategory', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  slug: {
    type: DataTypes.STRING(100),
    unique: true,
    allowNull: false
  },
  description: {
    type: DataTypes.TEXT,
    allowNull: true
  }
}, {
  tableName: 'menu_category',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const MenuItem = sequelize.define('MenuItem', {
  title: {
    type: DataTypes.STRING(200),
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  },
  currency: {
    type: DataTypes.STRING(10),
    defaultValue: 'USD'
  },
  rating: {
    type: DataTypes.INTEGER,
    validate: {
      min: 0,
      max: 5
    }
  },
  text: DataTypes.TEXT,
  image_url: DataTypes.STRING(500),
  badge: DataTypes.STRING(200)
}, {
  tableName: 'menu_item',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const CategoryFaq = sequelize.define('CategoryFaq', {
  name: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  tableName: 'category_faq',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const FAQ = sequelize.define('FAQ', {
  title: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'faq',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

const Review = sequelize.define('Review', {
  title: {
    type: DataTypes.STRING(100),
    allowNull: false
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false
  },
  rating: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      min: 1,
      max: 5
    }
  },
  image: DataTypes.STRING(100),
  text: {
    type: DataTypes.TEXT,
    allowNull: false
  }
}, {
  tableName: 'review',
  freezeTableName: true,
  underscored: true,
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: 'updated_at'
});

// Define Relationships
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