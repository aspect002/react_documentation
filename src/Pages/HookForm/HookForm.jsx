
import React from "react";
import Typography from "../../Components/Typography/Typography";
import ButtonUp from 'Utils/ButtonUp/ButtonUp';
const HookForm = () => {
  const exampleText = `React Hook Form — это библиотека для управления формами в React, которая делает процесс обработки форм простым и эффективным. Она использует хуки, чтобы упрощать управление состоянием формы, валидацию и сбор данных. Вот основные аспекты, которые стоит знать о React Hook Form:

  Основные особенности React Hook Form
  *Простота использования:
  *React Hook Form предоставляет простой API для управления состоянием формы и валидацией.
  *Производительность:
  *Библиотека минимизирует количество рендеров, что делает ее более производительной по сравнению с другими решениями для управления формами.
  *Интеграция с валидацией:
  *Поддерживает интеграцию с библиотеками валидации, такими как Yup и Joi, что позволяет легко настраивать правила валидации.
  *Поддержка нестандартных компонентов:
  *Вы можете использовать любые пользовательские компоненты и интегрировать их с React Hook Form.
  *Управление состоянием:
  *Состояние формы управляется непосредственно библиотекой, что уменьшает необходимость в локальном состоянии.

  ~Чтобы установить React Hook Form
  \`\`\`
  npm install react-hook-form
  \`\`\`

  ~Основные концепции
Использование useForm:
*Хук useForm предоставляет методы для управления формой.
\`\`\`
import { useForm } from 'react-hook-form';

const MyForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input {...register("username", { required: true })} />
            {errors.username && <span>This field is required</span>}

            <button type="submit">Submit</button>
        </form>
    );
};
\`\`\`
~Регистрация полей:
*Поля формы регистрируются с помощью метода register. Вы можете передать в него имя поля и правила валидации.
Обработка отправки формы:
*Используйте handleSubmit, чтобы обработать отправку формы. Этот метод берет вашу функцию обработчика и добавляет валидацию.
Валидация:
*Вы можете передавать правила валидации в метод register. Например, для обязательного поля:
\`\`\`
<input {...register("age", { required: true, min: 18 })} />
\`\`\`
`


  return (
    <div>
        <div id="top" style={{ position: 'relative', top: 0 }}></div>
        <Typography title="HookForm">
            {exampleText}
        </Typography>
        <ButtonUp />
    </div>
);
};

export default HookForm;
