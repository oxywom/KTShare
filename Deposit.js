import {useState, useRef} from 'react';
import axios from 'axios';
import {Form,Label,Input,Button,Col,FormGroup,Modal,
    ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function Deposit() {
    const divStyle = {
        width:'600px',height:'270px',textAlign:'left',margin:'100px auto',
        border:'2px solid gray', padding:'30px', borderRadius:'20px'
    };

    const [acc, setAcc] = useState({acc:'', money:''})
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState({header:'', body:''});

    const toggle = ()=> {
        setModal(!modal);
    }
    
    const change = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }

    const submit = () => {

    }

    return(
        <div style={divStyle}>
            <Form>
                <FormGroup row>
                    <Label for='id' sm={4}>계 좌 번 호</Label>
                    <Col sm={8}>
                        <Input type='text' name='id' id='id' value={acc.id} onChange={change}/>
                    </Col>                  
                </FormGroup>
                <FormGroup row>
                    <Label for='money' sm={4}>입&nbsp;&nbsp;&nbsp;금&nbsp;&nbsp;&nbsp;액</Label>
                    <Col sm={8}>
                        <Input type='text' name='money' id='money' value={acc.money} onChange={change}/>
                    </Col>
                </FormGroup>   
                <FormGroup row>
                    <Col sm={12}>
                        <Button style={{width:'100%'}} color='primary' onClick={submit}>입 금</Button>
                    </Col>
                </FormGroup>          
            </Form>

            <Modal isOpen={modal} fade={true} toggle={toggle}>
                <ModalHeader toggle={toggle}>{message.header}</ModalHeader>
                <ModalBody>{message.body}</ModalBody>
                <ModalFooter>
                    <Button color='secondary' onClick={toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
        </div>
    )    
}

export default Deposit;