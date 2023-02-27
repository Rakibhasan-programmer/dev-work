import './App.css';
import AdminPackage from './Components/AdminPackage/AdminPackage';
import TopUp from './Components/TopUp/TopUp';
import UserPackage from './Components/UserPackage/UserPackage';
import Verification from './Components/Verification/Verification';

function App() {
  return (
    <>
      <TopUp />
      <AdminPackage />
      <Verification />
      <UserPackage />
    </>
  );
}

export default App;
