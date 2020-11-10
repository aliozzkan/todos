import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Post, Todo } from 'models';
import TableSection from 'table/tableSection';
import { Row,InputGroup, Col, Input, InputGroupAddon, Button } from 'reactstrap';



function HomePage() {
  const [todos, setTodos] = useState<Todo[] | null>(null);
  const [title, setTitle] = useState<string>("");
  
  async function getTodos() {
    const data = await axios.get<Todo[]>('https://todo-api-garcia.herokuapp.com/todo')
    .then(res => res.data)
    setTodos(data);
  }

  async function addTodo() {
    if(!!title){
      await axios.post('https://todo-api-garcia.herokuapp.com/todo', {title: title});
      getTodos();
      setTitle("");
      }
  }
  
  useEffect(() => {
    getTodos();
  }, [])
  
  return (
    <div>
      <div className="display-flex align-item-center">
                <Row>
                    <Col>
                        <InputGroup>
                            <Input value={title} placeholder="Create a To-Do" onChange={(e) => {
                              setTitle(e.currentTarget.value);
                            }}/>
                            <InputGroupAddon addonType="append" >
                                <Button color="secondary" onClick={addTodo}>Add a To-Do</Button>
                            </InputGroupAddon>
                        </InputGroup>
                    </Col>
                </Row>
            </div>
      <TableSection todos={todos} getTodos={getTodos}/>
    </div>
  )
}

export default HomePage;