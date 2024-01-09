import Page from "@/components/Page";
import { supabaseForClient } from "@/supabase/supabase.client";
import Book from "./_components/Book";
import CreateBookForm from "./_components/CreateBookForm";

async function BooksPage() {
  const books = await supabaseForClient
    .from("books")
    .select("*")
    .then((response) => response.data);

  return (
    <Page>
      <ul className="grid gap-y-5 grid-cols-2 gap-x-4 w-full">
        {books.map((book: any) => (
          <Book key={book.id} book={book} />
        ))}
      </ul>

      <CreateBookForm />
    </Page>
  );
}

export default BooksPage;
