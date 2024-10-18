import './style.scss';

export function UnAuthorized() {
  return (
    <>
      <div className="unauthorized-container">
        <h1>Unauthorized!</h1>
        <br />
        <br />
        <br />
        <h2>Oops! You're not supposed to be here!</h2>
        <br />
        <br />
        <br />
        <p>
          Looks like you took a wrong turn. Maybe try using your secret spy decoder ring to find the
          right path?
        </p>
      </div>
    </>
  );
}
