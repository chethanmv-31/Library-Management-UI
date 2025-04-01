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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
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

  return (
    <Card className="shadow-lg bg-white rounded-lg px-6">
      <CardContent className="p-8">
        <h2 className="text-2xl mb-10">Create New Book</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Box
            display="grid"
            gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }}
            gap={4}
          >
            <Box className="space-y-1">
              <h4 className="mb-1 font-medium text-gray-700">
                Title <span className="text-red-500">*</span>
              </h4>
              <TextField
                required
                fullWidth
                name="title"
                value={formData.title}
                onChange={handleInputChange}
                className="bg-gray-50 rounded-md"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Price <span className="text-red-500">*</span>
              </h4>
              <TextField
                required
                fullWidth
                name="price"
                value={formData.price}
                onChange={handleInputChange}
                className="bg-gray-50"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Number of Copies <span className="text-red-500">*</span>
              </h4>
              <TextField
                required
                fullWidth
                type="number"
                name="no_of_copies"
                value={formData.no_of_copies}
                onChange={handleInputChange}
                className="bg-gray-50"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                ISBN Number <span className="text-red-500">*</span>
              </h4>
              <TextField
                required
                fullWidth
                name="isbn_no"
                value={formData.isbn_no}
                onChange={handleInputChange}
                className="bg-gray-50"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Edition <span className="text-red-500">*</span>
              </h4>
              <TextField
                required
                fullWidth
                name="edition"
                value={formData.edition}
                onChange={handleInputChange}
                className="bg-gray-50"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
              />
            </Box>

            <Box>
              <CustomAutocomplete
                label="Publisher Name"
                value={formData.publisherName || ""}
                options={options.publishers}
                required={true}
                onChange={(value) => handleAutocompleteChange(
                  'publisherName',
                  'publisher_id',
                  options.publishers,
                  value
                )}
                placeholder="Select or type publisher name"
              />
            </Box>

            <Box>
              <CustomAutocomplete
                label="Author Name"
                value={formData.authorName || ""}
                options={options.authors}
                required={true}
                onChange={(value) => handleAutocompleteChange(
                  'authorName',
                  'author_id',
                  options.authors,
                  value
                )}
                placeholder="Select or type author name"
              />
            </Box>

            <Box>
              <CustomAutocomplete
                label="Category Name"
                value={formData.categoryName || ""}
                options={options.categories}
                required={true}
                onChange={(value) => handleAutocompleteChange(
                  'categoryName',
                  'category_id',
                  options.categories,
                  value
                )}
                placeholder="Select or type category name"
              />
            </Box>

            <Box>
              <CustomAutocomplete
                label="Binding Type"
                value={formData.bindingName || ""}
                options={options.bindings}
                required={true}
                onChange={(value) => handleAutocompleteChange(
                  'bindingName',
                  'binding_id',
                  options.bindings,
                  value
                )}
                placeholder="Select or type binding type"
              />
            </Box>

            <Box>
              <CustomAutocomplete
                label="Shelf Number"
                value={formData.shelfNo?.toString() || ""}
                options={SHELF_OPTIONS}
                required={true}
                onChange={(value) => handleAutocompleteChange(
                  'shelfNo',
                  'shelf_id',
                  SHELF_OPTIONS,
                  value
                )}
                placeholder="Select or type shelf number"
              />
            </Box>

            <Box>
              <CustomAutocomplete
                label="Floor Number"
                value={formData.floorNo?.toString() || ""}
                options={FLOOR_OPTIONS}
                required={true}
                onChange={(value) => handleAutocompleteChange(
                  'floorNo',
                  'floor_id',
                  FLOOR_OPTIONS,
                  value
                )}
                placeholder="Select or type floor number"
              />
            </Box>

            <Box>
              <h4 className="mb-1 font-medium text-gray-700">
                Language <span className="text-red-500">*</span>
              </h4>
              <TextField
                required
                fullWidth
                name="language"
                value={formData.language}
                onChange={handleInputChange}
                className="bg-gray-50"
                variant="outlined"
                size="small"
                InputLabelProps={{ shrink: true }}
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
