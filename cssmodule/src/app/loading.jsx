const Loading = () => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-blue-500 border-t-transparent"></div>
        <p className="text-xl font-semibold text-blue-500">
          Loading.......
        </p>
      </div>
    </div>
  );
};

export default Loading;