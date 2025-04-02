"use client";
import React, { useState, useEffect } from "react";
import { TextField, Box } from "@mui/material";
import { Card, CardContent } from "@mui/material";
import CustomAutocomplete from "../common/CustomAutocomplete";
import { fetchPublishers } from "../../services/publisherService";
import { fetchAuthors } from "../../services/authorService";
import { getCategories } from "@/services/categoryService";
import { fetchBindings } from "@/services/bindingService";
import {BookFormData} from "@/types";
import { useForm, Controller } from "react-hook-form";

// Add these constants outside the component
const SHELF_OPTIONS = [
  { label: "Shelf 1", value: "1" },
  { label: "Shelf 2", value: "2" },
  { label: "Shelf 3", value: "3" },
  { label: "Shelf 4", value: "4" },
  { label: "Shelf 5", value: "5" },
  { label: "Shelf 6", value: "6" },
];

const FLOOR_OPTIONS = [
  { label: "Ground Floor", value: "0" },
  { label: "First Floor", value: "1" },
  { label: "Second Floor", value: "2" },
  { label: "Third Floor", value: "3" },
  { label: "Fourth Floor", value: "4" },
  { label: "Fifth Floor", value: "5" },
];

const CreateBookForm: React.FC = () => {
  const [formData, setFormData] = useState<BookFormData>({
    title: "",
    price: "",
    no_of_copies: 0,
    isbn_no: "",
    edition: "",
    publisher_id: 0,
    author_id: 0,
    binding_id: 0,
    category_id: 0,
    shelf_id: 0,
    floor_id: 0,  // Initialize the new field
    language: "",
  });  

  const [options, setOptions] = useState<Record<string, Option[]>>({
    publishers: [],
    authors: [],
    categories: [],
    bindings: [],
  });

  const fetchOptions = async (
    fetchFn: () => Promise<any>,
    key: string,
    labelKey: string,
    valueKey: string = "id"
  ) => {
    try {
      const data = await fetchFn();
      const mappedData = data.map((item: any) => ({
        label: item[labelKey],
        value: item[valueKey].toString(),
      }));  
      setOptions((prev) => ({ ...prev, [key]: mappedData }));
    } catch (error) {
      console.error(`Error fetching ${key}:`, error);
    }  
  };  

  useEffect(() => {
    fetchOptions(fetchPublishers, "publishers", "publisher_name");
    fetchOptions(fetchAuthors, "authors", "author_Name", "Id");
    fetchOptions(getCategories, "categories", "category_name");
    fetchOptions(fetchBindings, "bindings", "binding_name");
  }, []);  

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));  
  };  



  console.log("formData---", formData);
  type Option = { label: string; value: string };


  const handleAutocompleteChange = (
    field: keyof BookFormData,
    idField: keyof BookFormData,
    options: Option[],
    value: string
  ) => {
    const selectedOption = options.find((opt) => opt.value === value);
    setFormData((prev) => ({
      ...prev,
      [idField]: selectedOption ? parseInt(value) : 0,
      [field]: selectedOption ? undefined : value,
    }));
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>();

  const onSubmit = async (data: BookFormData) => {
    console.log(data);
    // Your submission logic here
  };

  return (
    <Card className="shadow-lg bg-white rounded-lg px-6">
      <CardContent className="p-8">
        <h2 className="text-2xl mb-10">Create New Book</h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={4}
          >
            <Box className="space-y-1">
              <h4 className="mb-1 font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </h4>
              <Controller
                name="title"
                control={control}
                rules={{ required: "Title is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errors.title}
                    helperText={errors.title?.message}
                    className="bg-gray-50 rounded-md"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Price <span className="text-red-500">*</span>
              </h4>
              <Controller
                name="price"
                control={control}
                rules={{ 
                  required: "Price is required",
                  pattern: {
                    value: /^\d+(\.\d{1,2})?$/,
                    message: "Please enter a valid price"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errors.price}
                    helperText={errors.price?.message}
                    className="bg-gray-50"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Number of Copies <span className="text-red-500">*</span>
              </h4>
              <Controller
                name="no_of_copies"
                control={control}
                rules={{ 
                  required: "Number of copies is required",
                  min: {
                    value: 1,
                    message: "Must have at least 1 copy"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    type="number"
                    fullWidth
                    error={!!errors.no_of_copies}
                    helperText={errors.no_of_copies?.message}
                    className="bg-gray-50"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                ISBN Number <span className="text-red-500">*</span>
              </h4>
              <Controller
                name="isbn_no"
                control={control}
                rules={{ 
                  required: "ISBN number is required",
                  pattern: {
                    value: /^(?=(?:\D*\d){10}(?:(?:\D*\d){3})?$)[\d-]+$/,
                    message: "Please enter a valid ISBN number"
                  }
                }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errors.isbn_no}
                    helperText={errors.isbn_no?.message}
                    className="bg-gray-50"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Edition <span className="text-red-500">*</span>
              </h4>
              <Controller
                name="edition"
                control={control}
                rules={{ required: "Edition is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errors.edition}
                    helperText={errors.edition?.message}
                    className="bg-gray-50"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="publisher_id"
                control={control}
                rules={{ required: "Publisher is required" }}
                render={({ field }) => (
                  <CustomAutocomplete
                    label="Publisher Name"
                    value={field.value?.toString() || ""}
                    options={options.publishers}
                    required={true}
                    onChange={(value) => {
                      field.onChange(value);
                      handleAutocompleteChange(
                        'publisherName',
                        'publisher_id',
                        options.publishers,
                        value
                      );
                    }}
                    error={!!errors.publisher_id}
                    helperText={errors.publisher_id?.message}
                    placeholder="Select or type publisher name"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="author_id"
                control={control}
                rules={{ required: "Author is required" }}
                render={({ field }) => (
                  <CustomAutocomplete
                    label="Author Name"
                    value={field.value?.toString() || ""}
                    options={options.authors}
                    required={true}
                    onChange={(value) => {
                      field.onChange(value);
                      handleAutocompleteChange(
                        'authorName',
                        'author_id',
                        options.authors,
                        value
                      );
                    }}
                    error={!!errors.author_id}
                    helperText={errors.author_id?.message}
                    placeholder="Select or type author name"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="category_id"
                control={control}
                rules={{ required: "Category is required" }}
                render={({ field }) => (
                  <CustomAutocomplete
                    label="Category Name"
                    value={field.value?.toString() || ""}
                    options={options.categories}
                    required={true}
                    onChange={(value) => {
                      field.onChange(value);
                      handleAutocompleteChange(
                        'categoryName',
                        'category_id',
                        options.categories,
                        value
                      );
                    }}
                    error={!!errors.category_id}
                    helperText={errors.category_id?.message}
                    placeholder="Select or type category name"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="binding_id"
                control={control}
                rules={{ required: "Binding type is required" }}
                render={({ field }) => (
                  <CustomAutocomplete
                    label="Binding Type"
                    value={field.value?.toString() || ""}
                    options={options.bindings}
                    required={true}
                    onChange={(value) => {
                      field.onChange(value);
                      handleAutocompleteChange(
                        'bindingName',
                        'binding_id',
                        options.bindings,
                        value
                      );
                    }}
                    error={!!errors.binding_id}
                    helperText={errors.binding_id?.message}
                    placeholder="Select or type binding type"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="shelf_id"
                control={control}
                rules={{ required: "Shelf number is required" }}
                render={({ field }) => (
                  <CustomAutocomplete
                    label="Shelf Number"
                    value={field.value?.toString() || ""}
                    options={SHELF_OPTIONS}
                    required={true}
                    onChange={(value) => {
                      field.onChange(value);
                      handleAutocompleteChange(
                        'shelfNo',
                        'shelf_id',
                        SHELF_OPTIONS,
                        value
                      );
                    }}
                    error={!!errors.shelf_id}
                    helperText={errors.shelf_id?.message}
                    placeholder="Select or type shelf number"
                  />
                )}
              />
            </Box>

            <Box>
              <Controller
                name="floor_id"
                control={control}
                rules={{ required: "Floor number is required" }}
                render={({ field }) => (
                  <CustomAutocomplete
                    label="Floor Number"
                    value={field.value?.toString() || ""}
                    options={FLOOR_OPTIONS}
                    required={true}
                    onChange={(value) => {
                      field.onChange(value);
                      handleAutocompleteChange(
                        'floorNo',
                        'floor_id',
                        FLOOR_OPTIONS,
                        value
                      );
                    }}
                    error={!!errors.floor_id}
                    helperText={errors.floor_id?.message}
                    placeholder="Select or type floor number"
                  />
                )}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Language <span className="text-red-500">*</span>
              </h4>
              <Controller
                name="language"
                control={control}
                rules={{ required: "Language is required" }}
                render={({ field }) => (
                  <TextField
                    {...field}
                    fullWidth
                    error={!!errors.language}
                    helperText={errors.language?.message}
                    className="bg-gray-50"
                    variant="outlined"
                    size="small"
                  />
                )}
              />
            </Box>
          </Box>

          <Box gridColumn={{ xs: "1", md: "1 / span 2" }} className="mt-6">
            <button
              type="submit"
              className="w-1/4 bg-[#E76F51] mt-6 text-white py-3 rounded-lg hover:bg-[#E76F51]/90 transition-colors"
            >
              Create Book
            </button>
          </Box>
        </form>
      </CardContent>
    </Card>
  );
};

export default CreateBookForm;
