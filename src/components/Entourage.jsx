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
    male: "Mr. Jeremy Garcia",
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
    female: "Ms. Liza Agilando",
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
      className="px-4 py-10 xl:px-40 min-h-screen bg-motif-grey text-xs xl:text-base text-brown flex flex-col bg-cover bg-center bg-no-repeat"
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
          <h4 className="text-base xl:text-lg font-bold font-libre">
            Our Loving Parents
          </h4>
          <div className="flex gap-4 xl:gap-10 w-full justify-center mt-2">
            <div className="text-right flex-1">
              <h5 className="font-semibold font-libre">Parents of the Groom</h5>
              <div>
                <p>
                  Mr. Amado M. de Guzman
                  <CgCross className="inline mb-1" />
                </p>
                <p>Mrs. Breatriz L. de Guzman</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Parents of the Bride</h5>
              <div>
                <p>Mr. Jose Nilo D. Paguio</p>
                <p>Mrs. Brenda II B. Paguio</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-up flex flex-col items-center justify-center mt-4 xl:mt-8">
          <h5 className="font-semibold font-libre">Principal Sponsors</h5>
          {principalSponsors.map((sponsor, index) => (
            <div key={index} className="flex gap-4 xl:gap-10 w-full">
              <p className="flex-1 text-right">{sponsor.male}</p>
              <p className="flex-1">{sponsor.female}</p>
            </div>
          ))}
        </div>
        <div className="down-up flex gap-4 xl:gap-10 justify-center mt-4 xl:mt-8">
          <div className="text-right flex-1">
            <h5 className="font-semibold font-libre">Best Man</h5>
            <div>
              <p>Mr. Raymond Gallos</p>
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-semibold font-libre">Maid of Honor</h5>
            <div>
              <p>Ms. Thyrza Kay Paguio</p>
            </div>
          </div>
        </div>
        <div className="down-up flex gap-4 xl:gap-10 justify-center mt-4 xl:mt-8">
          <div className="text-right flex-1">
            <h5 className="font-semibold font-libre">Groomsmen</h5>
            <div>
              {groomsmenBridesmaids.map((groomsman) => (
                <p key={groomsman.male}>{groomsman.male}</p>
              ))}
            </div>
          </div>
          <div className="flex-1">
            <h5 className="font-semibold font-libre">Bridesmaids</h5>
            <div>
              {groomsmenBridesmaids.map((bridesmaid) => (
                <p key={bridesmaid.female}>{bridesmaid.female}</p>
              ))}
            </div>
          </div>
        </div>
        <div className="down-up flex flex-col items-center justify-center mt-4 xl:mt-8">
          <h5 className="text-base xl:text-lg font-semibold font-libre">
            Secondary Sponsors
          </h5>
          <div className="text-center flex flex-col xl:flex-row gap-2 mt-2 w-full xl:px-96">
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Candle Sponsors</h5>
              <div>
                <p>Mr. John Carlo Amaro</p>
                <p>Ms. Aiza Marie Tanay</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Veil Sponsors</h5>
              <div>
                <p>Mr. Marcus Henric Montes</p>
                <p>Ms. Angelica Bianca Soriao</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Cord Sponsors</h5>
              <div>
                <p>Mr. Ace Bryan de Guzman</p>
                <p>Ms. Rachelle Megan Salunga</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-up flex flex-col items-center justify-center mt-4 xl:mt-8">
          <h5 className="text-base xl:text-lg font-semibold font-libre">
            To Carry our Symbols of Love
          </h5>
          <div className="text-center flex flex-col xl:flex-row gap-2 mt-2 w-full xl:px-96">
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Ring Bearer</h5>
              <div>
                <p>Jin Kenzo Jose</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Bible Bearer</h5>
              <div>
                <p>Brent Rhoven Nagrampa</p>
              </div>
            </div>
            <div className="flex-1">
              <h5 className="font-semibold font-libre">Coin Bearer</h5>
              <div>
                <p>Israel Kristoff Sakay</p>
              </div>
            </div>
          </div>
        </div>
        <div className="down-up text-center mt-2">
          <h5 className="font-semibold font-libre">Flower Girls</h5>
          <div className="text-center">
            <p>Cassandra Rane Manalili</p>
            <p>Maxine Luna Panopio</p>
            <p>Cecilia Olivia Sarmiento</p>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Entourage;
