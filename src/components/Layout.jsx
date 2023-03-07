export default function Layout({ children }) {
  return (
    <main className="px-6 py-12 w-full max-w-xl flex flex-col items-center mx-auto">
      {children}
    </main>
  );
}
