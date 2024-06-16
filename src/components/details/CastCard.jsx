function CastCard() {
  return (
    <div className="card w-fit rounded-[6px] shadow-md bg-[#173d7727] text-white">
      <img
        src="https://media.themoviedb.org/t/p/w276_and_h350_face/tgCkGE0LIggyjMmgSwHhpZAkfJs.jpg"
        className="rounded-[6px_6px_0_0] min-w-[140px] h-[170px]"
        alt="Name"
      />
      <div className="pt-2 pb-3 px-3">
        <h4 className="font-semibold"> Owen Teague</h4>
        <p className="opacity-60">Noa</p>
      </div>
    </div>
  );
}

export default CastCard;
