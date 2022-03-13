import { Route, Routes } from "react-router-dom";
import Listing from "./pages/listing";
import ToAssess from "./pages/toAssess";
export default function RoutesApp() {
    return (
        <Routes>
            <Route element={<Listing />} path="/" exact />
            <Route path="/form">
                <Route path=":movieId" element={<ToAssess />} />
            </Route>
        </Routes>
    )
} 