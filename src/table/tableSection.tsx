import React from "react";
import { Table, Card, CardBody, Button, Badge, Row, Col, Input, InputGroup, InputGroupAddon, InputGroupText } from "reactstrap";
import { Post, Todo } from "../models";
import axios from "axios";

interface TableSectionProps {
    todos: Todo[] | null;
    getTodos: () => void;

}

function TableSection({ todos, getTodos }: TableSectionProps) {
    async function toggleTodo(id: number) {
        await axios.put('https://todo-api-garcia.herokuapp.com/todo/' + id.toString() + '/toggle');
        getTodos();
    }
    async function deleteTodo(id: number) {
        await axios.delete('https://todo-api-garcia.herokuapp.com/todo/' + id.toString());
        getTodos();
    }
    return (
        <div>
            <div className="mt-2">
                <Card>
                    <CardBody className="px-0 pt-0">
                        <Table>
                            <thead className="bg-light text-dark">
                                <tr>
                                    <th>ID</th>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {todos &&
                                    todos.map((todo, index) => (
                                        <tr key={index}>
                                            <td>{todo.id}</td>
                                            <td>{todo.title}</td>
                                            <td style={{maxWidth:50 }}><Badge color={todo.isDone ? "success" : "secondary"}>{todo.isDone ? "Done" : "Todo"}</Badge></td>
                                            <td style={{ maxWidth:200 }}><div className="d-flex justify-content-end"><Button className="mr-1" color="primary" size="sm" onClick={() => { toggleTodo(todo.id) }}>Toggle</Button><Button color="danger" size="sm" onClick={() => { deleteTodo(todo.id) }}>Delete</Button></div></td>
                                        </tr>
                                    ))}
                            </tbody>
                        </Table>
                    </CardBody>
                </Card>
            </div>

        </div >
    );
}

export default TableSection;