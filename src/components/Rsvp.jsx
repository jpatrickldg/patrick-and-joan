const Rsvp = () => {
  return (
    <section
      id="rsvp"
      className="min-h-screen w-full flex flex-col gap-4 xl:gap-10 items-center justify-center px-4 py-10 xl:px-40 xl:py-20"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        RSVP
      </h2>
      <div className="flex-1 w-full">
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScZpNoEd5sfCPWVxs726BnGaVl8mZsWJOHWok9XW6-7O7MnDA/viewform?embedded=true"
          width="100%"
          height="800"
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
