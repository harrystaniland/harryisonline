import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "6zznqk29",
  dataset: "production"
  // token: "sanity-auth-token", // or leave blank to be anonymous user
  // useCdn: true // `false` if you want to ensure fresh data
});

const Page = ({ sections }) => (
  <div x={console.log(sections)} className="row">
    {sections.map((section, index) => (
      <div key={index} className="col-md-6">
        <section className={css.section}>
        <a href={section.slug}>
          <div className={css.title}>
            {section.title}
          </div>
          <div className={css.image}>
            <img src={section.sectionImage} alt="" />
          </div>
        </a>
        </section>
      </div>
    ))}
  </div>
);

Page.getInitialProps = async () => {
  const query = `*[_type == "section"]{
    "sectionImage": sectionImage.asset->url,
    ...
  }`;

  const params = {};

  const sections = await client.fetch(query, params);

  return { sections };
};

export default Page;

// import Fiona from "~/library/src";

// const evaluate = code => {
//   const globalFiona = global.Fiona;
//   const globalSeed = global.seed;
//   global.Fiona = Fiona;
//   global.seed = 123;
//   const result = eval(code);
//   global.Fiona = globalFiona;
//   global.seed = globalSeed;
//   return JSON.stringify(result, null, 2);
// };

// const Codeblock = ({ input, ...props }) => (
//   <div>
//     // input
//     <pre>
//       <code>{input}</code>
//     </pre>
//     // output
//     <pre>
//       <code>{evaluate(input)}</code>
//     </pre>
//   </div>
// );

// const Page = (...props) => (
//   <div log={console.log(22, props)}>
//     <Codeblock input={`Fiona(seed).array(5, Fiona.Fullname)`} />
//   </div>
// );

// // export const getStaticProps = async () => {
// //   console.log(11);
// //   return {
// //     props: {
// //       a: 3
// //     }
// //   };
// // };

// export default Page;
