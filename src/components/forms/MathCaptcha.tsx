import React, { useState, useEffect, useCallback } from "react";

interface MathCaptchaProps {
  onVerify: (isValid: boolean) => void;
}

export default function MathCaptcha({ onVerify }: MathCaptchaProps) {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [userAnswer, setUserAnswer] = useState("");
  const [isVerified, setIsVerified] = useState(false);

  // Generar pregunta matemática aleatoria
  const generateQuestion = useCallback(() => {
    const operations = [
      { op: "+", fn: (a: number, b: number) => a + b },
      { op: "-", fn: (a: number, b: number) => a - b },
      { op: "×", fn: (a: number, b: number) => a * b }
    ];

    const operation = operations[Math.floor(Math.random() * operations.length)];
    const a = Math.floor(Math.random() * 10) + 1; // 1-10
    const b = Math.floor(Math.random() * 10) + 1; // 1-10

    // Para resta, asegurar que el resultado sea positivo
    const num1 = operation.op === "-" ? Math.max(a, b) : a;
    const num2 = operation.op === "-" ? Math.min(a, b) : b;

    const questionText = `${num1} ${operation.op} ${num2}`;
    const correctAnswer = operation.fn(num1, num2).toString();

    setQuestion(questionText);
    setAnswer(correctAnswer);
    setUserAnswer("");
    setIsVerified(false);
    onVerify(false);
  }, [onVerify]);

  // Generar pregunta inicial
  useEffect(() => {
    generateQuestion();
  }, [generateQuestion]);

  // Verificar respuesta
  const handleVerify = () => {
    const isValid = userAnswer.trim() === answer;
    setIsVerified(isValid);
    onVerify(isValid);
  };

  // Manejar cambio de input
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserAnswer(e.target.value);
    setIsVerified(false);
    onVerify(false);
  };

  // Manejar enter
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleVerify();
    }
  };

  return (
    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
      <div className="flex items-center gap-3">
        {/* Pregunta matemática */}
        <div className="flex-1">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Verificación de seguridad *
          </label>
          <div className="flex items-center gap-2">
            <span className="text-lg font-semibold text-gray-800">
              ¿Cuánto es {question}?
            </span>
            <input
              type="text"
              value={userAnswer}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
              placeholder="?"
              className="w-20 px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-[#00d4ff] focus:outline-none focus:border-[#00d4ff] text-center font-semibold"
              disabled={isVerified}
            />
          </div>
        </div>

        {/* Botón verificar */}
        <div className="flex flex-col gap-2">
          <button
            type="button"
            onClick={handleVerify}
            disabled={!userAnswer.trim() || isVerified}
            className="px-4 py-2 bg-[#0091C0] text-white rounded-md hover:bg-[#007a9e] disabled:bg-gray-300 disabled:cursor-not-allowed text-sm font-medium transition-colors"
          >
            {isVerified ? "✓ Verificado" : "Verificar"}
          </button>
          
          <button
            type="button"
            onClick={generateQuestion}
            className="px-3 py-1 text-xs text-gray-600 hover:text-gray-800 underline"
          >
            Nueva pregunta
          </button>
        </div>
      </div>

      {/* Mensaje de estado */}
      {isVerified && (
        <div className="mt-3 text-sm text-green-600 font-medium">
          ✓ Verificación completada
        </div>
      )}
    </div>
  );
}
