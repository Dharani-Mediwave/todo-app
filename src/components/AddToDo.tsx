import React, { useState } from 'react';
import '../styles/App.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToDo, editTodo, deleteToDo } from '../redux/reducers/todoSlider';

function AddToDo() {

    const { todoList } = useSelector((state: any) => state.toDo);

    const [todoContent, setTodoContent] = useState("");
    const [exisTodo, setExisTodo] = useState<any>({});

    const dispatch = useDispatch();

    const handleOnChange = (event: any) => {
        const { value } = event?.target;
        setTodoContent(value);
    };

    const handleAdd = () => {
        if (todoContent) {
            dispatch(addToDo({ newContent: todoContent }));
            setTodoContent("");
        } else {
            alert("Please add content...")
        }
    };

    const handleEdit = (todoItem: any) => {
        setTodoContent(todoItem.content);
        setExisTodo(todoItem);
    };

    const handleUpdate = () => {
        const obj = {
            id: exisTodo.id,
            content: todoContent
        }
        dispatch(editTodo(obj));
        handleClear();
    };

    const handleDelete = (id: any) => {
        dispatch(deleteToDo({ todoId: id }))
    };

    const handleClear = () => {
        setTodoContent("");
        setExisTodo({});
    };
    return (
        <div style={{ width: "100%" }}>
            <header className="header-section">
                <h1>Add todo</h1>
                <p>Amazing tool...</p>
            </header>
            <section>
                {/* Add to do */}
                <div className='add-section'>
                    <div className='add-to-input'>
                        <input
                            type="text"
                            placeholder='Enter your daily todo'
                            name="addcontent"
                            onChange={handleOnChange}
                            value={todoContent} />
                    </div>
                    <div className='action-section'>
                        {exisTodo && exisTodo?.id ?
                            <button className='btn-section' onClick={handleUpdate}>Update</button> :
                            <button className='btn-section' onClick={handleAdd}>Add</button>}
                        <button className='btn-section' onClick={handleClear}>Clear</button>
                    </div>
                </div>
                {/* Render todo list */}
                <div className="todo-container">
                    {todoList && todoList.length ?
                        todoList.map((item: any) => {
                            return (
                                <div key={item.id} className="todo-item">
                                    <div>
                                        <p>{item.content && item.content.length > 100 ? item.content.slice(0, 100) + '...' : item.content}</p>
                                    </div>
                                    <div className='todofooter-section'>
                                        <span onClick={() => handleEdit(item)}>Edit</span>
                                        <span onClick={() => handleDelete(item.id)}>Delete</span>
                                    </div>
                                </div>
                            )
                        }) :
                        <div>
                            <p>No todo found...</p>
                        </div>
                    }
                </div>
            </section>
        </div>
    );
}

export default AddToDo;
