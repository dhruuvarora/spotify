// src/components/shared/PasswordInput.js

const TextInput = ({label , placeholder, value, setValue}) => {
    return (
        <div className="textInputDiv flex flex-col space-y-2 w-full">
            <label htmlFor={label} className="font-bold">{label}</label>
            <input
                type="password"
                placeholder={placeholder}
                className="p-2 border border-gray-400 border-solid rounded placeholder-gray-600"
                id={label}
                value={value}
                onChange={(e)=>{
                    setValue(e.target.value)
                }}
            />
        </div>
    );
};

export default TextInput;
