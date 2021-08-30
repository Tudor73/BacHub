import GoogleOAuth from "passport-google-oauth20";
import { pool as db } from "./db.js";

const GoogleStrategy =GoogleOAuth.Strategy;

export default function(passport) {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: '/auth/google/callback'
    },
        async (accessToken, refreshToken, profile, done) => {
            try {
                let user = await db.query('SELECT * from users WHERE google_id = $1', [profile.id]);
                if(user.rowCount > 0){
                    done(null, user)
                } 
                else{
                    let result = await db.query('INSERT INTO users (user_name, google_id) VALUES ($1, $2)', 
                        [profile.displayName, profile.id]);
                    done(null, result)
                }

            } catch (err){
                console.log(err);
            }
        }
    ))
    passport.serializeUser(function(user, done) {
        done(null, user);
      });
      
      passport.deserializeUser(function(user, done) {
        done(null, user);
      });
}
