import { useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    Dialog,
    DialogActions,
    DialogContent,
    ListItemButton,
    ListItemText,
    Stack,
    useMediaQuery,
    useTheme,
} from "@mui/material";

interface MultiSelectDialogProps {
    value: string[];
    onChange: (v: string[]) => void;
    options: string[];
    label: string;
}

const MultiSelectDialog: React.FC<MultiSelectDialogProps> = ({
    value,
    onChange,
    options,
    label,
}) => {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("sm"));
    const [dialogOpen, setDialogOpen] = useState<boolean>(false);
    const [dialogValue, setDialogValue] = useState<string[]>(value ?? []);

    useEffect(() => {
        setDialogValue(value);
    }, [value]);

    const handleItemClick = (option: string) => () => {
        if (dialogValue.includes(option)) {
            setDialogValue(dialogValue.filter((v) => v !== option));
        } else {
            setDialogValue([...dialogValue, option]);
        }
    };

    const handleCancel = () => {
        setDialogOpen(false);
    };

    const handleSubmit = () => {
        onChange(dialogValue);
        handleCancel();
    };

    return (
        <Stack spacing={2} sx={{ width: 300 }}>
            <Button
                variant="contained"
                onClick={() => setDialogOpen(true)}
                sx={{ width: "inherit" }}
            >
                {label}
            </Button>
            <Dialog open={dialogOpen} fullScreen={matches}>
                <DialogContent>
                    {options.map((option) => (
                        <ListItemButton
                            dense
                            disableGutters
                            key={option}
                            onClick={handleItemClick(option)}
                        >
                            <Checkbox checked={dialogValue.includes(option)} />
                            <ListItemText primary={option} />
                        </ListItemButton>
                    ))}
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleCancel}>Cancel</Button>
                    <Button variant="contained" onClick={handleSubmit}>
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
            {value.length > 0 && (
                <Button onClick={() => onChange([])} sx={{ width: "inherit" }}>
                    Reset
                </Button>
            )}
        </Stack>
    );
};

export default MultiSelectDialog;
