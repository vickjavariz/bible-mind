export default function App() {
  return (
    <>
      <main className='max-w-4xl mx-auto mt-4 px-4'>
        <div className='card shadow-sm w-full'>
          <h1 className='text-4xl'>Bible Mind</h1>

          <div className='w-full mt-10'>
            <p className='text-center mb-5'>Add a verse to start memorizing!</p>
            <button className='btn btn-primary w-full text-xl' type='button'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                stroke-width='2.75'
                stroke-linecap='round'
                stroke-linejoin='round'
                class='lucide lucide-plus-icon lucide-plus'
              >
                <path d='M5 12h14' />
                <path d='M12 5v14' />
              </svg>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
