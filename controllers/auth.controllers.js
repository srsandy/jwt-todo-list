import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import * as repository from "../repository/user.repository.js";
import config from "../config.js";

export const signup = async (req, res) => {
  try {
    const { username, password } = req.body;
    if (!(username && password)) {
      res.status(400).send("Bad request");
    }

    const doesUserExist = await repository.doesUserExistsWithProperty(
      "username",
      username
    );
    if (doesUserExist) {
      return res.status(409).send("User already exists");
    }

    const encryptedPassword = await bcrypt.hash(password, 10);
    const newUser = await repository.createUser({
      username,
      password: encryptedPassword,
    });

    delete newUser._doc.password;
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).send("Service Not Available");
  }
};

export const signin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await repository.findUserByProperty("username", username);
    if (!user) {
      return res.status(404).send("User does not exist");
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(401).send("Password incorrect");
    }
    const token = jwt.sign(
      {
        id: user._id,
        username: user.username,
      },
      config.jwtSecret,
      {
        expiresIn: "1d",
      }
    );
    delete user._doc.password;
    res.json({ user, token });
  } catch (error) {
    res.status(400).json({
      error: "Please enter password",
    });
  }
};

export const signout = async (req, res) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  jwt.sign(token, config.jwtSecret, { expiresIn: "1" }, (lg) => {
    if (lg) {
      res.status(200).send("You have been Logged Out");
    }
  });
};
