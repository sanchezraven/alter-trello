import React from 'react';
import './AlterTrello.less';
import {CardDeck,Col,Card,CardHeader,Button,CardBody,CardText,CardFooter} from 'reactstrap';

class AlterTrello extends React.Component {
    constructor(){
        super()
        this.state = {
            dataLists:[{
                key: 1,
                listname: 'сделать'
            },{
                key: 2,
                listname: 'в процессе'
            },{
                key: 3,
                listname: 'сделано'
            }],
            dataCards: [{
                key: 1,
                cardName: 'super project',
                keyList: 1
            },{
                key: 2,
                cardName: 'bad project',
                keyList: 2
            },{
                key: 3,
                cardName: 'appp',
                keyList: 2
            },{
                key: 4,
                cardName: 'app prod',
                keyList: 3
            }]
        }
    }
    render() {
        return (
            <div>
                <CardDeck>
                    {
                        this.state.dataLists.map((list,index) =>{
                            const cards = this.state.dataCards.filter(card => card.keyList === list.key);
                            return (
                                <div key = {index}>
                                    <Col>
                                        <Card>
                                            <CardHeader>
                                                {list.listname}
                                                <Button close/>
                                            </CardHeader>
                                            {
                                                cards.map((card, index)=>{
                                                    return (
                                                        <CardBody key ={index}>
                                                            <div>
                                                                <CardText>
                                                                    {card.cardName}
                                                                    <Button close/>
                                                                </CardText>
                                                            </div>
                                                        </CardBody>
                                                    )
                                                })
                                            }
                                            <CardFooter>
                                                <div className = "row">
                                                    <input placeholder='добавить лист'/>
                                                    <Button>Сохранить</Button> 
                                                </div>
                                            </CardFooter>
                                        </Card>
                                    </Col>
                                </div>    
                            )
                        })
                    }
                    <Col>
                        <Card>
                            <CardHeader>
                                <div>
                                    <input placeholder='добавить лист'/>
                                    <Button>Сохранить</Button>   
                                </div>
                            </CardHeader>
                        </Card>
                    </Col>
                </CardDeck>
            </div>
        );
    }
}
        export default AlterTrello;