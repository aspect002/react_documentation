import React from "react";
import Typography from "../../Components/Typography/Typography";
import ButtonUp from 'Utils/ButtonUp/ButtonUp';
const Events = () => {
  const exampleText = `
  События в React именуются в стиле camelCase вместо нижнего регистра.

С JSX вы передаёте функцию как обработчик события вместо строки.

Популярные обработчики событий: onClick, onChange

Существует множество поддерживаемых событий, вот общий список:
*Буфер обмена: onCopy, onCut, onPaste
*Составление/ввод данных: onCompositionEnd, onCompositionStart, onCompositionUpdate
*Клавиатура: onKeyDown, onKeyPress, onKeyUp
*Фокусировка: onFocus, onBlur
*Форма: onChange, onInput, onSubmit
*Мышь: onClick, onContextMenu, onDoubleClick, onDrag, onDragEnd, onDragEnter, onDragExit, onDragLeave, onDragOver, onDragStart, onDrop, onMouseDown, onMouseEnter, onMouseLeave, onMouseMove, onMouseOut, onMouseOver, onMouseUp
*Выделение: onSelect
*Касание: onTouchCancel, onTouchEnd, onTouchMove, onTouchStart
*UI: onScroll
*Колёсико мышки: onWheel
*Медиа: onAbort, onCanPlay, onCanPlayThrough, onDurationChange, onEmptied, onEncrypted, onEnded, onError, onLoadedData, onLoadedMetadata, onLoadStart, onPause, onPlay, onPlaying, onProgress, onRateChange, onSeeked, onSeeking, onStalled, onSuspend, onTimeUpdate, onVolumeChange, onWaiting
*Изображение: onLoad, onError
*Анимация: onAnimationStart, onAnimationEnd, onAnimationIteration
*Переход: onTransitionEnd
~
\`\`\`
            <button onClick={activateLasers}>
            Активировать лазеры
            </button>
            \`\`\`
~В React нельзя предотвратить обработчик события по умолчанию, вернув false. Нужно явно вызвать preventDefault.

\`\`\`
            function Form() {
                function handleSubmit(e) {
                  e.preventDefault();
                  console.log('Отправлена форма.');
                }
                return (
                  <form onSubmit={handleSubmit}>
                    <button type="submit">Отправить</button>
                  </form>
                );
            };
            \`\`\`
~В компоненте, определённом с помощью ES6-класса, в качестве обработчика события обычно выступает один из методов класса. Например, этот компонент Toggle рендерит кнопку, которая позволяет пользователю переключать состояния между «Включено» и «Выключено»:

\`\`\`
            class Toggle extends React.Component {
                constructor(props) {
                  super(props);
                  this.state = {isToggleOn: true};

                  // Эта привязка обязательна для работы 'this' в колбэке.
                    this.handleClick = this.handleClick.bind(this);
                }

                handleClick() {
                    this.setState(prevState => ({
                        isToggleOn: !prevState.isToggleOn
                    }));
                }

                render() {
                    return (
                        <button className={'toggle__btn'} onClick={this.handleClick}>
                            {this.state.isToggleOn ? 'Включено' : 'Выключено'}
                        </button>
                    );
                }
            }
                    ReactDOM.render(
                    <Toggle />,
                    document.getElementById('root')
                    );
                    \`\`\`

~Этот же код, но переписанный на функциональную компоненту:

\`\`\`
            function Toggle() {
                let [isToggleOn, setIsToggleOn] = useState(true);
                function handleClick() {
                  setIsToggleOn(!isToggleOn)
                }
                return (
                  <button className={'toggle__btn'} onClick={() => handleClick()}>
                    {isToggleOn ? 'Включено' : 'Выключено'}
                  </button>
                );
              }
              \`\`\`
Внутри цикла часто нужно передать дополнительный аргумент в обработчик события. Например, если id — это идентификатор строки, можно использовать следующий вариант:

\`\`\`
            <button onClick={(e) => deleteRow(id, e)}>Удалить строку</button>
            \`\`\``;

  return (
    <div>
      <div id="top" style={{ position: 'relative', top: 0 }}></div>
      <Typography title="Events">{exampleText}</Typography>
      <ButtonUp />
    </div>
  );
};

export default Events;
