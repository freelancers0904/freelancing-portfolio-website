// import { useScrollAnimation } from '@/hooks/useScrollAnimation';

// const WhoThisIsFor = () => {
//   const sectionRef = useScrollAnimation();

//   const audiences = [
//     'Local businesses',
//     'Gym owners',
//     'Service providers',
//     'Shops & brands',
//   ];

//   return (
//     <section className="py-20 md:py-24" style={{ background: 'hsl(var(--bg-secondary))' }}>
//       <div ref={sectionRef} className="max-w-4xl mx-auto px-6 text-center">
//         <h2 className="scroll-hidden font-display font-bold text-[28px] sm:text-[36px] md:text-[48px] text-agency-text leading-[1.2] tracking-[-0.02em]">
//           Who this is for
//         </h2>
//         <p className="scroll-hidden font-body text-sm sm:text-base text-agency-text-secondary max-w-[560px] mx-auto mt-6 leading-[1.8]">
//           We help these types of businesses get more customers online
//         </p>

//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
//           {audiences.map((audience, i) => (
//             <div key={i} className="scroll-hidden p-6 rounded-xl" style={{
//               background: 'hsla(var(--card-bg), var(--card-bg-alpha))',
//               border: '1px solid rgba(149,124,61,0.2)',
//             }}>
//               <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4" style={{
//                 background: 'rgba(201,168,76,0.1)',
//                 border: '1px solid rgba(201,168,76,0.25)',
//               }}>
//                 <span className="text-lg">🏢</span>
//               </div>
//               <h3 className="font-display font-semibold text-lg text-agency-text">{audience}</h3>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhoThisIsFor;