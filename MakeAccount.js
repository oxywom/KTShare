import {useState} from 'react';
import {Form,Label,Input,Button,Col,FormGroup,Modal,
    ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
    

function MakeAccount() {
    const divStyle = {
        width:'600px',height:'420px',textAlign:'left',margin:'100px auto',
        border:'2px solid gray', padding:'30px', borderRadius:'20px'
    };

    const [acc, setAcc] = useState({id:'',name:'',balance:'',type:'', grade:''});
    const [special, setSpecial] = useState(false);
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState({header:'', body:''});

    const changeSpecial = (e)=> {
        setSpecial(e.target.checked);
        if(e.target.checked) {
            setAcc({...acc, type:'특수계좌'});
        } else {
            setAcc({...acc, type:'일반계좌', grade:''});
        }
    }

    const toggle = ()=> {
        setModal(!modal);
    }

    const change = (e) => {
        setAcc({...acc, [e.target.name]:e.target.value});
    }

    return(
        <div style={divStyle}>
            <Form>
                <FormGroup row>
                    <Label for='id' sm={4}>계 좌{'  '}번 호</Label>
                    <Col sm={5}>
                        <Input type='text' name='id' id='id' value={acc.id} onChange={change}/>
                    </Col>
                    <Col sm={3}>
                        <Button color='primary' style={{width:'100%'}}>중복</Button>
                    </Col>                    
                </FormGroup>
                <FormGroup row>
                    <Label for='name' sm={4}>이{'    '}름</Label>
                    <Col sm={8}>
                        <Input type='text' name='name' id='name' value={acc.name} onChange={change}/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='balance' sm={4}>잔{'    '}액</Label>
                    <Col sm={8}>
                        <Input type='text' name='balance' id='balance' value={acc.balance} onChange={change}/>
                    </Col>
                </FormGroup>   
                <FormGroup row>
                        <Label check sm={4}>
                            <Input type='checkbox' checked={special} onChange={changeSpecial}/>{' '}특수계좌
                        </Label>
                        <Col sm={8}>
                            <Input type='select' name='grade' id='grade' style={{color:'gray'}} 
                               disabled={!special} onChange={change}>
                                <option value={'VIP'}>VIP</option>
                                <option value={'Gold'}>Gold</option>
                                <option value={'Silver'}>Silver</option>
                                <option value={'Normal'}>Normal</option>
                            </Input>
                        </Col>
                </FormGroup>   
                <FormGroup row>
                    <Col sm={12}>
                        <Button style={{width:'100%'}} color='primary'>계좌 개설</Button>
                    </Col>
                </FormGroup>          
            </Form>

            <Modal isOpen={modal} fade={true} toggle={toggle}>
                <ModalFooter toggle={toggle}>{message.header}</ModalFooter>
                <ModalBody>{message.body}</ModalBody>
                <ModalFooter>
                    <Button color='secondary' onClick={toggle}>닫기</Button>
                </ModalFooter>
            </Modal>
        </div>
    )
}

export default MakeAccount;