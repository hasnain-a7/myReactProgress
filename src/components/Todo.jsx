import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import "./App.css";

function App() {
  const loadTodos = useCallback(() => {
    try {
      const storedTodo = localStorage.getItem("todos");
      if (storedTodo == undefined || storedTodo == []) {
        return [];
      } else return JSON.parse(storedTodo);
    } catch (error) {
      console.log(error);
    }
  }, []);

  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState(loadTodos());
  const todoLength = useMemo(() => {
    return todos.length;
  }, [todos]);
  console.log(todoLength);
  const handleadd = useCallback(() => {
    const text = todo.trim();
    if (!text) return;
    setTodos((prev) => [...prev, text]);
    setTodo("");
  }, [todo]);

  const handledel = useCallback((i) => {
    setTodos((prevTodos) => prevTodos.filter((todos, index) => index !== i));
  }, []);
  const bodyRef = useRef(null);
  bodyRef.current = document.body;
  useLayoutEffect(() => {
    bodyRef.current.style.backgroundColor = "black";
    console.log("I'm layoutEffect");
  });

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <div className="main bg-zinc-300 h-[70vh] py-2 rounded-md my-2 ">
        <div className="todo pt-1">
          <input
            type="text"
            name="Add todo"
            onChange={(e) => setTodo(e.target.value)}
            value={todo}
            placeholder="Write Something here.."
            className="w-5/6 h-10 px-4 text-gray-700 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:outline-none"
          />
          <button
            type="button"
            onClick={handleadd}
            className="inline-block rounded-md bg-slate-950 px-6 pb-2 pt-2.5 text-sm uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out font-bold mx-1"
          >
            Add
          </button>
        </div>
        <div className="todos py-5 px-5">
          {todos.map((item, index) => (
            <div
              className="flex justify-between items-center px-2 py-2.5 bg-white rounded-lg shadow-md mb-2"
              key={index}
            >
              <span>{item}</span>
              <button
                onClick={() => handledel(index)}
                className="inline-block rounded bg-red-700 px-6 pb-2 pt-2.5 text-xs uppercase leading-normal text-white shadow-light-3 transition duration-150 ease-in-out font-bold mx-1"
              >
                Del
              </button>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
