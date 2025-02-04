export default function ResetButton ({ count, setCount, buttonStyle }) {
    return (!!count && (
        <div>
          <button style={buttonStyle} onClick={() => setCount(0)}>
            reset
          </button>
        </div>
      ))
}