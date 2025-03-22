import { useCallback } from "react";
import { useForm, Controller } from "react-hook-form";
import ContributionSuccess from "./ContributionSuccess";
import {
  Checkbox,
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
} from "@mui/material";

// Types
interface ContributionFormData {
  bookName: string;
  authorName: string;
  category: string;
  language: string;
  reason: string;
  formats: {
    hardCopy: boolean;
    eBook: boolean;
    audioBook: boolean;
  };
  bookLink?: string;
}

interface ContributionFormProps {
  onSubmit: (formData: ContributionFormData) => void;
}

// Reusable styled components
const StyledSelect = ({ value, onChange, onBlur, error, children }: any) => (
  <FormControl fullWidth error={!!error}>
    <Select
      value={value}
      displayEmpty
      onChange={onChange}
      onBlur={onBlur}
      sx={{
        borderRadius: "30px",
        height: "50px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderRadius: "30px",
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: "#E76F51",
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: "#E76F51",
        },
        "& .MuiSelect-select": {
          paddingLeft: "20px",
        },
        "& .MuiMenuItem-root:hover": {
          backgroundColor: "#E76F51",
          color: "white",
        },
      }}
      MenuProps={{
        PaperProps: {
          sx: {
            borderRadius: "15px",
            marginTop: "8px",
            "& .MuiMenuItem-root": {
              padding: "12px 20px",
            },
            "& .MuiMenuItem-root.Mui-selected": {
              backgroundColor: "#E76F51",
              color: "white",
            },
            "& .MuiMenuItem-root.Mui-selected:hover": {
              backgroundColor: "#E76F51",
            },
          },
        },
      }}
    >
      {children}
    </Select>
  </FormControl>
);

const StyledCheckbox = ({
  label,
  checked,
  onChange,
  error,
}: {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
  error?: boolean;
}) => (
  <label className="flex items-center">
    <span className="w-[96px] min-w-[90px]">{label}</span>
    <Checkbox
      checked={checked}
      onChange={(e) => onChange(e.target.checked)}
      sx={{
        color: error ? "#ef4444" : "#E76F51",
        "&.Mui-checked": {
          color: error ? "#ef4444" : "#E76F51",
        },
        padding: "4px",
      }}
    />
  </label>
);

export default function ContributionForm({ onSubmit }: ContributionFormProps) {
  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitSuccessful, isSubmitted },
    setValue,
    reset,
    watch,
  } = useForm<ContributionFormData>({
    defaultValues: {
      bookName: "",
      authorName: "",
      category: "",
      language: "",
      reason: "",
      formats: {
        hardCopy: false,
        eBook: false,
        audioBook: false,
      },
      bookLink: "",
    },
    mode: "onTouched",
  });

  const formats = watch("formats");
  const hasAtLeastOneFormat = Object.values(formats).some((value) => value);

  const handleFormatChange = useCallback(
    (format: keyof ContributionFormData["formats"], checked: boolean) => {
      setValue(`formats.${format}`, checked, {
        shouldValidate: true,
        shouldDirty: true,
      });
    },
    [setValue]
  );

  const onSubmitForm = useCallback(
    (data: ContributionFormData) => {
      onSubmit(data);
      reset();
    },
    [onSubmit, reset]
  );

  if (isSubmitSuccessful) {
    return <ContributionSuccess />;
  }

  return (
    <div className="bg-white p-6 pr-12 pl-12 rounded-lg shadow-sm">
      <h2 className="text-2xl mb-10">Fill up Book Details</h2>
      <form onSubmit={handleSubmit(onSubmitForm)} className="space-y-7">
        <div className="flex gap-8">
          <div className="w-[65%]">
            <Controller
              name="bookName"
              control={control}
              rules={{
                required: "Book name is required",
                minLength: {
                  value: 2,
                  message: "Book name must be at least 2 characters",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Book name"
                    className={`w-full p-3 border rounded-lg ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="w-[30%]">
            <Controller
              name="category"
              control={control}
              rules={{
                required: "Please select a category",
              }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <StyledSelect
                    value={field.value}
                    onChange={(e: SelectChangeEvent) =>
                      field.onChange(e.target.value)
                    }
                    onBlur={field.onBlur}
                    error={error}
                  >
                    <MenuItem value="">
                      <em>Category</em>
                    </MenuItem>
                    <MenuItem value="fiction">Fiction</MenuItem>
                    <MenuItem value="non-fiction">Non-Fiction</MenuItem>
                    <MenuItem value="technical">Technical</MenuItem>
                  </StyledSelect>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-[65%]">
            <Controller
              name="authorName"
              control={control}
              rules={{
                required: "Author name is required",
                minLength: {
                  value: 2,
                  message: "Author name must be at least 2 characters",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <input
                    {...field}
                    type="text"
                    placeholder="Author Name"
                    className={`w-full p-3 border rounded-lg ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div className="w-[30%]">
            <Controller
              name="language"
              control={control}
              rules={{
                required: "Please select a language",
              }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <StyledSelect
                    value={field.value}
                    onChange={(e: SelectChangeEvent) =>
                      field.onChange(e.target.value)
                    }
                    onBlur={field.onBlur}
                    error={error}
                  >
                    <MenuItem value="">
                      <em>Language</em>
                    </MenuItem>
                    <MenuItem value="english">English</MenuItem>
                    <MenuItem value="spanish">Spanish</MenuItem>
                    <MenuItem value="french">French</MenuItem>
                  </StyledSelect>
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>
        </div>

        <div className="flex gap-8">
          <div className="w-[65%]">
            <Controller
              name="reason"
              control={control}
              rules={{
                required: "Please provide a reason for contribution",
                minLength: {
                  value: 10,
                  message: "Reason should be at least 10 characters long",
                },
              }}
              render={({ field, fieldState: { error } }) => (
                <div>
                  <textarea
                    {...field}
                    placeholder="Reason For Your Contribution"
                    className={`w-full p-3 border rounded-lg h-32 ${
                      error ? "border-red-500" : "border-gray-300"
                    }`}
                  />
                  {error && (
                    <p className="text-red-500 text-sm mt-1">{error.message}</p>
                  )}
                </div>
              )}
            />
          </div>

          <div>
            <p className="font-medium">Available Format</p>
            <div>
              <Controller
                name="formats.hardCopy"
                control={control}
                render={({ field }) => (
                  <StyledCheckbox
                    label="Hard Copy"
                    checked={field.value}
                    onChange={field.onChange}
                    error={isSubmitted && !hasAtLeastOneFormat && !!errors.formats}
                  />
                )}
              />
              <Controller
                name="formats.eBook"
                control={control}
                render={({ field }) => (
                  <StyledCheckbox
                    label="E - Book"
                    checked={field.value}
                    onChange={field.onChange}
                    error={isSubmitted && !hasAtLeastOneFormat && !!errors.formats}
                  />
                )}
              />
              <Controller
                name="formats.audioBook"
                control={control}
                render={({ field }) => (
                  <StyledCheckbox
                    label="Audio book"
                    checked={field.value}
                    onChange={field.onChange}
                    error={isSubmitted && !hasAtLeastOneFormat && !!errors.formats}
                  />
                )}
              />
            </div>
            {isSubmitted && !hasAtLeastOneFormat && (
              <p className="text-red-500 text-sm mt-1">Please select at least one format</p>
            )}
          </div>
        </div>
            {(formats.eBook || formats.audioBook) && (
              <div className="mt-4">
                <Controller
                  name="bookLink"
                  control={control}
                  rules={{
                    required: formats.eBook || formats.audioBook ? "Book link is required" : false,
                    pattern: {
                      value: /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/,
                      message: "Please enter a valid URL"
                    }
                  }}
                  render={({ field, fieldState: { error } }) => (
                    <div>
                      <input
                        {...field}
                        type="url"
                        placeholder="Book Link"
                        className={`w-full p-3 border rounded-lg ${
                          error ? 'border-red-500' : 'border-gray-300'
                        }`}
                      />
                      {error && (
                        <p className="text-red-500 text-sm mt-1">{error.message}</p>
                      )}
                    </div>
                  )}
                />
              </div>
            )}

        <button
          type="submit"
          className="w-1/4 bg-[#E76F51] mt-6 text-white py-3 rounded-lg hover:bg-[#E76F51]/90 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
