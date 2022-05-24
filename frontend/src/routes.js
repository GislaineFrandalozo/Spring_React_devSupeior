import { Route, Routes, BrowserRouter } from "react-router-dom";
import { PageListing } from "./pages/listing";
import { PageToAssess } from "./pages/toAssess";

function RoutesApp() {
    return (
        <BrowserRouter>
        <Routes>
            <Route element={<PageListing />} path="/" exact />
            <Route path="/form">
                <Route path=":movieId" element={<PageToAssess />} />
            </Route>
        </Routes>
        </BrowserRouter>
    )
} 

export { RoutesApp }
