export default function NotFound() {
  return (
    <div className="not-found h-full w-full flex flex-col items-center justify-center">
      <div className="h-72 w-max-w-[330px] mx-auto">
        <div className="image-wrapper max-w-sm mx-auto">
          <img
            alt="not-found"
            className="notFoundImage object-cover h-full w-full"
            src="/images/notFound.gif"
          />
        </div>
        <h1 className="text-4xl font-semibold text-center">404</h1>
        <h2 className="text-3xl font-medium text-center">
          Look like you&apos;re lost
        </h2>
        <p className="text-sm capitalize text-center">
          the page you are looking for not available!
        </p>
      </div>
    </div>
  );
}
