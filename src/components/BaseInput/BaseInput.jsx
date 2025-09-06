import { StyledInput, StyledTextarea } from "./BaseInput.styled";

const BaseInput = ({
  tag = "input",
  id,
  name,
  placeholder = "",
  type = "text",
  error = false,
  onChange,
  value,
  style,
  ...props
}) => {
//    Выбираем компонент в зависимости от тега, на случай, если нужна textarea
  const Component = tag === "textarea" ? StyledTextarea : StyledInput;
  return (
    <Component
      id={id}
      name={name}
      type={type}
      placeholder={placeholder}
      $error={error}
      onChange={onChange}
      value={value}
      style={style}
      {...props}
    />
  );
};

export default BaseInput;
