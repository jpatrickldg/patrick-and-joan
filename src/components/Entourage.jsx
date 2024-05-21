import { qna } from "../data";
import bgImage from "../assets/images/Edited-19.jpg";
import { CgCross } from "react-icons/cg";
const principalSponsors = [
  {
    male: "Mr. Danilo Belmonte",
    female: "Mrs. Carmel Arines",
  },
  {
    male: "Mr. Orlando Belmonte Jr.",
    female: "Mrs. Maribel Belmonte",
  },
  {
    male: "Mr. Arnold Felipe",
    female: "Ms. Maria Theresa Paguio",
  },
  {
    male: "Mr. Jun Ganac",
    female: "Mrs. Cherry Ganac",
  },
  {
    male: "Mr. Jerryme Garcia",
    female: "Mrs. Maria Nancy Garcia",
  },
  {
    male: "Mr. Erwin Jose",
    female: "Mrs. Nenita Jose",
  },
  {
    male: "Mr. Peter Lagdaan",
    female: "Mrs. Mary Kathleen Sarmiento",
  },
  {
    male: "Dr. Pedro Lora Jr.",
    female: "Dr. Ligaya Lora",
  },
  {
    male: "Mr. Amante Malit",
    female: "Mrs. Jasmin Malit",
  },
  {
    male: "Mr. Kennedy Sabiniano",
    female: "Mrs. Wilma Sabiniano",
  },
];

const groomsmenBridesmaids = [
  {
    male: "Mr. Mark Anthony Espinoza",
    female: "Ms. Myrel Anne Manalili",
  },
  {
    male: "Mr. Kevin Kallos",
    female: "Ms. Liza Aguilando",
  },
  {
    male: "Mr. Jezreel Paguio",
    female: "Ms. Jan Kaila Paguio",
  },
  {
    male: "Mr. Jabriel Pascua",
    female: "Ms. Diane Kristel Marciales",
  },
];

const Entourage = () => {
  return (
    <section
      id="entourage"
      className="px-4 py-10 xl:px-40 xl:py-24 min-h-screen text-[10px] xl:text-base text-brown flex flex-col bg-cover bg-center bg-no-repeat"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      // }}
    >
      <div className="down-up flex flex-col items-center">
        <h2 className="text-2xl xl:text-4xl font-bold font-libre">
          DE GUZMAN - PAGUIO
        </h2>
        <span className="font-homemade text-2xl xl:text-5xl mt-1 xl:mt-2">
          Nuptials
        </span>
      </div>
      <div className="flex-1 w-full flex-col justify-center items-center mt-4">
        <div className="down-up flex flex-col items-center justify-center">
          <h4 className="text-xs md:text-lg font-bold font-libre">
            Our Loving Parents
          </h4>
          <div className="flex gap-4 xl:gap-10 w-full justify-center mt-2">
            <div className="text-right flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Parents of the Groom
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>
                  Mr. Amado M. de Guzman
                  <CgCross className="inline mb-1" />
                </p>
                <p>Mrs. Breatriz L. de Guzman</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Parents of the Bride
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Mr. Jose Nilo D. Paguio</p>
                <p>Mrs. Brenda II B. Paguio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-up flex flex-col items-center justify-center mt-4 xl:mt-8">
          <h5 className="font-semibold font-libre text-xs md:text-lg">
            Principal Sponsors
          </h5>
          {principalSponsors.map((sponsor, index) => (
            <div
              key={index}
              className="flex gap-4 xl:gap-10 w-full text-[11px] leading-4 md:text-sm xl:text-base"
            >
              <p className="flex-1 text-right">{sponsor.male}</p>
              <p className="flex-1">{sponsor.female}</p>
            </div>
          ))}
        </div>
        <div className="down-up flex gap-4 xl:gap-10 justify-center mt-4 xl:mt-8">
          <div className="text-right flex-1">
            <h5 className="font-semibold font-libre text-xs md:text-lg">
              Best Man
            </h5>
            <div className="text-xs md:text-sm xl:text-base">
              <p>Mr. Raymond Gallos</p>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-semibold font-libre text-xs md:text-lg">
              Maid of Honor
            </h5>
            <div className="text-xs md:text-sm xl:text-base">
              <p>Ms. Thyrza Kay Paguio</p>
            </div>
          </div>
        </div>
        <div className="down-up flex gap-4 xl:gap-10 justify-center mt-4 xl:mt-8">
          <div className="text-right flex-1">
            <h5 className="font-semibold font-libre text-xs md:text-lg">
              Groomsmen
            </h5>
            <div className="text-xs md:text-sm xl:text-base">
              {groomsmenBridesmaids.map((groomsman) => (
                <p key={groomsman.male}>{groomsman.male}</p>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-semibold font-libre text-xs md:text-lg">
              Bridesmaids
            </h5>
            <div className="text-xs md:text-sm xl:text-base">
              {groomsmenBridesmaids.map((bridesmaid) => (
                <p key={bridesmaid.female}>{bridesmaid.female}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="down-up flex flex-col items-center justify-center mt-4 xl:mt-8">
          <h5 className="text-xs md:text-lg font-semibold font-libre">
            Secondary Sponsors
          </h5>
          <div className="text-center flex flex-col xl:flex-row gap-2 mt-2 w-full xl:px-96">
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Candle Sponsors
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Mr. John Carlo Amaro</p>
                <p>Ms. Aiza Marie Tanay</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Veil Sponsors
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Mr. Marcus Henric Montes</p>
                <p>Ms. Angelica Bianca Soriao</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Cord Sponsors
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Mr. Ace Bryan de Guzman</p>
                <p>Ms. Rachelle Megan Salunga</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-up flex flex-col items-center justify-center mt-4 xl:mt-8">
          <h5 className="text-xs md:text-lg font-semibold font-libre">
            To Carry our Symbols of Love
          </h5>
          <div className="text-center flex flex-col xl:flex-row gap-2 mt-2 w-full xl:px-96">
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Ring Bearer
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Jin Kenzo Jose</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Bible Bearer
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Brent Rhoven Nagrampa</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre text-xs md:text-lg">
                Coin Bearer
              </h5>
              <div className="text-xs md:text-sm xl:text-base">
                <p>Israel Kristoff Sakay</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-up text-center mt-2">
          <h5 className="font-semibold font-libre text-xs md:text-lg">
            Flower Girls
          </h5>
          <div className="text-center text-xs md:text-sm xl:text-base">
            <p>Cassandra Rane Manalili</p>
            <p>Maxine Luna Panopio</p>
            <p>Zoe Ysabelle Ramos</p>
            <p>Cecilia Olivia Sarmiento</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Entourage;
