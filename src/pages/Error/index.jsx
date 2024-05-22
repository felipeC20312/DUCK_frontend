import { quantum } from 'ldrs';

quantum.register();

const Error = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '1rem',
      }}>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '.5rem',
        }}>
        <h1>404</h1>
        <p>Page not Found...</p>
      </div>
      <br />
      <l-quantum size='120' speed='3' color='white'></l-quantum>
    </div>
  );
};

export default Error;
