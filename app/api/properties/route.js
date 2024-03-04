import connectDb from "@/config/database";

export const GET = async (request) => {
  try {
    await connectDb();
    return new Response("Hi bro", { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response("Something wrong", { status: 500 });
  }
};
