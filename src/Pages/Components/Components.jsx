import React from 'react';
import Typography from '../../Components/Typography/Typography';
import ButtonUp from 'Utils/ButtonUp/ButtonUp';

const Components = () => {
const exampleText = `Компоненты - это небольшие, переиспользуемые элементы пользовательского интерфейса, которые объединены вместе, чтобы создать более крупные приложения.
Во многом компоненты ведут себя как обычные функции JavaScript.Они принимают произвольные входные данные (так называемые «пропсы») и возвращают React-элементы, описывающие, что мы хотим увидеть на экране.

\`\`\`
function Welcome() {
    return <h1>Привет, мир!rf</h1>;
}
\`\`\`

Эта функция — компонент, потому что она получает данные параметра и возвращает React-элемент в одном объекте («пропсы») в качестве параметра и возвращает React-элемент.Мы будем называть такие компоненты «функциональными», так как они буквально являются функциями.

~Ещё компоненты можно определять как классы ES6:


\`\`\`
class Welcome extends React.Component {
    render() {
        return <h1>Привет, мир!</h1>;
    }
}
\`\`\`
Оба примера создают компонент, который отображает текст "Hello, Redev!". Разница заключается в том, что классовый компонент наследуется от базового класса React.Component и имеет доступ к дополнительным функциям, таким как состояние и методы жизненного цикла.

~Компоненты должны себя вести как чистые функции:

* Для одинаковых входных данных всегда возвращают один результат.
* Не имеют побочных эффектов (то есть не изменяют внешние состояния).
* Не зависят от внешних состояний.

~Stateless VS Stateful

Когда речь идет о React, часто упоминаются термины "stateless" и "stateful". Чтобы понять, что они значат, давай разберемся c этим.

~Stateless компоненты
Они просто принимают props и возвращают JSX, который описывает, как должен выглядеть UI. Эти компоненты не имеют внутреннего состояния и не могут изменять свое поведение в зависимости от событий или действий пользователя.

\`\`\`
const Greeting = ({name}) => {
  return <h1>Hello, {name}!</h1>;
};
\`\`\`

В этом примере компонент Greeting принимает проп name и отображает приветствие. Он не хранит состояние и не изменяется с течением времени.

~Stateful компоненты
Stateful компоненты могут управлять состоянием и изменять свое поведение в зависимости от событий. Они ис   пользуют внутреннее состояние, чтобы отслеживать изменения и обновлять UI в ответ на действия пользователя или другие события.

С появлением хуков в React 16.8 функциональные компоненты могут также управлять состоянием и эффектами. Теперь можно создавать stateful функциональные компоненты с помощью хуков useState и useEffect

\`\`\`
import React, { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count => count + 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
};
\`\`\`

⚠️ Stateless компоненты просто рендерят UI, в то время как stateful компоненты имеют внутреннее состояние, которое позволяет им изменять своё поведение в ответ на события.






`;

return (
    <div>
      <div id="top" style={{ position: 'relative', top: 0 }}></div>
      <Typography title="Компоненты">
        {exampleText}
      </Typography>
      <ButtonUp />
    </div>
  );
};

export default Components;
