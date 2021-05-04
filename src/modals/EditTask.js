import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const EditTaskPopup = ({ modal, toggle, updateTask, taskObject }) => {
    const [taskName, setTaskName] = useState('');
    const [description, setDescription] = useState('');
    const [taskDate, setTaskDate] = useState(null)

    const handleChange = (e) => {

        const { name, value } = e.currentTarget

        if (name === "taskName") {
            setTaskName(value)
        } else if (name === "description") {
            setDescription(value)
        }
        else {
            setTaskDate(value)

        }

    }

    useEffect(() => {
        setTaskName(taskObject.Name)
        setDescription(taskObject.Description)
        setTaskDate(taskObject.TaskDate)
    }, [])

    const handleUpdate = (e) => {
        e.preventDefault();
        let tempObj = {}
        tempObj['Name'] = taskName
        tempObj['Description'] = description
        tempObj['TaskDate'] = taskDate
        updateTask(tempObj)
    }

    return (
        <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}>Görevi Güncelle</ModalHeader>
            <ModalBody>
                <form>
                    <div className="form-group">
                        <label><b>Görev Adı</b></label>
                        <input type="text" className="form-control" value={taskName} onChange={handleChange} name="taskName" />
                    </div>
                    <div className="form-group">
                        <label><b>Görev İçeriği</b></label>
                        <textarea rows="5" className="form-control" value={description} onChange={handleChange} name="description"></textarea>
                    </div>
                    <div className="form-group">
                        <label><b>Görevin Tamamlanması Gereken Tarih</b></label>
                        <input type="date" className="form-control" value={taskDate} onChange={handleChange} name="taskDate" />
                    </div>
                </form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick={handleUpdate}>Güncelle</Button>{' '}
                <Button color="warning" onClick={toggle}>İptal</Button>
            </ModalFooter>
        </Modal>
    );
};

export default EditTaskPopup;
