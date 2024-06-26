const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const connectDB = require('./config/db');

dotenv.config({ path: './config/config.env' });

connectDB();

const transactions = require('./routes/transactions');

const app = express();
var cors = require('cors')

app.use(cors());

app.use(express.json());

app.use(morgan('dev'));

app.use('/api/v1/transactions', transactions);


const PORT = process.env.PORT || 5001;

app.listen(PORT, console.log(`Server running in  port ${PORT}`.yellow.bold));

