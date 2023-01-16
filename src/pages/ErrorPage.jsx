import "../Styles/error-page.css";
const ErrorPage = () => {
  return (
    <div className="error-page">
      <h1>Page Not Found</h1>
      <p>We could not find what you were looking for.</p>
      <p>
        Please contact the owner of the site that linked you to the original URL
        and let them know their link is broken.
      </p>
    </div>
  );
};

export default ErrorPage;
