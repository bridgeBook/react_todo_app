const style = {
        backgroundColor: "#c6e5d9",
        width: "400px",
        height: "50px",
        padding: "8px",
        margin: "8px",
        borderRadius: "8px"
}

const testTexttest = {
    color: "red",
    paddingLeft: "15px",
    fontSize: "15px"
}

export const InputTodo = (props) => {
    const {todoText, onChangeTodoText, onClickAdd, testText, disabled } = props;
    return (
        <div style={style}>
            <input disabled={disabled} placeholder="TODOを入力" value={todoText} onChange={onChangeTodoText} />
            <button disabled={disabled}  onClick={onClickAdd}>追加</button>
            <span style={testTexttest}>{testText}</span>
        </div>
    )
}