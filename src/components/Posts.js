import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import Header from './Header';
import Post from './Post';
import SavedPost from './SavedPost';




const Posts = () => {
    const [savedPosts, setSavedPosts] = useState([]);
    const [otherPosts, setOtherPosts] = useState([]);


    // LOAD POSTS WHEN PAGE LOADS
    useEffect(() => {
        async function load() {
            await axios.get('https://jsonplaceholder.typicode.com/posts')
                .then((res) => {
                    setSavedPosts([
                        ...savedPosts,
                        ...res.data.filter(post => post.userId == 1)
                    ]);

                    setOtherPosts([
                        ...otherPosts,
                        ...res.data.filter(post => post.userId != 1)
                    ]);
                })
                .catch((err) => { console.log(err) });
        }
        load();
    }, []);


    return (
        <div>
            <Header />
            <div className="grid-container" id="grid-container">
                <div>
                    <h3>Saved Posts</h3>
                    <div className="saved-posts">
                        {savedPosts.map((post) => {
                            return <SavedPost title={post['title']} content={post['body']} index={post['id']} />;
                        })
                        }
                    </div>
                </div>

                <div>
                    <h3>Unsaved Posts</h3>
                    <div className="other-posts" id="other-posts">
                        {otherPosts.map((post) => {
                            return <Post title={post['title']} content={post['body']} index={post['id']} />;
                        })
                        }
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Posts;