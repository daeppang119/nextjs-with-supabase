interface BookProps {
  book: {
    name: string;
    authorName: string;
  };
}

function Book({ book }: BookProps) {
  return (
    <li className="flex items-center border rounded-lg px-4 py-4 justify-between">
      <h6 className="text-lg font-medium text-black">{book.name}</h6>
      <span className="text-sm text-gray-700">{book.authorName}</span>
    </li>
  );
}

export default Book;
