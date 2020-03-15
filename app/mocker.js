import Fiona from "~/library";

Fiona.register([
  "examples",
  seeded =>
    seeded.object({
      exampleTitle: Fiona.Lorem({ qty: 8 }),
      sections: Fiona.Array({ min: 1, max: 10 }, () => ({
        _createdAt: Fiona.Date({ long: true }),
        _id: Fiona.Regex(/[0-9a-f]{8}(-[0-9a-f]{4}){3}-[0-9a-f]{12}/),
        _rev: Fiona.Regex(/[0-9a-zA-Z]{22}/),
        _type: "section",
        _updatedAt: Fiona.Date({ long: true }),
        content: {
          _type: "richBlock",
          content: Fiona.Array({ min: 1, max: 6 }, () => ({
            _key: Fiona.Regex(/[0-9a-f]{12}/),
            _type: "block",
            children: Fiona.Array({ min: 1, max: 6 }, seeded =>
              seeded.bool({ chance: 0.2 })
                ? {
                    _key: Fiona.Regex(/[0-9a-f]{13}/),
                    _type: "span",
                    marks: ["123456789012"],
                    text: Fiona.Lorem({ qty: 6 })
                  }
                : {
                    _key: Fiona.Regex(/[0-9a-f]{13}/),
                    _type: "span",
                    marks: [],
                    text: Fiona.String` ${Fiona.Lorem()} `
                  }
            ),
            markDefs: [
              {
                _key: "123456789012",
                _type: "link",
                href: "#"
              }
            ],
            style: "normal"
          }))
        },
        title: Fiona.Lorem({ qty: 8 })
      }))
    })
]);

export default Fiona;
