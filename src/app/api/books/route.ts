export async function POST(request: Request) {
  const data = await request.json();
  console.log("data", data);

  // await supabaseForServer
  //   .from("books")
  //   .insert({ name: "foo", authorName: "bar" });
  return Response.json("hello world");
}
