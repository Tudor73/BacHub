import { pool as db } from "../config/db.js";
import pkg from "google-auth-library";
import  Jwt from "jsonwebtoken";
import passport from "../config/passport.js";

const { OAuth2Client } = pkg;

const client = new OAuth2Client("976384778684-2a9u2nmogfm5pafg3ajguc9c53bv9vli.apps.googleusercontent.com");
export const googleLogin = (req, res) => {
    const {tokenId} = req.body;
    client.verifyIdToken({idToken: tokenId, audience :"976384778684-2a9u2nmogfm5pafg3ajguc9c53bv9vli.apps.googleusercontent.com"}).then(async (response) => {

        const {email_verified, name, email } = response.payload;
        if(email_verified){
            try {
                const results =  await db.query("select * from users where email = $1",[email]);
                if (!results.rowCount){
                    const insert = await db.query("INSERT INTO users (user_name, email) values($1, $2)", [name,email ]);
                }
                const user = {name: name, email: email};
                const accessToken = Jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
                res.json({accessToken: accessToken, name: name,});

            } catch(err){
                console.log(err);
            }
        }
    });

}