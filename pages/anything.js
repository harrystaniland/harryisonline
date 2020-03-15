import sanityClient from "@sanity/client";

const client = sanityClient({
  projectId: "6zznqk29",
  dataset: "production"
  // token: "sanity-auth-token", // or leave blank to be anonymous user
  // useCdn: true // `false` if you want to ensure fresh data
});

const Page = ({ section }) => (
  <div x={console.log(section)} className="row">
  <div className="col-sm-12">
    <div className={css.section}>
      <h2>{section.title}</h2>
      <img src={section.sectionImage} alt="" />
    </div>
  </div>
  <div className="col-sm-6 offset-sm-3 col-lg-4 offset-lg-4">
    <p>Lorem ipsum adipisicing in adipisicing consectetur nostrud ad officia laborum laboris et mollit est qui ut dolore qui minim proident.</p>
    <p>Ullamco aliquip velit dolor anim aliqua et dolor sunt in aute. In ut ad consequat laboris ut nostrud duis excepteur cillum esse. Cillum in aute cillum in reprehenderit aute dolore minim nulla magna id duis ex. Aute cillum ullamco esse aute consectetur aute culpa minim.</p>
    <p>Ut nostrud labore est duis ut voluptate ut reprehenderit pariatur. Tempor deserunt consectetur ad deserunt nisi non nulla aliqua ex anim in ullamco mollit elit anim elit qui nulla. Lorem ipsum nisi ad duis ex commodo occaecat excepteur ea pariatur ut ut aliquip deserunt commodo esse cupidatat. Et commodo dolor occaecat fugiat qui est cillum minim reprehenderit in aute adipisicing aliqua voluptate voluptate in anim in. Adipisicing elit dolor duis adipisicing eiusmod commodo in nulla quis reprehenderit sint cillum in.</p>
    <p>Cillum enim cillum sunt enim culpa nisi non in adipisicing fugiat consequat non aliquip velit ut. Culpa reprehenderit id reprehenderit nostrud officia exercitation proident in commodo veniam proident aliqua in ut aliquip cupidatat. Eu elit sit proident est magna in cillum veniam ad duis irure ad aliqua eu exercitation elit dolor veniam.</p>
  </div>
  </div>
);

Page.getInitialProps = async () => {
  const query = `*[_type == "section" && slug == "/anything"][0]{
    "sectionImage": sectionImage.asset->url,
    ...
  }`;

  const params = {};

  const section = await client.fetch(query, params);

  return { section };
};

export default Page;
