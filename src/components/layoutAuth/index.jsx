import SideBar from '../sideBar';

const LayoutAuth = ({ children }) => {
  return (
    <>
      <SideBar />
      <div>{children}</div>
    </>
  );
};

export default LayoutAuth;
