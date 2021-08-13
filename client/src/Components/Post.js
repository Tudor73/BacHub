import React from "react";
import styles from "./Post.module.css";

export default function Post() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.postContainer}>
                <div className={styles.postHeader}>
                    <h3>categorie</h3>
                    <span>posted by user. 2 months ago</span>
                </div>
                <div className={styles.postBody}>
                    <h1>This is my first post</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis, voluptatibus. Odio possimus ut alias necessitatibus ad,
                        quo magni doloribus blanditiis facere impedit? Accusamus eveniet ad, odio consectetur consequuntur aut dolore modi aliquam voluptas </p>
                </div>
                <div className={styles.postFooter}>
                    <span>Comments(10)</span>
                    <a>Read Post</a>
                </div>
            </div>
        </div>
    )
}
