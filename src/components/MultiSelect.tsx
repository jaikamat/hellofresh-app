import {
    Button,
    Checkbox,
    FormControl,
    InputLabel,
    ListItemText,
    MenuItem,
    OutlinedInput,
    Select,
    SelectChangeEvent,
    Stack,
} from "@mui/material";

interface Props {
    value: string[];
    onChange: (v: string[]) => void;
    options: string[];
}

const MultiSelect: React.FC<Props> = ({ value, onChange, options }) => {
    const handleChange = ({
        target: { value },
    }: SelectChangeEvent<string[]>) => {
        onChange(typeof value === "string" ? value.split(",") : value);
    };

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <FormControl sx={{ width: "inherit" }}>
                <InputLabel id="multiple-select">Select</InputLabel>
                <Select
                    id="multiple-select"
                    labelId="multiple-select"
                    multiple
                    value={value}
                    onChange={handleChange}
                    input={<OutlinedInput label="Select" />}
                    renderValue={(selected) => selected.join(", ")}
                >
                    {options.map((option) => (
                        <MenuItem key={option} value={option}>
                            <Checkbox checked={value.includes(option)} />
                            <ListItemText primary={option} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <Button
                variant="outlined"
                onClick={() => onChange([])}
                sx={{ width: "inherit" }}
            >
                Reset
            </Button>
        </Stack>
    );
};

export default MultiSelect;
