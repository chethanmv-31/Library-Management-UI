import React from 'react';
import { Autocomplete, TextField, Box } from '@mui/material';

interface Option {
  label: string;
  value: string;
}

interface CustomAutocompleteProps {
  label: string;
  value: string;
  options: Array<{ label: string; value: string }>;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
  error?: boolean;
  helperText?: string;
}

const CustomAutocomplete: React.FC<CustomAutocompleteProps> = ({
  label,
  value,
  options,
  required = false,
  onChange,
  placeholder,
  error = false,
  helperText
}) => {
  // Convert "0" to empty string
  const displayValue = value === "0" ? "" : value;

  return (
    <div>
      <h4 className="mb-1 font-medium text-gray-700">
        {label} {required && <span className="text-red-500">*</span>}
      </h4>
      <Autocomplete
        freeSolo
        fullWidth
        value={options.find(opt => opt.value === displayValue) || displayValue}
        options={options}
        getOptionLabel={(option: string | Option) => {
          if (typeof option === 'string') {
            return option === "0" ? "" : option;
          }
          return option.label || '';
        }}
        isOptionEqualToValue={(option: Option, value: string | Option) => {
          if (typeof value === 'string') {
            return option.label === value;
          }
          return option.value === (value as Option).value;
        }}
        onChange={(event, newValue) => {
          if (typeof newValue === 'string') {
            onChange(newValue);
          } else if (newValue) {
            onChange(newValue.value);
          } else {
            onChange('');
          }
        }}
        onInputChange={(event, newInputValue) => {
          onChange(newInputValue);
        }}
        renderInput={(params) => (
          <TextField
            {...params}
            size="small"
            className="bg-gray-50"
            variant="outlined"
            placeholder={placeholder}
            error={error}
            helperText={helperText}
          />
        )}
      />
      {/* Remove the error message div since we're using TextField's built-in error display
      {error && helperText && (
        <p className="mt-1 text-sm text-red-500">{helperText}</p>
      )} */}
    </div>
  );
};

export default CustomAutocomplete;