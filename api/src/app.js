// app.js
import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import passport from 'passport'
import jwt from 'jsonwebtoken'
import './config/passport.js'

const app = express();

app.use(express.json());
app.use(cors({ origin: process.env.CLIENT_URL, credentials: true }));
app.use(passport.initialize());


app.get('/auth/google', passport.authenticate('google', { scope: ['profile', 'email'] }));

app.get('/auth/google/callback', 
  passport.authenticate('google', { session: false }), 
  (req, res) => {
    const token = jwt.sign({ id: req.user.id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.redirect(`${process.env.CLIENT_URL}?token=${token}`);
  }
);

export default app;
