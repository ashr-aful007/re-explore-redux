

function App() {


  return (
    <div className="h-screen flex w-full justify-center items-center">
      <div className="flex border p-10 border-purple-300 rounded-md bg-gray-300">
        <button className="px-3 py-2 rounded-md bg-green-500 text-xl font-semibold text-white">increment</button>
        <h1 className="text-3xl mx-10">0</h1>
        <button className="px-3 py-2 rounded-md bg-red-500 text-xl font-semibold text-white">DeCrement</button>
      </div>
    </div>
  )
}

export default App
