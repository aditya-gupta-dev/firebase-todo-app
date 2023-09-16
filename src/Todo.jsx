import { useState, useEffect } from 'react'
import './todo.css';
import { db } from './firebase';
import { collection, addDoc, getDocs } from 'firebase/firestore';


const Todo = () => {
    const [todo, setTodo] = useState("");
    const [todos, setTodos] = useState([]);
   
    const addTodo = (e) => {
        e.preventDefault();
        
        try {
            const docRef = addDoc(collection(db, 'todos'), {
                todo: todo,
            })
        } catch (e) {
            console.log('something bad happened');
        }
    }

    const fetchPost = () => {
        getDocs(collection(db, 'todos'))
        .then((snapshot) => {
            const fetchedData = snapshot.docs.map((doc) => ({...doc.data(), id:doc.id }))
            setTodos(fetchedData);
        })
    }

    useEffect(() => {
        fetchPost();
    }, []);
 
    return (
        <section className="todo-container">
            <div className="todo">
                <h1 className="header">
                    Todo-App
                </h1>
   
                <div>
   
                    <div>
                        <input
                            type="text"
                            placeholder="What do you have to do today?"
                            onChange={(e)=>setTodo(e.target.value)}
                        />
                    </div>
   
                    <div className="btn-container">
                        <button
                            type="submit"
                            className="btn"
                            onClick={addTodo}
                        >
                            Submit
                        </button>
                    </div>
   
                </div>
   
                <div className="todo-content">
                    {
                        todos?.map((todo,i)=>(
                            <p key={i}>
                                {todo.todo}
                            </p>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
 
export default Todo
