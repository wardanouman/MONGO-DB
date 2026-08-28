import express from "express";

const app = express();
import cors from "cors";
app.use(cors({
  origin: "http://localhost:5173",
  methods: ["GET", "POST", "PUT", "DELETE"],
}));
app.use(express.json());


let products = [
  {
    id: 1,
    name: "vivo x300 pro",
    price: 350000,
    description: "This is a mobile phone",
    imageUrl: "https://www.vivo.com/pk/products/x300-pro",
  },
  {
    id: 2,
    name: "vivo v60",
    price: 120000,
    description: "This is a mobile phone",
    imageUrl:
     "https ://www.lahorecentre.com/products/vivo-v60-256gb-storage-12gb-ram?srsltid=AfmBOopL6nzjwiaj-IMFd-V-0-axlenP88PlOq4uFIFZhHP1583UqqwKhttps://www.lahorecentre.com/products/vivo-v60-256gb-storage-12gb-ram?srsltid=AfmBOopL6nzjwiaj-IMFd-V-0-axlenP88PlOq4uFIFZhHP1583UqqwK", 
  },
];
app.get("/products", (req, res) => {
  res.json(products);
}); 

app.get("/", (req, res) => {
  res.json("This is Get API");
});

app.post("/products", (req, res) => {
  const newProduct = req.body;
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.delete("/products/:id", (req, res) => {
  const productId = parseInt(req.params.id);
  products = products.filter((product) => product.id !== productId);
  res.status(204).send();

}); 

app.put("/products/:id", (req, res) => {
  const {id} = req.params;
  const updatedProduct = req.body;
  const index = products.findIndex((product) => product.id === parseInt(id));
  if (index !== -1) {
    products[index] = { ...products[index], ...updatedProduct };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: "Product not found" });
  }
});



app.listen(5050, () => {
  console.log("Server is running on port 5050");
}); 
app.get("/about", (req, res) => {
  res.json("This is About API");
});