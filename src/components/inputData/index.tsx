// MUI X
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
// MUI CORE
import Grid from "@mui/material/Unstable_Grid2";
import {
  TextField,
  Autocomplete,
  Button,
  Stack,
  FormControl,
  InputLabel,
  OutlinedInput,
  SxProps,
  Theme,
  MenuItem,
  Typography,
} from "@mui/material";

export type Option = {
  readonly label: string;
  readonly value: string | number;
};

interface InputProps {
  name_id?: string;
  descLabel: string;
  descPlaceholder?: string;
  col_xs: number;
  col_sm?: number;
  col_md: number;
  col_lg: number;
  col_xl?: number;
  read_only?: boolean;
  disabled?: boolean;
}

interface InputDataProps extends InputProps {
  type?: string;
  input_props?: any;
}

interface InputDateProps extends InputProps {
  value: Date | null;
  setValue(newValue: Date | null): void;
}

interface InputAutocompleteProps extends InputProps {
  isLoading?: boolean;
  options: readonly Option[];
}

interface InputTextareaProps extends InputProps {}

interface InputSelectProps extends InputDataProps {
  options: readonly Option[];
}

interface InputDataAdornmentsProps extends InputDataProps {
  positionStartAdornment?: React.ReactNode;
  positionEndAdornment?: React.ReactNode;
}

interface ButtonContainedProps extends InputProps {
  style?: SxProps<Theme>;
  container_style?: SxProps<Theme>;
}

interface ButtonSubmitCancelProps {
  idSalvar?: string;
  idCancelar?: string;
}

const InputData = (props: InputDataProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      placeholder={props.descPlaceholder}
      type={props.type}
      disabled={props.disabled}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        readOnly: props.read_only,
        ...props.input_props,
      }}
    />
  </Grid>
);

const InputDate = (props: InputDateProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <DatePicker
      label={props.descLabel}
      //format="dd/MM/yyyy"
      readOnly={props.read_only}
      //value={props.value}
      //onChange={(newValue) => props.setValue(newValue)}
      slotProps={{
        textField: {
          InputLabelProps: { shrink: true },
          inputProps: { id: props.name_id, name: props.name_id },
        },
      }}
    />
  </Grid>
);

const InputAutocomplete = (props: InputAutocompleteProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <Autocomplete
      disablePortal
      id={props.name_id}
      options={props.options}
      loading={props.isLoading}
      renderInput={(params) => (
        <TextField
          {...params}
          label={props.descLabel}
          placeholder={
            props.descPlaceholder != null
              ? props.descPlaceholder
              : "Selecionar..."
          }
          InputLabelProps={{ shrink: true }}
        />
      )}
    />
  </Grid>
);

const InputTextarea = (props: InputTextareaProps) => (
  <Grid xs={props.col_xs} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      multiline
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      placeholder={props.descPlaceholder}
      rows={4}
      InputLabelProps={{
        shrink: true,
      }}
    />
  </Grid>
);

const InputDataAdornments = (props: InputDataAdornmentsProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <FormControl fullWidth>
      <InputLabel htmlFor={props.name_id} shrink>
        {props.descLabel}
      </InputLabel>
      <OutlinedInput
        id={props.name_id}
        name={props.name_id}
        label={props.descLabel}
        placeholder={props.descPlaceholder}
        type={props.type}
        startAdornment={props.positionStartAdornment}
        endAdornment={props.positionEndAdornment}
        readOnly={props.read_only}
        inputProps={{ ...props.input_props }}
      />
    </FormControl>
  </Grid>
);

const InputSelect = (props: InputSelectProps) => (
  <Grid xs={props.col_xs} sm={props.col_sm} md={props.col_md} lg={props.col_lg}>
    <TextField
      fullWidth
      select
      id={props.name_id}
      name={props.name_id}
      label={props.descLabel}
      disabled={props.disabled}
      defaultValue={-1}
      InputLabelProps={{
        shrink: true,
      }}
      inputProps={{
        readOnly: props.read_only,
        ...props.input_props,
      }}
    >
      <MenuItem disabled value={-1}>
        <Typography variant="inherit" color="action.disabled">
          {props.descPlaceholder != null
            ? props.descPlaceholder
            : "Selecionar..."}
        </Typography>
      </MenuItem>
      {props.options.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  </Grid>
);

const ButtonContained = (props: ButtonContainedProps) => (
  <Grid
    xs={props.col_xs}
    sm={props.col_sm}
    md={props.col_md}
    lg={props.col_lg}
    sx={props.container_style}
  >
    <Button id={props.name_id} sx={props.style} variant="contained" fullWidth>
      {props.descLabel}
    </Button>
  </Grid>
);

const ButtonsSubmitCancel = (props: ButtonSubmitCancelProps) => (
  <Grid>
    <Stack spacing={2} direction="row">
      <Button id={props.idSalvar} variant="contained">
        Salvar
      </Button>
      <Button id={props.idCancelar} variant="contained">
        Cancelar
      </Button>
    </Stack>
  </Grid>
);

export {
  InputData,
  InputDate,
  InputAutocomplete,
  InputTextarea,
  ButtonsSubmitCancel,
  ButtonContained,
  InputDataAdornments,
  InputSelect
};
