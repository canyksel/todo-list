import React, { useEffect, useState } from 'react'
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const CreateTaskPopup = ({ modal, toggle, save }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [taskDate, setTaskDate] = useState('')

    const handleChange = (e) => {

        const { name, value} = e.target
        if (name === "taskName") {
            setTaskName(value)
        }
        else if(name==="description") {
            setDescription(value)
            
        }
        else{
            setTaskDate(value)
        }
    }

    const handleSave = () => {
        let taskObject = {}
        taskObject["Name"] = taskName
        taskObject["Description"] = description
        taskObject["TaskDate"] = taskDate
        save(taskObject)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Görev Oluştur</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label><b>Görev Adı</b></label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                    </div>
                    <div className="form-group">
                        <label><b>Görev İçeriği</b></label>
                        <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description" />
                    </div>
                    <div className="form-group">
                        <label><b>Görevin Tamamlanması Gereken Tarih</b></label>
                        <input type="date" className="form-control" value={taskDate} onChange={handleChange} name="taskDate" />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="success" onClick={handleSave}>Görevi Ekle</Button>{' '}
                <Button color="danger" onClick={toggle}>İptal</Button>
            </ModalFooter>
        </Modal>

    );
};

export default CreateTaskPopup;