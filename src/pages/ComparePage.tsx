import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Zap, Gauge, Cpu, ArrowRight } from 'lucide-react';

const ComparePage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto px-4 text-white">
      
      {/* Título */}
      <h1 className="text-3xl font-bold text-center mb-4 text-shadow">
        Ford Bronco Raptor vs Jeep Wrangler Rubicon
      </h1>

      {/* Subtítulo */}
      <p className="text-center text-gray-300 mb-10 max-w-2xl mx-auto">
        Comparação entre dois dos SUVs off-road mais extremos do mercado.
        Enquanto o Wrangler mantém a tradição, o Bronco Raptor eleva o nível
        com mais potência, tecnologia e desempenho.
      </p>

      {/* Cards */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* FORD */}
        <div className="racing-card border-2 border-f1-red p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-f1-red">
            Ford Bronco Raptor
          </h2>

          <div className="space-y-3">

            <div className="flex items-center gap-2">
              <Zap />
              <span>Motor: 3.0 V6 Biturbo</span>
            </div>

            <div className="flex items-center gap-2">
              <Gauge />
              <span>~420 cv | 0–100 em ~5.7s</span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu />
              <span>FOX Racing + múltiplos modos off-road</span>
            </div>

            <div className="mt-4 p-3 bg-red-500/10 border border-red-500 rounded-lg">
              <span className="font-semibold text-f1-red">
                Destaque:
              </span>{' '}
              desempenho superior e tecnologia moderna para off-road extremo.
            </div>

          </div>
        </div>

        {/* JEEP */}
        <div className="racing-card border-2 border-gray-500 p-6 rounded-xl">
          <h2 className="text-xl font-bold mb-4 text-gray-400">
            Jeep Wrangler Rubicon
          </h2>

          <div className="space-y-3">

            <div className="flex items-center gap-2">
              <Zap />
              <span>Motor: 3.6 V6 aspirado</span>
            </div>

            <div className="flex items-center gap-2">
              <Gauge />
              <span>~285 cv | 0–100 em ~8–9s</span>
            </div>

            <div className="flex items-center gap-2">
              <Cpu />
              <span>Off-road raiz e mecânica tradicional</span>
            </div>

            <div className="mt-4 p-3 bg-gray-500/10 border border-gray-500 rounded-lg">
              <span className="font-semibold text-gray-300">
                Limitação:
              </span>{' '}
              menor potência e menos tecnologia comparado ao Bronco.
            </div>

          </div>
        </div>
      </div>

      {/* Comparação direta */}
      <div className="mt-10 racing-card border border-gray-700 p-6 rounded-xl">
        <h3 className="text-xl font-bold mb-4">
          Comparação direta
        </h3>

        <ul className="space-y-2 text-gray-300">
          <li>• O Bronco Raptor entrega mais potência e aceleração</li>
          <li>• Suspensão FOX garante melhor desempenho em alta velocidade off-road</li>
          <li>• O Wrangler é mais tradicional, porém menos tecnológico</li>
          <li>• Ford oferece melhor equilíbrio entre performance e controle</li>
        </ul>
      </div>

      {/* Conclusão */}
      <div className="mt-6 text-center text-gray-300 max-w-2xl mx-auto">
        <p>
          O Jeep Wrangler continua sendo uma referência no off-road,
          mas o Ford Bronco Raptor se destaca como uma evolução moderna,
          entregando mais potência, mais tecnologia e melhor desempenho geral.
        </p>
      </div>

      {/* Botões */}
      <div className="mt-10 flex justify-center gap-4">
        
        <button
          onClick={() => navigate("/")}
          className="border border-blue-400 text-blue-300 px-6 py-3 rounded-full font-bold hover:bg-blue-400/10 transition"
        >
          ← Voltar
        </button>

        <button
          onClick={() => navigate("/app/race")}
          className="racing-btn-red flex items-center gap-2 px-6 py-3 rounded-full font-bold"
        >
          <span>Ir para corrida</span>
          <ArrowRight />
        </button>

      </div>

      {/* Footer opcional */}
      <div className="mt-16 text-center text-gray-500 text-sm">
        Ford Racing Simulator © 2026
      </div>

    </div>
  );
};

export default ComparePage;