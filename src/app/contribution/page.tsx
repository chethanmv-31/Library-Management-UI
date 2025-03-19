'use client';

import ContributionForm from '@/components/ContributionForm';
import ContributionInfo from '@/components/ContributionInfo';

export default function ContributionPage() {
  const handleSubmit = (formData: any) => {
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <div className="min-h- p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Left side - Form */}
        
        <ContributionForm onSubmit={handleSubmit} />

        {/* Right side - Contribution Info */}
        <ContributionInfo />
      </div>
    </div>
  );
} 