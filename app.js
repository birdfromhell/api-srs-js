/**
 * @swagger
 * tags:
 *   name: Read-only Restaurant API
 *   description: API for retrieving restaurant data (read-only)
 */
const express = require('express');
const { Op } = require('sequelize');
const { User, Image, MenuCategory, MenuItem, CategoryFaq, FAQ, Review } = require('./models');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./swagger');
const sequelize = require('./database');

const app = express();
app.use(express.json());
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Retrieve a list of users
 *     description: Retrieve a list of users. This is a read-only endpoint.
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: A list of users
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */
app.get('/users', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /users/{userId}:
 *   get:
 *     summary: Retrieve a single user
 *     description: Retrieve a single user. This is a read-only endpoint.
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single user
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: User not found
 */
app.get('/users/:userId', async (req, res) => {
  try {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /images:
 *   get:
 *     summary: Retrieve a list of images
 *     description: Retrieve a list of images. This is a read-only endpoint.
 *     tags: [Images]
 *     responses:
 *       200:
 *         description: A list of images
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Image'
 */
app.get('/images', async (req, res) => {
  try {
    const images = await Image.findAll();
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /images/{imageId}:
 *   get:
 *     summary: Retrieve a single image
 *     description: Retrieve a single image. This is a read-only endpoint.
 *     tags: [Images]
 *     parameters:
 *       - in: path
 *         name: imageId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single image
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Image'
 *       404:
 *         description: Image not found
 */
app.get('/images/:imageId', async (req, res) => {
  try {
    const image = await Image.findByPk(req.params.imageId);
    if (!image) {
      return res.status(404).json({ error: 'Image not found' });
    }
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /menu-categories:
 *   get:
 *     summary: Retrieve a list of menu categories
 *     description: Retrieve a list of menu categories. This is a read-only endpoint.
 *     tags: [Menu Categories]
 *     responses:
 *       200:
 *         description: A list of menu categories
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MenuCategory'
 */
app.get('/menu-categories', async (req, res) => {
  try {
    const categories = await MenuCategory.findAll();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /menu-categories/{categoryId}:
 *   get:
 *     summary: Retrieve a single menu category
 *     description: Retrieve a single menu category. This is a read-only endpoint.
 *     tags: [Menu Categories]
 *     parameters:
 *       - in: path
 *         name: categoryId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single menu category
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuCategory'
 *       404:
 *         description: Menu category not found
 */
app.get('/menu-categories/:categoryId', async (req, res) => {
  try {
    const category = await MenuCategory.findByPk(req.params.categoryId);
    if (!category) {
      return res.status(404).json({ error: 'Menu category not found' });
    }
    res.json(category);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /menu-items:
 *   get:
 *     summary: Retrieve a list of menu items
 *     description: Retrieve a list of menu items. This is a read-only endpoint.
 *     tags: [Menu Items]
 *     responses:
 *       200:
 *         description: A list of menu items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/MenuItem'
 */
app.get('/menu-items', async (req, res) => {
  try {
    const items = await MenuItem.findAll();
    res.json(items);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /menu-items/{itemId}:
 *   get:
 *     summary: Retrieve a single menu item
 *     description: Retrieve a single menu item. This is a read-only endpoint.
 *     tags: [Menu Items]
 *     parameters:
 *       - in: path
 *         name: itemId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single menu item
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/MenuItem'
 *       404:
 *         description: Menu item not found
 */
app.get('/menu-items/:itemId', async (req, res) => {
  try {
    const item = await MenuItem.findByPk(req.params.itemId);
    if (!item) {
      return res.status(404).json({ error: 'Menu item not found' });
    }
    res.json(item);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /faqs:
 *   get:
 *     summary: Retrieve a list of FAQs grouped by category
 *     description: Retrieve a list of FAQs grouped by category. This is a read-only endpoint.
 *     tags: [FAQs]
 *     responses:
 *       200:
 *         description: A list of FAQs grouped by category
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/FAQCategory'
 */
app.get('/faqs', async (req, res) => {
  try {
    const faqs = await CategoryFaq.findAll({
      include: [
        {
          model: FAQ,
          attributes: ['title', 'text'],
        },
      ],
    });

    const response = faqs.map((category) => ({
      name: category.name,
      items: category.FAQs.map((faq) => ({
        title: faq.title,
        text: faq.text,
      })),
    }));

    res.json(response);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Retrieve a list of reviews
 *     description: Retrieve a list of reviews. This is a read-only endpoint.
 *     tags: [Reviews]
 *     responses:
 *       200:
 *         description: A list of reviews
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Review'
 */
app.get('/reviews', async (req, res) => {
  try {
    const reviews = await Review.findAll();
    res.json(reviews);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

/**
 * @swagger
 * /reviews/{reviewId}:
 *   get:
 *     summary: Retrieve a single review
 *     description: Retrieve a single review. This is a read-only endpoint.
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: reviewId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A single review
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Review'
 *       404:
 *         description: Review not found
 */
app.get('/reviews/:reviewId', async (req, res) => {
  try {
    const review = await Review.findByPk(req.params.reviewId);
    if (!review) {
      return res.status(404).json({ error: 'Review not found' });
    }
    res.json(review);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Read-only Restaurant API server is running on port ${PORT}`);
  console.log(`Swagger documentation available at http://localhost:${PORT}/api-docs`);
});

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         email:
 *           type: string
 *         username:
 *           type: string
 *     Image:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         image_url:
 *           type: string
 *         orientation:
 *           type: string
 *         created_at:
 *           type: string
 *           format: date-time
 *     MenuCategory:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         name:
 *           type: string
 *         slug:
 *           type: string
 *         description:
 *           type: string
 *     MenuItem:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         price:
 *           type: number
 *         currency:
 *           type: string
 *         rating:
 *           type: integer
 *         text:
 *           type: string
 *         image_url:
 *           type: string
 *         badge:
 *           type: string
 *         category_id:
 *           type: integer
 *     FAQCategory:
 *       type: object
 *       properties:
 *         name:
 *           type: string
 *         items:
 *           type: array
 *           items:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *               text:
 *                 type: string
 *     Review:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         name:
 *           type: string
 *         rating:
 *           type: integer
 *         image:
 *           type: string
 *         text:
 *           type: string
 */
app.get('/test-db', async (req, res) => {
  try {
    await sequelize.authenticate();
    res.json({ 
      message: 'Database connection successful',
      status: 'connected'
    });
  } catch (error) {
    res.status(500).json({ 
      message: 'Unable to connect to database',
      error: error.message,
      status: 'disconnected'
    });
  }
});
