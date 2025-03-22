import Image from "next/image";

export default function ContributionSuccess() {
  return (
    <div className="bg-white rounded-lg shadow-sm grid items-center justify-center">
      <div className="text-center ">
        <h2 className="text-2xl font-semibold text-gray-800">Thank you For your Submission</h2>
        <Image
          src="/assets/verified.svg"
          alt="Verified"
          width={80}
          height={80}
          className="mx-auto mb-16 mt-16" 
        />
        <p className="text-gray-600">You will be contacted shortly</p>
      </div>
    </div>
  );
}
