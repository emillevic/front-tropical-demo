import MyComponent from "../components/01-atoms/MyComponent";

export default function Home() {
  const items = ["Olá", "Mundo"];

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <MyComponent className="bg-sky-100 hover:bg-[#cc0000]">
        <ul>
          {!!items.length && items.map((item, key) => <li key={key}>{item}</li>)}
        </ul>
      </MyComponent>
    </main>
  );
}
