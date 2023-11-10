
const TabData = ({ options, onChange, selectedOption }) => {
    const handleRadioChange = (index) => {
        onChange(index);
    };

    return (
        <div>
            {options.map((option, index) => (
                <div key={index} className="flex items-center mb-4">
                    <input
                        type="radio"
                        checked={selectedOption === index}
                        onChange={() => handleRadioChange(index)}
                    />
                    <label>{option}</label>
                </div>
            ))}
        </div>
    );
};

export default TabData;
