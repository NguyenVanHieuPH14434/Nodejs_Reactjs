import { Routes, Route } from 'react-router-dom';
import Transaction from './components/Transaction/Transaction';
import Producer from './components/Producer/Producer';
import Consignment from './components/Consignment/Consignment';
import Storage from './components/Storage/Storage';
import Pharmacy from './components/Pharmarcy/Pharmacy';
import Management from './components/Management/Management';
const Router = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Producer />}></Route>
                <Route path="/transaction" element={<Transaction />}></Route>
                <Route path="/producer" element={<Producer />}></Route>
                <Route path="/consignment" element={<Consignment />}></Route>
                <Route path="/storage" element={<Storage />}></Route>
                <Route path="/pharmacy" element={<Pharmacy />}></Route>
                <Route path="/management" element={<Management />}></Route>
            </Routes>
        </>
    );
};
export default Router;
