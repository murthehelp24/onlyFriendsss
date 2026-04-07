// passport.js
import passport from 'passport';
import { Strategy as GoogleStrategy } from 'passport-google-oauth20';
import { Strategy as FacebookStrategy } from 'passport-facebook';

console.log("Checking Client ID:", process.env.GOOGLE_CLIENT_ID)

passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_CLIENT_ID,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    callbackURL: "http://localhost:8888/auth/google/callback"
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

passport.use(new FacebookStrategy({
    clientID: process.env.FACEBOOK_APP_ID,
    clientSecret: process.env.FACEBOOK_APP_SECRET,
    callbackURL: "http://localhost:8888/auth/facebook/callback",
    profileFields: ['id', 'displayName', 'emails']
  },
  (accessToken, refreshToken, profile, done) => {
    return done(null, profile);
  }
));

// ไม่ต้อง export default passport ก็ได้ครับ 
// เพราะ passport เป็น Singleton มันจะจำค่าไว้ในโมดูลของมันเอง
