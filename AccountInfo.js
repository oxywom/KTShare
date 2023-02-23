import {useState} from 'react';
import axios from 'axios';
import {Form,Label,Input,Button,Col,FormGroup,Modal,
    ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function AccountInfo() {
    const divStyle = {
        width:'600px',height:'420px',textAlign:'left',margin:'100px auto',
        border:'2px solid gray', padding:'30px', borderRadius:'20px'
    };    

    const [acc, setAcc] = useState({id:'',name:'',balance:'',type:'', grade:''});
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState({header:'', body:''});
    
    const toggle = ()=> {
        setModal(!modal);
    }
    const submit = () => {

    }
    return(
        <div style={divStyle}>
            <Form>
                <FormGroup row>
                    <Label for='id' sm={3}>계좌번호</Label>
                    <Col sm={5}>
                        <Input type='text' name='id' id='id' value={acc.id} 
                            onChange={(e)=>setAcc({...acc, id:e.target.value})}/>
                    </Col>
                    <Col sm={4}>
                        <Button color='primary' style={{width:'100%'}} onClick={submit}>계좌조회</Button>
                    </Col>                    
                </FormGroup>
                <FormGroup row>
                    <Label for='name' sm={3}>이&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;름</Label>
                    <Col sm={9}>
                        <Input type='text' name='name' id='name' value={acc.name} readOnly/>
                    </Col>
                </FormGroup>
                <FormGroup row>
                    <Label for='balance' sm={3}>잔&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;액</Label>
                    <Col sm={9}>
                        <Input type='text' name='balance' id='balance' value={acc.balance} readOnly/>
                    </Col>
                </FormGroup>   
                <FormGroup row>
                    <Label for='type' sm={3}>종&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;류</Label>
                    <Col sm={9}>
                        <Input type='text' name='type' id='type' value={acc.type} readOnly/>
                    </Col>
                </FormGroup>  
                <FormGroup row>
                    <Label for='grade' sm={3}>등&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;급</Label>
                    <Col sm={9}>
                        <Input type='text' name='grade' id='grade' value={acc.grade} readOnly/>
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
export default AccountInfo;