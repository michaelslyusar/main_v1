import React from 'react';
import { Card, Button} from 'react-bootstrap';

const Post = props => {
    return (
        <Card style={{ width: '9rem' }} key={props.index} className="card">
            <Card.Body>
                <h6>Post {props.index}</h6>
                <Card.Title className="card-title">{props.title}</Card.Title>
                <hr/>
                <Card.Text className="card-content">
                    {props.content}
                </Card.Text>
                <Button variant="primary" className="card-button">Add</Button>
            </Card.Body>
        </Card>
    );
};
export default Post;