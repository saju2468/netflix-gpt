import AuthForm from "./AuthForm";

const Banner = () => {
  return (
    <section className="relative min-h-screen w-full flex items-center justify-center pt-24 pb-12 px-4">
      {/* Background Banner with Dark Gradient Overlay */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <img
          className="h-full w-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/5aa70728-e223-472f-9230-babd8f6ba166/web/IN-en-20261019-TRIFECTA-perspective_79fa76c2-2cb2-4d20-8de2-f696f3b6131e_large.jpg"
          alt="Netflix Banner Background"
        />
        <div className="absolute inset-0 bg-black/60 bg-gradient-to-t from-black via-black/50 to-black/80" />
      </div>

      {/* Centered Authentication Form */}
      <div className="w-full flex justify-center z-10">
        <AuthForm />
      </div>
    </section>
  );
};

export default Banner;

