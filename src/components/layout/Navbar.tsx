import React from "react";
import {
  Avatar,
  Box,
  FormControl,
  InputAdornment,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import GTranslateIcon from "@mui/icons-material/GTranslate";
import { AccessTime, CalendarMonth } from "@mui/icons-material";

type AgeOption = 10 | 20 | 30;

// CustomSelect component
const CustomSelect = styled(Select)(({ theme }) => ({
  borderRadius: "30px 0 0 30px",
  borderColor: "lightgray",
  width: "102px",
  height: "49px",
  backgroundColor: "transparent",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "lightgray",
    },
    "&:hover fieldset": {
      borderColor: "lightgray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "lightgray",
    },
  },
  "& .MuiSelect-select": {
    padding: "8px 12px",
  },
  "& .MuiMenu-paper": {
    width: "120px",
    border: "none",
    boxShadow: "none",
  },
  "& .MuiPopover-paper": {
    border: "none",
  },
}));

// CustomSelectWithExtraStyle component
const CustomSelectWithExtraStyle = styled(CustomSelect)(({ theme }) => ({
  borderColor: "#FF5722",
  borderRadius: "30px",
  width: "150px",
  backgroundColor: "#F5F5F5",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#FF5722",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
  },
}));

const CustomSelectWithExtraWidth = styled(CustomSelect)(({ theme }) => ({
  borderColor: "#FF5722",
  borderRadius: "30px",
  width: "200px",
  backgroundColor: "#F5F5F5",
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#FF5722",
    },
    "&.Mui-focused fieldset": {
      borderColor: "transparent",
    },
  },
  "& .MuiSelect-select": {
    display: "flex",
    alignItems: "center",
  },
}));

// CustomTextField component
const CustomTextField = styled(TextField)(({ theme }) => ({
  borderColor: "lightgray",
  backgroundColor: "#fff",
  borderRadius: "0 30px 30px 0",
  width: "420px",
  "& .MuiOutlinedInput-root": {
    borderRadius: "0 30px 30px 0",
    "& fieldset": {
      borderColor: "lightgray",
    },
    "&:hover fieldset": {
      borderColor: "lightgray",
    },
    "&.Mui-focused fieldset": {
      borderColor: "lightgray",
    },
    "& input": {
      height: "49px", // Ensure the input fills the container
      padding: "0 14px", // Adjust padding as needed
      boxSizing: "border-box", // Ensure padding is considered in the height
    },
  },
}));

const Navbar: React.FC = () => {
  const [age, setAge] = React.useState<AgeOption>(10);

  const handleChange = (event: any) => {
    setAge(event.target.value as AgeOption);
  };

  const labels: Record<any, string> = {
    10: "All",
    20: "Twenty",
    30: "Thirty",
  };

  const now = new Date();
  const timeString = now.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const formattedDate = now
    .toLocaleDateString("en-GB", {
      day: "numeric",
      month: "short",
      year: "numeric",
    })
    .replace(/ /g, "-");

  return (
    <div className="flex justify-between mb-8">
      <Box sx={{ display: "flex", alignItems: "center" }}>
        <FormControl sx={{ m: 0, p: 0 }}>
          <CustomSelect
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={age}
            onChange={handleChange}
          >
            <MenuItem value={10}>All</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </CustomSelect>
        </FormControl>
        <CustomTextField
          id="outlined-basic"
          variant="outlined"
          size="medium"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <SearchIcon sx={{ color: "#F76B56" }} />
              </InputAdornment>
            ),
          }}
        />
      </Box>

      <FormControl sx={{ m: 0, p: 0 }}>
        <CustomSelectWithExtraStyle
          labelId="demo-simple-select-label-2"
          id="demo-simple-select-2"
          value={age}
          onChange={handleChange}
          renderValue={(selected: any) => (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <GTranslateIcon sx={{ color: "#FF5722", mr: 1 }} />
              {labels[selected]}
            </Box>
          )}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomSelectWithExtraStyle>
      </FormControl>

      <div className="flex justify-between items-center w-[450px] pl-[57px] pr-[57px] border border-[lightgray] rounded-[30px]">
        <div className="flex justify-between items-center gap-3">
          <AccessTime sx={{ color: "#FF5722" }} />
          <p className="font-digital text-[18px]">{timeString}</p>
        </div>
        <div className="flex justify-between items-center gap-3">
          <CalendarMonth sx={{ color: "#FF5722" }} />
          <p className="font-digital text-[18px]">{formattedDate}</p>
        </div>
      </div>

      <FormControl sx={{ m: 0, p: 0 }}>
        <CustomSelectWithExtraWidth
          labelId="demo-simple-select-label-3"
          id="demo-simple-select-3"
          value={age}
          onChange={handleChange}
          renderValue={(selected: any) => {
            // Map value to label

            return (
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Avatar
                  sx={{ width: 24, height: 24, mr: 1 }}
                  src="/path/to/avatar.jpg"
                  alt="Avatar"
                />
                {labels[selected]}
              </Box>
            );
          }}
        >
          <MenuItem value={10}>All</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </CustomSelectWithExtraWidth>
      </FormControl>
    </div>
  );
};

export default Navbar;
