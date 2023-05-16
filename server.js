const app = require('./index');
const mongoose = require('mongoose');
const { DB_HOST, PORT = 8080 } = process.env;

mongoose
  .connect(DB_HOST)
  .then(() => {
    console.log('Connection to the database was successful');
    app.listen(PORT, () => {
      console.log(`Server is run on PORT: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err.message);
    process.exit(1);
  });
// const cors = require('cors');

// const app = express();

// app.use(cors());

// app.get('/', (req, res) => {

// })
