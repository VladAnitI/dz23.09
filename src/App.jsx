import './App.css';

function App() {
  const sortPets = (data) => {
    let result = [];

    for (let i = 0; i < Object.keys(data).length; i++) {
      result.push(Object.keys(data)[i]);
    }
    return result
  }

  const sortPoroda = (data) => {
    let result = [];

    for (let i = 0; i < Object.keys(data).length; i++) {
      result.push(Object.values(data)[i]);
    }
    console.log(result)
    return result
  }

  let testBD = { "cats": { "poroda1": "aergargrgn;rngaaerngrng", "poroda2": "sfgaergadfbaerbarbzrebzdrbzrb" }, "dogs": { "poroda2323": "aergargrgn;rnzrgzerggaaerngrng", "poroda3444": "sfgaergzdrgadfbaerbarbzrebzdrbzrb" } };
  let petsArr = sortPets(testBD)
  let porodaArr = sortPoroda(testBD)

  const Pets = ({ data }) => {
    let content = []

    for (let i = 0; i < data.length; i++) {
      content.push(<div className="pets">{data[i]}</div>)
    }

    return (
      <div>{content}</div>
    )
  }

  const Poroda = ({data}) => {
    let content = []

    for (let i = 0; i < data.length; i++) {
      content.push(<div className="poroda">{data[i]}</div>)
    }

    return (
      <div className='poroda'>
        <h1>Выберите категорию</h1>
      </div>
    )
  }

  return (
    <div className="App">
      <div></div>
      <div className="content">
        <div className="leftBar">
          <Pets key='pets' data={petsArr} />
        </div>
        <div className="rightBar">
          <Poroda key="poroda" data={porodaArr}/>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default App;
