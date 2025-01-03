import Image from "../img/martin.png";
export const About = () => {
  return (
    <>
      <div className="w-screen md:flex justify-center">
        <div
          id="about"
          className="relative flex flex-col max-w-screen-xl md:flex-row"
        >
          <div className="absolute bg-brand-dark/70 text-brand p-10 flex flex-col justify-center h-screen md:relative md:w-1/2 ">
            <h1 className="mb-10">
              Din Plats För Träning, Utveckling och Framgång!{" "}
            </h1>
            <p className="leading-relaxed ">
              Mitt mål är enkelt – att hjälpa dig att nå din fulla potential
              genom skräddarsydda träningsprogram, personlig träning och online
              coachning. Oavsett om du vill komma i form, utveckla dina
              färdigheter inom kampsport eller få bättre hälsa, är jag här för
              att coacha dig på vägen mot framgång
            </p>
            <label className="mt-10">På hemsidan kan du ta del av</label>
            <ul className="list-disc pl-5 space-y-2 leading-relaxed">
              <li>
                <i> Träningsprogram för alla nivåer: </i> Skräddarsydda program
                för nybörjare och erfarna utövare inom kampsport, styrka,
                kondition och självförsvar – anpassade efter dina mål och tempo.
              </li>
              <li>
                <i> Personlig Träning (PT): </i> Boka en PT-session med en
                erfaren tränare som hjälper dig att maximera din träning och nå
                dina mål snabbare. Oavsett om du vill bygga muskler, förbättra
                din teknik eller få skräddarsydd vägledning, är våra PT-tjänster
                designade för att ge dig fokus och resultat.
              </li>
              <li>
                <i>Online Coachning:</i> Flexibel vägledning där du får stöd
                från våra tränare oavsett var du befinner dig. Så att du kan
                fortsätta utvecklas och träna på dina egna villkor.
              </li>
            </ul>
            <p className="leading-relaxed mt-5">
              Vår <b> vision</b> är att vara en plats där du hittar motivation,
              stöd och expertkunskap – oavsett om du är nybörjare eller erfaren.
              Vi tror på att bygga långsiktiga resultat, både fysiskt och
              mentalt, genom engagerande och välplanerade träningslösningar
            </p>
          </div>
          <div className="md:w-1/2 flex justify-end">
            <img src={Image} alt="bild på Martin" className="h-screen w-auto" />
          </div>
        </div>
      </div>
    </>
  );
};
