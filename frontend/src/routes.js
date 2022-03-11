import { Route, Routes } from "react-router-dom";
import Listing from "./pages/listing";
import Form from "./pages/form";
export default function RoutesApp() {
    return (
        <Routes>
            <Route element={<Listing />} path="/" exact />
            <Route path="/form">
                <Route path=":movieId" element={<Form />} />
            </Route>
        </Routes>
    )
} 