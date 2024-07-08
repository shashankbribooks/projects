export default async function getUsers() {
  const result = await fetch(
    "https://66327210c51e14d695647a1b.mockapi.io/post"
  );
  return result.json();
}
