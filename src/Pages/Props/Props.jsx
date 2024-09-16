import React from 'react';
import Typography from 'Components/Typography/Typography';
import ButtonUp from 'Utils/ButtonUp/ButtonUp';
const Props = () => {
  const exampleText = ` Что такое пропсы и зачем они нужны

  Пропсы (сокращение от properties) - это данные, которые передаются в компоненты React для настройки их поведения и внешнего вида. Они позволяют передавать информацию из родительского компонента в дочерний компонент.

  ~Дочерний компонент может читать эти props и использовать их, например, для вывода данных на экран или для изменения своего поведения.
   Передача пропсов компонентам

  ~Пропсы передаются в компоненты в виде атрибутов при их использовании в JSX. Например, <ChildComponent message="Привет, Redev!" /> передает пропс message со значением "Привет, Redev!" в компонент ChildComponent.


   Родительский компонент
   \`\`\`
   const ParentComponent = () => {
    const message = "Привет, Redev!";
    return <ChildComponent message={message} />;
  };
  \`\`\`
  Дочерний компонент
  \`\`\`
const ChildComponent = (props) => {
    return <div>{props.message}</div>;
  };
  \`\`\`

  В этом примере родительский компонент передает сообщение "Привет, Redev!" в дочерний компонент через props. Дочерний компонент выводит это сообщение на экран.

  ~Доступ к пропсам внутри компонентов

  В функциональных компонентах пропсы доступны как параметр функции компонента. Например, (props) => {...}.

   ~Родительский компонент
   \`\`\`
  const ParentComponent = () => {
    const message = "Привет, Redev!";
    return <ChildComponent message={message} />;
  };
  \`\`\`

   ~Дочерний компонент
   \`\`\`
  const ChildComponent = (props) => {
    return <div>{props.message}</div>;
  };
  \`\`\`
   ~либо сразу сделать деструктуризацию, ведь props это обычный объект
   \`\`\`
   const ChildComponent = ({message}) => {
    return <div>{message}</div>;
  };
  \`\`\`
~В классовых компонентах пропсы доступны через this.props. Например, this.props.message.

  Пример с классовой компонентой:
  \`\`\`
  ParentComponent.js
  import ChildComponent from './ChildComponent';

  const ParentComponent2 = () => <div>parentComponent2</div>
  const obj = {name:'Pasha'}

  const ParentComponent = () => {
    return (
      <div>
          <ChildComponent
            name={'abc'}
            age={25}
            isMan={true}
            parentComponent2={ParentComponent2}
            object={obj}
          />
      </div>
    );
  }

  export default ParentComponent;
  \`\`\`

  \`\`\`
  ChildComponent.js
  import React from 'react'

  class ChildComponent extends React.Component{
    render(){
      return (
        <div>
          {this.props.name}
          {this.props.age}
          {this.props.isMan? "Man" : "Women"}
          {this.props.parentComponent2()}
          {this.props.object.name}
        </div>
      );
    }
  }

  export default ChildComponent;
  \`\`\`
  ​
  ~Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.
  Пропсы являются неизменяемыми (immutable), их нельзя изменять напрямую.
  this.props.name = "Vasya" то есть вот так изменить пропс name НЕЛЬЗЯ!
  Однако, можно использовать состояние компонента (state) для изменения пропсов.
  ~Пропсы в React играют важную роль в передаче данных и настройке компонентов. Они позволяют создавать  переиспользуемые компоненты. Правильное использование пропсов способствует лучшей организации кода и разделению ответственности между компонентами.
  ~ИТОГО:
  Что такое props в React?
  Props - это объекты, которые передаются в компоненты как параметры. Они используются для передачи данных из родительского компонента в дочерний.
  Как передавать props в компоненты?

  Props можно передавать в компоненты как атрибуты. В родительском компоненте нужно указать имя атрибута и значение, которое будет передано в дочерний компонент.

  1. Как читать props в компоненте?

  Props можно читать в компоненте через объект props. Этот объект содержит все переданные в компонент атрибуты.

  1. Какие данные можно передавать через props?

  Props можно использовать для передачи любых данных, включая строки, числа, массивы, объекты и функции.

  1. Можно ли менять пропсы?

  Нельзя.

  1. Что делать, если нужно изменить данные в дочернем компоненте?

  Если нужно изменить данные в дочернем компоненте, следует использовать состояние (state).






`

  return(
    <div>
      <div id="top" style={{ position: 'relative', top: 0 }}></div>
    <Typography title="Props">
        {exampleText}
    </Typography>
    <ButtonUp />
</div>
)
}
export default Props;
