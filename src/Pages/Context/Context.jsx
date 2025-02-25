import React from "react";
import Typography from "../../Components/Typography/Typography";
import ButtonUp from 'Utils/ButtonUp/ButtonUp';
const Context = () => {
  const exampleText = `
  Контекст разработан для передачи данных для всего дерева React-компонентов, не прокидывая через пропсы.

Создать контекст:

\`\`\`
            const MyContext = React.createContext(defaultValue);
            \`\`\`
defaultValue - дефолтное значение или объект для получения через контекст

~Вызывая React.createContext мы получаем объект, который содержит два компонента:

1. Компонент Provider. Благодаря ему все дочерние компоненты могут получать значения, которые мы ему передаем.

\`\`\`
            <MyContext.Provider value={value}> </MyContext.Provider>
            \`\`\`
Компонент Provider принимает проп value, который будет передан во все компоненты, использующие этот контекст и являющиеся потомками этого компонента Provider. Один Provider может быть связан с несколькими компонентами, потребляющими контекст. Так же компоненты Provider могут быть вложены друг в друга, переопределяя значение контекста глубже в дереве.

~2. Компонент Consumer - это React-компонент, который подписывается на изменения контекста.

Consumer принимает функцию в качестве дочернего компонента. Эта функция принимает текущее значение контекста и возвращает React-компонент. Передаваемый аргумент value будет равен ближайшему (вверх по дереву) значению этого контекста, а именно пропу value компонента Provider. Если такого компонента Provider не существует, аргумент value будет равен значению defaultValue, которое было передано в createContext().

\`\`\`
            <MyContext.Consumer>
            {value => /* отрендерить что-то, используя значение контекста */}
          </MyContext.Consumer>
          \`\`\`
~Хук useContext. Принимает один параметр - это объект контекста, получаемый при вызове React.createContext и возвращает текущее значение контекста для этого контекста.

Текущее значение контекста определяется пропом value ближайшего MyContext.Provider над вызывающим компонентом в дереве.

\`\`\`
            const value = useContext(MyContext);
            \`\`\`
Компонент, вызывающий useContext, всегда будет перерендериваться при изменении значения контекста. Если повторный рендер компонента затратен, вы можете оптимизировать его с помощью мемоизации.

Контекст лучше всего создавать в отдельном файле.`;
  return (
    <div>
      <div id="top" style={{ position: 'relative', top: 0 }}></div>
      <Typography title="Context (useContext)">{exampleText}</Typography>
      <ButtonUp />
    </div>
  );
};

export default Context;
