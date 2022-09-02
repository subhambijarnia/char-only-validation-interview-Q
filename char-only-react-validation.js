import { useState } from "react";

function App() {

  const [state, setState] = useState({
    name: '',
    isTrueVal: false
  });

  const nameValidation = name => {
    const regex = new RegExp('^([A-Za-z]+ )+[A-Za-z]+$|^[A-Za-z]+$');
    return regex.test(name);
  }

  const handleChange = (e) => {
    const { value } = e.target;
    const isTrueVal = !value || nameValidation(value);
    setState({
      name: value,
      isTrueVal
    });
  }

  return (
    <div >
      <h2> characters only</h2>
      <label onChange={e => handleChange(e)}>
        Name:
        <input type="text" name="name" />
      </label>
      {
        !state.isTrueVal && (
          <div style={{ color: "#F61C04" }}>{`name ${state.name} is not valid.`}</div>
        )
      }
    </div>
  );
}

export default App;
