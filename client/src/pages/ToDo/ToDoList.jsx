import React, {useState, useEffect, use} from "react";
import Navbar from "../../components/Navbar";
import styles from "./ToDoList.module.css";
import {Button, Divider, Input, message, Modal} from "antd";
import { getErrorMessage } from "../../utils/GetError.js";
import { getUserDetails } from "../../utils/GetUser";
import {ToDoServices } from "../../services/toDoServices.js";
import { get } from "mongoose";

function ToDoList() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmitTask = async () => {
    setLoading(true);
    try{
      const userId = getUserDetails()?.userId;
      const data = {
        title,
        description,
        isCompleted: false,
        createdBy: userId
      }
      const response = await ToDoServices.createToDo(data);
      console.log(response.data);
      message.success("Task added successfully!");
      setIsAdding(false);
      ToDoServices.getAllToDos();
    }
    catch(err){
      console.log(err);
      message.error(getErrorMessage(err));
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <>
    <Navbar active={"myTask"} />
    <section className={styles.toDoWrapper}>
      <div className={styles.toDoHeader}>
        <h2>My Tasks</h2>
        <Input style={{width:"50%"}} placeholder="Search tasks..." />
        <div>
          <Button onClick={()=>setIsAdding(true)} type="primary" size="large">Add Task</Button>
        </div>
      </div>
      <Divider />
      <Modal confirmLoading={loading} title="Add New To Do Task" open={isAdding} onOk={handleSubmitTask} onCancel={()=>setIsAdding(false)}>
        <Input style={{marginBottom:'1rem'}} placeholder='Title' value={title} onChange={(e)=>setTitle(e.target.value)} />
        <Input.TextArea placeholder='Description' value={description} onChange={(e)=>setDescription(e.target.value)} />
      </Modal>

    </section>
    <section className={styles.toDoListCardWrapper}>
    </section>
    </>
  );
}

export default ToDoList;
