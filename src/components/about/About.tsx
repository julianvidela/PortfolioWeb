/* eslint-disable react/no-unescaped-entities */
export const About = () => {
  return (
    <>
      <div className="flex flex-col items-start">
        <div className="font-normal text-sm mt-5">
          <h2 className="text-[var(--text-color-secondary)]">Sobre mí</h2>

          <p className="text-[var(--text-color-primary)] mt-4 w-[75%]">
            Hola, soy Julián. Me dedico al desarrollo frontend, aunque no tengo
            drama en meterme con backend si hace falta.
          </p>
          <p className="text-[var(--text-color-primary)] mt-3 w-[90%]">
            Tengo 25 años, soy de Buenos Aires, Argentina, y llevo más de un año
            trabajando en productos reales. Participé del desarrollo completo de
            una plataforma en producción (Flexwork LATAM) y también trabajé con
            varios clientes como freelance.
          </p>

          <p className="text-[var(--text-color-primary)] mt-3 w-[98%]">
            Busco sumarme a equipos donde pueda seguir creciendo, aportar
            soluciones técnicas piolas y aprender de forma constante. Si hay
            buena onda en el equipo, mejor todavía.
          </p>
        </div>
      </div>
    </>
  );
};
