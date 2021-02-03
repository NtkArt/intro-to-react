import ButtonClick from "./components/Button/ButtonClick";
import Input from "./components/Input/Input"; // import ALGO from 'arquivo

function App() {
  return (
    <>
      {/* Apos importar o componente, podemos utilizar como uma tag HTML */}
      <Input name={"Thalita"} />
      {/* Componentes REACT =  Tags HTML COM propiedades 

          Todo componente react tem props.
          Um input, do HTML, por exemplo, tem props padroes, como por exemplo
          o placeholder.
          <input placeholder="Digite algo..." ></input>

          Como criamos um componente chamado <Input></Input>,
          que nao tem props padrao, podemos DEFINIR essas props.
          Nos podemos definir as props do nosso componente!!!

          Para definir essas props, fazemos:
          <Input nomeDaProp={'Valor da Prop'} />
                  editavel     editavel
          Podendo passar qualquer nome, e qualquer valor. */}

      <ButtonClick />
    </>
  );
}

export default App;
