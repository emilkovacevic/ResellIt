interface InputProps {
    type: string;
    value?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    name: string;
    id: string;
    placeholder?: string;
    big?: boolean;
    onBlur?: () => void;
    error?: string;
  }
  
  const Input = ({
    type,
    value,
    onChange,
    name,
    id,
    placeholder,
    big,
    onBlur,
    error,
  }: InputProps) => {
    return (
      <div>
        <input
          id={id}
          type={type}
          onChange={onChange}
          value={value}
          name={name}
          placeholder={placeholder}
          onBlur={onBlur}
          className="w-full p-1 text-primary"
        />
        {error && <span style={{ color: 'red' }}>{error}</span>}
      </div>
    );
  };
  
  export default Input;
  