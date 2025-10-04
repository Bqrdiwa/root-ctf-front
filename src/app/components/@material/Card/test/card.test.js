import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Card, CardBody, CardHeader, CardFooter, CardText, CardImgOverlay, CardImg,
     CardTitle, CardSubtitle, CardGroup,CardColumns,CardDeck,CardLink} from "../";

const TestCard = (props) => {
    return (
        <> 
           {/* <CardColumns> */}
           {/* <CardGroup> */}
           <CardDeck>
                <Card>
                    <CardHeader className="bg-info">Header Card 1</CardHeader>
                    <CardBody>
                        <CardTitle>Card title 1</CardTitle>
                        <CardSubtitle>Card subtitle 1</CardSubtitle>
                        <CardText>this is text place for card (1)</CardText>
                        <CardLink href="#">Card Link 1</CardLink>
                    </CardBody>
                    <CardFooter className="bg-info">Footer for Card 1</CardFooter>
                </Card>
                <Card>
                    <CardHeader className="bg-info">Header Card 2</CardHeader>
                    <CardBody>
                        <CardTitle>Card title 2</CardTitle>
                        <CardSubtitle>Card subtitle 2</CardSubtitle>
                        <CardText>this is text place for card (2)</CardText>
                        <CardLink href="#">Card Link 2</CardLink>
                    </CardBody>
                    <CardFooter className="bg-info">Footer for Card 2</CardFooter>
                </Card>
                <Card>
                    <CardHeader className="bg-info">Header Card 3</CardHeader>
                    <CardBody>
                        <CardTitle>Card title 3</CardTitle>
                        <CardSubtitle>Card subtitle 3</CardSubtitle>
                        <CardText>this is text place for card (3)</CardText>
                        <CardLink href="#">Card Link 3</CardLink>
                    </CardBody>
                    <CardFooter className="bg-info">Footer for Card 3</CardFooter>
                </Card>
                <Card>
                    <CardHeader className="bg-info">Header Card 4</CardHeader>
                    <CardBody>
                        <CardTitle>Card title 4</CardTitle>
                        <CardSubtitle>Card subtitle 4</CardSubtitle>
                        <CardText>this is text place for card (4)</CardText>
                        <CardLink href="#">Card Link 4</CardLink>
                    </CardBody>
                    <CardFooter className="bg-info">Footer for Card 4</CardFooter>
                </Card>
            {/* </CardGroup> */}
           {/* </CardColumns> */}
           </CardDeck>
        </>
    )
}

ReactDOM.render(<TestCard />, document.getElementById('root'));