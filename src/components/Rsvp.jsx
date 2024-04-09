const Rsvp = () => {
  return (
    <section
      id="rsvp"
      className="min-h-screen max-w-4xl mx-auto flex flex-col gap-4 xl:gap-10 items-center justify-center px-4 py-10 xl:px-40 xl:py-20"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        RSVP
      </h2>
      <div className="down-up flex flex-col gap-4 xl:gap-8 text-justify">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScZpNoEd5sfCPWVxs726BnGaVl8mZsWJOHWok9XW6-7O7MnDA/viewform?embedded=true"
          width="640"
          height="625"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading…
        </iframe>
      </div>
    </section>
  );
};
export default Rsvp;
