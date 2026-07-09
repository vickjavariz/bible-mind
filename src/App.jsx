import { PlusIcon } from "@/components/icons";

export default function App() {
  return (
    <>
      <main className="max-w-4xl mx-auto mt-4 px-4">
        <div className="card shadow-sm w-full">
          <h1 className="text-4xl">Bible Mind</h1>

          <div className="w-full mt-10">
            <p className="text-center mb-5">Add a verse to start memorizing!</p>
            <button className="btn btn-primary w-full text-2xl" type="button">
              <PlusIcon />
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
