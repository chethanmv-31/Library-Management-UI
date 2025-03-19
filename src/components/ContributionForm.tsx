import { useState } from "react";
import ContributionSuccess from "./ContributionSuccess";

interface ContributionFormProps {
  onSubmit: (formData: any) => void;
}

interface ValidationErrors {
  bookName?: string;
  authorName?: string;
  category?: string;
  language?: string;
  reason?: string;
}

export default function ContributionForm({ onSubmit }: ContributionFormProps) {
  const [bookName, setBookName] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [category, setCategory] = useState("");
  const [language, setLanguage] = useState("");
  const [reason, setReason] = useState("");
  const [formats, setFormats] = useState({
    hardCopy: true,
    eBook: true,
    audioBook: true,
  });
  const [errors, setErrors] = useState<ValidationErrors>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: ValidationErrors = {};
    
    if (!bookName.trim()) {
      newErrors.bookName = "Book name is required";
    }
    
    if (!authorName.trim()) {
      newErrors.authorName = "Author name is required";
    }
    
    if (!category) {
      newErrors.category = "Please select a category";
    }
    
    if (!language) {
      newErrors.language = "Please select a language";
    }
    
    if (!reason.trim()) {
      newErrors.reason = "Please provide a reason for contribution";
    } else if (reason.length < 10) {
      newErrors.reason = "Reason should be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleBlur = (field: string) => {
    setTouched(prev => ({ ...prev, [field]: true }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setTouched({
      bookName: true,
      authorName: true,
      category: true,
      language: true,
      reason: true,
    });

    if (validateForm()) {
      onSubmit({
        bookName,
        authorName,
        category,
        language,
        reason,
        formats,
      });
      setIsSubmitted(true);
    }
  };

  if (isSubmitted) {
    return <ContributionSuccess />;
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-semibold mb-6">Fill up Book Details</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <input
            type="text"
            placeholder="Book name"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            onBlur={() => handleBlur('bookName')}
            className={`w-full p-3 border rounded-lg ${
              touched.bookName && errors.bookName 
                ? 'border-red-500' 
                : 'border-gray-300'
            }`}
          />
          {touched.bookName && errors.bookName && (
            <p className="text-red-500 text-sm mt-1">{errors.bookName}</p>
          )}
        </div>

        <div>
          <input
            type="text"
            placeholder="Author Name"
            value={authorName}
            onChange={(e) => setAuthorName(e.target.value)}
            onBlur={() => handleBlur('authorName')}
            className={`w-full p-3 border rounded-lg ${
              touched.authorName && errors.authorName 
                ? 'border-red-500' 
                : 'border-gray-300'
            }`}
          />
          {touched.authorName && errors.authorName && (
            <p className="text-red-500 text-sm mt-1">{errors.authorName}</p>
          )}
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              onBlur={() => handleBlur('category')}
              className={`w-full p-3 border rounded-lg ${
                touched.category && errors.category 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              }`}
            >
              <option value="">Category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="technical">Technical</option>
            </select>
            {touched.category && errors.category && (
              <p className="text-red-500 text-sm mt-1">{errors.category}</p>
            )}
          </div>

          <div>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              onBlur={() => handleBlur('language')}
              className={`w-full p-3 border rounded-lg ${
                touched.language && errors.language 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              }`}
            >
              <option value="">Lang</option>
              <option value="english">English</option>
              <option value="spanish">Spanish</option>
              <option value="french">French</option>
            </select>
            {touched.language && errors.language && (
              <p className="text-red-500 text-sm mt-1">{errors.language}</p>
            )}
          </div>
        </div>

        <div className="flex gap-5">
          <div className="w-96">
            <textarea
              placeholder="Reason For Your Contribution"
              value={reason}
              onChange={(e) => setReason(e.target.value)}
              onBlur={() => handleBlur('reason')}
              className={`w-[100%] p-3 border rounded-lg h-32 ${
                touched.reason && errors.reason 
                  ? 'border-red-500' 
                  : 'border-gray-300'
              }`}
            />
            {touched.reason && errors.reason && (
              <p className="text-red-500 text-sm mt-1">{errors.reason}</p>
            )}
          </div>

          <div className="space-y-2">
            <p className="font-medium">Available Format</p>
            <div className="space-y-2">
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formats.hardCopy}
                  onChange={(e) =>
                    setFormats({ ...formats, hardCopy: e.target.checked })
                  }
                  className="form-checkbox"
                />
                <span>Hard Copy</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formats.eBook}
                  onChange={(e) =>
                    setFormats({ ...formats, eBook: e.target.checked })
                  }
                  className="form-checkbox"
                />
                <span>E - Book</span>
              </label>
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formats.audioBook}
                  onChange={(e) =>
                    setFormats({ ...formats, audioBook: e.target.checked })
                  }
                  className="form-checkbox"
                />
                <span>Audio book</span>
              </label>
            </div>
          </div>
        </div>

        <button
          type="submit"
          className="w-full bg-[#E76F51] text-white py-3 rounded-lg hover:bg-[#E76F51]/90 transition-colors"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
