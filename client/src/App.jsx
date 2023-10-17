import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function App ()
{
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <h1 className="text-3xl font-bold underline">
          Hello world!
        </h1> } />
      </Routes>
    </BrowserRouter>
  )
}