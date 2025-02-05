function Wrapper({ children, color }) {
    const style = {
        backgroundColor: color,
        width: "250px",
        margin: "20px auto",
        padding: "20px",
    }
  return (
    <div style={style}>
      {children}
    </div>
  );
}

export default Wrapper;
