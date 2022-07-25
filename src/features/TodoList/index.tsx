import { Fragment, useState } from "react";
import "./index.css";
interface todoType {
  value: string;
  checked: boolean;
}
export default function TodoList() {
  const [task, setTask] = useState("");
  const [hasDo, setHasDo] = useState(0);
  const [todo, setTodo] = useState<Array<todoType>>([
    { value: "1", checked: false },
    { value: "2", checked: false },
    { value: "3", checked: true },
    { value: "4", checked: false },
    { value: "5", checked: false },
  ]);

  const changedTask = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };
  const taskAdd = () => {
    if (task === "") return;
    let temp = todo;
    setTodo(temp.concat({ value: task, checked: false }));
  };
  const todoChange = (index: number) => {
    if (index >= todo.length) return;
    let flag = todo[index].checked;
    if (!flag) setHasDo((hasDo) => hasDo + 1);
    else {
      setHasDo((hasDo) => hasDo - 1);
      setHasDo(0);
    }

    let temp = todo;
    temp[index].checked = !flag;
    setTodo(temp);
  };
  const totalChange = () => {
    let temp = todo;
    if (hasDo < todo.length) {
      temp.forEach((value) => {
        value.checked = true;
      });
      setHasDo(todo.length);
    } else {
      temp.forEach((value) => {
        value.checked = false;
      });
      setHasDo(0);
    }
    setTodo(temp);
  };
  return (
    <>
      <div className="todo-header">
        <input
          type="text"
          placeholder="Todo List"
          value={task}
          onChange={(e) => changedTask(e)}
        />
        <button type="button" onClick={() => taskAdd()}>
          添加
        </button>
      </div>
      <ul>
        {todo.map((todoItem, index) => (
          <li
            key={index}
            onClick={() => todoChange(index)}
            className={todoItem.checked ? "check" : "unchecked"}
          >
            {todoItem.value}
          </li>
        ))}
      </ul>
      <div className="total-select">
        <button type="button" onClick={() => totalChange()} className="btn">
          全选
        </button>
        <div>
          已完成{hasDo}/全部{todo.length}
        </div>
      </div>
    </>
  );
}
