const { Client } = require("@notionhq/client");

const notion = new Client({ auth: process.env.NOTION_API_KEY });

const fetchNotion = async (req, res) => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
    sorts: [
      {
        property: "order",
        direction: "descending",
      },
    ],
  });

  res.status(200).json({ response });
};

export default fetchNotion;
