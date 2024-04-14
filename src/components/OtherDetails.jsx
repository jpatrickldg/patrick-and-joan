const OtherDetails = () => {
  return (
    <section
      id="other-details"
      className="min-h-screen flex flex-col gap-4 xl:gap-10 items-center justify-center px-4 py-10 xl:px-40 xl:py-24"
    >
      <h2 className="down-up text-3xl xl:text-5xl font-bold font-homemade">
        Other Details
      </h2>
      <div className="flex flex-col gap-8 xl:gap-16">
        <div className="down-up text-center max-w-xl mx-auto">
          <h3 className="font-libre font-bold text-xl xl:text-2xl">Attire</h3>
          <div className="space-y-1 mt-4">
            <p>At least below the knee elegant dress for the ladies</p>
            <p>Formal attire for the gentlemen</p>
            <p>
              We encourage everyone to arrive in their appropriate attire for
              our most awaited day
            </p>
            <div className="flex gap-1 justify-center">
              <div className="bg-[#b8bab7] rounded-full w-10 h-10" />
              <div className="bg-[#fbc4b1] rounded-full w-10 h-10" />
              <div className="bg-[#f9b69f] rounded-full w-10 h-10" />
              <div className="bg-[#e7d3c3] rounded-full w-10 h-10" />
              <div className="bg-[#afb6aa] rounded-full w-10 h-10" />
            </div>
          </div>
        </div>
        <div className="down-up text-center max-w-xl mx-auto">
          <h3 className="font-libre font-bold text-xl xl:text-2xl">Gifts</h3>
          <div className="space-y-1 mt-4">
            <p>
              Your presence, joy, and companionship on our wedding day mean the
              world to us.
            </p>
            <p>
              Nevertheless, if you would like to celebrate with a gift, a
              donation to our savings fund would be truly appreciated.
            </p>
          </div>
        </div>
        <div className="down-up text-center max-w-xl mx-auto">
          <p className="font-libre font-semibold text-lg xl:text-xl">
            Help us capture our special day using our hashtag:
          </p>
          <div className="space-y-1 mt-4">
            <h3 className="font-bold text-3xl">#nararaPATkayJO</h3>
          </div>
        </div>
        <div className="down-up text-center max-w-xl mx-auto">
          <h3 className="font-libre font-bold text-xl xl:text-2xl">
            Have any concerns?
          </h3>
          <div className="space-y-1 mt-4">
            <p>
              You may contact me at:{" "}
              <span className="font-semibold">+63 908 6102431 (Patrick)</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OtherDetails;
