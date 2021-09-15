const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

const SALT_WORK_FACTOR = 10;

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'LeafBuddy',
  })
  .then(() => console.log('Connected to Mongo DB.'))
  .catch((err) => console.log(err));

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  thetoken: { type: String },
});

//Encrypt token prior to saving in the DB
// userSchema.pre('save', function (next) {
//   const salt = bcrypt.genSaltSync(SALT_WORK_FACTOR);
//   const hash = bcrypt.hashSync(this.thetoken, salt);
//   this.thetoken = hash;
//   return next();
// });

module.exports = mongoose.model('User', userSchema);