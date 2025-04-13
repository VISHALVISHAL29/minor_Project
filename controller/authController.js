const { createUser, findUser } = require("../model/userModel");
const bcrypt = require("bcrypt");
const { validationResult } = require("express-validator");
const jwt = require("jsonwebtoken");
const { v4: uuidv4 } = require("uuid");

const signup = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { fname, lname, number, email, password, address } = req.body;
    const new_Id = uuidv4();


    // Hash Password
    const salt = await bcrypt.genSalt(5);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Save User
    const user = await createUser(new_Id, fname, lname, number, email, hashedPassword, address);

    // Generate Token
    const token = jwt.sign({ Id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "72h" });

    res.status(201).json({ message: "User Created Successfully", userId: user.id, token });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const login = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    const user = await findUser(email);

    if (!user) {
      return res.status(404).json({ message: "User Not Found" });
    }

    // **Fix:** Await bcrypt.compare()
    const isSame = await bcrypt.compare(password, user.password);

    if (isSame) {
      const token = jwt.sign({ Id: user.id }, process.env.JWT_SECRET_KEY, { expiresIn: "72h" });
      return res.status(200).json({ message: "Authentication Successful", userId: user.id, token });
    } else {
      return res.status(401).json({ message: "Incorrect Password" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

module.exports = { signup, login };
