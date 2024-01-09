"use client";

function CreateBookForm() {
  const createBook = async () => {
    const data = {
      name: "아몬드",
      authorName: "손원평",
    };
    await fetch(`${window.location.origin}/api/books`, {
      method: "POST",
      body: JSON.stringify(data),
    });
  };

  return (
    <form onSubmit={(e) => e.preventDefault()} className="border-t mt-8 pt-8">
      <input
        type="text"
        className="border border-black"
        placeholder="책 제목"
      />
      <input type="text" className="border border-black" placeholder="작가명" />
      <button onClick={createBook}>책 만들기</button>
    </form>
  );
}

export default CreateBookForm;
