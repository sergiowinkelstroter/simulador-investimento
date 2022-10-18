import { useState } from "react";
import { AiOutlineCalendar } from "react-icons/ai";
export const App = () => {
  const [capital, setCapital] = useState(0);
  const [juros, setJuros] = useState(0);
  const [mensal, setMensal] = useState(0);
  const [periodo, setPeriodo] = useState(0);
  const [valorInvestido, setValorInvestido] = useState(0);
  const [jurosAcumulado, setJurosAcumulado] = useState(0);
  const [total, setTotal] = useState(0);
  const [modalResult, setModalResult] = useState(false);

  let Vtotal;

  const handleCalculator = () => {
    console.log(capitalT);
    let investido = Number(capitalT) + mensal * periodo;
    setValorInvestido(investido);

    Vtotal = Number(investido) + Number(jct);
    setTotal(Vtotal);
    setModalResult(true);
  };

  const handleClear = () => {
    setCapital("");
    setJuros("");
    setMensal("");
    setPeriodo("");
    location.reload();
  };

  return (
    <div className="w-[70%] bg-[#1D152A] text-white m-auto flex flex-col items-center  p-5 rounded-xl mt-12 shadow">
      <h1 className="text-2xl font-semibold">Simulador de investimento</h1>
      <main className="bg-[#302544] w-full flex flex-col  rounded-xl p-4 mt-3 border gap-2">
        <div className="flex">
          <div className="flex flex-col rounded w-[50%]">
            <span className="">Capital inicial</span>
            <div className="flex mt-1 ">
              <span className="bg-[#00de81] text-[#1d152a] p-2 text-lg font-semibold">
                R$
              </span>
              <input
                className="bg-[#564968] outline-none pl-2 font-semibold text-lg"
                type="text"
                onChange={(e) => setCapital(e.target.value)}
                value={capital}
              />
            </div>
          </div>
          <div className="flex flex-col rounded w-[50%]">
            <span className="">Taxa de juros</span>
            <div className="flex mt-1">
              <span className="bg-[#00de81] text-[#1d152a] p-2 text-lg font-semibold">
                %
              </span>
              <input
                className="bg-[#564968] outline-none pl-2 font-semibold text-lg"
                type="text"
                onChange={(e) => setJuros(e.target.value)}
                value={juros}
              />
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="flex flex-col rounded w-[50%]">
            <span className="">Valor mensal</span>
            <div className="flex mt-1">
              <span className="bg-[#00de81] text-[#1d152a] p-2 text-lg font-semibold">
                R$
              </span>
              <input
                className="bg-[#564968] outline-none pl-2 font-semibold text-lg"
                type="text"
                onChange={(e) => setMensal(e.target.value)}
                value={mensal}
              />
            </div>
          </div>
          <div className="flex flex-col rounded w-[50%]">
            <span className="">Periodo</span>
            <div className="flex mt-1">
              <span className="bg-[#00de81] text-[#1d152a] p-2 text-lg font-semibold">
                <AiOutlineCalendar size={26} />
              </span>
              <input
                className="bg-[#564968] outline-none pl-2 font-semibold text-lg"
                type="text"
                onChange={(e) => setPeriodo(e.target.value)}
                value={periodo}
              />
            </div>
          </div>
        </div>
      </main>
      <div className="flex w-full justify-evenly mt-6 font-semibold">
        <button
          className="bg-[#564968] rounded p-2 hover:opacity-50"
          onClick={handleCalculator}
        >
          Calcular
        </button>
        <button
          className="text-[#00de81] hover:opacity-50"
          onClick={handleClear}
        >
          Limpar
        </button>
      </div>
      {modalResult && (
        <div className="bg-[#302544] w-full rounded-md flex flex-col gap-4 p-4 mt-6">
          <h2>Resultado</h2>
          <div className="flex gap-4">
            <div className="bg-[#564968] w-full rounded-md flex flex-col items-center p-4">
              <h4>Valor investido</h4>
              <p>R$ {valorInvestido}</p>
            </div>
            <div className="bg-[#564968] w-full rounded-md flex flex-col items-center p-4">
              <h4>Juros acumulado</h4>
              <p>R$ {jurosAcumulado}</p>
            </div>
            <div className="bg-[#564968] w-full rounded-md flex flex-col items-center p-4">
              <h4>Valor total final</h4>
              <p>R$ {total}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
