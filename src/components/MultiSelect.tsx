interface Props {
    value: string[];
    onChange: (v: string[]) => void;
    options: string[];
}

const MultiSelect: React.FC<Props> = ({ value, onChange, options }) => {
    return (
        <>
            <div className="SelectContainer">
                <select
                    id="recipes"
                    className="Select"
                    multiple
                    value={value}
                    onChange={(e) => {
                        const val = Array.from(
                            e.target.selectedOptions,
                            (opt) => opt.value
                        );
                        onChange(val);
                    }}
                >
                    {options.map((option) => {
                        return (
                            <option value={option} key={option}>
                                {option}
                            </option>
                        );
                    })}
                </select>
            </div>
            <div>
                <button className="Button" onClick={() => onChange([])}>
                    Reset
                </button>
            </div>
        </>
    );
};

export default MultiSelect;
