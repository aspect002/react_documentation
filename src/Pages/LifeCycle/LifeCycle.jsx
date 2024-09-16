import React from "react";
import Typography from "../../Components/Typography/Typography";
import DataFetcher from "../../Components/DataFetcher/DataFetcher";
import ButtonUp from 'Utils/ButtonUp/ButtonUp';

const LifeCycle = () => {
  const exampleText = `
Основные методы жизненного цикла:

1. constructor ()

Обычно в React конструкторы используются только для двух целей:

*Инициализация локального состояния путем присвоения объекта this.state.
*Привязка методов обработчика событий к экземпляру.
\`\`\`
constructor(props) {
    super(props);
    this.state = { counter: 0 };
    this.handleClick = this.handleClick.bind(this);
}
\`\`\`
~2. render ()

Рендеринг компонента. Отдает JSX.

\`\`\`
        render () {
                return (
                    <div>
                        'Hello'
                    </div>
                )
            }
            \`\`\`
~3. componentDidMount()

componentDidMount() вызывается сразу после монтирования компонента (вставки в дерево). Используется для отправки запросов на сервер к удаленным ресурсам, setTimeout, обращение к DOM-элементам.

\`\`\`
            componentDidMount()
            \`\`\`
            ~Пример отправки запроса через componentDidMount:;`


const exampleText2 = `~4. componentDidUpdate(prevProps, prevState)

            Вызывается после обновления компонента. В качестве параметров передаются старые значения объектов: props и state.

            \`\`\`
                        componentDidUpdate(prevProps, prevState) {
                            if (this.props.userID !== prevProps.userID) {
                                this.fetchData(this.props.userID);
                            }
                        }
                        \`\`\`
            ~5. componentWillUnmount()

            Вызывается перед удалением компонента из DOM. Используется для закрытия асинхронных запросов, таймеров.

            \`\`\`
                        componentWillUnmount() {
                            alert("The component named Header is about to be unmounted.");
                        }
                        \`\`\`
            Для использования методов жизненного цикла в функциональных компонентах предназначен хук useEffect.
            `



return (
  <div>

<div id="top" style={{ position: 'relative', top: 0 }}></div>

      <Typography title="LifeCycle (useEffect)">{exampleText}</Typography>
      <DataFetcher />
      <Typography >
        {exampleText2}
        </Typography>
        <ButtonUp />
  </div>
);
};

export default LifeCycle;
