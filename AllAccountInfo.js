import {useState, useEffect} from 'react';
import axios from 'axios';
import {Table, Button, Modal,
    ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

function AllAccountInfo() {
    const divStyle = {
        width:'700px',height:'420px',textAlign:'left',margin:'100px auto',
        border:'2px solid gray', padding:'30px', borderRadius:'20px'
    };

    const [accs, setAccs] = useState([]);
    const [modal, setModal] = useState(false);
    const [message, setMessage] = useState({header:'', body:''});

    const toggle = ()=> {
        setModal(!modal);
    }

    useEffect(()=> {
        axios.get("http://localhost:3001/allaccinfo")
        .then(response=>{
            setAccs(response.data.res);
        })
        .catch(error=> {
            console.log(error);
            setMessage({header:'오류', body:'전체계좌 조회를 실패했습니다.'});
            toggle();
        });
    }, []);

    return(
        <div style={divStyle}>
            <Table>
                <tbody>
                    <tr>
                        <td>아이디</td>
                        <td>이름</td>
                        <td>잔액</td>
                        <td>종류</td>
                        <td>등급</td>
                    </tr>
                    {
                        accs.map((acc)=>(
                            <tr key={acc.id}>
                                <td>{acc.id}</td>
                                <td>{acc.name}</td>
                                <td>{acc.balance}</td>
                                <td>{acc.type}</td>
                                <td>{acc.grade}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>

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

export default AllAccountInfo;