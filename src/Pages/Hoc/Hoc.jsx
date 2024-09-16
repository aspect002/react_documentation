
import React from "react";
import Typography from "../../Components/Typography/Typography";
import ButtonUp from 'Utils/ButtonUp/ButtonUp';

const Hoc = () => {
    const exampleText = `
    Higher Order Components (HOC) являются паттерном в библиотеке React, позволяющим повысить переиспользуемость компонентов и управление состоянием. В этой главе мы рассмотрим, зачем они нужны, как их создавать, как прокидывать props, а также какие проблемы они помогают решить.

    ~Зачем нужен HOC?

    💡 HOC — это функции высшего порядка, которые принимают компонент и возвращают новый компонент с расширенным функционалом.

    Они помогают избежать дублирования кода, управлять состоянием, обеспечивают абстракцию поведения и позволяют добавлять функциональность к компонентам без изменения их кода.

    ~Проблемы, которые решает HOC

    HOC решает несколько проблем в разработке React-приложений:

    1. Логическое переиспользование: HOC позволяют выделить общую логику компонентов, такую как обработка аутентификации или получение данных, и применять ее ко множеству компонентов без дублирования кода.
    2. Прокинуть дополнительные props: HOC позволяют добавлять или модифицировать props компонентов. Это удобно, например, для передачи данных из контекста или оборачивания компонентов в дополнительные компоненты высшего порядка.
    3. Обертывание компонентов: HOC могут использоваться для обертывания компонентов дополнительным функциональным слоем, например, для логирования, манипуляции с состоянием и т.д.

    ~Как создать HOC?

    Создание HOC включает в себя определение функции, которая принимает компонент и возвращает новый компонент.

    Вот простой пример:
    \`\`\`
    const withLogger = (WrappedComponent) => {
      return (props) => {
        console.log('Component rendered:', WrappedComponent.name);
        return <WrappedComponent {...props} />;
      };
    };
    \`\`\`
    ~Как прокинуть props?

    Props могут быть переданы из HOC в оборачиваемый компонент следующим образом:
    \`\`\`
    const withExtraProps = (WrappedComponent) => {
      return (props) => {
        const extraProps = { additionalProp: "I'm extra!" };
        return <WrappedComponent {...props} {...extraProps} />;
      };
    };
    \`\`\`
    ~Примеры использования HOC
    1. Логирование
    \`\`\`
    import React, { useEffect } from 'react';

    const withLogger = (WrappedComponent) => {
      return (props) => {
        useEffect(() => {
          console.log('Component', WrappedComponent.name, 'mounted.');
        }, []);

        return <WrappedComponent {...props} />;
      };
    };
    \`\`\`
    ~2. Аутентификация
    \`\`\`
    const withAuth = (WrappedComponent) => {
      return (props) => {
        const isAuthenticated = checkAuthStatus(); // Предположим, здесь происходит проверка аутентификации.
        if (isAuthenticated) {
          return <WrappedComponent {...props} />;
        } else {
          return <p>Please log in to access this content.</p>;
        }
      };
    };

    const AuthenticatedComponent = withAuth(ProfileComponent);
    \`\`\`
    ~3. Локализация
    \`\`\`
    const withLocalization = (WrappedComponent) => {
      return (props) => {
        const locale = getCurrentLocale(); // Получение текущей локали.
        const localizedContent = getLocalizedContent(locale);
        return <WrappedComponent {...props} localizedContent={localizedContent} />;
      };
    };

    const LocalizedProfile = withLocalization(ProfileComponent);
    \`\`\`
    ~Управление состоянием
    \`\`\`
    import React, { useState } from 'react';

    // HOC
    const withCounter = (WrappedComponent) => {
      return (props) => {
        const [count, setCount] = useState(0);

        const incrementCount = () => {
          setCount(count + 1);
        };

        return (
          <WrappedComponent
            count={count}
            incrementCount={incrementCount}
            {...props}
          />
        );
      };
    };

    // Компонент, который будет обернут HOC
    const Counter = ({ count, incrementCount }) => {
      return (
        <div>
          <p>Count: {count}</p>
          <button onClick={incrementCount}>Increment</button>
        </div>
      );
    };

    // Применение HOC к компоненту
    const CounterWithHOC = withCounter(Counter);

    // Компонент, использующий обернутый компонент с HOC
    const App = () => {
      return (
        <div>
          <h1>Counter App</h1>
          <CounterWithHOC />
        </div>
      );
    };
    \`\`\`
    Заключение

    Higher Order Components предоставляют инструмент для повышения переиспользуемости компонентов и добавления функциональности. При правильном использовании они помогают улучшить структуру и модульность твоего кода в приложении на React.
  `;

  return (
      <div>
        <div id="top" style={{ position: 'relative', top: 0 }}></div>
          <Typography title="Hoc">
              {exampleText}
          </Typography>
          <ButtonUp />
      </div>
  );
  }
export default Hoc;
