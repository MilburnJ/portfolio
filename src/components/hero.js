const Hero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-full text-center">
      <h1 className="text-5xl font-bold text-gray-800">Your Name</h1>
      <p className="mt-4 text-lg text-gray-600">Aspiring Machine Learning Engineer</p>
      <div className="mt-6 flex space-x-4">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourprofile"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hero;
