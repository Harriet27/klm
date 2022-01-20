const db = require("../config/database");

exports.listAllProducts = async (req, res) => {
    const response = await db.query('SELECT * FROM products ORDER BY product_name ASC');
    res.status(200).send({
        status: 200,
        message: "Success",
        data: response.rows,
    });
};

exports.findProductById = async (req, res) => {
    const product_id = req.params.id;
    const response = await db.query('SELECT * FROM products WHERE product_id = $1', [product_id]);
    res.status(200).send({
        status: 200,
        message: `Success get product with id of ${product_id}`,
        data: response.rows,
    });
};

exports.createProduct = async (req, res) => {
    const { product_name, quantity, price } = req.body;
    const { rows } = await db.query(
        "INSERT INTO products (product_name, quantity, price) VALUES ($1, $2, $3)",
        [product_name, quantity, price]
    );
    res.status(201).send({
        message: "Product added successfully!",
        body: {
            product: {
                product_name,
                quantity,
                price,
            },
        },
    });
};

exports.updateProductById = async (req, res) => {
    const product_id = parseInt(req.params.id);
    const { product_name, quantity, price } = req.body;
    const response = await db.query(
      "UPDATE products SET product_name = $1, quantity = $2, price = $3 WHERE product_id = $4",
      [product_name, quantity, price, product_id]
    ); 
    res.status(200).send({
        message: "Product Updated Successfully!",
    });
};

exports.deleteProductById = async (req, res) => {
    const product_id = parseInt(req.params.id);
    await db.query('DELETE FROM products WHERE product_id = $1', [product_id]);
    res.status(200).send({
        message: `Product id ${product_id} deleted successfully!`,
    });
};
