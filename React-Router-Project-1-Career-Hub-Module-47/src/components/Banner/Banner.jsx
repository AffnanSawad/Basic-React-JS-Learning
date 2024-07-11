

const Banner = () => {
    return (
        <div className="hero bg-blue-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      src="https://i.ibb.co/KrX4GQT/close-up-photo-young-successful-business-man-black-suit.jpg"
      className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="text-5xl font-bold">Job Huner</h1>
      <p className="py-6 w-1/2">
        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
        quasi. In deleniti eaque aut repudiandae et a id nisi.
      </p>
      <button className="btn btn-error">Get Started</button>
    </div>
  </div>
</div>
    );
};

export default Banner;