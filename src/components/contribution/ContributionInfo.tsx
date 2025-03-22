import Image from 'next/image';

interface BookContribution {
  title: string;
  author: string;
  year: number;
  readers: number;
  coverImage: string;
}

export default function ContributionInfo() {
  const previousContributions: BookContribution[] = [
    {
      title: "Don't Make Me think",
      author: "Steve Krug",
      year: 2000,
      readers: 14000,
      coverImage: "/assets/Rectangle 12.png"
    },
    {
      title: "The Design of Everyday Things",
      author: "Don Norman",
      year: 1988,
      readers: 14000,
      coverImage: "/assets/Rectangle 12.png"
    },
    {
      title: "Sprint: How to solve big problems",
      author: "Jake Knapp",
      year: 2000,
      readers: 14000,
      coverImage: "/assets/Rectangle 12.png"
    }
  ];

  return (
    <div>
      <h1 className="text-5xl font-bold mb-4  text-[#4D4D4D]">
        Your <span className="text-[#E76F51]">Contribution</span>
      </h1>
      <h2 className="text-5xl font-bold mb-12 text-[#4D4D4D]">Helps Other to Learn</h2>

      <div>
        <h3 className="text-1xl font-semibold mb-6 text-[#4D4D4D]">Your Previous Contributions</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {previousContributions.map((book, index) => (
            <div key={index} className="bg-white p-4 rounded-lg shadow-sm">
              <div className="relative h-48 mb-4">
                <Image
                  src={book.coverImage}
                  alt={book.title}
                  fill
                  className="object-fit rounded-lg"
                />
              </div>
              <h4 className="font-semibold text-sm mb-1 truncate">{book.title}</h4>
              <p className="text-sm text-gray-600">{book.author}, {book.year}</p>
              <p className="text-sm text-gray-500">{book.readers} Readers</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}